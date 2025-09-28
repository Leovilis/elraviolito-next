import { Utensils, Clock, Users, Star, Package, Clock1, Clock10, Clock5, Factory, FlameIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '../components/WhatsAppButton' // Ajusta la ruta según tu estructura

export default function Canelones() {
  const precio = "$7000";
  const tiempoCoccion = "15-20 min (horno)"
  const canelones = [
    {
      id: 1,
      nombre: "Canelones de Verdura",
      descripcion: "Canelones rellenos de verduras frescas de estación, una opción saludable y deliciosa.",
      precio: precio,
      imagen: "/canelones-verdura.jpg",
      ingredientes: ["Acelga", "Espinaca", "Cebolla", "Ricota", "Especias"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Verdura"
    },
    {
      id: 2,
      nombre: "Canelones de Verdura con Queso",
      descripcion: "Verduras frescas combinadas con queso cremoso para un sabor equilibrado y nutritivo.",
      precio: precio,
      imagen: "/canelones-verdura-queso.jpg",
      ingredientes: ["Verduras", "Queso cremoso", "Ricota", "Mozzarella", "Especias"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Verdura"
    },
    {
      id: 3,
      nombre: "Canelones de Verdura con Ricota",
      descripcion: "Mezcla perfecta de verduras frescas con ricota cremosa, suave al paladar.",
      precio: precio,
      imagen: "/canelones-verdura-ricota.jpg",
      ingredientes: ["Verduras", "Ricota", "Huevo", "Perejil", "Nuez moscada"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Verdura"
    },
    {
      id: 4,
      nombre: "Canelones de Verdura con Pollo",
      descripcion: "Verduras combinadas con tierno pollo desmenuzado, una combinación nutritiva y sabrosa.",
      precio: precio,
      imagen: "/canelones-verdura-pollo.jpg",
      ingredientes: ["Verduras", "Pollo", "Cebolla", "Zanahoria", "Hierbas"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Verdura"
    },
    {
      id: 5,
      nombre: "Canelones de Verdura con Carne",
      descripcion: "Verduras combinadas con tierno pollo desmenuzado, una combinación nutritiva y sabrosa.",
      precio: precio,
      imagen: "/canelones-verdura-carne.jpg",
      ingredientes: ["Verduras", "Pollo", "Cebolla", "Zanahoria", "Hierbas"],
      tiempoCoccion: "18-22 min (horno)",
      categoria: "Verdura"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pasta to-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-script text-6xl md:text-7xl text-tomato mb-4">
              Canelones
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nuestros canelones frescos vienen en presentaciones de 12 unidades, 
              perfectos para hornear con tu salsa favorita y crear una comida memorable.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Package className="w-5 h-5 text-tomato" />
                <span>12 unidades</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Clock1 className="w-5 h-5 text-tomato" />
                <span>Para hornear</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <FlameIcon className="w-5 h-5 text-tomato" />
                <span>Perfectos para Gratinar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Nuestros Canelones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {canelones.map((canelon) => (
              <div key={canelon.id} className="pasta-card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={canelon.imagen}
                    alt={canelon.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {canelon.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {canelon.nombre}
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
                    {canelon.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {canelon.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {canelon.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {canelon.precio}
                        </div>
                        <Link href="#">
                          <button className="btn-primary w-full sm:w-auto">
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
          <h2 className="section-title">¿Cómo Preparar Nuestros Canelones?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Precalienta el Horno</h3>
              <p className="text-gray-600">
                Precalienta el horno a 180°C (350°F) mientras preparas la fuente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prepara la Fuente</h3>
              <p className="text-gray-600">
                Coloca una capa de salsa en el fondo de una fuente para horno.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Acomoda los Canelones</h3>
              <p className="text-gray-600">
                Coloca los canelones en la fuente y cubre con más salsa y queso.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hornea y Gratina</h3>
              <p className="text-gray-600">
                Hornea por 15-22 minutos hasta que estén dorados y burbujeantes.
              </p>
            </div>
          </div>

          {/* Consejos de preparación */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Consejos para el Mejor Resultado</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-tomato text-lg">Preparación:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Usa una fuente honda para evitar que se seque</li>
                  <li>• Cubre con papel aluminio si se doran muy rápido</li>
                  <li>• Deja reposar 5 minutos antes de servir</li>
                  <li>• Acompaña con ensalada fresca</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-tomato text-lg">Salsas Recomendadas:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Salsa de tomate casera con albahaca</li>
                  <li>• Salsa bechamel cremosa</li>
                  <li>• Salsa mixta (tomate + bechamel)</li>
                  <li>• Salsa de tomate con hierbas finas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            12 Canelones para Compartir
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros canelones frescos son perfectos para crear una comida especial 
            en familia. Listos para hornear con tu toque personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tomato transition-colors">
              Ver Ubicación
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}