/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1920px",
      "desktop-md": "1440px",
      "desktop-sm": "1366px",
      "desktop-xs": "1280px",
      tablet: "1024px",
      "tablet-landscape": "768px",
      "mobile": "428px",
      "mobile-sm": "375px",
      "mobile-xs": "360px",
      "mobile-xxs": "280px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "1xs": "0.6rem",
        "2xs": "0.8rem",
        "3xs": "1rem",
        "4xs": "1.2rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "3.5rem",
        "5xl": "5rem",
      },
      colors: {
        "custom-white": "#ffff",
        "custom-black": "#3C4043",
        "mint-mist": "#DEECC0",
        "peachy-cream": "#FFE1C3",
      },
    },
  },
  plugins: [],
};
