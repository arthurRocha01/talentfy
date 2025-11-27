/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#007BFF",
          dark: "#0056C7",
          navy: "#001F3F",
          muted: "#99B8FF",
        },
        surface: {
          DEFAULT: "#0B1120",
          soft: "rgba(9, 17, 34, 0.85)",
        },
        text: {
          light: "#E2E8F0",
          muted: "#8A94A6",
        },
      },
      boxShadow: {
        glow: "0 20px 45px rgba(0, 123, 255, 0.25)",
        card: "0 16px 30px rgba(8, 15, 30, 0.45)",
      },
      backgroundImage: {
        "talentfy-radial":
          "radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.35) 0%, rgba(0, 31, 63, 0.85) 45%, rgba(4, 6, 12, 0.95) 100%)",
        "talentfy-linear":
          "linear-gradient(135deg, rgba(0, 123, 255, 0.75) 0%, rgba(0, 31, 63, 0.95) 45%, rgba(2, 6, 14, 1) 100%)",
      },
      keyframes: {
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-loop": "gradient-shift 12s ease infinite",
      },
    },
  },
  plugins: [],
};