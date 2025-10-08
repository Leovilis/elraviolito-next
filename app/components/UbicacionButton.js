"use client"
import { MapPin } from "lucide-react";

export default function UbicacionButton() {
  const handleClick = () => {
    window.open('https://maps.app.goo.gl/uhVGyoBR1QEM3pRn7', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tomato transition-colors flex items-center gap-2 justify-center"
    >
      <MapPin className="w-5 h-5" />
      Ver Ubicación
    </button>
  );
}