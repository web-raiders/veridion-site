/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        veridion: {
          // Surfaces / backgrounds
          bg: '#faf5f0',
          surface: '#fcfaf7',
          // Inks
          ink: '#0d0d0d',
          body: '#272727',
          muted: '#4a4a4c',
          // Primary brand accent (rust)
          rust: {
            DEFAULT: '#a6370f',
            600: '#8a2d0c',
            700: '#6f240a',
          },
          // Earth tones
          brown: '#735236',
          clay: '#9c6349',
          sage: '#405957',
          sand: '#a6a594',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '8px',
      },
      backdropBlur: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
