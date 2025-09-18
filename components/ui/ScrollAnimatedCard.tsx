import { ReactNode } from "react"

interface ScrollAnimatedCardProps {
  children: ReactNode
  index: number
  isVisible: boolean
  delay?: number
  className?: string
  animation?: "slideUp" | "fadeIn" | "scaleUp" | "slideLeft" | "slideRight"
}

export default function ScrollAnimatedCard({ 
  children, 
  index, 
  isVisible, 
  delay = 0,
  className = "",
  animation = "slideUp"
}: ScrollAnimatedCardProps) {
  
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out transform"
    
    switch (animation) {
      case "slideUp":
        return `${baseClasses} ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`
      case "fadeIn":
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`
      case "scaleUp":
        return `${baseClasses} ${
          isVisible 
            ? 'scale-100 opacity-100' 
            : 'scale-75 opacity-0'
        }`
      case "slideLeft":
        return `${baseClasses} ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-8 opacity-0'
        }`
      case "slideRight":
        return `${baseClasses} ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-8 opacity-0'
        }`
      default:
        return baseClasses
    }
  }

  return (
    <div
      data-scroll-index={index}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}