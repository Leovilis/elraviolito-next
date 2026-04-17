import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AdSense from './components/AdSense';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'El Raviolito - Pastas Artesanales en Palpalá, Jujuy',
    template: '%s | El Raviolito'
  },
  description: 'Pastas artesanales y caseras desde 1974 en Palpalá, Jujuy. Ravioles, ñoquis, fideos frescos y más. Tradición familiar con delivery a domicilio. ¡Probá la calidad de siempre!',
  keywords: [
    'pastas artesanales',
    'ravioles caseros',
    'pastas Palpalá',
    'pastas Jujuy',
    'delivery pastas',
    'fideos frescos',
    'ñoquis caseros',
    'pastas frescas',
    'el raviolito',
    'comida casera Jujuy',
    'pastas tradicionales',
    'salsas tradicionales',
  ],
  authors: [{ name: 'El Raviolito' }],
  creator: 'El Raviolito',
  publisher: 'El Raviolito',
  
  // Open Graph (para compartir en redes sociales)
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://elraviolito.vercel.app',
    siteName: 'El Raviolito',
    title: 'El Raviolito - Pastas Artesanales en Palpalá, Jujuy',
    description: 'Pastas artesanales desde 1974. Tradición familiar con delivery a domicilio en Palpalá y Jujuy.',
    images: [
      {
        url: 'og-image.jpg', // Cambia esta ruta por tu imagen
        width: 1200,
        height: 630,
        alt: 'El Raviolito - Pastas Artesanales',
      }
    ],
  },
  
   
  // Robots (para que Google indexe tu sitio)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verificación de Google Search Console
  verification: {
    google: 'IXKl9CGb3p301Vqwyu1GYeZxjnFKFU5VZar9G1LWf4U',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* ✅ Script de Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6129561366428176"
          crossOrigin="anonymous"
        />
        {/* Meta tags adicionales para SEO local */}
        <meta name="geo.region" content="AR-Y" />
        <meta name="geo.placename" content="Palpalá, Jujuy" />
        <meta name="geo.position" content="-24.2567;-65.2108" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://elraviolito.vercel.app" />
      </head>
      <body className={inter.className}>
        {/* Schema.org para Google (datos estructurados) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "El Raviolito",
              "image": "https://elraviolito.vercel.app/images/logo.jpg",
              "description": "Pastas artesanales y caseras desde 1974 en Palpalá, Jujuy",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Saavedra 202",
                "addressLocality": "Palpalá",
                "addressRegion": "Jujuy",
                "postalCode": "4612",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -24.2567,
                "longitude": -65.2108
              },
              "url": "https://elraviolito.vercel.app",
              "telephone": "+5493884536901",
              "priceRange": "$4000 - $7000",
              "servesCuisine": "Italiana, Argentina",
              "foundingDate": "1974",
              "openingHours": "Mo-Sa 08:00-20:00"
            })
          }}
        />
        
        <Navbar />
        
        <main>
          {children}
        </main>
        <Footer />
        
        {/* Analytics al final del body para mejor performance */}
        <GoogleAnalytics gaId="G-JZGKG5HPDK" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
