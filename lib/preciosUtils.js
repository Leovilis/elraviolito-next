// lib/preciosUtils.js
import { PRECIOS, formatearPrecio } from '@/data/precios'

// Actualizar precios globalmente (útil para panel de admin)
export const actualizarPrecios = (nuevosPrecios) => {
  // Esta función sería útil si tienes un panel de admin
  Object.assign(PRECIOS, nuevosPrecios)

  // Guardar en localStorage o enviar a API
  if (typeof window !== 'undefined') {
    localStorage.setItem('precios', JSON.stringify(PRECIOS))
  }
}

// Obtener precio con descuento
export const precioConDescuento = (producto, descuentoPorcentaje) => {
  const precioBase = PRECIOS[producto]?.simple || 0
  return precioBase * (1 - descuentoPorcentaje / 100)
}

// Calcular precio por unidad
export const precioPorUnidad = (producto) => {
  const info = PRECIOS[producto]
  if (info && info.unidades) {
    return formatearPrecio(info.simple / info.unidades)
  }
  return null
}

// Obtener precio formateado con descuento
export const precioConDescuentoFormateado = (producto, descuentoPorcentaje) => {
  const precio = precioConDescuento(producto, descuentoPorcentaje)
  return formatearPrecio(Math.round(precio))
}

// Calcular precio para cantidad personalizada
export const precioPorCantidad = (producto, cantidad) => {
  const info = PRECIOS[producto]
  if (!info || !info.unidades) return null

  const precioPorUnidad = info.simple / info.unidades
  const precioTotal = precioPorUnidad * cantidad

  return {
    precioUnitario: formatearPrecio(precioPorUnidad),
    precioTotal: formatearPrecio(precioTotal),
    cantidad: cantidad
  }
}

// Obtener todos los precios actuales
export const obtenerTodosLosPrecios = () => {
  const precios = {}

  for (const [key, value] of Object.entries(PRECIOS)) {
    precios[key] = {
      simple: formatearPrecio(value.simple),
      ...(value.especial && { especial: formatearPrecio(value.especial) }),
      ...(value.premium && { premium: formatearPrecio(value.premium) }),
      descripcion: value.descripcion
    }
  }

  return precios
}

// Verificar si un producto tiene precio especial
export const tienePrecioEspecial = (producto) => {
  const info = PRECIOS[producto]
  return info && (info.especial || info.premium)
}

// Obtener el precio más bajo de un producto
export const precioMinimo = (producto) => {
  const info = PRECIOS[producto]
  if (!info) return formatearPrecio(0)

  let minPrecio = info.simple
  if (info.especial && info.especial < minPrecio) minPrecio = info.especial
  if (info.premium && info.premium < minPrecio) minPrecio = info.premium

  return formatearPrecio(minPrecio)
}

// Obtener el precio más alto de un producto
export const precioMaximo = (producto) => {
  const info = PRECIOS[producto]
  if (!info) return formatearPrecio(0)

  let maxPrecio = info.simple
  if (info.especial && info.especial > maxPrecio) maxPrecio = info.especial
  if (info.premium && info.premium > maxPrecio) maxPrecio = info.premium

  return formatearPrecio(maxPrecio)
}