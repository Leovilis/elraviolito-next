// data/productos.js
import { PRECIOS, obtenerRangoPrecio, obtenerDescripcionProducto } from './precios'

// Productos base
export const productos = [
  {
    id: 1,
    nombre: "Ravioles",
    categoria: "rellenas",
    slug: "ravioles",
    imagen: "/assets/pastas/001-ravioles.webp",
    descripcion: "Deliciosos ravioles caseros hechos con masa fresca y rellenos tradicionales.",
    variedadesSimples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura con Pollo"],
    variedadesEspeciales: ["Ricota con Nuez", "Ricota con Jamón", "Jamón y Queso", "Calabaza con Muzza"],
    cantidad: PRECIOS.ravioles.descripcion,
    precio: obtenerRangoPrecio('ravioles'),
    precioBase: PRECIOS.ravioles.simple,
    tiempoPreparacion: "2-3 horas",
    porciones: "8-10 personas",
    popularidad: 5,
    destacado: true,
    ingredientesDestacados: ["Masa casera", "Ricota fresca", "Espinaca orgánica", "Queso de calidad"],
    instruccionesCoccion: "Hervir en agua con sal por 8-10 minutos hasta que floten. Servir con salsa a elección.",
    tiempoCoccion: "8-10 min"
  },
  {
    id: 2,
    nombre: "Sorrentinos",
    categoria: "rellenas",
    slug: "sorrentinos",
    imagen: "/assets/pastas/002-sorrentinos.webp",
    descripcion: "Pasta redonda rellena, más grande que los ravioles, perfecta para ocasiones especiales.",
    variedadesSimples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura con Pollo"],
    variedadesEspeciales: ["Ricota con Nuez", "Ricota con Jamón", "Jamón y Queso", "Calabaza con Muzza"],
    cantidad: PRECIOS.sorrentinos.descripcion,
    precio: obtenerRangoPrecio('sorrentinos'),
    precioBase: PRECIOS.sorrentinos.simple,
    tiempoPreparacion: "2-3 horas",
    porciones: "3-4 personas",
    popularidad: 4,
    destacado: false,
    ingredientesDestacados: ["Masa artesanal", "Rellenos generosos", "Condimentos naturales"],
    instruccionesCoccion: "Cocinar en agua hirviendo con sal por 10-12 minutos. Ideal con salsa fileto.",
    tiempoCoccion: "10-12 min"
  },
  {
    id: 3,
    nombre: "Capeletis",
    categoria: "rellenas",
    slug: "capeletis",
    imagen: "/assets/pastas/003-capeletis.webp",
    descripcion: "Pasta en forma de sombrero, una especialidad italiana tradicional con rellenos exquisitos.",
    variedadesSimples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura con Pollo"],
    variedadesEspeciales: ["Ricota con Nuez", "Ricota con Jamón", "Jamón y Queso", "Calabaza con Muzza"],
    cantidad: PRECIOS.capeletis.descripcion,
    precio: obtenerRangoPrecio('capeletis'),
    precioBase: PRECIOS.capeletis.simple,
    tiempoPreparacion: "3-4 horas",
    porciones: "4-5 personas",
    popularidad: 4,
    destacado: true,
    ingredientesDestacados: ["Forma tradicional", "Relleno abundante", "Masa fina y resistente"],
    instruccionesCoccion: "Hervir por 8-10 minutos en abundante agua salada. Excelente con manteca y salvia.",
    tiempoCoccion: "8-10 min"
  },
  {
    id: 4,
    nombre: "Tallarines",
    categoria: "secas",
    slug: "tallarines",
    imagen: "/assets/pastas/005-tallarines.webp",
    descripcion: "Pasta larga fresca, perfecta para todo tipo de salsas. Disponible en diferentes sabores.",
    variedadesSimples: ["Espinaca", "Huevo", "Remolacha", "Zanahoria", "Perejil", "Albahaca"],
    variedadesEspeciales: ["Harina Morada", "Morrón Ahumado"],
    cantidad: PRECIOS.tallarines.descripcion,
    precio: obtenerRangoPrecio('tallarines'),
    precioBase: PRECIOS.tallarines.simple,
    tiempoPreparacion: "1-2 horas",
    porciones: "8-10 personas",
    popularidad: 5,
    destacado: true,
    ingredientesDestacados: ["Huevos frescos", "Harina de primera", "Vegetales naturales"],
    instruccionesCoccion: "Cocinar al dente en agua hirviendo por 4-6 minutos. Versátil para cualquier salsa.",
    tiempoCoccion: "4-6 min"
  },
  {
    id: 5,
    nombre: "Canelones",
    categoria: "rellenas",
    slug: "canelones",
    imagen: "/assets/pastas/004-canelones.webp",
    descripcion: "Tubos de pasta rellenos y gratinados, perfectos para reuniones familiares.",
    variedadesSimples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura con Pollo", "Verdura con Carne"],
    variedadesEspeciales: [],
    cantidad: PRECIOS.canelones.descripcion,
    precio: obtenerRangoPrecio('canelones'),
    precioBase: PRECIOS.canelones.simple,
    tiempoPreparacion: "4-5 horas",
    porciones: "4-6 personas",
    popularidad: 4,
    destacado: false,
    ingredientesDestacados: ["Masa especial para canelones", "Relleno casero", "Listos para hornear"],
    instruccionesCoccion: "Hornear a 180°C por 25-30 minutos con salsa y queso gratinado por encima.",
    tiempoCoccion: "25-30 min (horno)"
  },
  {
    id: 6,
    nombre: "Ñoquis",
    categoria: "secas",
    slug: "noquis",
    imagen: "/assets/pastas/006-noquis.webp",
    descripcion: "Los tradicionales ñoquis del 29, hechos con papa fresca y amor de la abuela.",
    variedadesSimples: ["Papa", "Espinaca", "Remolacha", "Zanahoria", "Harina Morada"],
    variedadesEspeciales: ["Tricolores"],
    cantidad: PRECIOS.noquis.descripcion,
    precio: obtenerRangoPrecio('noquis'),
    precioBase: PRECIOS.noquis.simple,
    tiempoPreparacion: "2-3 horas",
    porciones: "6-8 personas",
    popularidad: 5,
    destacado: true,
    ingredientesDestacados: ["Papa de calidad", "Harina justa", "Sin conservantes"],
    instruccionesCoccion: "Hervir hasta que floten (2-3 min). Perfectos con tuco, manteca o salsa a elección.",
    tiempoCoccion: "2-3 min"
  }
]

// Variedades específicas para cada producto
export const variedadesPorProducto = {
  ravioles: {
    simples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura con Pollo", "Verdura con Carne"],
    especiales: ["Ricota con Nuez", "Ricota con Jamón", "Jamón y Queso", "Calabaza con Muzza"],
    premium: ["4 Quesos", "Batata y Queso Azul"]
  },
  sorrentinos: {
    simples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Pollo y Verdura", "Verdura y Carne"],
    especiales: ["Jamón y Queso", "Ricota y Jamón", "Ricota y Nuez"],
    premium: ["Batata y Queso Azul", "Ricota, Pollo y Almendras", "Habas, Queso de Cabra y Choclo", "Capresse", "Calabaza y Mozzarella", "4 Quesos", "Humita"]
  },
  capeletis: {
    simples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura y Carne", "Verdura con Pollo"],
    especiales: ["Ricota con Nuez", "Ricota con Jamón", "Jamón y Queso"],
    premium: ["Calabaza con Muzza", "4 Quesos", "Batata y Queso Azul"]
  },
  tallarines: {
    simples: ["Huevo", "Espinaca", "Remolacha", "Zanahoria", "Perejil", "Albahaca"],
    especiales: ["Harina Morada", "Morrón Ahumado"],
    premium: []
  },
  canelones: {
    simples: ["Verdura", "Verdura con Queso", "Verdura con Ricota", "Verdura con Pollo", "Verdura con Carne"],
    especiales: [],
    premium: []
  },
  noquis: {
    simples: ["Papa", "Espinaca", "Remolacha", "Zanahoria", "Harina Morada"],
    especiales: ["Tricolores"],
    premium: []
  }
}

// Función para obtener producto por slug
export const obtenerProductoPorSlug = (slug) => {
  return productos.find(p => p.slug === slug)
}

// Función para obtener productos destacados
export const obtenerProductosDestacados = () => {
  return productos.filter(p => p.destacado)
}

// Función para obtener productos por categoría
export const obtenerProductosPorCategoria = (categoria) => {
  return productos.filter(p => p.categoria === categoria)
}