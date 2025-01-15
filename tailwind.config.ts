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
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          100: "#fdf9ee",
          300: "hsl(48.36deg 100% 86.86%)",
          500: "#fece34",
        },
        neutral: {
          500: "#626262",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
