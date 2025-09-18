"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.2,
    rootMargin = "50px",
    triggerOnce = true
  } = options

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute('data-scroll-index') || '0')
            setVisibleItems(prev => new Set([...prev, itemIndex]))
            
            if (triggerOnce) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    const items = containerRef.current?.querySelectorAll('[data-scroll-index]')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { visibleItems, containerRef }
}