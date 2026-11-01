import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { GoldDivider, IslamicStar, ArabesqueCorner, ArchTopOrnament } from '../assets/decorative-patterns'

export const Invitation: React.FC = () => {
  const { lang, t } = useLanguage()

  return (
    <section
      id="invitation"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-islamic-pattern-light text-ink overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Luxury Printed Wedding Card Frame */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-12 md:p-16 border-2 border-gold/40 shadow-ivory-card">
          {/* Ornate Corner Accents */}
          <div className="absolute top-4 left-4 text-gold/40">
            <ArabesqueCorner position="tl" size={48} />
          </div>
          <div className="absolute top-4 right-4 text-gold/40">
            <ArabesqueCorner position="tr" size={48} />
          </div>
          <div className="absolute bottom-4 left-4 text-gold/40">
            <ArabesqueCorner position="bl" size={48} />
          </div>
          <div className="absolute bottom-4 right-4 text-gold/40">
            <ArabesqueCorner position="br" size={48} />
          </div>

          {/* Inner Delicate Dotted Trim */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold/20 pointer-events-none" />

          {/* Card Top Arch Ornament */}
          <ArchTopOrnament className="text-gold mb-2" />

          {/* Bismillah in Amiri Arabic */}
          <div className="text-center my-4">
            <div
              lang="ar"
              dir="rtl"
              className="font-arabic text-2xl sm:text-3xl text-emerald-dark font-medium select-none"
            >
              {t.bismillah}
            </div>
            <p className="text-xs text-ink-muted/80 tracking-widest uppercase mt-1">
              {t.bismillahTranslation}
            </p>
          </div>

          <GoldDivider width="max-w-xs" />

          {/* Section Badge & Title */}
          <div className="text-center mb-8">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-gold-dark px-3 py-1 rounded-full bg-ivory border border-gold/30 mb-2">
              {t.dawat.badge}
            </span>
            <h2 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-dark tracking-tight">
              {t.dawat.sectionTitle}
            </h2>
          </div>

          {/* Main Invitation Card Letter Body */}
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            {/* Salutation */}
            <p className="font-bangla-serif text-xl sm:text-2xl font-semibold text-emerald-dark">
              {t.dawat.salutation}
            </p>

            {/* Paragraph 1: Exact Invitation Text */}
            <p className="font-bangla-body text-base sm:text-lg md:text-xl text-ink leading-relaxed sm:leading-loose text-justify sm:text-center">
              {t.dawat.bodyP1}
            </p>

            {/* Paragraph 2: Request for gracious presence and prayers */}
            <p className="font-bangla-body text-base sm:text-lg md:text-xl font-medium text-emerald-dark leading-relaxed">
              {t.dawat.bodyP2}
            </p>
          </div>

          {/* Card Footer Divider & Star */}
          <GoldDivider width="max-w-sm" />

          <div className="flex justify-center items-center gap-2 text-gold">
            <IslamicStar size={16} />
            <span className="text-xs tracking-widest uppercase text-ink-muted font-medium">
              {lang === 'bn' ? 'ফাহিম ও জয়ী' : 'Fahim & Joyee'}
            </span>
            <IslamicStar size={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
