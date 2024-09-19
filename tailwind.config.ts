import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url('/background.jpg')",
        'gradient-home': "linear-gradient(180deg, rgba(13,18,30,1) 0%, rgba(13,18,30,0.45) 50%, rgba(13,18,30,1) 100%)",
        'gradient-sobre': "linear-gradient(0deg, rgba(0,22,60,1) 0%, rgba(13,18,30,1) 100%)",
        'gradient-servicos': 'linear-gradient(0deg, rgba(13,18,30,1) 0%, rgba(0,22,60,1) 100%);',
        'gradient-depoimentos': 'linear-gradient(0deg, rgba(0,22,60,1)  0%, rgba(13,18,30,1) 100%);',
        'gradient-footer': 'linear-gradient(0deg, rgba(13,18,30,1)  0%,  rgba(0,22,60,1) 100%);',
      },
      height: {
        "container-main":
          "calc(100vh - 6rem)",
      }
    },
  },
  plugins: [],
};
export default config;
