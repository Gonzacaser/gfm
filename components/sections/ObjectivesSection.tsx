"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ScrollAnimatedCard from "@/components/ui/ScrollAnimatedCard"

export default function ObjectivesSection() {
  const { visibleItems, containerRef } = useScrollAnimation()
  
  return (
    <section ref={containerRef} className="py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 mb-12 sm:mb-16 sm:grid-cols-2">
          <ScrollAnimatedCard
            index={0}
            isVisible={visibleItems.has(0)}
            delay={0}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400 cursor-default select-none"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">Misión</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Proveer soluciones IT integrales y accesibles para PYMES, permitiéndoles operar con seguridad, eficiencia
              y la tranquilidad de tener un partner tecnológico de confianza.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={1}
            isVisible={visibleItems.has(1)}
            delay={150}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400 cursor-default select-none"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">Visión</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Consolidarnos como el partner tecnológico de referencia para las pequeñas y medianas empresas de Rosario
              siendo reconocidos por nuestra confiabilidad y por impulsar su crecimiento sostenible.
            </p>
          </ScrollAnimatedCard>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          <ScrollAnimatedCard
            index={2}
            isVisible={visibleItems.has(2)}
            delay={0}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400 cursor-default select-none"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Maximizar la Continuidad del Negocio</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Garantizar la máxima disponibilidad y seguridad de sus sistemas, reduciendo los tiempos de inactividad y
              protegiendo su información crítica para que su negocio nunca se detenga.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={3}
            isVisible={visibleItems.has(3)}
            delay={150}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400 cursor-default select-none"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Optimizar la Inversión Tecnológica</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Proveer soluciones escalables y predecibles que se adapten a su presupuesto, transformando el gasto IT en
              una inversión estratégica con retorno medible.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={4}
            isVisible={visibleItems.has(4)}
            delay={300}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400 cursor-default select-none"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Impulsar la Eficiencia Operativa</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Automatizar procesos e implementar herramientas que incrementen la productividad de su equipo,
              permitiéndoles enfocarse en el core de su negocio.
            </p>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedCard
            index={5}
            isVisible={visibleItems.has(5)}
            delay={450}
            className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-400 cursor-default select-none"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Construir Relaciones de Largo Plazo</h3>
            <p className="text-gray-300 text-pretty text-sm sm:text-base">
              Convertirnos en socios estratégicos, comprendiendo sus desafíos únicos para ofrecer asesoría proactiva y
              acompañarlos en cada etapa de su crecimiento.
            </p>
          </ScrollAnimatedCard>
        </div>
      </div>
    </section>
  )
}
