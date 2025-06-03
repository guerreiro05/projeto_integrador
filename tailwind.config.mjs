/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // 🔥 Suas cores personalizadas aqui:
        primary: '#4CAF50',
        primaryDark: '#388E3C',
        primaryLight: '#C8E6C9',
        textMain: '#212121',
        textSecondary: '#757575',
        accent: '#9E9E9E',
        divider: '#BDBDBD',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
