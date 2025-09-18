import Link from "next/link"

export default function ClientsSection() {
  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-balance">
          Nuestros Clientes
        </h1>

        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl text-gray-300 text-pretty">
            Trabajamos con empresas de diversos sectores, brindando soluciones tecnológicas adaptadas a sus necesidades
            específicas.
          </p>
        </div>

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

        <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">
            ¿Quieres ser nuestro próximo cliente?
          </h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-pretty text-sm sm:text-base">
            Únete a las empresas que ya confían en nosotros para sus soluciones tecnológicas.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
          >
            Contáctanos Ahora
          </Link>
        </div>
      </div>
    </div>
  )
}
