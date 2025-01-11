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
        }
      }
    }
  },
  plugins: []
} satisfies Config
