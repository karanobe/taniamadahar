/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Site color palette
          DEFAULT: '#FDFDFC',    // Light cream background
          brown: '#756657',    // Brown accent color
          stone: {
            50: '#fafaf9',      // Stone-50
            100: '#f5f5f4',     // Stone-100
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
