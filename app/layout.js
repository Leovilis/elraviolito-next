import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewYearBanner from './components/NewYearBanner'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Raviolito - Pastas Caseras',
  description: 'Pastas artesanales desde 1974. Tradición familiar en cada plato.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <NewYearBanner />
        <main>
          {children}
          <GoogleAnalytics gaId="G-EKZ3L5RLSV" />
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
