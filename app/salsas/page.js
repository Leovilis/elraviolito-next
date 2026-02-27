import { Star, Droplets, Flame, ChefHat, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '../components/WhatsAppButton'
import UbicacionButton from '../components/UbicacionButton';

export default function Salsas() {
  const salsas = [
    {
      id: 1,
      nombre: "Salsa Bolognesa",
      descripcion: "Clásica salsa italiana de carne con tomate, cocida a fuego lento para concentrar todos sus sabores. Perfecta para tagliatelle y lasagna.",
      precio: "$5000",
      imagen: "/salsa-bolognesa.jpg",
      ingredientes: ["Carne picada", "Tomate", "Verduras"],
      categoria: "Clásica",
      pastaIdeal: "Fideos anchos, canelones"
    },
    {
      id: 2,
      nombre: "Salsa Bechamel",
      descripcion: "Suave y cremosa salsa blanca elaborada con leche, manteca y nuez moscada. Base ideal para gratinar y acompañar canelones.",
      precio: "$4000",
      imagen: "/salsa-bechamel.jpg",
      ingredientes: ["Leche", "Manteca", "Nuez moscada"],
      categoria: "Clásica",
      pastaIdeal: "Canelones, lasagna"
    },
    {
      id: 3,
      nombre: "Salsa 4 Quesos",
      descripcion: "Mezcla irresistible de cuatro quesos seleccionados que crean una salsa cremosa y llena de sabor, perfecta para los amantes del queso.",
      precio: "$6000",
      imagen: "/salsa-4quesos.jpg",
      ingredientes: ["Mozzarella", "Parmesano", "Roquefort", "Cremoso"],
      categoria: "Especial",
      pastaIdeal: "Ñoquis, ravioles"
    },
    {
      id: 4,
      nombre: "Salsa de Pollo",
      descripcion: "Tiernos trozos de pollo en una salsa cremosa con hierbas aromáticas. Una combinación nutritiva y sabrosa para toda la familia.",
      precio: "$5000",
      imagen: "/salsa-pollo.jpg",
      ingredientes: ["Pollo", "Crema", "Hierbas"],
      categoria: "Especial",
      pastaIdeal: "Fettuccine, ravioles"
    },
    {
      id: 5,
      nombre: "Salsa de Puerro",
      descripcion: "Delicada salsa elaborada con puerros frescos salteados en manteca y crema. Suave, aromática y perfecta para pastas frescas.",
      precio: "$4500",
      imagen: "/salsa-puerro.jpg",
      ingredientes: ["Puerro", "Crema", "Manteca"],
      categoria: "Vegetariana",
      pastaIdeal: "Tallarines, ñoquis"
    },
    {
      id: 6,
      nombre: "Salsa de Champignon",
      descripcion: "Champignones frescos salteados con ajo y hierbas en una base cremosa. Intensa en sabor y perfecta para los amantes de las setas.",
      precio: "$6000",
      imagen: "/salsa-champignon.jpg",
      ingredientes: ["Champignones", "Ajo", "Crema"],
      categoria: "Especial",
      pastaIdeal: "Tortellini, fettuccine"
    },
    {
      id: 7,
      nombre: "Salsa Rosada",
      descripcion: "La combinación perfecta entre salsa de tomate y crema, creando una salsa suave, equilibrada y deliciosamente versátil.",
      precio: "$4500",
      imagen: "/salsa-rosada.jpg",
      ingredientes: ["Tomate", "Crema", "Especias"],
      categoria: "Clásica",
      pastaIdeal: "Todas las pastas"
    },
    {
      id: 8,
      nombre: "Salsa Filetto",
      descripcion: "Salsa de tomate casera con albahaca fresca y ajo, cocida lentamente para lograr una textura y sabor auténticamente italianos.",
      precio: "$4000",
      imagen: "/salsa-filetto.jpg",
      ingredientes: ["Tomate", "Albahaca", "Ajo"],
      categoria: "Clásica",
      pastaIdeal: "Spaghetti, ravioles"
    }
  ]

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pasta to-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-script text-6xl md:text-7xl text-tomato mb-4">
              Salsas
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nuestras salsas artesanales son elaboradas a diario con ingredientes frescos, 
              el complemento perfecto para todas nuestras pastas caseras.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <ChefHat className="w-5 h-5 text-tomato" />
                <span>Elaboración Artesanal</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Sparkles className="w-5 h-5 text-tomato" />
                <span>Ingredientes Frescos</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Flame className="w-5 h-5 text-tomato" />
                <span>Cocidas a Fuego Lento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Nuestras Salsas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salsas.map((salsa) => (
              <div key={salsa.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={salsa.imagen}
                    alt={salsa.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-tomato text-white px-3 py-1 rounded-full text-sm font-medium">
                      {salsa.categoria}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {salsa.nombre}
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
                    {salsa.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {salsa.ingredientes.map((ingrediente, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-herbs rounded-full"></div>
                            {ingrediente}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-tomato" />
                        <span className="text-sm text-gray-600">
                          Ideal para: {salsa.pastaIdeal}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {salsa.precio}
                        </div>
                        <Link href="#whatsapp">
                          <button className="btn-primary w-full sm:w-auto">
                            Pedido
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

      {/* Consejos Section */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Usar Nuestras Salsas?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Calentá la Salsa</h3>
              <p className="text-gray-600">
                Calentá la salsa a fuego medio-bajo revolviendo suavemente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cocí las Pastas</h3>
              <p className="text-gray-600">
                Cocí las pastas en abundante agua con sal hasta que estén al dente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Uní y Mezclá</h3>
              <p className="text-gray-600">
                Escurrí las pastas y mezclá con la salsa caliente directamente en la olla.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Serví y Disfrutá</h3>
              <p className="text-gray-600">
                Serví de inmediato con queso parmesano rallado y hojas de albahaca fresca.
              </p>
            </div>
          </div>

          {/* Guía de maridaje */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Guía de Maridaje: Salsa + Pasta</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-tomato text-lg">Salsas de tomate:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Filetto y Rosada → ideales para spaghetti y tallarines</li>
                  <li>• Bolognesa → perfecta con fideos anchos y canelones</li>
                  <li>• Todas combinan muy bien con ñoquis</li>
                  <li>• Acompañá con parmesano rallado</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-tomato text-lg">Salsas cremosas:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Bechamel → fundamental para canelones y lasagna</li>
                  <li>• 4 Quesos y Champignon → para ravioles y tortellini</li>
                  <li>• Pollo y Puerro → ideales con fettuccine</li>
                  <li>• Acompañá con pimienta negra recién molida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            El Toque Final que Hace la Diferencia
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestras salsas artesanales son el complemento perfecto para nuestras pastas frescas. 
            Pedí tu salsa favorita junto con tus pastas y creá una comida inolvidable.
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