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
          500: "#00AFBF",
          700: "#009BA6",
          900: "#003f5a"
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
  plugins: []
};
