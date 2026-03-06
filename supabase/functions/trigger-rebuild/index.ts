import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const DEBOUNCE_SECONDS = 60;
const LOCK_KEY = "rebuild";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data: lock } = await supabase
      .from("rebuild_lock")
      .select("last_triggered_at")
      .eq("id", LOCK_KEY)
      .maybeSingle();

    if (lock) {
      const secondsSinceLast = (Date.now() - new Date(lock.last_triggered_at).getTime()) / 1000;
      if (secondsSinceLast < DEBOUNCE_SECONDS) {
        return new Response(
          JSON.stringify({ skipped: true, message: `Debounced, last triggered ${Math.round(secondsSinceLast)}s ago` }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    await supabase.from("rebuild_lock").upsert({ id: LOCK_KEY, last_triggered_at: new Date().toISOString() });

    const githubToken = Deno.env.get("Brazil_publish");
    if (!githubToken) {
      return new Response(JSON.stringify({ error: "Missing Brazil_publish secret" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch(
      "https://api.github.com/repos/zhq666666/brazil-remit/actions/workflows/daily-build.yml/dispatches",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ref: "main" }),
      }
    );

    const responseText = await response.text();
    const githubStatus = response.status;

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "GitHub API error", status: githubStatus, detail: responseText }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Rebuild triggered", github_status: githubStatus }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
