import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          "hero": "url('/assets/hero.png')",
          "herodots": "url('/assets/herodots.png')"
      },
      fontFamily: {
        "open": "var(--font-open)",
        "poppins": "var(--font-poppins)",
        "bukabird": "var(--font-bb)"
      },
      colors: {
        accent: "#4894E8",
        yellow: "#FCEE21",
        muted: "text-gray-300"
      },
    },
  },
  plugins: [],
};
export default config;
