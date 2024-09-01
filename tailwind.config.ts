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
        'sb-brown': '#8B4513',
        'sb-cream': '#F5DEB3',
        'sb-green': '#228B22',
        'sb-orange': '#FFA500',
        'sb-black': '#1E1E1E',
      },
    },
  },
  plugins: [],
};
export default config;
