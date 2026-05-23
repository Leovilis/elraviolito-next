import { Utensils, Clock, Users, Star, Package2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '../components/WhatsAppButton'
import UbicacionButton from '../components/UbicacionButton'
import PrecioDisplay from '../components/PrecioDisplay'
import { PRECIOS, obtenerDescripcion } from '@/data/precios'

export default function Ravioles() {
  const tiempoCoccion = "3 min"
  
  // Los precios ya no están hardcodeados, se usan desde PRECIOS
  const raviolesSimples = [
    {
      id: 1,
      nombre: "Ravioles de Verdura",
      descripcion: "Ravioles rellenos de verduras frescas, saludables y sabrosos.",
      imagen: "/ravioles-verdura.jpg",
      ingredientes: ["Acelga", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "simple"
    },
    {
      id: 2,
      nombre: "Ravioles de Verdura y Queso",
      descripcion: "Verdura combinada con queso cremoso para un sabor exquisito.",
      imagen: "/ravioles-queso.jpg",
      ingredientes: ["Acelga Fresca", "Queso cremoso", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "simple"
    },
    {
      id: 3,
      nombre: "Ravioles de Verdura y Ricota",
      descripcion: "Mezcla perfecta de verduras frescas con ricota cremosa y suave.",
      imagen: "/ravioles-ricota.jpg",
      ingredientes: ["Acelga Fresca", "Ricota", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "simple"
    },
    {
      id: 4,
      nombre: "Ravioles de Verdura y Pollo",
      descripcion: "Verdura combinada con tierno pollo desmenuzado, nutritivo y delicioso.",
      imagen: "/ravioles-pollo.jpg",
      ingredientes: ["Acelga Fresca", "Pollo", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "simple"
    },
    {
      id: 5,
      nombre: "Ravioles de Verdura y Carne",
      descripcion: "Verduras combinadas con suave picadillo de carne.",
      imagen: "/ravioles-carne.jpg",
      ingredientes: ["Acelga", "Picadillo de Carne", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "simple"
    }
  ]

  const raviolesEspeciales = [
    {
      id: 6,
      nombre: "Ravioles de Ricota y Nuez",
      descripcion: "Ricota cremosa con nueces, una combinación gourmet única y sofisticada.",
      imagen: "/ravioles-ricota-nuez.jpg",
      ingredientes: ["Ricota", "Nueces", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "especial"
    },
    {
      id: 7,
      nombre: "Ravioles de Ricota y Jamón",
      descripcion: "Ricota suave con jamón cocido, un clásico que nunca falla.",
      imagen: "/ravioles-ricota-jamon.jpg",
      ingredientes: ["Ricota", "Jamón cocido", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "especial"
    },
    {
      id: 8,
      nombre: "Ravioles de Jamón y Queso",
      descripcion: "La combinación perfecta de jamón y queso, ideal para toda la familia.",
      imagen: "/ravioles-jamon-queso.jpg",
      ingredientes: ["Jamón cocido", "Queso cremoso", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "especial"
    },
    {
      id: 9,
      nombre: "Ravioles de Calabaza con Muzza",
      descripcion: "Calabaza dulce con mozzarella, un sabor suave y delicado.",
      imagen: "/ravioles-calabaza-muzza.jpg",
      ingredientes: ["Calabaza", "Mozzarella", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "premium"
    },
    {
      id: 10,
      nombre: "Ravioles de 4 Quesos",
      descripcion: "Ravioles que combinan el exquisito sabor de 4 quesos, imperdible en tu mesa.",
      imagen: "/ravioles-4quesos.jpg",
      ingredientes: ["Roquefort", "Queso Cremoso", "Ricota", "Queso Tybo", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "premium"
    },
    {
      id: 11,
      nombre: "Ravioles de Batata y Queso Azul",
      descripcion: "Batata fresca combinada con un exquisito Queso Azul, un sabor suave e intenso en el paladar.",
      imagen: "/ravioles-batata.jpg",
      ingredientes: ["Roquefort", "Batata", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tipoPrecio: "premium"
    }
  ]

  const raviolon = [
    {
      id: 12,
      nombre: "Raviolon de Verdura",
      descripcion: "Raviolon relleno de acelga fresca y especias para un sabor intenso pero agradable. Precocido, listo para un toque de horno.",
      imagen: "/raviolon.png",
      ingredientes: ["Acelga Fresca", "Nuez Moscada", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: "5 min",
      tipoPrecio: "raviolon"
    }
  ]

  const ProductCard = ({ producto, tipoProducto, tiempoCoccion = "3 min" }) => {
    let tipoPrecio = producto.tipoPrecio || "simple"
    let productoKey = "ravioles"
    
    if (tipoProducto === "raviolon") {
      productoKey = "raviolon"
      tipoPrecio = "simple"
    }
    
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
            <span className={`text-white px-3 py-1 rounded-full text-sm font-medium ${
              tipoProducto === "especiales" ? 'bg-tomato' : 
              tipoProducto === "raviolon" ? 'bg-purple-600' : 'bg-green-500'
            }`}>
              {tipoProducto === "especiales" ? "Especial" : 
               tipoProducto === "raviolon" ? "Raviolón" : "Simple"}
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
                  Cocción: {producto.tiempoCoccion || tiempoCoccion}
                </span>
              </div>
              
              <div className="text-right">
                <PrecioDisplay 
                  producto={productoKey}
                  tipo={tipoPrecio}
                  showDescription={false}
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
              Ravioles
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nuestros ravioles tradicionales vienen en {PRECIOS.ravioles.descripcion}. 
              Ofrecemos variedades simples y especiales con rellenos únicos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Package2 className="w-5 h-5 text-tomato" />
                <span>{PRECIOS.ravioles.descripcion}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Utensils className="w-5 h-5 text-tomato" />
                <span>Simples y especiales</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Users className="w-5 h-5 text-tomato" />
                <span>Especialidad de la Casa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ravioles Simples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Ravioles Simples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {raviolesSimples.map((raviol) => (
              <ProductCard key={raviol.id} producto={raviol} tipoProducto="simples" tiempoCoccion={tiempoCoccion} />
            ))}
          </div>
        </div>
      </section>

      {/* Ravioles Especiales */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Ravioles Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {raviolesEspeciales.map((raviol) => (
              <ProductCard key={raviol.id} producto={raviol} tipoProducto="especiales" tiempoCoccion={tiempoCoccion} />
            ))}
          </div>
        </div>
      </section>

      {/* Raviolones */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Raviolones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {raviolon.map((raviol) => (
              <ProductCard key={raviol.id} producto={raviol} tipoProducto="raviolon" tiempoCoccion={raviol.tiempoCoccion} />
            ))}
          </div>
        </div>
      </section>

      {/* Preparación Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Cocinar Nuestros Ravioles?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agua Hirviendo</h3>
              <p className="text-gray-600">
                Coloca abundante agua con sal a gusto y fuego fuerte.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cocina los Ravioles</h3>
              <p className="text-gray-600">
                Agrega los ravioles al agua caliente y cocina por {tiempoCoccion}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">¡Listo para Servir!</h3>
              <p className="text-gray-600">
                Escurrí el agua y serví con tu salsa favorita. ¡Buen provecho!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            Ravioles Frescos de El Raviolito
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros ravioles vienen en {PRECIOS.ravioles.descripcion}, 
            perfectos para disfrutar en familia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <UbicacionButton />
          </div>
        </div>
      </section>
    </div>
  )
}