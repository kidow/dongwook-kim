import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dark: '#111110',
        light: {
          primary: '#eeeeec',
          secondary: '#b5b3ad'
        },
        olive: {
          100: '#f6f9f0', // 매우 연한 올리브
          200: '#e9f1dc', // 연한 올리브
          300: '#d8e5c2', // 부드러운 올리브
          400: '#bcd494', // 밝은 올리브
          500: '#a1c167', // 기본 올리브
          600: '#8dab59', // 살짝 어두운 올리브
          700: '#708c49', // 중간 어두운 올리브
          800: '#546d38', // 더 어두운 올리브
          900: '#394d27', // 깊은 어두운 올리브
          950: '#232d17' // 가장 어두운 올리브
        }
      }
    }
  },
  plugins: []
} satisfies Config
