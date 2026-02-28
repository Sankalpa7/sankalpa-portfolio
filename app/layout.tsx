import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sankalpa Neupane — Computer Engineering',
  description: 'Personal portfolio of Sankalpa Neupane, Computer Engineering Masters student and Full Stack Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}