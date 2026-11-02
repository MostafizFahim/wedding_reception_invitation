import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'

export const FloatingRSVP: React.FC = () => {
  const { lang, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const encodedMessage = encodeURIComponent(CONTENT.contact.whatsappMessage[lang])
  const whatsappUrl = `${CONTENT.contact.whatsappRsvp.url}?text=${encodedMessage}`

  useEffect(() => {
    const handleScroll = () => {
      const scrolledEnough = window.scrollY > 250
      const rsvpEl = document.getElementById('rsvp')
      const footerEl = document.getElementById('footer')
      let nearBottom = false

      if (rsvpEl) {
        const rect = rsvpEl.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          nearBottom = true
        }
      }

      if (footerEl) {
        const rect = footerEl.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          nearBottom = true
        }
      }

      setIsVisible(scrolledEnough && !nearBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.aside
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 10 }}
      transition={{ duration: 0.3 }}
      aria-label="Quick RSVP action"
      className="fixed bottom-4 right-4 z-30 sm:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={prefersReducedMotion ? {} : { scale: 0.94 }}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full btn-accent text-white shadow-pastel-btn border border-pink-200 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`${t.buttons.whatsapp}: ${CONTENT.contact.whatsappRsvp.display}`}
      >
        <MessageCircle size={15} />
        <span>{t.buttons.floatingRsvp}</span>
      </motion.a>
    </motion.aside>
  )
}
