import { Utensils, Clock, Users, Star, Calendar, Scale, HeartHandshakeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '../components/WhatsAppButton'
import UbicacionButton from '../components/UbicacionButton'
import PrecioDisplay from '../components/PrecioDisplay'
import { PRECIOS } from '@/data/precios'

export default function Ñoquis() {
  const tiempoCoccion = "2 min";

  const ñoquis = [
    {
      id: 1,
      nombre: "Ñoquis de Papa",
      descripcion: "Ñoquis tradicionales de papa, suaves y esponjosos, elaborados con papas frescas seleccionadas.",
      imagen: "/noquis-papa.jpg",
      ingredientes: ["Papa", "Harina 0000", "Huevo", "Sal"],
      tipoPrecio: "simple",
      tipo: "Clásico"
    },
    {
      id: 2,
      nombre: "Ñoquis de Remolacha",
      descripcion: "Ñoquis con remolacha fresca, una variación nutritiva y colorida del clásico tradicional.",
      imagen: "/noquis-remolacha.jpg",
      ingredientes: ["Remolacha", "Harina 0000", "Huevo", "Sal"],
      tipoPrecio: "simple",
      tipo: "Especial"
    },
    {
      id: 3,
      nombre: "Ñoquis de Espinaca",
      descripcion: "Ñoquis tradicionales con un toque de color, elaborados con espinaca fresca seleccionada.",
      imagen: "/noquis-verdura.jpg",
      ingredientes: ["Espinaca", "Harina 0000", "Huevo", "Sal"],
      tipoPrecio: "simple",
      tipo: "Especial"
    },
    {
      id: 4,
      nombre: "Ñoquis de Zanahoria",
      descripcion: "Ñoquis de Zanahoria, una nutritiva opción para tus comidas.",
      imagen: "/noquis-zanahoria.jpg",
      ingredientes: ["Zanahoria", "Harina 0000", "Huevo", "Sal"],
      tipoPrecio: "simple",
      tipo: "Especial"
    },
    {
      id: 5,
      nombre: "Ñoquis de Harina Morada",
      descripcion: "Ñoquis tradicionales con un toque de nuestra tierra, elaborados con harina de maíz morado.",
      imagen: "/noquis-morado.jpg",
      ingredientes: ["Harina de Maiz Morado", "Huevo", "Sal"],
      tipoPrecio: "simple",
      tipo: "Especial"
    },
    {
      id: 6,
      nombre: "Ñoquis Tricolores",
      descripcion: "Ñoquis coloridos, con una mixtura de sabores única. Una explosión de sabor en tu boca.",
      imagen: "/noquis-tricolor.jpg",
      ingredientes: ["Papa", "Espinaca", "Remolacha", "Harina 0000", "Huevo", "Sal"],
      tipoPrecio: "especial",
      tipo: "Especial"
    }
  ]

  const ProductCard = ({ producto }) => {
    return (
      <div className="pasta-card p-6">
        <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <span className={`text-white px-3 py-1 rounded-full text-sm font-medium ${producto.tipo === 'Clásico' ? 'bg-green-600' : 'bg-tomato'
              }`}>
              {producto.tipo}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-gray-800 flex-1">
              {producto.nombre}
            </h3>
            <div className="flex items-center gap-1 ml-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {producto.descripcion}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {producto.ingredientes.map((ingrediente, index) => (
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
                  Cocción: {tiempoCoccion}
                </span>
              </div>

              <div className="text-right">
                <PrecioDisplay
                  producto="noquis"
                  tipo={producto.tipoPrecio}
                  showDescription={true}
                />
                <Link href="#whatsapp">
                  <button className="btn-primary w-full sm:w-auto mt-2">
                    Pedido
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              tradicional que nos acompaña desde 1974. {PRECIOS.noquis.descripcion}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Scale className="w-5 h-5 text-tomato" />
                <span>{PRECIOS.noquis.descripcion}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <HeartHandshakeIcon className="w-5 h-5 text-tomato" />
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
              <ProductCard key={ñoqui.id} producto={ñoqui} />
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
                  inmigración italiana. Se dice que traen buena suerte y abundancia.
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
              <p className="text-gray-600">Olla grande con abundante agua salada hirviendo.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agregar Despacio</h3>
              <p className="text-gray-600">Agrega los ñoquis de a pocos.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hasta que Floten</h3>
              <p className="text-gray-600">Cuando floten ({tiempoCoccion}) están listos.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Servir al Momento</h3>
              <p className="text-gray-600">Escurre y sirve inmediatamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            Ñoquis Frescos {PRECIOS.noquis.descripcion}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Llevate la cantidad que necesites de nuestras pastas frescas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <UbicacionButton />
          </div>
        </div>
      </section>
    </div>
  );
}