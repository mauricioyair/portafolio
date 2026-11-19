/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-light": "rgb(255, 255, 255)",
        "theme-dark": "rgb(22, 22, 22)",
        "color-black-extra": "rgb(28, 28, 28)",
        "color-light-extra": "rgb(245, 245, 245)",
        accent: "rgb(255, 69, 0)",
        "accent-dark": "rgb(264, 116, 30)",
        "accent-light": "rgb(237, 162, 59)",
        "border-light": "rgb(222, 222, 222)",
        "hover-light": "rgb(225, 255, 255)",
        "border-dark": "rgb(40, 40, 40)",
        "hover-dark": "rgba(38, 38, 38, 0.88)",
        "color-thirty-light": "rgb(22, 12, 47)",
        "color-thirty-dark": "rgb(22, 40, 0)",
        gradient:
          "linear-gradient(45deg, var(--accent), var(--accent-light) 30%, black 60%)",
      },
      boxShadow: {
        inset: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(45deg, var(--accent), var(--accent-light) 30%, black 60%)",
      },
      maxWidth: {
        cal: "calc(100% - 2rem)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        border: "border 4s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
