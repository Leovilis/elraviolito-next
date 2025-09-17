import { Utensils, Clock, Users, Star, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Ñoquis() {
  const ñoquis = [
    {
      id: 1,
      nombre: "Ñoquis de Papa",
      descripcion: "Ñoquis tradicionales de papa, suaves y esponjosos, elaborados con papas frescas seleccionadas.",
      precio: "X Kilo",
      imagen: "/ñoquis-papa.jpg",
      ingredientes: ["Papa", "Harina 0000", "Huevo", "Sal"],
      tiempoCoccion: "2-3 min",
      tipo: "Clásico"
    },
    {
      id: 2,
      nombre: "Ñoquis de Espinaca",
      descripcion: "Ñoquis verdes con espinaca natural, una variación nutritiva y colorida del clásico tradicional.",
      precio: "X Kilo",
      imagen: "/ñoquis-espinaca.jpg",
      ingredientes: ["Papa", "Espinaca", "Harina 0000", "Huevo", "Sal"],
      tiempoCoccion: "2-3 min",
      tipo: "Especial"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pasta to-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-script text-6xl md:text-7xl text-tomato mb-4">
              Ñoquis
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Los ñoquis más auténticos de la región, elaborados con papa fresca y la receta 
              tradicional que nos acompaña desde 1974. Perfectos para los días 29.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Clock className="w-5 h-5 text-tomato" />
                <span>Venta por kilo</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Utensils className="w-5 h-5 text-tomato" />
                <span>Elaboración diaria</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Calendar className="w-5 h-5 text-tomato" />
                <span>Tradición del 29</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Nuestros Ñoquis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ñoquis.map((ñoqui) => (
              <div key={ñoqui.id} className="pasta-card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={ñoqui.imagen}
                    alt={ñoqui.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      ñoqui.tipo === 'Clásico' ? 'bg-orange-500' : 'bg-green-600'
                    }`}>
                      {ñoqui.tipo}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {ñoqui.nombre}
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
                    {ñoqui.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {ñoqui.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {ñoqui.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {ñoqui.precio}
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

      {/* La Tradición del 29 */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">La Tradición del 29</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-24 h-24 bg-tomato rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué el 29?</h3>
                <p className="text-gray-600 leading-relaxed">
                  La tradición de comer ñoquis el día 29 de cada mes tiene sus raíces en la 
                  inmigración italiana. Se dice que traen buena suerte y abundancia para el 
                  último día del mes, preparando el camino para la prosperidad del mes siguiente.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-tomato to-red-600 text-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">En El Raviolito</h4>
                  <p>
                    Mantenemos viva esta hermosa tradición italiana. Cada 29 del mes, 
                    nuestros ñoquis frescos son los protagonistas en las mesas jujeñas.
                  </p>
                </div>
                <div className="bg-herbs text-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Consejo de la Casa</h4>
                  <p>
                    Coloca una moneda debajo del plato antes de comer los ñoquis. 
                    ¡La tradición dice que atraerá dinero todo el mes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparación Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Cocinar Ñoquis Perfectos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agua con Sal</h3>
              <p className="text-gray-600">
                Olla grande con abundante agua salada hirviendo a fuego fuerte.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agregar Despacio</h3>
              <p className="text-gray-600">
                Agrega los ñoquis de a pocos para mantener el hervor constante.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hasta que Floten</h3>
              <p className="text-gray-600">
                Cuando floten en la superficie (2-3 min) están listos para servir.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Servir al Momento</h3>
              <p className="text-gray-600">
                Escurre suavemente y sirve inmediatamente con tu salsa favorita.
              </p>
            </div>
          </div>

          {/* Consejos adicionales */}
          <div className="mt-12 bg-gradient-to-r from-cream to-pasta p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Secretos para Ñoquis Perfectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-tomato text-lg">Consejos de Cocción:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• No los cocines de más, se desarman fácilmente</li>
                  <li>• El agua debe hervir constantemente</li>
                  <li>• No revuelvas, deja que floten naturalmente</li>
                  <li>• Usa una espumadera para retirarlos</li>
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
            Fideos Frescos por Kilo
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Llevate la cantidad que necesites de nuestras pastas
            frescas. Elaborados diariamente con la receta tradicional de la
            familia Campos.
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
  );
}
