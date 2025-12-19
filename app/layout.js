import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChristmasBanner from './components/ChristmasBanner'
/*import BlackFridayBanner from './components/BlackFridayBanner'*/
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
        <ChristmasBanner />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
