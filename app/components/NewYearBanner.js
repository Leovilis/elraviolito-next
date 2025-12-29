'use client'
import Link from 'next/link';
import { Sparkles, PartyPopper } from 'lucide-react';

export default function NewYearBanner() {
  return (
    <Link href="/navidad" className="block">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 py-12 px-6 cursor-pointer group">
        {/* Fireworks effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-firework"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${15 + Math.random() * 25}px`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Glowing particles */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-blue-500/10 animate-pulse"></div>
        
        {/* Top and bottom golden lines */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Year transition */}
            <div className="flex items-center gap-3">
              <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-gray-400 text-2xl md:text-3xl font-bold line-through mb-1">
                  2024
                </div>
                <div className="text-yellow-300 text-4xl md:text-5xl font-black animate-bounce">
                  2025
                </div>
              </div>
              <PartyPopper className="text-pink-400 animate-pulse" size={50} />
            </div>

            {/* Center - Main message */}
            <div className="text-center flex-1">
              <div className="mb-2">
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                  🎊 ESPECIAL AÑO NUEVO 🎊
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-black mb-2 drop-shadow-lg font-script flex items-center justify-center gap-2 flex-wrap">
                <Sparkles className="text-yellow-300" size={30} />
                ¡Celebrá con El Raviolito!
                <Sparkles className="text-yellow-300" size={30} />
              </h2>
              <p className="text-blue-200 text-lg md:text-xl mt-3 font-semibold">
                🎉 Productos especiales para tu brindis de Año Nuevo 🥂
              </p>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-black text-xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 flex items-center gap-2">
                VER MENÚ FESTIVO
                <span className="text-2xl">→</span>
              </div>
              <div className="bg-white text-purple-700 px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                📱 Consultas: 388-4536901
              </div>
              <span className="text-yellow-300 text-sm font-bold flex items-center gap-1">
                <Sparkles size={16} className="animate-spin" />
                ¡Pedí ya tu cena de Año Nuevo!
                <Sparkles size={16} className="animate-spin" />
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-5xl opacity-60 animate-bounce">
          🎆
        </div>
        <div className="absolute bottom-4 right-4 text-5xl opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}>
          🎇
        </div>
        <div className="absolute top-1/2 left-8 text-4xl opacity-40 animate-pulse">
          🥂
        </div>
        <div className="absolute top-1/3 right-12 text-4xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}>
          🍾
        </div>

        <style jsx>{`
          @keyframes firework {
            0% {
              transform: scale(0) rotate(0deg);
              opacity: 1;
            }
            50% {
              transform: scale(1.5) rotate(180deg);
              opacity: 0.8;
            }
            100% {
              transform: scale(0) rotate(360deg);
              opacity: 0;
            }
          }
          @keyframes shimmer {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 1;
            }
          }
          .animate-firework {
            animation: firework 3s ease-in-out infinite;
          }
          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </Link>
  );
}