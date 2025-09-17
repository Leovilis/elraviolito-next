import { Utensils, Clock, Users, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Sorrentinos() {
  const sorrentinos = [
    {
      id: 1,
      nombre: "Sorrentinos de Ricota y Espinaca",
      descripcion: "Clásicos sorrentinos rellenos de ricota fresca y espinaca, con masa casera dorada.",
      precio: "12 unidades",
      imagen: "/sorrentinos-ricota.jpg",
      ingredientes: ["Ricota", "Espinaca", "Huevo", "Queso parmesano"],
      tiempoCoccion: "8-10 min"
    },
    {
      id: 2,
      nombre: "Sorrentinos de Jamón y Queso",
      descripcion: "Deliciosos sorrentinos rellenos de jamón cocido y queso, perfectos para toda la familia.",
      precio: "12 unidades",
      imagen: "/sorrentinos-jamon.jpg",
      ingredientes: ["Jamón cocido", "Queso mozzarella", "Ricota", "Especias"],
      tiempoCoccion: "8-10 min"
    },
    {
      id: 3,
      nombre: "Sorrentinos de Verdura",
      descripcion: "Mezcla de verduras frescas de estación con ricota cremosa.",
      precio: "12 unidades",
      imagen: "/sorrentinos-verdura.jpg",
      ingredientes: ["Acelga", "Cebolla", "Zanahoria", "Ricota", "Hierbas"],
      tiempoCoccion: "8-10 min"
    },
    {
      id: 4,
      nombre: "Sorrentinos de Pollo y Verdeo",
      descripcion: "Tiernos trozos de pollo con verdeo fresco, una combinación irresistible.",
      precio: "12 unidades", 
      imagen: "/sorrentinos-pollo.jpg",
      ingredientes: ["Pollo", "Cebolla de verdeo", "Ricota", "Perejil"],
      tiempoCoccion: "10-12 min"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pasta to-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-script text-6xl md:text-7xl text-tomato mb-4">
              Sorrentinos
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nuestros sorrentinos son una tradición familiar que se remonta a 1974. 
              Cada pieza está elaborada artesanalmente con ingredientes frescos y mucho amor.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Clock className="w-5 h-5 text-tomato" />
                <span>Masa fresca diaria</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Utensils className="w-5 h-5 text-tomato" />
                <span>Rellenos artesanales</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Users className="w-5 h-5 text-tomato" />
                <span>Tradición familiar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sorrentinos.map((sorrentino) => (
              <div key={sorrentino.id} className="pasta-card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={sorrentino.imagen}
                    alt={sorrentino.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {sorrentino.nombre}
                    </h3>
                    <div className="flex items-center gap-1 ml-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {sorrentino.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {sorrentino.ingredientes.map((ingrediente, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-herbs rounded-full"></div>
                            {ingrediente}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-tomato" />
                        <span className="text-sm text-gray-600">
                          Cocción: {sorrentino.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {sorrentino.precio}
                        </div>
                        <Link href="#"><button className="btn-primary w-full sm:w-auto">
                          Consultar Precio
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparación Section */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Cocinar Nuestros Sorrentinos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hierve el Agua</h3>
              <p className="text-gray-600">
                Pon abundante agua con sal a hervir en una olla grande.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cocina los Sorrentinos</h3>
              <p className="text-gray-600">
                Cocina por 8-12 minutos hasta que floten en la superficie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">¡A Disfrutar!</h3>
              <p className="text-gray-600">
                Sirve con tu salsa favorita y disfruta en familia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            ¿Listos para Disfrutar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros sorrentinos están disponibles frescos todos los días. 
            ¡Contáctanos para hacer tu pedido!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-tomato px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              WhatsApp: 388-123-4567
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tomato transition-colors">
              Ver Ubicación
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}