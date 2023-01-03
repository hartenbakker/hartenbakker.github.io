const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
      "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./blog/*.html",
    "./_posts/*.html",
    "./*.html"
  ],
  theme: {
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  plugins: [require("@tailwindcss/typography")],
};
