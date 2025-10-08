import { Utensils, Clock, Users, Star, LucideWheat, HandHeartIcon, LucideShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from '../components/WhatsAppButton' // Ajusta la ruta según tu estructura

export default function Fideos() {
  const tiempoCoccion = "5 min";
  const tallarines = [
    {
      id: 1,
      nombre: "Tallarines de Huevo",
      descripcion:
        "Tallarines frescos elaborados con huevos, masa dorada y textura perfecta.",
      precio: "$4700",
      imagen: "/tallarines-huevo.jpg",
      ingredientes: ["Harina 0000", "Huevos frescos", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Común",
    },
    {
      id: 2,
      nombre: "Tallarines de Remolacha",
      descripcion:
        "Tallarines verdes con espinaca natural, nutritivos y de color vibrante.",
      precio: "$4700",
      imagen: "/tallarines-remolacha.jpg",
      ingredientes: ["Harina 0000", "Huevos", "Espinaca", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
    {
      id: 3,
      nombre: "Tallarines de Espinaca",
      descripcion:
        "Tallarines frescos elaborados con huevos, masa dorada y textura perfecta.",
      precio: "$4700",
      imagen: "/tallarines-espinaca.jpg",
      ingredientes: ["Harina 0000", "Huevos frescos", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
    {
      id: 4,
      nombre: "Tallarines de Zanahoria",
      descripcion:
        "Tallarines verdes con espinaca natural, nutritivos y de color vibrante.",
      precio: "$4700",
      imagen: "/tallarines-zanahoria.jpg",
      ingredientes: ["Harina 0000", "Huevos", "Espinaca", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
    {
      id: 5,
      nombre: "Tallarines de Harina Morada",
      descripcion:
        "Tallarines frescos elaborados con huevos, masa dorada y textura perfecta.",
      precio: "$4700",
      imagen: "/tallarines-morado.jpg",
      ingredientes: ["Harina 0000", "Huevos frescos", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
    {
      id: 6,
      nombre: "Tallarines de Morron Ahumado",
      descripcion:
        "Tallarines verdes con espinaca natural, nutritivos y de color vibrante.",
      precio: "$4700",
      imagen: "/tallarines-morron.jpg",
      ingredientes: ["Harina 0000", "Huevos", "Espinaca", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
    {
      id: 7,
      nombre: "Tallarines de Perejil",
      descripcion:
        "Tallarines frescos elaborados con huevos, masa dorada y textura perfecta.",
      precio: "$4700",
      imagen: "/tallarines-perejil.jpg",
      ingredientes: ["Harina 0000", "Huevos frescos", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
    {
      id: 8,
      nombre: "Tallarines de Albahaca",
      descripcion:
        "Tallarines verdes con espinaca natural, nutritivos y de color vibrante.",
      precio: "$4700",
      imagen: "/tallarines-albahaca.jpg",
      ingredientes: ["Harina 0000", "Huevos", "Espinaca", "Aceite", "Sal"],
      tiempoCoccion: tiempoCoccion,
      tipo: "Especial",
    },
  ];

  

  const todosLosFideos = [...tallarines];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pasta to-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-script text-6xl md:text-7xl text-tomato mb-4">
              Tallarines y Spaguettis
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Masa fresca hecha diariamente con ingredientes de primera calidad.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <LucideShoppingBag className="w-5 h-5 text-tomato" />
                <span>Venta por kilo</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <HandHeartIcon className="w-5 h-5 text-tomato" />
                <span>Elaboración diaria</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <LucideWheat className="w-5 h-5 text-tomato" />
                <span>Tradición de 50 años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tallarines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Tallarines Frescos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tallarines.map((tallarin) => (
              <div key={tallarin.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={tallarin.imagen}
                    alt={tallarin.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                   <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white 
                    ${
                      tallarin.tipo === 'Común' ? 'bg-green-600' : 'bg-tomato'
                    }`}>
                      {tallarin.tipo}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {tallarin.nombre}
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
                    {tallarin.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ingredientes:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tallarin.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {tallarin.tiempoCoccion}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {tallarin.precio}
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

      {/* Preparación Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Cocinar Fideos Frescos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Tallarines */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-tomato">
                Tallarines
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Agua Abundante</h4>
                    <p className="text-gray-600 text-sm">
                      Con sal a gusto.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hervor Fuerte</h4>
                    <p className="text-gray-600 text-sm">
                      Agrega los tallarines cuando el agua esté hirviendo.
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">3-5 Minutos</h4>
                    <p className="text-gray-600 text-sm">
                      Cocina por 3-5 minutos, sacalos suavemente en un colador y preparalos como mas te guste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consejos adicionales */}
          <div className="mt-12 bg-gradient-to-r from-cream to-pasta p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Consejos del Maestra
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-tomato">Para Tallarines:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• No cortes los tallarines antes de cocinar</li>
                  <li>• Reserva un poco de agua de cocción para la salsa</li>
                  <li>• Sirve inmediatamente para mejor textura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp"  className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            Fideos Frescos por Kilo
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Llevate la cantidad que necesites de nuestras pastas frescas.
            Elaborados diariamente con la receta tradicional de la familia
            Campos.
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
  );
}
