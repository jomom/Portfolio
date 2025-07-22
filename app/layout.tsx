import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joel Momanyi - Full-Stack Developer Portfolio',
  description: 'Experienced freelance developer specializing in React, Angular, and full-stack solutions.',
  keywords: 'developer, freelance, react, angular, next.js, full-stack, portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}