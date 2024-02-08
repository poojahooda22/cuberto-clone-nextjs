import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      fontSize: {
        'sm': ['61px', '61px'],
        'md': ['66px', '66px'],
        'lg': ['88px', '88px'],
        'xl': ['124px', '124px'],
        '2xl': ['166px', '166px'],
        
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1440px',
        'xl': '2500px',
       
      },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {  
        'sans': ['roboto', 'sans-serif'],
        'serif': ['Matter-light', 'sans-serif'],
        'matter': ['Matter-regular', 'sans-serif'],
      },
  },
  plugins: [],
};
export default config;
