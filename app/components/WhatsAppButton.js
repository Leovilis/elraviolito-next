'use client'

export default function WhatsAppButton({ 
  phoneNumber = "5493884536901", 
  message = "Hola! Quiero consultar los precios",
  className = "",
  children = "WhatsApp: 388-4536901"
}) {
  const handleWhatsAppClick = () => {
    let url = `https://wa.me/${phoneNumber}`;
    
    // Si hay un mensaje predefinido, lo agregamos
    if (message) {
      url += `?text=${encodeURIComponent(message)}`;
    }
    
    window.open(url, '_blank');
  };

  return (
    <button 
      className={`bg-white text-tomato px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer ${className}`}
      onClick={handleWhatsAppClick}
      type="button"
    >
      {children}
    </button>
  );
}