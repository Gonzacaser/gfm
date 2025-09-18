import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-balance leading-tight">
          Soluciones IT confiables, robustas y seguras
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 text-pretty max-w-3xl mx-auto">
          Proveemos soluciones tecnológicas integrales para PYMES, garantizando seguridad, eficiencia y continuidad
          operativa.
        </p>
        <Link
          href="/contacto"
          className="inline-block text-white font-semibold py-3 px-8
          bg-blue-900 hover:bg-blue-700 rounded-3xl hover:rounded-xl transition-all"
        >
          Contactanos
        </Link>
      </div>
    </section>
  )
}
