import { MapPin, Phone, Clock, ChefHat } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ChefHat className="h-8 w-8 text-tomato" />
              <span className="font-script text-2xl text-tomato">El Raviolito</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-tomato" />
                <span>San Salvador de Jujuy, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tomato" />
                <span>388-123-4567</span>
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
              <p>Lunes a Viernes: 9:00 - 19:00</p>
              <p>Sábados: 9:00 - 15:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Productos</h3>
            <div className="space-y-2 text-gray-300">
              <p><Link href="/sorrentinos" className="hover:text-tomato transition-colors">Sorrentinos</Link></p>
              <p><Link href="/ravioles" className="hover:text-tomato transition-colors">Ravioles</Link></p>
              <p><Link href="/#historia" className="hover:text-tomato transition-colors">Nuestra Historia</Link></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 El Raviolito. Todos los derechos reservados.</p>
          <p className="mt-2 font-script text-tomato">Tradición familiar desde 1974</p>
        </div>
      </div>
    </footer>
  )
}