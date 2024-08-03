/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['"Ubuntu"'],
        Montserrat: ['"Montserrat"'],
        Manrope: ['"Manrope"'],
      },
      colors: {
        "blue": "#0059FD",
        "pink": "#EB0481",
        "white-dark": "#F7F8FC",
        "dark": "#333333",
        "grey": "#727B85",
        "grey-bg": "#EBEBEB",
        "grey-line": "#DADADA",
        "grey-border": "#ECECEC",
        "white-bg": "#FFFFFFB2",
      },
    },
  },
  plugins: [],
};
