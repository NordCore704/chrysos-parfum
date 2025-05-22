/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        scheme: {
          lightGold: "#ffee32",
          gold: "#ffd100",
          goldThree: "#ffd639",
          white: "#ffffff",
          bgBlack: "#111112",
          darkerGrey: "#202020",
          darkGrey: "#4d4d4d",
          grey: "#eff8ff",
        },
        gradients: {
          greenOne: "#fdfc47",
          greenTwo: "#8dfd44",
          greenThree: "#24fe41",
        },
      },
    },
  },
  plugins: [],
};
