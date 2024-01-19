/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs:"460px",
      sm: "600px",
      md: "768px",
      lg: "976px",    
      xl: "1200px",
    },
    extend: {
    
    
      backgroundColor:{
        dashoverlay:'rgba(0, 0, 0, 0.24)', //Background overlay for modal.
      },
    },
  },
  plugins: [],
}