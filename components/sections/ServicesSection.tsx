"use client"

import { Title } from "../ui/title/Title";
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ScrollAnimatedCard from "@/components/ui/ScrollAnimatedCard"

export default function ServicesSection() {
  const { visibleItems, containerRef } = useScrollAnimation()
  return (
    <div ref={containerRef} className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Title title="Nuestros Servicios" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-balance" />
          

        {/* Soporte Técnico */}
        <section className="mb-12 sm:mb-16">
          <ScrollAnimatedCard
            index={0}
            isVisible={visibleItems.has(0)}
            delay={0}
            animation="scaleUp"
            className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 transition-[border-color,box-shadow] duration-100 ease-out cursor-default select-none"
          >
            <div className="absolute inset-0">
              <img 
              src="/images/banner.jpeg" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
            </div>
            
            <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end min-h-[200px]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">Soporte Técnico</h2>
                <p className="text-gray-300 mb-4 sm:mb-6 text-pretty text-sm sm:text-base">
                Brindamos asistencia presencial y remota para pymes y grandes empresas, garantizando la continuidad
                operativa de sus sistemas informáticos. Nuestro servicio incluye:
              </p>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                <span>Mantenimiento preventivo y correctivo de equipos, servidores y redes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                <span>Resolución rápida de incidencias para minimizar tiempos de inactividad</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                <span>
                  Gestión integral de software y hardware, asegurando un entorno de trabajo estable y eficiente
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                <span>Proyectos de infraestructura tecnológica, adaptados a las necesidades de cada organización</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4 sm:mt-6 text-pretty text-sm sm:text-base">
              Con foco en la calidad del servicio y una atención personalizada, ofrecemos cobertura en Rosario y
              alrededores, convirtiéndonos en un socio estratégico para el crecimiento y seguridad tecnológica de su
              empresa.
              </p>
            </div>
            </ScrollAnimatedCard>
        </section>

        {/* Servicios IT */}
        <section>
          <Title title="Servicios IT Especializados" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white" />          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimatedCard
              index={1}
              isVisible={visibleItems.has(1)}
              delay={200}
              animation="slideLeft"
              className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 transition-[border-color,box-shadow] duration-100 ease-out cursor-default select-none"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img 
                  src="/images/videovigilancia.jpeg" 
                  alt="Sistemas de Videovigilancia"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end min-h-[200px]">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">
                  Sistemas de Videovigilancia
                </h3>
                <p className="text-gray-200 text-pretty text-sm sm:text-base">
                  Implementación de soluciones de CCTV analógico e IP, integración con redes y dispositivos móviles,
                  instalación de cableado estructurado y servicios de alarma.
                </p>
              </div>
            </ScrollAnimatedCard>

            <ScrollAnimatedCard
              index={2}
              isVisible={visibleItems.has(2)}
              delay={0}
              animation="slideUp"
              className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 transition-[border-color,box-shadow] duration-100 ease-out cursor-default select-none"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img 
                  src="/images/cableado2.jpeg" 
                  alt="Cableados"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end min-h-[200px]">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">
                  Cableados
                </h3>
                <p className="text-gray-200 text-pretty text-sm sm:text-base">
                  Instalación de cableado estructurado para telefonía, redes de datos y fibra óptica, asegurando
                  rendimiento y escalabilidad.
                </p>
              </div>
            </ScrollAnimatedCard>

            <ScrollAnimatedCard
              index={3}
              isVisible={visibleItems.has(3)}
              delay={200}
              animation="slideRight"
              className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 transition-[border-color,box-shadow] duration-100 ease-out cursor-default select-none"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img 
                  src="/images/mantenimiento.jpeg" 
                  alt="Mantenimiento Integral"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end min-h-[200px]">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">
                  Mantenimiento Integral
                </h3>
                <p className="text-gray-200 text-pretty text-sm sm:text-base">
                  Mantenimiento y reparación de equipos informáticos y servidores, resolución de incidencias, instalación
                  de software y gestión de proyectos de infraestructura tecnológica.
                </p>
              </div>
            </ScrollAnimatedCard>

            <ScrollAnimatedCard
              index={4}
              isVisible={visibleItems.has(4)}
              delay={300}
              animation="slideLeft"
              className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Sistemas de Control de Acceso</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Diseño, asesoramiento e implementación de soluciones de seguridad para la gestión y control de accesos
                en infraestructuras corporativas.
              </p>
            </ScrollAnimatedCard>

            <ScrollAnimatedCard
              index={5}
              isVisible={visibleItems.has(5)}
              delay={150}
              animation="slideUp"
              className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Venta de Hardware</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Comercialización de equipos, componentes y dispositivos tecnológicos adaptados a las necesidades de cada
                proyecto.
              </p>
            </ScrollAnimatedCard>

            <ScrollAnimatedCard
              index={6}
              isVisible={visibleItems.has(6)}
              delay={300}
              animation="slideRight"
              className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/25 hover:bg-black/40 transition-[border-color,box-shadow,background-color] duration-100 ease-out cursor-default select-none"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Distribución de Software y Licencias</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Suministro e implementación de soluciones de software empresariales y de respaldo, con soporte técnico
                especializado.
              </p>
            </ScrollAnimatedCard>
          </div>
        </section>
      </div>
    </div>
  )
}
