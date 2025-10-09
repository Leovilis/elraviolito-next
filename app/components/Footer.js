import { MapPin, Phone, Clock, ChefHat, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <div className="mb-1">
              <Image
                src="/logo.jpg"
                alt="El Raviolito Logo"
                width={150}
                height={75}
                className="h-32 w-auto"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-tomato" />
                <span>Saavedra 202 Barrio 9 de julio, Palpalá, Jujuy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tomato" />
                <span>388-4536901</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-semibold text-xl mb-4 flex items-center space-x-2">
              <Clock className="h-5 w-5 text-tomato" />
              <span>Horarios</span>
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Todos los dias de 9:00 - 14:00</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xl mb-4">Seguinos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/_raviolito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-2 md:space-x-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="h-6 w-6 md:h-5 md:w-5" />
                <span className="hidden md:inline">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100069113483492"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-2 md:space-x-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Facebook className="h-6 w-6 md:h-5 md:w-5" />
                <span className="hidden md:inline">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 El Raviolito, Palpalá. Todos los derechos reservados.</p>
          <p className="mt-2 font-script text-tomato">Tradición familiar desde 1974</p>
        </div>
      </div>
    </footer>
  )
}