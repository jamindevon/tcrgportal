import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Treasure Coast Realty Group Brand Colors
        'navy': '#10254F',              // Ocean Navy - Primary brand color
        'gold': '#B2935D',              // Coastal Gold - Accent color
        'charcoal': '#1D1D1F',          // Charcoal - Primary text
        'cloud': '#F5F5F7',             // Cloud - Background color
        'off-white': '#FAFAFA',         // Off white
        'light-gray': '#F5F5F7',        // Light gray
        'medium-gray': '#A1A1A6',       // Medium gray
        'text-gray': '#86868B',         // Text gray
        'text-dark': '#1D1D1F',         // Text dark
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
