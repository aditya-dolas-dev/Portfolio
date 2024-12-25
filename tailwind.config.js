/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px #00ff00, 0 0 20px #00ff00',
        redglow: '0 4px 10px #DC143C',  // Customize glow color
        textblueglow: '0 4px 10px #0057ff33',  // Customize glow color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif' , 'Bebas-neuo'], // Add your Google Font here
      },
      colors: {
        silver: '#C0C0C0',
        golden: "#FFD700",
        amber: "#FFBF00",
        bronze: "#CD7F32",
        chocolate: "#8B4513",
        darkBrown: "#5D3A1A",
      },
      gradientColorStops: {
        goldenBrown: {
          from: "#FFD700",
          via: "#FFBF00",
          to: "#5D3A1A",
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
}