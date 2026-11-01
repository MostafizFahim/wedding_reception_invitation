import React from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { GoldDivider, IslamicStar, ArabesqueCorner } from '../assets/decorative-patterns'

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      id="footer"
      className="relative pt-16 pb-12 px-4 sm:px-6 bg-emerald-deep text-ivory border-t border-gold/40 overflow-hidden"
    >
      {/* Decorative Corner Filigree */}
      <div className="absolute bottom-4 left-4 text-gold/25">
        <ArabesqueCorner position="bl" size={54} />
      </div>
      <div className="absolute bottom-4 right-4 text-gold/25">
        <ArabesqueCorner position="br" size={54} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Core Request Statement */}
        <p className="font-bangla-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold-shimmer mb-6 tracking-tight">
          {t.footer.presenceRequest}
        </p>

        {/* Sacred Sunnah Dua */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-emerald-dark/60 border border-gold/30 backdrop-blur-sm max-w-2xl mx-auto shadow-emerald-card">
          <div
            lang="ar"
            dir="rtl"
            className="font-arabic text-xl sm:text-2xl md:text-3xl text-gold-shimmer mb-3 leading-relaxed select-none"
          >
            {t.footer.duaArabic}
          </div>
          <p className="text-xs sm:text-sm text-ivory/80 font-bangla-body leading-relaxed">
            {t.footer.duaTranslation}
          </p>
        </div>

        {/* Divider */}
        <GoldDivider width="max-w-xs" />

        {/* Names Monogram */}
        <div className="flex items-center justify-center gap-2 text-gold mb-4">
          <IslamicStar size={16} />
          <span className="font-english-display text-lg tracking-widest text-ivory/90 font-semibold">
            {lang === 'bn' ? 'ফাহিম & জয়ী' : 'Fahim & Joyee'}
          </span>
          <IslamicStar size={16} />
        </div>

        {/* Date and Venue summary */}
        <p className="text-xs text-ivory/60 mb-6">
          {t.dateDisplay} • {CONTENT.venue.name[lang]}, {CONTENT.venue.address[lang]}
        </p>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold/40 text-xs font-semibold text-gold-shimmer hover:border-gold hover:bg-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={lang === 'bn' ? 'উপরে যান' : 'Back to top'}
        >
          <ArrowUp size={14} className="text-gold" />
          <span>{lang === 'bn' ? 'উপরে যান' : 'Back to Top'}</span>
        </button>

        {/* Understated Credits */}
        <div className="mt-8 pt-6 border-t border-gold/15 text-[11px] text-ivory/50">
          <p>{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  )
}
