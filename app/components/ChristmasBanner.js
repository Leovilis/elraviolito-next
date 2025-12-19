'use client'
import Link from 'next/link';
import { Gift, Sparkles, ChevronRight } from 'lucide-react';

export default function ChristmasBanner() {
  return (
    <Link href="/navidad" className="block">
      <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-green-700 py-12 px-6 cursor-pointer group">
        {/* Snowflakes animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white opacity-60 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${10 + Math.random() * 20}px`,
                top: '-20px'
              }}
            >
              ❄
            </div>
          ))}
        </div>

        {/* Glowing lights effect */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-red-500 to-yellow-400 animate-pulse"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Gift icon and sparkles */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Gift className="text-yellow-300 animate-bounce" size={60} />
                <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={24} />
              </div>
            </div>

            {/* Center - Main message */}
            <div className="text-center flex-1">
              <div className="mb-3">
                <span className="inline-block bg-yellow-400 text-red-800 px-4 py-1 rounded-full text-sm font-bold animate-pulse mb-2">
                  ⭐ ESPECIAL NAVIDAD ⭐
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-black mb-2 drop-shadow-lg font-script">
                Para estas Fiestas
              </h2>
              <h3 className="text-yellow-300 text-2xl md:text-4xl font-bold drop-shadow-lg">
                El Raviolito les ofrece
              </h3>
              <p className="text-white text-lg md:text-xl mt-3 font-semibold">
                🎄 Productos especiales para tu mesa navideña 🎄
              </p>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-red-800 px-8 py-4 rounded-full font-black text-xl shadow-2xl transform group-hover:scale-110 transition-all duration-300 flex items-center gap-2">
                VER OPCIONES
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="bg-white text-red-700 px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                📱 Consultas: 3884536901
              </div>
              <span className="text-yellow-300 text-sm font-bold animate-pulse">
                ✨ ¡Hace tu pedido ahora! ✨
              </span>
            </div>
          </div>
        </div>

        {/* Christmas tree decorations on corners */}
        <div className="absolute bottom-4 left-4 text-6xl opacity-50 pointer-events-none">
          🎄
        </div>
        <div className="absolute top-4 right-4 text-6xl opacity-50 pointer-events-none">
          🎁
        </div>

        <style jsx>{`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
            }
          }
          .animate-fall {
            animation: fall linear infinite;
          }
        `}</style>
      </div>
    </Link>
  );
}