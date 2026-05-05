import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes Inter the primary sans-serif font
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;