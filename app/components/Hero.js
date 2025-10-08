import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pasta to-cream min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-script text-6xl md:text-8xl text-tomato mb-6">
          El Raviolito
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Tradición familiar desde 1974. Pastas artesanales hechas con amor y
          los mejores ingredientes.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link href="#productos">
            {" "}
            <button className="btn-primary mb-5">Ver Nuestros Productos</button>
          </Link>
          <Link href="#historia">
            <button className="border-2 border-tomato text-tomato px-6 py-2.5 rounded-lg font-semibold hover:bg-tomato hover:text-white transition-all duration-300">
              Conocer Nuestra Historia
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
