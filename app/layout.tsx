import { Inter } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProClean B2B - Professional Deep Cleaning Services',
  description: 'Professional deep cleaning services for businesses. Reliable, thorough, and trusted by companies nationwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}