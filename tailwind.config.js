/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['"Ubuntu"'],
        Montserrat: ['"Montserrat"'],
        Manrope: ['"Manrope"'],
        Euclid: ['"Euclid Circular A"'],
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
        'line-two': "#EAEAEA",
        'card-line': "#D6D6D6",
        'through-line': "#D6D6D6",
        'comment-line': "#ECECEC",
        'air-line': "#D7D7D7",
      },
    },
  },
  plugins: [],
};
