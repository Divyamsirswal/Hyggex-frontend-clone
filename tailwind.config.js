/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf_sb: "sf-sb",
        sf_bd: "st-bd",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
