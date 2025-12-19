'use client'
import { Phone } from 'lucide-react';
import Image from 'next/image';
import WhatsAppButton from '../components/WhatsAppButton';

export default function NavidadPage() {
  const productosNavidad = [
    {
      nombre: "Arrollado de Pollo",
      imagen: "/arrollado-pollo.jpg",
      descripcion: "Arrollado de pollo relleno, ideal para compartir"
    },
    {
      nombre: "Pollo Relleno",
      imagen: "/pollo-relleno.jpg",
      descripcion: "Pollo relleno con ingredientes caseros"
    },
    {
      nombre: "Bondiola Rellena",
      imagen: "/bondiola-rellena.jpg",
      descripcion: "Bondiola rellena con nuestra receta especial"
    },
    {
      nombre: "Pionono",
      imagen: "/pionono.jpg",
      descripcion: "Pionono fresco con rellenos variados"
    },
    {
      nombre: "Vittel Toné",
      imagen: "/vittel-tone.jpg",
      descripcion: "Clásico vittel toné para tu mesa navideña"
    },
    {
      nombre: "Ensalada César",
      imagen: "/ensalada-cesar.jpg",
      descripcion: "Ensalada césar fresca y deliciosa"
    },
    {
      nombre: "Papas al Romero",
      imagen: "/papas-romero.jpg",
      descripcion: "Papas al romero, crujientes y aromáticas"
    },
    {
      nombre: "Ensalada Rusa",
      imagen: "/ensalada-rusa.jpg",
      descripcion: "Ensalada rusa tradicional"
    },
    {
      nombre: "Papas Rústicas",
      imagen: "/papas-rusticas.jpg",
      descripcion: "Papas rústicas al estilo casero"
    },
    {
      nombre: "Pata Flambeada",
      imagen: "/pata-flambeada.jpg",
      descripcion: "Pata flambeada, el toque especial para tu cena"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Estilo similar a Hero.js */}
      <section className="relative bg-gradient-to-br from-red-700 to-green-700 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-script text-6xl md:text-8xl text-white mb-6 drop-shadow-lg">
            Especial Navidad
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Para estas fiestas, El Raviolito les ofrece productos especiales 
            para hacer de tu mesa navideña un momento inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              message="Hola! Quiero consultar por los productos de Navidad"
              className="btn-primary"
            >
              <Phone size={20} className="inline mr-2" />
              Consultar al 388-4536901
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Productos Section - Estilo similar a ProductosDestacados.js */}
      <section className="py-20 bg-gradient-to-br from-cream to-pasta">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Nuestros Productos Navideños</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Hacé click en cada producto para consultar precio y disponibilidad por WhatsApp
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productosNavidad.map((producto, index) => (
              <div
                key={index}
                className="group pasta-card p-6 block text-left"
              >
                <div className="relative h-64 md:h-96 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                  <Image
                    width={500}
                    height={500}
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <WhatsAppButton
                  message={`Hola! Quisiera consultar el precio de: ${producto.nombre}`}
                  className="w-full text-tomato hover:text-red-700 font-semibold bg-transparent hover:bg-gray-50 px-4 py-2 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Consultar precio →
                </WhatsAppButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section - Estilo similar a Historia.js */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">¡Hacé tu pedido con anticipación!</h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                Asegurá tu lugar en nuestra lista. Todos nuestros productos son 
                elaborados frescos con la calidad y tradición que nos caracteriza 
                desde 1974.
              </p>
              <p>
                Comunicate con nosotros por WhatsApp para consultar precios, 
                disponibilidad y hacer tu pedido para estas fiestas.
              </p>
            </div>
            <div className="mt-8">
              <WhatsAppButton
                message="Hola! Quiero hacer un pedido para Navidad"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Contactar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}