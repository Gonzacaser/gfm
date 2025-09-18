"use client"

import { Title } from "@/components/ui/title/Title"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerClassName =
    "border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50"

  return (
    <header className={headerClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Title title="GFM" className="text-xl sm:text-2xl font-bold text-white" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/clientes"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur rounded-lg mt-2">
              <Link href="/" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/clientes"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
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
