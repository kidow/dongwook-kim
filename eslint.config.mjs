import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    files: ['**/*.{mjs,cjs,js,tsx,ts}'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      '@next/next/no-img-element': 'off',
      'react-hooks/rules-of-hooks': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript')
]

export default config
