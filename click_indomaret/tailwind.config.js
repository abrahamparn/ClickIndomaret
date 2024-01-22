/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "2560px",
    },

    extend: {
      // This is for colors
      colors: {
        blueGrayish: "#272E36",
        lightBlueGrayish: "#504C4C",
        darkerBlueGrayish: "#232931",
        lightGreen: "#14B86E",
      },
      backgroundImage: {
        "team-pattern": "url('./src/assets/aboutus/bg-team.svg')",
      },
      maxWidth: {
        card: "304px",
        banner: "1009px",
      },
      maxHeight: {
        banner: "363px",
      },
      width: {
        banner: "1009px",
      },
      height: {
        bannner: "363px",
      },
    },
  },
  plugins: [],
};
