import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const montserrat = Montserrat({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nortera Clone',
  description: 'A Responsive web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} leading-smallvw md:leading-bigvw text-custom-green `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
