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
    extend: {}
  },
  plugins: []
};
