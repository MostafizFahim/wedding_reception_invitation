import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0F3D33',
          deep: '#08221C',
          dark: '#0B2F27',
          light: '#1B5E50',
          subtle: '#236E5E',
        },
        ivory: {
          DEFAULT: '#F7F1E3',
          light: '#FCF9F2',
          dark: '#EBE2CD',
          muted: '#DFD4BC',
        },
        gold: {
          DEFAULT: '#C9A45C',
          light: '#DFC385',
          dark: '#A68239',
          muted: '#8D6D2B',
          shimmer: '#F5E6BE',
        },
        terracotta: {
          DEFAULT: '#C97B63',
          light: '#D9937E',
          dark: '#AB614A',
        },
        ink: {
          DEFAULT: '#1B1B1B',
          light: '#2D2D2D',
          muted: '#5A5A5A',
          subtle: '#787878',
        },
      },
      fontFamily: {
        'bangla-serif': ['"Noto Serif Bengali"', 'serif'],
        'bangla-sans': ['"Hind Siliguri"', 'sans-serif'],
        'english-display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'english-sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'serif'],
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(201, 164, 92, 0.18)',
        'gold-glow': '0 0 25px rgba(201, 164, 92, 0.28)',
        'emerald-card': '0 10px 30px -5px rgba(8, 34, 28, 0.35)',
        'ivory-card': '0 12px 35px -8px rgba(27, 27, 27, 0.08), 0 4px 12px -2px rgba(201, 164, 92, 0.12)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
