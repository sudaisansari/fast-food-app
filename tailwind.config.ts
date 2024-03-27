import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config











// const defaultTheme = require("tailwindcss/defaultTheme");

// const colors = require("tailwindcss/colors");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     // rest of the code
//     extend: {
//       animation: {
//         scroll:
//           "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
//       },
//       keyframes: {
//         scroll: {
//           to: {
//             transform: "translate(calc(-50% - 0.5rem))",
//           },
//         },
//       },
//     },
//   },
//   plugins: [addVariablesForColors],
// };

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
