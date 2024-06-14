import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "20px 1fr",
      },
      boxShadow: {
        "custom-black": "0 0 10px 2px rgba(0, 0, 0, 0.75)",
        "custom-black-medium": "0 0 3px 2px rgba(0, 0, 0, 0.4)",
        "custom-marron-bottom": "0 0 5px 2px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        marronClaire: "#B99470",
        marronBlanc: "#dba064",
        grennBlack: "#606C5D",
        grayBlack: "#7D7C7C",
        white: "#FFFFFF",
        blackOpacity: "#00000071",
        marronFonce: "#a85400",
        marronTransparant: "#00000041",
      },
      backgroundImage: {
        "room-bg": "url('../imgs/chambre.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
