import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Prosto_One } from 'next/font/google'
import './globals.css'
import './introduction.css'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Portafolio DiegoAC',
  description: 'Portfolio animated',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={prosto.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
