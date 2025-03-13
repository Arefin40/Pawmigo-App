/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
   presets: [require("nativewind/preset")],
   theme: {
      extend: {
         fontFamily: {
            sans: "Mulish_500Medium",
            em: "Mulish_600SemiBold",
            strong: "Mulish_700Bold"
         },
         colors: {
            primary: "#145f3e",
            secondary: "#d8fdd2"
         }
      }
   },
   plugins: []
};
