import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export const FloatingRSVP: React.FC = () => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling past the hero (e.g. 300px)
      const scrolledEnough = window.scrollY > 300

      // Check if RSVP or Footer is already visible on screen
      const rsvpEl = document.getElementById('rsvp')
      const footerEl = document.getElementById('footer')
      let nearBottom = false

      if (rsvpEl) {
        const rect = rsvpEl.getBoundingClientRect()
        // If RSVP is within viewport or above it
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

  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <aside
      aria-label="Quick RSVP action"
      className="fixed bottom-5 right-4 z-30 sm:hidden animate-fade-in"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <button
        type="button"
        onClick={scrollToRSVP}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-light to-emerald-dark text-gold-shimmer border border-gold/70 shadow-2xl backdrop-blur-md active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label={t.rsvp.floatingBtn}
      >
        <MessageCircle size={18} className="text-[#25D366] fill-[#25D366]/20" />
        <span className="text-xs font-bold uppercase tracking-wider font-bangla-serif">
          {t.rsvp.floatingBtn}
        </span>
      </button>
    </aside>
  )
}
