/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF3E4",
          deep: "#F3E5C4",
          panel: "#FFFBF2",
        },
        maroon: {
          DEFAULT: "#6E1423",
          light: "#8C2135",
          dark: "#4A0D18",
        },
        gold: {
          DEFAULT: "#C89B3C",
          light: "#E4C878",
          dark: "#9C7526",
        },
        indigo: {
          deep: "#241548",
          DEFAULT: "#332166",
        },
        saffron: {
          DEFAULT: "#DD6B20",
          light: "#F0935A",
        },
        ink: "#2B211C",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        devanagari: ["var(--font-devanagari)", "serif"],
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(200,155,60,0.18), transparent 60%)",
        "maroon-gradient": "linear-gradient(135deg, #4A0D18 0%, #6E1423 45%, #8C2135 100%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(200,155,60,0.35), 0 8px 30px -8px rgba(110,20,35,0.35)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.85", transform: "scaleY(0.94)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        flicker: "flicker 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
