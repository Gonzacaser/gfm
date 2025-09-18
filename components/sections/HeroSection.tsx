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
          className="group relative inline-block overflow-hidden font-semibold py-4 px-8 text-lg
          bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900
          hover:from-blue-600 hover:via-blue-500 hover:to-blue-600
          border border-blue-500/30 hover:border-blue-400
          rounded-lg hover:rounded-xl transition-all duration-400 ease-out
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
    </section>
  )
}
