/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(15px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromUnder: {
          "0%": { transform: "translateY(15px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-15px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-15px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-out forwards 0.5s",
        slideInFromRight: "slideInFromRight 0.7s ease-out forwards 0.5s",
        slideInFromUnder: "slideInFromUnder 0.7s ease-out forwards 0.5s",
        slideInFromLeft: "slideInFromLeft 0.7s ease-out forwards 0.5s",
        slideInFromTop: "slideInFromTop 0.7s ease-out forwards 0.5s",
      },

      height: {
        nav: "70px",
      },

      transitionDuration: {
        md: "300ms",
        sm: "150ms",
        lg: "700ms",
        xl: "1000ms",
      },

      colors: {
        ash: "#333",
        gray: "#e5e7eb",
      },

      backgroundImage: {
        slide1: "url('./assets/images/group.jpeg')",
        slide2: "url('./assets/images/fatima-joseph.jpeg')",
        blackBg: "url('./assets/images/black-background.jpg')",
        blackBgSm: "url('./assets/images/black-background-sm.jpg')",
        blackBgMd: "url('./assets/images/black-background-md.jpg')",
        fatimaBg: "url('./assets/images/rahim-fatima.jpeg')",
        conference: "url('./assets/images/conference-room.jpeg')",
        gist: "url('./assets/images/gist.jpeg')",
        medicine: "url('./assets/images/medicine.jpeg')",
      },
    },
  },
  plugins: [],
};
