/* eslint-disable global-require */
module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.jsx", "./src/components/**/*.jsx"],
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primary: {
          300: "#00D2E5",
          400: "#00AFBF",
          500: "#5AA7D6",
          600: "#009BA6",
          700: "#006972",
          800: "#00444C",
          900: "#003f5a"
        },
        logo: {
          primary: "#0079ad"
        },
        dark: {
          700: "#161614",
          800: "#0B090A",
          900: "#000000"
        }
      },
      fontSize: {
        xxs: ".625rem"
      }
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("@tailwindcss/line-clamp")
  ]
};
