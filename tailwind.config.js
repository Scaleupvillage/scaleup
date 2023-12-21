/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f50136",
        secondary: "#F44336",
        "primary-blue": "#003b6d",
        "primary-yellow": "#ffcf3f",
        "primary-purple": "#803e97",
        "primary-cyan": "#00b7bb",
        "text-muted": "#838383",
      },
    },
  },
  plugins: [],
};
