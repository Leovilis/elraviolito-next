// data/precios.js

export const PRECIOS = {
  // Pastas base (2 planchas de 96 unidades)
  ravioles: {
    simple: 6000,
    especial: 6500,
    premium: 7000,
    unidades: 192,
    descripcion: "2 Planchas (192 unidades)"
  },

  // Sorrentinos (12 unidades)
  sorrentinos: {
    simple: 6000,
    especial: 6500,
    premium: 7000,
    unidades: 12,
    descripcion: "12 unidades"
  },

  // Capeletis (30 unidades)
  capeletis: {
    simple: 6000,
    especial: 6500,
    premium: 7000,
    unidades: 30,
    descripcion: "30 unidades"
  },

  // Tallarines (por kilo)
  tallarines: {
    simple: 6000,
    porKilo: true,
    descripcion: "Por kilo"
  },

  // Canelones (12 unidades)
  canelones: {
    simple: 9000,
    unidades: 12,
    descripcion: "12 unidades"
  },

  // Ñoquis (por kilo)
  noquis: {
    simple: 6000,
    especial: 6500,
    porKilo: true,
    descripcion: "Por kilo"
  },

  // Raviolón (unidad grande)
  raviolon: {
    simple: 11000,
    unidades: 1,
    descripcion: "Unidad grande (precocido)"
  },
  // SALSAS
  salsas: {
    filetto: {
      simple: 5000,
      descripcion: "Por porción (500ml)"
    },
    bechamel: {
      simple: 5000,
      descripcion: "Por porción (500ml)"
    },
    bolognesa: {
      simple: 6000,
      descripcion: "Por porción (500ml)"
    },
    pollo: {
      simple: 6000,
      descripcion: "Por porción (500ml)"
    },
    puerro: {
      simple: 5000,
      descripcion: "Por porción (500ml)"
    },
    rosada: {
      simple: 5500,
      descripcion: "Por porción (500ml)"
    },
    cuatroQuesos: {
      simple: 7000,
      descripcion: "Por porción (500ml)"
    },
    champignon: {
      simple: 7000,
      descripcion: "Por porción (500ml)"
    }
  }


}


// Función para formatear precios
export const formatearPrecio = (precio) => {
  return `$${precio.toLocaleString('es-AR')}`
}

// Función para obtener precio según tipo
export const obtenerPrecio = (producto, tipo = 'simple') => {
  const precioObj = PRECIOS[producto]
  if (!precioObj) return formatearPrecio(0)

  let precio
  if (tipo === 'especial' && precioObj.especial) {
    precio = precioObj.especial
  } else if (tipo === 'premium' && precioObj.premium) {
    precio = precioObj.premium
  } else {
    precio = precioObj.simple
  }

  return formatearPrecio(precio)
}

// Función para obtener rango de precios
export const obtenerRangoPrecio = (producto) => {
  const precioObj = PRECIOS[producto]
  if (!precioObj) return formatearPrecio(0)

  if (precioObj.especial) {
    return `${formatearPrecio(precioObj.simple)} - ${formatearPrecio(precioObj.especial)}`
  }
  if (precioObj.premium) {
    return `${formatearPrecio(precioObj.simple)} - ${formatearPrecio(precioObj.premium)}`
  }
  return formatearPrecio(precioObj.simple)
}

// Función para obtener precio de salsa específica
export const obtenerPrecioSalsa = (salsaKey) => {
  const salsa = PRECIOS.salsas[salsaKey]
  if (!salsa) return formatearPrecio(0)
  return formatearPrecio(salsa.simple)
}
// Función para obtener descripción del producto
export const obtenerDescripcionProducto = (producto) => {
  return PRECIOS[producto]?.descripcion || ""
}