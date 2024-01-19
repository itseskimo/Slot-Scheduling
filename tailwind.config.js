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
    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      backgroundColor:{
        dashoverlay:'rgba(0, 0, 0, 0.24)', //Background overlay for modal.
      },
    },
  },
  plugins: [],
}