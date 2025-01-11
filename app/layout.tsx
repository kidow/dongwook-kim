import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { cn } from 'services'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Dongwook Kim',
  description: 'Front-end Developer working at feedle.me'
}

export default function RootLayout({ children }: ReactProps) {
  return (
    <html lang="ko" className="dark:bg-dark">
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
        {children}
      </body>
    </html>
  )
}
