"use client"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ScrollAnimatedCard from "@/components/ui/ScrollAnimatedCard"

export default function ClientsSection() {
  const { visibleItems, containerRef } = useScrollAnimation()
  return (
    <div className="py-12 sm:py-20 px-4" ref={containerRef}>
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimatedCard
          index={0}
          isVisible={visibleItems.has(0)}
          delay={0}
          animation="fadeIn"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-balance">
            Nuestros Clientes
          </h1>
        </ScrollAnimatedCard>

        <ScrollAnimatedCard
          index={1}
          isVisible={visibleItems.has(1)}
          delay={150}
          animation="fadeIn"
        >
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-gray-300 text-pretty">
              Trabajamos con empresas de diversos sectores, brindando soluciones tecnológicas adaptadas a sus necesidades
              específicas.
            </p>
          </div>
        </ScrollAnimatedCard>

        <ScrollAnimatedCard
          index={2}
          isVisible={visibleItems.has(2)}
          delay={300}
          animation="slideUp"
        >
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">P</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">PYMES Locales</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Pequeñas y medianas empresas de Rosario y zona</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">C</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Comercios</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Tiendas y comercios que requieren sistemas de seguridad</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">O</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Oficinas</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Empresas de servicios profesionales</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">I</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Industrias</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Empresas industriales con necesidades específicas</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">E</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Educación</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Instituciones educativas y centros de formación</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">S</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Salud</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Clínicas y centros de salud</p>
          </div>
          </div>
        </ScrollAnimatedCard>

        <ScrollAnimatedCard
          index={3}
          isVisible={visibleItems.has(3)}
          delay={450}
          animation="scaleUp"
        >
          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">
            ¿Quieres ser nuestro próximo cliente?
          </h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-pretty text-sm sm:text-base">
            Únete a las empresas que ya confían en nosotros para sus soluciones tecnológicas.
          </p>
            <Link
              href="/contacto"
              className="group relative inline-block overflow-hidden font-semibold py-4 px-8 text-lg
              bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900
              hover:from-blue-600 hover:via-blue-500 hover:to-blue-600
              border border-blue-500/30 hover:border-blue-400
              rounded-lg hover:rounded-xl transition-all duration-100 ease-out
              hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30
              transform hover:-translate-y-0.5 active:scale-[0.98]
              before:absolute before:inset-0 before:bg-gradient-to-r 
              before:from-transparent before:via-blue-400/20 before:to-transparent
              before:-translate-x-full before:skew-x-12 before:transition-transform
              before:duration-600 hover:before:translate-x-full
              after:absolute after:inset-[1px] after:bg-gradient-to-r 
              after:from-slate-900/50 after:via-transparent after:to-slate-900/50
              after:rounded-lg after:transition-opacity after:duration-300
              hover:after:opacity-0"
            >
              <span className="relative z-10 text-white font-medium tracking-wide 
              group-hover:text-white transition-all duration-300 
              drop-shadow-sm group-hover:drop-shadow-md">
                Contáctanos
              </span>
            </Link>
          </div>
        </ScrollAnimatedCard>
      </div>
    </div>
  )
}
