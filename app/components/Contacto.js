import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contáctanos</h2>
        
        <div className="grid grid-cols-1 lg:ml-52">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-tomato mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                <p className="text-gray-600">San Salvador de Jujuy, Argentina</p>
                <p className="text-sm text-gray-500 mt-1">Visitanos en nuestro local</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-tomato mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                <p className="text-gray-600">388-123-4567</p>
                <p className="text-sm text-gray-500 mt-1">WhatsApp disponible</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-tomato mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Lunes a Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 9:00 - 15:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          {/* <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomato focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomato focus:border-transparent"
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tomato focus:border-transparent"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Mensaje
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}