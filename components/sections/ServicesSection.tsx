export default function ServicesSection() {
  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-balance">
          Nuestros Servicios
        </h1>

        {/* Soporte Técnico */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Soporte Técnico</h2>
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
        </section>

        {/* Servicios IT */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-400">
            Servicios IT Especializados
          </h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Sistemas de Videovigilancia</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Implementación de soluciones de CCTV analógico e IP, integración con redes y dispositivos móviles,
                instalación de cableado estructurado y servicios de alarma.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Sistemas de Control de Acceso</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Diseño, asesoramiento e implementación de soluciones de seguridad para la gestión y control de accesos
                en infraestructuras corporativas.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">
                Distribución de Software y Licencias
              </h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Suministro e implementación de soluciones de software empresariales y de respaldo, con soporte técnico
                especializado.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Cableados</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Instalación de cableado estructurado para telefonía, redes de datos y fibra óptica, asegurando
                rendimiento y escalabilidad.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Venta de Hardware</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Comercialización de equipos, componentes y dispositivos tecnológicos adaptados a las necesidades de cada
                proyecto.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">Mantenimiento Integral</h3>
              <p className="text-gray-300 text-pretty text-sm sm:text-base">
                Mantenimiento y reparación de equipos informáticos y servidores, resolución de incidencias, instalación
                de software y gestión de proyectos de infraestructura tecnológica.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
