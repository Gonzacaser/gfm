"use client"

import type React from "react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = "5493413967662" // Replace with actual WhatsApp number
    const message = `Hola! Mi nombre es ${formData.name}${formData.company ? ` de ${formData.company}` : ""}. 
    
Email: ${formData.email}

Mensaje: ${formData.message}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-balance">
          Contáctanos
        </h1>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">Información de Contacto</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-400">Ubicación</h3>
                <p className="text-gray-300 text-sm sm:text-base">Rosario, Santa Fe, Argentina</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-400">WhatsApp</h3>
                <p className="text-gray-300 text-sm sm:text-base">+54 9 341 3967662</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-400">Email</h3>
                <p className="text-gray-300 text-sm sm:text-base">info@itsolutions.com.ar</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-400">Horarios de Atención</h3>
                <p className="text-gray-300 text-sm sm:text-base">Lunes a Viernes: 8:00 - 18:00</p>
                <p className="text-gray-300 text-sm sm:text-base">Sábados: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">Envíanos un Mensaje por WhatsApp</h2>
            <form onSubmit={sendToWhatsApp} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
