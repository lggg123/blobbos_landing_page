import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pinkish: '#FFC1E3',
        softYellow: '#FFE99D',
        softBlue: '#ADD8E6',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'squish': 'squish 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1) rotate(0deg)',
            filter: 'brightness(1)',
          },
          '50%': { 
            transform: 'translateY(-20px) scale(1.05) rotate(5deg)',
            filter: 'brightness(1.1)',
          },
        },
        squish: {
          '0%, 100%': {
            transform: 'scale(1, 1)',
          },
          '50%': {
            transform: 'scale(1.05, 0.95)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
