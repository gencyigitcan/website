import type { Metadata } from 'next'
import { Outfit, Calistoga } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const calistoga = Calistoga({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yiğitcan Genç',
  description: 'Personal website of Yiğitcan Genç',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${calistoga.variable}`}>
      <body className="antialiased min-h-screen flex flex-col relative transition-colors duration-300">

        {/* Fixed Background Gradients with Theme Variables */}
        {/* Fixed Background Gradients with Theme Variables */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Blobs removed for single color look */}
        </div>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
