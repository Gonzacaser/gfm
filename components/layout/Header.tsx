"use client"

import { Title } from "@/components/ui/title/Title"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const headerClassName =
    "border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50"

  return (
    <header className={headerClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <Link href="/">
                  <div className="flex-shrink-0">
                    <img 
                      src="/logoGFM.webp" 
                      alt="GFM Logo" 
                      className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full border-2 border-slate-600 hover:border-blue-400 transition-colors"
                    />
                  </div>
              </Link>
              {/* Texto de la empresa */}
              <Link href="/">
                <div className="flex-shrink-0">
                  <Title title="GFM" className="text-xl sm:text-2xl font-bold text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/' 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/servicios'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/nosotros'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/contacto'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Contacto
              </Link>
              <Link
                href="/clientes"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/clientes'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Clientes
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-400 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-2 space-y-2 px-3 max-w-xs mx-auto bg-slate-800/95 backdrop-blur rounded-xl mt-2 text-center">
              <Link 
                href="/" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  pathname === '/' 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  pathname === '/servicios'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  pathname === '/nosotros'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  pathname === '/contacto'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Contacto
              </Link>
              <Link
                href="/clientes"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  pathname === '/clientes'
                    ? 'text-blue-400 bg-blue-400/10 rounded-md'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Clientes
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
