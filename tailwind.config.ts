import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: 'var(--pink-50)',
          200: 'var(--pink-200)',
          400: 'var(--pink-400)',
        },
        sky: {
          100: 'var(--sky-100)',
          200: 'var(--sky-200)',
          400: 'var(--sky-400)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
        },
        line: 'var(--line)',
      },
      fontFamily: {
        'bangla-serif': ['"Noto Serif Bengali"', 'serif'],
        'bangla-sans': ['"Hind Siliguri"', 'sans-serif'],
        'english-display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'english-sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'serif'],
      },
      boxShadow: {
        'pastel-card': '0 8px 24px -4px rgba(176, 76, 108, 0.08), 0 2px 8px -2px rgba(46, 58, 77, 0.04)',
        'pastel-btn': '0 4px 14px -2px rgba(176, 76, 108, 0.25)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'sway-gentle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-40px) scale(1.1)', opacity: '0' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'sway-gentle': 'sway-gentle 4s ease-in-out infinite',
        'float-up': 'float-up 5s ease-in infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
