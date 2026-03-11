import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E1E',
          dark: '#0D0D0D',
        },
      },
      keyframes: {
        'card-progress': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'card-progress': 'card-progress 3s linear forwards',
      },
    },
  },
  plugins: [],
}

export default config
