"use client"

import Image from "next/image"
import { Title } from "../ui/title/Title";
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ScrollAnimatedCard from "@/components/ui/ScrollAnimatedCard"
import { MdVideocam, MdCable, MdBuild, MdSecurity, MdComputer, MdCode, MdSupportAgent } from "react-icons/md"

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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
              <Image 
                src="/images/banner.jpeg" 
                alt="Soporte Técnico GFM"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
            </div>
            
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col min-h-[320px]">
              {/* Header con icono */}
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mr-4 flex-shrink-0 bg-blue-400/20 rounded-xl flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <MdSupportAgent className="w-7 h-7 sm:w-8 sm:h-8 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  Soporte Técnico
                </h2>
              </div>
              
              {/* Descripción principal */}
              <p className="text-gray-200 mb-4 sm:mb-6 text-pretty text-base sm:text-lg leading-relaxed">
                Brindamos asistencia presencial y remota para pymes y grandes empresas, garantizando la continuidad
                operativa de sus sistemas informáticos.
              </p>
              
              {/* Lista de servicios */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3 sm:mb-4">Nuestro servicio incluye:</h3>
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
                    <span>Gestión integral de software y hardware, asegurando un entorno de trabajo estable y eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                    <span>Proyectos de infraestructura tecnológica, adaptados a las necesidades de cada organización</span>
                  </li>
                </ul>
              </div>
              
              {/* Footer destacado */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-400/30">
                <p className="text-blue-200 font-medium text-sm sm:text-base text-pretty">
                  Con foco en la calidad del servicio y una atención personalizada, ofrecemos cobertura en Rosario y
                  alrededores, convirtiéndonos en un socio estratégico para el crecimiento y seguridad tecnológica de su
                  empresa.
                </p>
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <Image 
                  src="/images/videovigilancia.jpeg" 
                  alt="Sistemas de Videovigilancia"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col min-h-[200px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  {/* Icono de Videovigilancia */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                    <MdVideocam className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    Sistemas de Videovigilancia
                  </h3>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <Image 
                  src="/images/cableado2.jpeg" 
                  alt="Cableados"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col min-h-[200px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  {/* Icono de Cableados */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                    <MdCable className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    Cableados
                  </h3>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <Image 
                  src="/images/mantenimiento.jpeg" 
                  alt="Mantenimiento Integral"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col min-h-[200px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  {/* Icono de Mantenimiento */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                    <MdBuild className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    Mantenimiento Integral
                  </h3>
                </div>
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
              <div className="flex items-center mb-3 sm:mb-4">
                {/* Icono de Control de Acceso */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <MdSecurity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-400">Sistemas de Control de Acceso</h3>
              </div>
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
              <div className="flex items-center mb-3 sm:mb-4">
                {/* Icono de Venta de Hardware */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <MdComputer className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-400">Venta de Hardware</h3>
              </div>
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
              <div className="flex items-center mb-3 sm:mb-4">
                {/* Icono de Software y Licencias */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-300/30 transition-colors">
                  <MdCode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-400">Distribución de Software y Licencias</h3>
              </div>
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
