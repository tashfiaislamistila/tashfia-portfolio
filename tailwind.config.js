module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: "#570DF8",
          secondary: "#F000B8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          warning: "#FBBD23",
          error: "#F87272",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
