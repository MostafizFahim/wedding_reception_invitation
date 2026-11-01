import React, { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { formatNumber } from '../utils/formatters'
import type { GalleryItem } from '../content'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const { lang, t } = useLanguage()
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const currentItem = items[currentIndex]

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrev, onNext])

  // Touch Swipe Handling for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      onNext() // Swiped left -> next photo
    } else if (distance < -minSwipeDistance) {
      onPrev() // Swiped right -> prev photo
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  if (!currentItem) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title[lang]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-emerald-deep/80 text-gold-shimmer hover:text-white border border-gold/40 hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label={t.gallery.close}
      >
        <X size={24} />
      </button>

      {/* Counter Pill */}
      <div className="absolute top-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-emerald-deep/80 border border-gold/30 text-gold text-xs font-semibold tracking-widest">
        {formatNumber(currentIndex + 1, lang)} / {formatNumber(items.length, lang)}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-emerald-deep/70 text-gold hover:text-white border border-gold/30 hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label={t.gallery.prev}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image & Caption Container */}
      <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative max-h-[72vh] overflow-hidden rounded-2xl border border-gold/40 shadow-2xl bg-black">
          <img
            src={currentItem.src}
            alt={currentItem.alt[lang]}
            className="w-auto max-h-[72vh] max-w-full object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl">
          <h4 className="font-bangla-serif text-lg sm:text-xl font-bold text-gold-shimmer">
            {currentItem.title[lang]}
          </h4>
          <p className="text-xs sm:text-sm text-ivory/80 mt-1">
            {currentItem.subtitle[lang]}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-emerald-deep/70 text-gold hover:text-white border border-gold/30 hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label={t.gallery.next}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  )
}
