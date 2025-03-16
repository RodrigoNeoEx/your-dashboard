/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Permitir a troca entre temas
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Adicionar se estiver usando o App Directory
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Continue com outras cores personalizadas conforme necessário
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
