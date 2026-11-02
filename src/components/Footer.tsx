import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { IslamicStar } from '../assets/decorative-patterns'
import { RevealSection } from './ScrollReveal'

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage()

  return (
    <footer id="footer" className="py-8 px-4 bg-pink-50 text-ink border-t border-pink-200/60 text-center">
      <RevealSection className="max-w-xl mx-auto space-y-3">
        {/* Short Statement */}
        <p className="font-bangla-serif text-sm sm:text-base font-semibold text-accent">
          {t.footer.presence}
        </p>

        {/* Sacred Sunnah Dua */}
        <div className="p-3 sm:p-4 rounded-xl bg-white/80 border border-pink-200 shadow-sm max-w-md mx-auto">
          <div
            lang="ar"
            dir="rtl"
            className="font-arabic text-base sm:text-lg text-accent mb-1 leading-relaxed select-none"
          >
            {t.footer.duaArabic}
          </div>
          <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
            {t.footer.duaTranslation}
          </p>
        </div>

        {/* Understated Monogram & Year */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-ink-muted/80 pt-2">
          <IslamicStar size={11} className="text-accent" />
          <span>{lang === 'en' ? 'Fahim & Joyee' : 'ফাহিম ও জয়ী'} • 2026</span>
          <IslamicStar size={11} className="text-accent" />
        </div>
      </RevealSection>
    </footer>
  )
}
