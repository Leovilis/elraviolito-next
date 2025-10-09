import { Utensils, Clock, Users, Star, Package, Package2, PackageIcon, PackageCheck, PackageMinus, PackageX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '../components/WhatsAppButton' // Ajusta la ruta según tu estructura
import UbicacionButton from '../components/UbicacionButton'
export default function Ravioles() {
  const simple = "$4500";
  const especial = "$4700";
  const esp2 = "$4900";
  const tiempoCoccion = "3 min"
  const raviolesSimples = [
    {
      id: 1,
      nombre: "Ravioles de Verdura",
      descripcion: "Ravioles rellenos de verduras frescas, saludables y sabrosos.",
      precio: simple,
      imagen: "/ravioles-verdura.jpg",
      ingredientes: ["Acelga", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple"

    },
    {
      id: 2,
      nombre: "Ravioles de Verdura y Queso",
      descripcion: "Verdura combinada con queso cremoso para un sabor exquisito. ",
      precio: simple,
      imagen: "/ravioles-queso.jpg",
      ingredientes: ["Acelga Fresca", "Queso cremoso", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple"

    },
    {
      id: 3,
      nombre: "Ravioles de Verdura y Ricota",
      descripcion: "Mezcla perfecta de verduras frescas con ricota cremosa y suave.",
      precio: simple,
      imagen: "/ravioles-ricota.jpg",
      ingredientes: ["Acelga Fresca", "Ricota", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple"

    },
    {
      id: 4,
      nombre: "Ravioles de Verdura y Pollo",
      descripcion: "Verdura combinada con tierno pollo desmenuzado, nutritivo y delicioso.",
      precio: simple,
      imagen: "/ravioles-pollo.jpg",
      ingredientes: ["Acelga Fresca", "Pollo", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple"

    },
    {
      id: 5,
      nombre: "Ravioles de Verdura y Carne",
      descripcion: "Verduras combinadas con suave picadillo de carne.",
      precio: simple,
      imagen: "/ravioles-carne.jpg",
      ingredientes: ["Acelga", "Picadillo de Carne", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple"

    }
  ]

  const raviolesEspeciales = [
    {
      id: 6,
      nombre: "Ravioles de Ricota y Nuez",
      descripcion: "Ricota cremosa con nueces, una combinación gourmet única y sofisticada.",
      precio: especial,
      imagen: "/ravioles-ricota-nuez.jpg",
      ingredientes: ["Ricota", "Nueces", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial"

    },
    {
      id: 7,
      nombre: "Ravioles de Ricota y Jamón",
      descripcion: "Ricota suave con jamón cocido, un clásico que nunca falla.",
      precio: especial,
      imagen: "/ravioles-ricota-jamon.jpg",
      ingredientes: ["Ricota", "Jamón cocido", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial"

    },
    {
      id: 8,
      nombre: "Ravioles de Jamón y Queso",
      descripcion: "La combinación perfecta de jamón y queso, ideal para toda la familia.",
      precio: "$4500",
      imagen: "/ravioles-jamon-queso.jpg",
      ingredientes: ["Jamón cocido", "Queso cremoso", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: especial

    },
    {
      id: 9,
      nombre: "Ravioles de Calabaza con Muzza",
      descripcion: "Calabaza dulce con mozzarella, un sabor suave y delicado.",
      precio: "$5000",
      imagen: "/ravioles-calabaza-muzza.jpg",
      ingredientes: ["Calabaza", "Mozzarella", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: esp2

    },
    {
      id: 10,
      nombre: "Ravioles de 4 Quesos",
      descripcion: "Ravioles que combinan el exquisito sabor de 4 quesos, imperdible en tu mesa.",
      precio: "$5000",
      imagen: "/ravioles-4quesos.jpg",
      ingredientes: ["Roquefort", "Queso Creomoso", "Ricota", "Queso Tybo", "Especias", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: esp2
    },
    {
      id: 11,
      nombre: "Ravioles de Batata y Queso Azul",
      descripcion: "Batata fresca combinada con un exquisito Queso Azul, un sabor suave e intenso en el paladar.",
      precio: "$5000",
      imagen: "/ravioles-4quesos.jpg",
      ingredientes: ["Roquefort", "Batata", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: tiempoCoccion,
      categoria: esp2
    }
  ]
  const raviolon = [
    {
      id: 12,
      nombre: "Raviolon de Verdura",
      descripcion: "Raviolon relleno de acelga fresca y especias para un sabor intenso pero agradable. Pre hervido, listo para un toque de horno y a servir",
      precio: "$9000",
      imagen: "/raviolon.png",
      ingredientes: ["Acelga Fresca", "Nuez Moscada", "Un touch de Sal", "Masa Fresca de El Raviolito"],
      tiempoCoccion: "5 min",
      categoria: "Especial"

    }
  ]

  const todosLosRavioles = [...raviolesSimples, ...raviolesEspeciales, ...raviolon]

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
              Nuestros ravioles tradicionales vienen en 2 planchas de 96 unidades cada una. 
              Ofrecemos variedades simples y especiales con rellenos únicos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Package2 className="w-5 h-5 text-tomato" />
                <span>96 unidades total</span>
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
              <div key={raviol.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={raviol.imagen}
                    alt={raviol.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {raviol.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {raviol.nombre}
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
                    {raviol.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {raviol.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {raviol.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-tomato mb-2">
                          {raviol.precio}
                        </div>
                        <Link href="#whatsapp">
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
      {/* Ravioles Especiales */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Ravioles Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {raviolesEspeciales.map((raviol) => (
              <div key={raviol.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={raviol.imagen}
                    alt={raviol.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-tomato text-white px-3 py-1 rounded-full text-sm font-medium">
                      {raviol.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {raviol.nombre}
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
                    {raviol.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {raviol.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {raviol.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-tomato mb-2">
                          {raviol.precio}
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
      {/* Raviolones */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Raviolones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {raviolon.map((raviol) => (
              <div key={raviol.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={raviol.imagen}
                    alt={raviol.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-tomato text-white px-3 py-1 rounded-full text-sm font-medium">
                      {raviol.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {raviol.nombre}
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
                    {raviol.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {raviol.ingredientes.map((ingrediente, index) => (
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
                          Cocción: {raviol.tiempoCoccion}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-tomato mb-2">
                          {raviol.precio}
                        </div>
                        <Link href="#whatsapp">
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
                Agrega los ravioles el agua caliente y cocina por {tiempoCoccion} hasta el primer hervor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">¡Listo para Servir!</h3>
              <p className="text-gray-600">
                En un colador escurrí el agua y serví con tu salsa favorita. ¡Buen provecho!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            Ravioles Frescos de El Raviolito
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros ravioles vienen en 2 planchas de 96 unidades cada una, 
            perfectos para disfrutar en familia.
          </p>
          <div id='whatsapp' className="flex flex-col sm:flex-row gap-4 justify-center">
           <WhatsAppButton />
            <UbicacionButton />
          </div>
        </div>
      </section>
    </div>
  )
}