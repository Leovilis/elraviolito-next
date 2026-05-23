import { Utensils, Clock, Users, Star, Package, Clock1, FlameIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '../components/WhatsAppButton'
import UbicacionButton from '../components/UbicacionButton'
import PrecioDisplay from '../components/PrecioDisplay'
import { PRECIOS } from '@/data/precios'

export default function Canelones() {
  const tiempoCoccion = "15-20 min (horno)"

  const canelones = [
    {
      id: 1,
      nombre: "Canelones de Verdura",
      descripcion: "Canelones rellenos de verduras frescas de estación, una opción saludable y deliciosa.",
      imagen: "/canelones-verdura.jpg",
      ingredientes: ["Acelga", "Ricota", "Especias"],
      categoria: "Clásicos",
      tipoPrecio: "simple"
    },
    {
      id: 2,
      nombre: "Canelones de Verdura con Queso",
      descripcion: "Verduras frescas combinadas con queso cremoso para un sabor equilibrado.",
      imagen: "/canelones-verdura-queso.jpg",
      ingredientes: ["Verduras", "Mozzarella", "Especias"],
      categoria: "Clásicos",
      tipoPrecio: "simple"
    },
    {
      id: 3,
      nombre: "Canelones de Verdura con Ricota",
      descripcion: "Mezcla perfecta de verduras frescas con ricota cremosa, suave al paladar.",
      imagen: "/canelones-verdura-ricota.jpg",
      ingredientes: ["Verduras", "Ricota", "Nuez moscada"],
      categoria: "Clásicos",
      tipoPrecio: "simple"
    },
    {
      id: 4,
      nombre: "Canelones de Verdura con Pollo",
      descripcion: "Verduras combinadas con tierno pollo desmenuzado, nutritivo y sabroso.",
      imagen: "/canelones-verdura-pollo.jpg",
      ingredientes: ["Verduras", "Pollo", "Hierbas"],
      categoria: "Especiales",
      tipoPrecio: "simple"
    },
    {
      id: 5,
      nombre: "Canelones de Verdura con Carne",
      descripcion: "Verduras combinadas con suave picadillo de carne.",
      imagen: "/canelones-carne.png",
      ingredientes: ["Verduras", "Picadillo de Carne", "Hierbas"],
      categoria: "Especiales",
      tipoPrecio: "simple"
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
            <span className="bg-tomato text-white px-3 py-1 rounded-full text-sm font-medium">
              {producto.categoria}
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
                  producto="canelones"
                  tipo="simple"
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
              Canelones
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nuestros canelones frescos vienen en {PRECIOS.canelones.descripcion},
              perfectos para hornear con tu salsa favorita.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Package className="w-5 h-5 text-tomato" />
                <span>{PRECIOS.canelones.descripcion}</span>
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
              <ProductCard key={canelon.id} producto={canelon} />
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
              <p className="text-gray-600">Precalienta el horno a 180°C.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prepara la Fuente</h3>
              <p className="text-gray-600">Coloca salsa en el fondo de una fuente.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Acomoda los Canelones</h3>
              <p className="text-gray-600">Coloca los canelones y cubre con salsa y queso.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hornea y Gratina</h3>
              <p className="text-gray-600">Hornea por {tiempoCoccion} hasta que estén dorados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            {PRECIOS.canelones.descripcion} para Compartir
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros canelones frescos son perfectos para crear una comida especial en familia.
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