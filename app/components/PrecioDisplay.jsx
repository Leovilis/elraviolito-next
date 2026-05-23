'use client'

import { PRECIOS, formatearPrecio } from '@/data/precios'

export default function PrecioDisplay({
  producto,
  tipo = 'simple',
  salsaKey = null,
  showDescription = false,
  showUnidades = false,
  showEtiqueta = false,  // <- nueva prop para controlar si muestra la etiqueta
  className = ''
}) {
  // Si es una salsa, usar la clave específica
  if (salsaKey && PRECIOS.salsas && PRECIOS.salsas[salsaKey]) {
    const salsaInfo = PRECIOS.salsas[salsaKey]
    return (
      <div className={className}>
        <div className="text-2xl font-bold text-tomato mb-1">
          {formatearPrecio(salsaInfo.simple)}
        </div>
        {showDescription && salsaInfo.descripcion && (
          <div className="text-sm text-gray-500">
            {salsaInfo.descripcion}
          </div>
        )}
      </div>
    )
  }

  const precioInfo = PRECIOS[producto]
  if (!precioInfo) return null

  let precio
  let textoVariedad = ''

  if (tipo === 'especial' && precioInfo.especial) {
    precio = precioInfo.especial
    // Solo mostrar la etiqueta si showEtiqueta es true
    if (showEtiqueta) {
      textoVariedad = ' (Especial)'
    }
  } else if (tipo === 'premium' && precioInfo.premium) {
    precio = precioInfo.premium
    if (showEtiqueta) {
      textoVariedad = ' (Premium)'
    }
  } else {
    precio = precioInfo.simple
  }

  return (
    <div className={className}>
      <div className="text-2xl font-bold text-tomato mb-1">
        {formatearPrecio(precio)}{textoVariedad}
      </div>
      {showDescription && precioInfo.descripcion && (
        <div className="text-sm text-gray-500">
          {precioInfo.descripcion}
        </div>
      )}
      {showUnidades && precioInfo.unidades && (
        <div className="text-xs text-gray-400 mt-1">
          {precioInfo.unidades} unidades
        </div>
      )}
    </div>
  )
}