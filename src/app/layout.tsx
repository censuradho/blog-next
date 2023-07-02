import { Inter } from 'next/font/google'

import './globalStyles.css'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}