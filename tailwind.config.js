/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        teal: "0 4px 6px -1px rgba(0, 128, 128, 0.1), 0 2px 4px -1px rgba(0, 128, 128, 0.06)",
      },
    },
  },
  plugins: [],
};
