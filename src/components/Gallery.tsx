import React, { useState } from 'react'
import { Eye } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { Lightbox } from './Lightbox'
import { GoldDivider, IslamicStar } from '../assets/decorative-patterns'

export const Gallery: React.FC = () => {
  const { lang, t } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Critical configuration check: if showGallery is false, render NOTHING
  if (!CONTENT.config.showGallery || !CONTENT.media.gallery.length) {
    return null
  }

  const items = CONTENT.media.gallery

  const handleOpen = (idx: number) => setSelectedIndex(idx)
  const handleClose = () => setSelectedIndex(null)
  const handlePrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length)
  }
  const handleNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % items.length)
  }

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-emerald-deep text-ivory border-t border-gold/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-emerald/60 mb-3 shadow-sm">
            <IslamicStar size={14} className="text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold-shimmer font-semibold">
              {lang === 'bn' ? 'ফটো গ্যালারি' : 'Photo Gallery'}
            </span>
            <IslamicStar size={14} className="text-gold" />
          </div>
          <h2 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {t.gallery.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-ivory/70 mt-2 max-w-md mx-auto">
            {t.gallery.subtitle}
          </p>
          <GoldDivider width="max-w-xs" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpen(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleOpen(idx)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${t.gallery.viewPhoto}: ${item.title[lang]}`}
              className="group relative overflow-hidden rounded-2xl bg-emerald-dark border border-gold/30 hover:border-gold hover:shadow-gold-glow cursor-pointer transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt[lang]}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/95 via-emerald-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <Eye size={18} />
                    <span className="text-xs uppercase tracking-widest font-semibold">
                      {t.gallery.viewPhoto}
                    </span>
                  </div>
                  <h3 className="font-bangla-serif text-lg font-bold text-ivory">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs text-ivory/80 mt-0.5">
                    {item.subtitle[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <Lightbox
          items={items}
          currentIndex={selectedIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
