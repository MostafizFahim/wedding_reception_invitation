import React from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Thin, elegant scroll progress indicator fixed to the very top of the viewport.
 * Uses Framer Motion's useScroll with physics spring smoothing.
 * Automatically hidden if the visitor prefers reduced motion.
 */
export const ScrollProgress: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 via-crimson-700 to-gold-300 z-50 origin-left pointer-events-none shadow-[0_1px_4px_rgba(184,145,58,0.3)] motion-reduce:hidden"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
