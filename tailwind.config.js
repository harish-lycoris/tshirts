/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf6ec',
        paper: '#fffdf8',
        ink: '#211a14',
        'ink-muted': '#6b5e52',
        line: '#e8dcc8',
        maroon: {
          DEFAULT: '#7a1c24',
          dark: '#5c1319',
          soft: '#f6e7e8',
        },
        gold: {
          DEFAULT: '#c9971f',
          deep: '#8a6212',
          soft: '#fbf0d2',
        },
        marigold: '#f5c04d',
        ember: '#b5441a',
        whatsapp: {
          DEFAULT: '#128c7e',
          dark: '#0d6e63',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'sheet-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.6)' },
          '60%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'sheet-up': 'sheet-up 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in-right': 'slide-in-right 300ms cubic-bezier(0.22, 1, 0.36, 1)',
        pop: 'pop 320ms ease-out',
      },
    },
  },
  plugins: [],
};
