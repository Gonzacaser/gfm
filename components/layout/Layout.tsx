import type React from "react"
import Particles from "@/components/ui/Particles"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 relative text-white">
      <Particles />
      <Header />
      <main className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          {children}
        </div>
      </main>
    </div>
  )
}