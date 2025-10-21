import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#e0e7ff'
        },
        ink: '#0b1220',
        muted: '#6b7280',
        border: '#e5e7eb',
        bg: '#0b0f17'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem'
        }
      },
      borderRadius: {
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem'
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(79, 70, 229, 0.4)',
        card: '0 1px 2px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: []
} satisfies Config


