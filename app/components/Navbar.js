'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChefHat } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sorrentinos', href: '/sorrentinos' },
    { name: 'Ravioles', href: '/ravioles' },
    { name: 'Canelones', href: '/canelones' },
    { name: 'Capeletis', href: '/capeletis' },
    { name: 'Tallarines', href: '/fideos' },
    { name: 'Ñoquis', href: '/noquis' },
    { name: 'Historia', href: '/#historia' },
    { name: 'Contacto', href: '/#contacto' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-tomato" />
            <span className="font-script text-2xl text-tomato">El Raviolito</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-tomato transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-colors duration-300"
              style={{'--hover-color': 'var(--color-tomato)'}}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-tomato)'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-tomato transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}