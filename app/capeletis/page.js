import { Utensils, Clock, Users, Star, Box, LucideBean } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../components/WhatsAppButton"; // Ajusta la ruta según tu estructura
import UbicacionButton from "../components/UbicacionButton";

export default function Capeletis() {
  const tiempoCoccion = "3 min";
  const simple = "$4500";
  const especial = "$4700";
  const esp2 = "$5000";
  const capeletisSimples = [
    {
      id: 1,
      nombre: "Capeletis de Verdura",
      descripcion:
        "Capeletis en forma de sombrero rellenos de verduras frescas de estación.",
      precio: simple,
      imagen: "/capeletis-verdura.jpg",
      ingredientes: [
        "Acelga",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple",
    },
    {
      id: 2,
      nombre: "Capeletis de Verdura con Queso",
      descripcion:
        "Verduras frescas combinadas con queso cremoso en forma tradicional del capeleti.",
      precio: simple,
      imagen: "/capeletis-verdura-y-queso.jpg",
      ingredientes: [
        "Verduras",
        "Queso cremoso",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple",
    },
    {
      id: 3,
      nombre: "Capeletis de Verdura con Ricota",
      descripcion:
        "Mezcla perfecta de verduras frescas con ricota cremosa y suave.",
      precio: simple,
      imagen: "/capeletis-verdura-ricota.jpg",
      ingredientes: [
        "Verduras",
        "Ricota",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple",
    },
    {
      id: 4,
      nombre: "Capeletis de Verdura y Carne",
      descripcion:
        "Mezcla perfecta de verduras frescas con ricota cremosa y suave.",
      precio: simple,
      imagen: "/capeletis-verdura-carne.jpg",
      ingredientes: [
        "Verduras",
        "Picadillo de Carne",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple",
    },
    {
      id: 5,
      nombre: "Capeletis de Verdura con Pollo",
      descripcion:
        "Verduras combinadas con tierno pollo desmenuzado, nutritivo y delicioso.",
      precio: simple,
      imagen: "/capeletis-verdura-pollo.jpg",
      ingredientes: [
        "Verduras",
        "Pollo",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Simple",
    },
  ];

  const capeletisespecial = [
    {
      id: 6,
      nombre: "Capeletis de Ricota con Nuez",
      descripcion:
        "Ricota cremosa con nueces, una combinación gourmet sofisticada en capeleti.",
      precio: especial,
      imagen: "/capeletis-ricota-nuez.jpg",
      ingredientes: [
        "Ricota",
        "Nueces",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial",
    },
    {
      id: 7,
      nombre: "Capeletis de Ricota con Jamón",
      descripcion:
        "Ricota suave con jamón cocido, un clásico en la tradicional forma de sombrero.",
      precio: especial,
      imagen: "/capeletis-ricota-jamon.jpg",
      ingredientes: [
        "Ricota",
        "Jamón cocido",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial",
    },
    {
      id: 8,
      nombre: "Capeletis de Jamón y Queso",
      descripcion:
        "La combinación perfecta de jamón y queso en capeleti, ideal para toda la familia.",
      precio: especial,
      imagen: "/capeletis-jamon-queso.jpg",
      ingredientes: [
        "Jamón cocido",
        "Queso Cremoso",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial",
    },
    {
      id: 9,
      nombre: "Capeletis de Calabaza con Mozzarella",
      descripcion:
        "Calabaza dulce asada con queso mozzarella, un sabor suave y delicado en forma de capeleti.",
      precio: esp2,
      imagen: "/capeletis-calabaza.jpg",
      ingredientes: [
        "Calabaza",
        "Mozzarella",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial",
    },
    {
      id: 10,
      nombre: "Capeletis de Quatro Quesos",
      descripcion:
        "Quatro Quesos combinados en una suave masa para un exquisito sabor en forma de capeleti.",
      precio: esp2,
      imagen: "/capeletis-4quesos.jpg",
      ingredientes: [
        "Mozzarella",
        "Queso Azul",
        "Parmessano",
        "Ricota",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial",
    },
    {
      id: 11,
      nombre: "Capeletis de Batata y Queso Azul",
      descripcion:
        "Batata con un touch de Queso Azul envuelta en una suave masa, un sabor unico e innovador.",
      precio: esp2,
      imagen: "/capeletis-batata.jpg",
      ingredientes: [
        "Batata",
        "Queso Azul",
        "Especias",
        "Un touch de Sal",
        "Masa Fresca de El Raviolito",
      ],
      tiempoCoccion: tiempoCoccion,
      categoria: "Especial",
    },
  ];

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
              Los capeletis con su característica forma de sombrero vienen en
              presentaciones de 30 unidades. Ofrecemos variedades simples y
              especial con rellenos únicos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Box className="w-5 h-5 text-tomato" />
                <span>30 unidades</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <LucideBean className="w-5 h-5 text-tomato" />
                <span>Forma tradicional</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <Users className="w-5 h-5 text-tomato" />
                <span>Receta Familiar</span>
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
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ingredientes:
                      </h4>
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

      {/* Capeletis especial */}
      <section className="py-16 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Capeletis especial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capeletisespecial.map((capeleti) => (
              <div key={capeleti.id} className="pasta-card p-6">
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ingredientes:
                      </h4>
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
              <h3 className="text-xl font-semibold mb-3">
                Cocinar con Cuidado
              </h3>
              <p className="text-gray-600">
                Cocina por {tiempoCoccion} con cuidado para mantener su forma de
                sombrero.
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
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            30 Capeletis Únicos
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros capeletis vienen en porciones perfectas de 30 unidades,
            ideales para comidas familiares especial.
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
