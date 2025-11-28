import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function BlackFridayBanner() {
  return (
    <Link href="/noquis" className="block">
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-8 px-6 cursor-pointer group">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-yellow-500/20 to-red-600/20 animate-pulse"></div>
        
        {/* Decorative sparkles */}
        <div className="absolute top-2 left-4 text-yellow-400 animate-bounce">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-2 right-8 text-yellow-400 animate-bounce delay-150">
          <Sparkles size={20} />
        </div>
        <div className="absolute top-4 right-12 text-red-400 animate-bounce delay-300">
          <Sparkles size={18} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left side - Black Friday tag */}
            <div className="flex items-center gap-3">
              <div className="bg-red-600 text-white px-4 py-2 rotate-[-3deg] shadow-lg transform group-hover:rotate-[-6deg] transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-black tracking-wider">
                  BLACK
                </span>
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 rotate-[3deg] shadow-lg transform group-hover:rotate-[6deg] transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-black tracking-wider">
                  FRIDAY
                </span>
              </div>
            </div>

            {/* Center - Product and price */}
            <div className="text-center flex-1">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-400" size={20} />
                ¡ÑOQUIS FRESCOS!
                <Sparkles className="text-yellow-400" size={20} />
              </h3>
              <div className="flex items-center justify-center gap-4">
                <span className="text-gray-400 text-lg md:text-xl line-through">
                  $4.500
                </span>
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl md:text-4xl font-black">
                    $4.000
                  </span>
                  <span className="text-sm md:text-base block font-semibold">
                    por KG
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg transform group-hover:scale-105 group-hover:bg-yellow-300 transition-all duration-300">
                ¡COMPRAR AHORA! →
              </div>
              <span className="text-red-400 text-sm mt-2 font-semibold animate-pulse">
                Oferta limitada
              </span>
            </div>
          </div>
        </div>

        {/* Bottom flash effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
      </div>
    </Link>
  );

}
