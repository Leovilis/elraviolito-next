import Image from "next/image";
import Link from "next/link";

export default function ProductosDestacados() {
  const productos = [
    {
      nombre: "Sorrentinos",
      descripcion: "Clasicos y especiales, con rellenos únicos",
      imagen: "/sorrentinos-hero.png",
      link: "/sorrentinos",
    },
    {
      nombre: "Ravioles",
      descripcion:
        "2 planchas de 96 unidades. Simples y especiales con rellenos únicos",
      imagen: "/ravioles-hero.jpg",
      link: "/ravioles",
    },
    {
      nombre: "Capeletis",
      descripcion:
        "30 unidades. Simples y especiales con sabores tradicionales",
      imagen: "/capeletis-hero.png",
      link: "/capeletis",
    },
    {
      nombre: "Canelones",
      descripcion: "12 unidades de canelones frescos con rellenos caseros",
      imagen: "/canelones-hero.png",
      link: "/canelones",
    },
    {
      nombre: "Fideos",
      descripcion: "Tallarines frescos, elaborados diariamente",
      imagen: "/fideos-hero.png",
      link: "/fideos",
    },
    {
      nombre: "Ñoquis",
      descripcion: "Ñoquis frescos, elaborados diariamente",
      imagen: "/noquis-hero.png",
      link: "/noquis",
    },
  ];

  return (
    <section
      id="productos"
      className="py-20 bg-gradient-to-br from-cream to-pasta"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {productos.map((producto, index) => (
            <Link
              key={index}
              href={producto.link}
              className="group pasta-card p-6 block"
            >
              <div className="relative  md:h-96 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
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
              <div className="text-tomato font-semibold group-hover:text-red-700 transition-colors">
                Ver productos →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}