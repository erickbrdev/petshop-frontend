/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        header: "#111111",
        gallery: "#333333",
        available: "#222222",
        footer: "#ABA9B9",
      },
      screens: {
        tablet: "870px",
      

        laptop: "900px",
       

        desktop: "1280px",
        
      },
    },
  },
  plugins: [],
};
