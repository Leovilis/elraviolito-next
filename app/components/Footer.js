import { MapPin, Phone, Clock, ChefHat } from 'lucide-react'

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
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 El Raviolito, Palpalá. Todos los derechos reservados.</p>
          <p className="mt-2 font-script text-tomato">Tradición familiar desde 1974</p>
        </div>
      </div>
    </footer>
  )
}