import { Utensils, Clock, Users, Star, Wheat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../components/WhatsAppButton"; // Ajusta la ruta según tu estructura
import UbicacionButton from "../components/UbicacionButton"; 
export default function Sorrentinos() {
  const tiempoCoccion = "3 min al dente";
  const sorrentinos = [
    {
      id: 1,
      nombre: "Sorrentinos de Verdura y Ricota",
      descripcion:
        "Clásicos sorrentinos rellenos de ricota fresca y espinaca, con masa casera dorada.",
      precio: "$4300",
      imagen: "/sorrentinos-ricota.jpg",
      ingredientes: ["Ricota", "Espinaca", "Huevo", "Queso parmesano"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simples",
    },
    {
      id: 2,
      nombre: "Sorrentinos de Verdura y Queso",
      descripcion:
        "Deliciosos sorrentinos rellenos de Acelga Fresca y Queso, perfectos para toda la familia.",
      precio: "$4300",
      imagen: "/sorrentinos-queso.jpg",
      ingredientes: [
        "Acelga Fresca",
        "Queso Cremoso",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simples",
    },
    {
      id: 3,
      nombre: "Sorrentinos de Verdura",
      descripcion:
        "Verduras frescas de estación envueltas en una fima masa de autentico sabor.",
      precio: "$4300",
      imagen: "/sorrentinos-verdura.jpg",
      ingredientes: [
        "Acelga",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simples",
    },
    {
      id: 4,
      nombre: "Sorrentinos de Pollo y Verdura",
      descripcion:
        "Tiernos trozos de pollo con Verdura fresco, una combinación irresistible.",
      precio: "$4300",
      imagen: "/sorrentinos-pollo.jpg",
      ingredientes: ["Pollo", "Cebolla de Verdura", "Ricota", "Perejil"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simples",
    },
    {
      id: 5,
      nombre: "Sorrentinos de Verdura y Carne",
      descripcion:
        "Tiernos trozos de pollo con Verdura fresco, una combinación irresistible.",
      precio: "$4300",
      imagen: "/sorrentinos-carne.jpg",
      ingredientes: [
        "Acelga Fresca",
        "Picadillo de Carne",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simples",
    },
  ];
  const sorrentinosEspeciales = [
    {
      id: 6,
      nombre: "Sorrentinos de Jamon y Queso",
      descripcion:
        "Rellenos de Jamon y Queso, una combinación tan irresistible como tradicional.",
      precio: "$4500",
      imagen: "/sorrentinos-jamon.jpg",
      ingredientes: [
        "Acelga Fresca",
        "Jamon Cocido",
        "Queso Cremoso",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 7,
      nombre: "Sorrentinos de Ricota y Jamon",
      descripcion:
        "Un irresistible relleno de Ricota fresca y Jamon Cocido, una opción para toda la família.",
      precio: "$4500",
      imagen: "/sorrentinos-rico-jamon.jpg",
      ingredientes: [
        "Ricota",
        "Jamon Cocido",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 8,
      nombre: "Sorrentinos de Ricota y Nuéz",
      descripcion:
        "Masa fresca rellena de una ricota suave que se funde con el toque crujiente y elegante de la nuez, una caricia al paladar.",
      precio: "$4500",
      imagen: "/sorrentinos-nuez.jpg",
      ingredientes: [
        "Ricota Fresca",
        "Nueces",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 9,
      nombre: "Sorrentinos de Batata y Queso Azul",
      descripcion:
        "Sorrentinos rellenos con Batata y Queso Azul, una combinación exquisita al paladar.",
      precio: "$5000",
      imagen: "/sorrentinos-batata.jpg",
      ingredientes: [
        "Batata",
        "Queso Azul",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 10,
      nombre: "Sorrentinos de Ricota, Pollo y Almendras Tostadas",
      descripcion:
        "Tiernos trozos de pollo con Ricota fresca y una lluvia de Almendras Tostadas, una combinación única.",
      precio: "$5000",
      imagen: "/sorrentinos-almendras.jpg",
      ingredientes: [
        "Pollo",
        "Ricota Fresca",
        "Almendras",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 11,
      nombre: "Sorrentinos de Habas, Queso de Cabra y Choclo",
      descripcion:
        "sorrentinos rellenos de habas tiernas, queso de cabra cremoso y granos dulces de choclo, un plato que respira autenticidad",
      precio: "$5000",
      imagen: "/sorrentinos-habas.jpg",
      ingredientes: ["Pollo", "Cebolla de Verdura", "Ricota", "Perejil"],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 12,
      nombre: "Sorrentinos Capresse",
      descripcion:
        "Una masa suave envuelve un relleno vibrante de tomates maduros, queso fresco y hojas de albahaca, armonía perfecta de sabores.",
      precio: "$5000",
      imagen: "/sorrentinos-capresse.jpg",
      ingredientes: [
        "Tomates",
        "Queso Cremoso",
        "Albahaca",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 13,
      nombre: "Sorrentinos de Calabaza y Mozzarella",
      descripcion:
        "La dulzura natural de la calabaza se fusiona con la suavidad cremosa de la mozzarella, en un plato moderno e innovador.",
      precio: "$5000",
      imagen: "/sorrentinos-calabaza.jpg",
      ingredientes: [
        "Calabaza",
        "Mozzarella",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 14,
      nombre: "Sorrentinos de Quatro Quesos",
      descripcion:
        "Un relleno intenso donde la ricota suave, la mozzarella fundente, el parmesano maduro y el azul vibrante se unen en perfecta armonía en cada bocado.",
      precio: "$5000",
      imagen: "/sorrentinos-4quesos.jpg",
      ingredientes: [
        "Ricota",
        "Mozzarella",
        "Parmesano",
        "Roquefort",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
    {
      id: 15,
      nombre: "Sorrentinos de Humita",
      descripcion:
        "Inspirados en la tradicional humita andina, estos sorrentinos combinan el dulzor del choclo fresco con una crema suave que realza su sabor natural. Un plato que une la esencia ancestral del maíz con la elegancia de la pasta italiana",
      precio: "$5000",
      imagen: "/sorrentinos-humita.jpg",
      ingredientes: [
        "Choclo molido",
        "Queso Cremoso",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especiales",
    },
  ];

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
              Nuestros sorrentinos son una tradición familiar que se remonta a
              1974. Cada pieza está elaborada artesanalmente con ingredientes
              frescos y mucho amor.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Wheat className="w-5 h-5 text-tomato" />
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

      {/* Sorrentinos Simple */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sorrentinos.map((sorrentino) => (
              <div key={sorrentino.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={sorrentino.imagen}
                    alt={sorrentino.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {sorrentino.categoria}
                    </span>
                  </div>
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ingredientes:
                      </h4>
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
      {/* Sorrentinos Especiales */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Sorrentinos Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sorrentinosEspeciales.map((sorrentinosEspeciales) => (
              <div key={sorrentinosEspeciales.id} className="pasta-card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={sorrentinosEspeciales.imagen}
                    alt={sorrentinosEspeciales.nombre}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-tomato text-white px-3 py-1 rounded-full text-sm font-medium">
                      {sorrentinosEspeciales.categoria}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800 flex-1">
                      {sorrentinosEspeciales.nombre}
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
                    {sorrentinosEspeciales.descripcion}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ingredientes:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {sorrentinosEspeciales.ingredientes.map(
                          (ingrediente, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-herbs rounded-full"></div>
                              {ingrediente}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-tomato" />
                        <span className="text-sm text-gray-600">
                          Cocción: {sorrentinosEspeciales.tiempoCoccion}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-tomato mb-2">
                          {sorrentinosEspeciales.precio}
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
              <h3 className="text-xl font-semibold mb-3">
                Cocina los Sorrentinos
              </h3>
              <p className="text-gray-600">
                Cocina por 5 minutos hasta el primer hervor.
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
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            ¿Listos para Disfrutar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros sorrentinos están disponibles frescos todos los días.
            ¡Contáctanos para hacer tu pedido!
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
