/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brazil: {
          green: '#009C3B',
          yellow: '#FFDF00',
          blue: '#002776',
          'green-dark': '#007A2F',
          'green-light': '#00C44B',
          'blue-light': '#003DA8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
