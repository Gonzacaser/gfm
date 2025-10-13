"use client"

import { Title } from "../ui/title/Title";
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ScrollAnimatedCard from "@/components/ui/ScrollAnimatedCard"

export default function AboutSection() {
  const { visibleItems, containerRef } = useScrollAnimation()
  
  return (
    <div ref={containerRef} className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimatedCard
          index={0}
          isVisible={visibleItems.has(0)}
          delay={0}
          animation="fadeIn"
          className="mb-12 sm:mb-16"
        >
          <Title title="Sobre Nosotros" className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-balance" />
        </ScrollAnimatedCard>

        <ScrollAnimatedCard
          index={1}
          isVisible={visibleItems.has(1)}
          delay={150}
          animation="scaleUp"
          className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 mb-8 sm:mb-12 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Quiénes Somos</h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-pretty text-sm sm:text-base">
            Somos una empresa especializada en arquitectura de red y servicios IT, comprometida con brindar soluciones
            tecnológicas integrales para pequeñas y medianas empresas en Rosario y alrededores.
          </p>
          <p className="text-gray-300 text-pretty text-sm sm:text-base">
            Nuestro equipo de profesionales altamente capacitados trabaja día a día para garantizar que nuestros
            clientes tengan acceso a la mejor tecnología, con el soporte y la confiabilidad que su negocio necesita para
            crecer y prosperar en el mundo digital.
          </p>
        </ScrollAnimatedCard>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <ScrollAnimatedCard
            index={2}
            isVisible={visibleItems.has(2)}
            delay={300}
            animation="slideLeft"
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Nuestra Experiencia</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Con años de experiencia en el sector tecnológico, hemos desarrollado un profundo conocimiento de las
              necesidades específicas de las PYMES, lo que nos permite ofrecer soluciones personalizadas y efectivas.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={3}
            isVisible={visibleItems.has(3)}
            delay={450}
            animation="slideRight"
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Nuestro Compromiso</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Nos comprometemos a ser más que un proveedor de servicios; somos su socio tecnológico estratégico,
              acompañándolos en cada paso de su transformación digital.
            </p>
          </ScrollAnimatedCard>
        </div>

        <ScrollAnimatedCard
          index={4}
          isVisible={visibleItems.has(4)}
          delay={600}
          animation="fadeIn"
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-lg sm:text-2xl text-gray-200 font-light italic">
            Más de 5 años brindando soluciones IT de calidad y confianza
          </p>
        </ScrollAnimatedCard>
      </div>
    </div>
  )
}
