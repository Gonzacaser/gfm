"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ScrollAnimatedCard from "@/components/ui/ScrollAnimatedCard"
import { MdFlag, MdVisibility, MdShield, MdTrendingUp, MdSpeed, MdHandshake } from "react-icons/md"

export default function ObjectivesSection() {
  const { visibleItems, containerRef } = useScrollAnimation()
  
  return (
    <section ref={containerRef} className="py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 auto-rows-fr">
          <ScrollAnimatedCard
            index={0}
            isVisible={visibleItems.has(0)}
            delay={0}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <MdFlag className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Misión</h3>
            </div>
            <p className="text-gray-300 text-pretty text-sm sm:text-base flex-grow">
              Proveer soluciones IT integrales y accesibles para PYMES, permitiéndoles operar con seguridad, eficiencia
              y la tranquilidad de tener un partner tecnológico de confianza.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={1}
            isVisible={visibleItems.has(1)}
            delay={150}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <MdVisibility className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Visión</h3>
            </div>
            <p className="text-gray-300 text-pretty text-sm sm:text-base flex-grow">
              Consolidarnos como el partner tecnológico de referencia para las pequeñas y medianas empresas de Rosario
              siendo reconocidos por nuestra confiabilidad y por impulsar su crecimiento sostenible.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={2}
            isVisible={visibleItems.has(2)}
            delay={0}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <MdShield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Maximizar la Continuidad del Negocio</h3>
            </div>
            <p className="text-gray-300 text-pretty text-sm sm:text-base flex-grow">
              Garantizar la máxima disponibilidad y seguridad de sus sistemas, reduciendo los tiempos de inactividad y
              protegiendo su información crítica para que su negocio nunca se detenga.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={3}
            isVisible={visibleItems.has(3)}
            delay={150}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <MdTrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Optimizar la Inversión Tecnológica</h3>
            </div>
            <p className="text-gray-300 text-pretty text-sm sm:text-base flex-grow">
              Proveer soluciones escalables y predecibles que se adapten a su presupuesto, transformando el gasto IT en
              una inversión estratégica con retorno medible.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={4}
            isVisible={visibleItems.has(4)}
            delay={300}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <MdSpeed className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Impulsar la Eficiencia Operativa</h3>
            </div>
            <p className="text-gray-300 text-pretty text-sm sm:text-base flex-grow">
              Automatizar procesos e implementar herramientas que incrementen la productividad de su equipo,
              permitiéndoles enfocarse en el core de su negocio.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={5}
            isVisible={visibleItems.has(5)}
            delay={450}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <MdHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Construir Relaciones de Largo Plazo</h3>
            </div>
            <p className="text-gray-300 text-pretty text-sm sm:text-base flex-grow">
              Convertirnos en socios estratégicos, comprendiendo sus desafíos únicos para ofrecer asesoría proactiva y
              acompañarlos en cada etapa de su crecimiento.
            </p>
          </ScrollAnimatedCard>
        </div>
      </div>
    </section>
  )
}
