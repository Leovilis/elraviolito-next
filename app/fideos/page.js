import { Utensils, Clock, Users, Star, LucideWheat, HandHeartIcon, LucideShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from '../components/WhatsAppButton';
import UbicacionButton from "../components/UbicacionButton";
import PrecioDisplay from "../components/PrecioDisplay";
import { PRECIOS } from "@/data/precios";

export default function Fideos() {
  const tiempoCoccion = "4 min";

  const fideos = [
    {
      id: 1,
      nombre: "Tallarines de Huevo",
      descripcion: "Tallarines frescos elaborados con huevos, para una textura perfecta.",
      imagen: "/tallarines-huevo.jpg",
      ingredientes: ["Harina 0000", "Huevos frescos", "Aceite", "Sal"],
      tipo: "Común",
      tipoPrecio: "simple"
    },
    {
      id: 2,
      nombre: "Tallarines de Remolacha",
      descripcion: "Tallarines de remolacha fresca, nutritivos y de color vivo.",
      imagen: "/tallarines-remolacha.jpg",
      ingredientes: ["Harina 0000", "Huevos", "Remolacha Fresca", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    },
    {
      id: 3,
      nombre: "Tallarines de Verdura",
      descripcion: "Tallarines elaborados con acelga fresca, para un sabor refrescante.",
      imagen: "/tallarines-espinaca.jpg",
      ingredientes: ["Harina 0000", "Acelga Fresca", "Aceite", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    },
    {
      id: 4,
      nombre: "Tallarines de Zanahoria",
      descripcion: "Tallarines de zanahoria fresca, una mezcla de sabor irresistible.",
      imagen: "/tallarines-zanahoria.jpg",
      ingredientes: ["Harina 0000", "Zanahoria", "Aceite", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    },
    {
      id: 5,
      nombre: "Tallarines de Harina Morada",
      descripcion: "Tallarines de harina de choclo morado, una combinación autóctona en tu mesa.",
      imagen: "/tallarines-morado.jpg",
      ingredientes: ["Harina Morada", "Huevos frescos", "Aceite", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    },
    {
      id: 6,
      nombre: "Tallarines de Morron Ahumado",
      descripcion: "Tallarines de morrón ahumado, una sensación exquisita en tu boca.",
      imagen: "/tallarines-morron.jpg",
      ingredientes: ["Harina 0000", "Morron Ahumado", "Aceite", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    },
    {
      id: 7,
      nombre: "Tallarines de Perejil",
      descripcion: "Tallarines elaborados con perejil fresco, un clásico para vos.",
      imagen: "/tallarines-perejil.jpg",
      ingredientes: ["Harina 0000", "Perejil Fresco", "Aceite", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    },
    {
      id: 8,
      nombre: "Tallarines de Albahaca",
      descripcion: "Tallarines elaborados con albahaca fresca, infaltable en tu mesa.",
      imagen: "/tallarines-albahaca.jpg",
      ingredientes: ["Harina 0000", "Albahaca Fresca", "Aceite", "Sal"],
      tipo: "Especial",
      tipoPrecio: "simple"
    }
  ];

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
            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white 
              ${producto.tipo === 'Común' ? 'bg-green-600' : 'bg-tomato'}`}>
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
                  producto="tallarines"
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
    );
  };

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
              Masa fresca hecha diariamente con ingredientes de primera calidad. {PRECIOS.tallarines.descripcion}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                <LucideShoppingBag className="w-5 h-5 text-tomato" />
                <span>{PRECIOS.tallarines.descripcion}</span>
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

      {/* Fideos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Fideos Frescos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fideos.map((fideo) => (
              <ProductCard key={fideo.id} producto={fideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Preparación Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">¿Cómo Cocinar Fideos Frescos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agua Abundante</h3>
              <p className="text-gray-600">Con sal a gusto.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hervor Fuerte</h3>
              <p className="text-gray-600">Agrega cuando el agua esté hirviendo.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{tiempoCoccion}</h3>
              <p className="text-gray-600">Cocina por {tiempoCoccion} y disfrutá.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp" className="py-16 bg-tomato text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            Fideos Frescos {PRECIOS.tallarines.descripcion}
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