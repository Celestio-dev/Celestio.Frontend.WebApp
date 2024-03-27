/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./src/layout/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // prettier-ignore
      "primary": "#9747FF",
      white: "#ffffff",
      background: "#FDFCFC",
      secondary: "#EFEFEF",
      text: "#2A2A2A",
      "light-text": "#575757",
      error: "#D70000",
    },
    extend: {},
  },
  plugins: [],
};
