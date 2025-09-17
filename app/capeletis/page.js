import { Utensils, Clock, Users, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Capeletis() {
  const capeletisSimples = [
    {
      id: 1,
      nombre: "Capeletis de Verdura",
      descripcion: "Capeletis en forma de sombrero rellenos de verduras frescas de estación.",
      precio: "30 Unidades",
      imagen: "/capeletis-verdura.jpg",
      ingredientes: ["Acelga", "Espinaca", "Cebolla", "Especias"],
      tiempoCoccion: "8-10 min",
      categoria: "Simple"
    },
    {
      id: 2,
      nombre: "Capeletis de Verdura con Queso",
      descripcion: "Verduras frescas combinadas con queso cremoso en forma tradicional de capeleti.",
      precio: "30 Unidades",
      imagen: "/capeletis-verdura-queso.jpg",
      ingredientes: ["Verduras", "Queso cremoso", "Ricota", "Especias"],
      tiempoCoccion: "8-10 min",
      categoria: "Simple"
    },
    {
      id: 3,
      nombre: "Capeletis de Verdura con Ricota",
      descripcion: "Mezcla perfecta de verduras frescas con ricota cremosa y suave.",
      precio: "30 Unidades",
      imagen: "/capeletis-verdura-ricota.jpg",
      ingredientes: ["Verduras", "Ricota", "Huevo", "Perejil"],
      tiempoCoccion: "8-10 min",
      categoria: "Simple"
    },
    {
      id: 4,
      nombre: "Capeletis de Verdura con Pollo",
      descripcion: "Verduras combinadas con tierno pollo desmenuzado, nutritivo y delicioso.",
      precio: "30 Unidades",
      imagen: "/capeletis-verdura-pollo.jpg",
      ingredientes: ["Verduras", "Pollo", "Cebolla", "Hierbas"],
      tiempoCoccion: "9-11 min",
      categoria: "Simple"
    }
  ]

  const capeletisEspeciales = [
    {
      id: 5,
      nombre: "Capeletis de Ricota con Nuez",
      descripcion: "Ricota cremosa con nueces, una combinación gourmet sofisticada en capeleti.",
      precio: "30 Unidades",
      imagen: "/capeletis-ricota-nuez.jpg",
      ingredientes: ["Ricota", "Nueces", "Queso parmesano", "Especias"],
      tiempoCoccion: "8-10 min",
      categoria: "Especial"
    },
    {
      id: 6,
      nombre: "Capeletis de Ricota con Jamón",
      descripcion: "Ricota suave con jamón cocido, un clásico en la tradicional forma de sombrero.",
      precio: "30 Unidades",
      imagen: "/capeletis-ricota-jamon.jpg",
      ingredientes: ["Ricota", "Jamón cocido", "Queso", "Nuez moscada"],
      tiempoCoccion: "8-10 min",
      categoria: "Especial"
    },
    {
      id: 7,
      nombre: "Capeletis de Jamón y Queso",
      descripcion: "La combinación perfecta de jamón y queso en capeleti, ideal para toda la familia.",
      precio: "30 Unidades",
      imagen: "/capeletis-jamon-queso.jpg",
      ingredientes: ["Jamón cocido", "Queso mozzarella", "Ricota", "Especias"],
      tiempoCoccion: "8-10 min",
      categoria: "Especial"
    },
    {
      id: 8,
      nombre: "Capeletis de Calabaza con Muzza",
      descripcion: "Calabaza dulce asada con mozzarella, un sabor suave y delicado en forma de capeleti.",
      precio: "30 Unidades",
      imagen: "/capeletis-calabaza-muzza.jpg",
      ingredientes: ["Calabaza", "Mozzarella", "Ricota", "Nuez moscada"],
      tiempoCoccion: "8-10 min",
      categoria: "Especial"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pasta to-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-script text-6xl md:text-7xl text-tomato mb-4">
              Capeletis
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Los capeletis con su característica forma de sombrero vienen en presentaciones de 30 unidades. 
              Ofrecemos variedades simples y especiales con rellenos únicos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Clock className="w-5 h-5 text-tomato" />
                <span>30 unidades</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Utensils className="w-5 h-5 text-tomato" />
                <span>Forma tradicional</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Users className="w-5 h-5 text-tomato" />
                <span>Especialidad de la casa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capeletis Simples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Capeletis Simples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capeletisSimples.map((capeleti) => (
              <div key={capeleti.id} className="pasta-card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={capeleti.imagen}
                    alt={capeleti.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {capeleti.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {capeleti.nombre}
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
                    {capeleti.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {capeleti.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {capeleti.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {capeleti.precio}
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

      {/* Capeletis Especiales */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Capeletis Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capeletisEspeciales.map((capeleti) => (
              <div key={capeleti.id} className="pasta-card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={capeleti.imagen}
                    alt={capeleti.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-tomato text-white px-3 py-1 rounded-full text-sm font-medium">
                      {capeleti.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {capeleti.nombre}
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
                    {capeleti.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {capeleti.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {capeleti.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-tomato mb-2">
                          {capeleti.precio}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Cocinar Nuestros Capeletis?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Preparar el Agua</h3>
              <p className="text-gray-600">
                Hierve abundante agua con sal en una olla grande y profunda.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cocinar con Cuidado</h3>
              <p className="text-gray-600">
                Cocina por 8-11 minutos con cuidado para mantener su forma de sombrero.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">¡A Saborear!</h3>
              <p className="text-gray-600">
                Escurre delicadamente y acompaña con tu salsa favorita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            30 Capeletis Únicos
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros capeletis vienen en porciones perfectas de 30 unidades, 
            ideales para comidas familiares especiales.
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