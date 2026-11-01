import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'

export const FloatingRSVP: React.FC = () => {
  const { lang, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  const encodedMessage = encodeURIComponent(CONTENT.contact.whatsappMessage[lang])
  const whatsappUrl = `https://wa.me/${CONTENT.contact.whatsappNumber}?text=${encodedMessage}`

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
    <aside
      aria-label="Quick RSVP action"
      className="fixed bottom-4 right-4 z-30 sm:hidden animate-fade-in"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full btn-accent text-white shadow-pastel-btn border border-pink-200 active:scale-95 transition-all text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`${t.buttons.whatsapp}: ${CONTENT.contact.displayPhone}`}
      >
        <MessageCircle size={15} />
        <span>{t.buttons.floatingRsvp}</span>
      </a>
    </aside>
  )
}

