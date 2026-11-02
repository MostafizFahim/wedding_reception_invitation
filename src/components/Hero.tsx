import React from 'react'
import { Calendar } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useCountdown } from '../hooks/useCountdown'
import { CONTENT } from '../content'
import { formatNumber, padZero } from '../utils/formatters'
import { AnimatedWeddingHero } from './AnimatedWeddingHero'
import { PastelDivider, PastelCorner } from '../assets/decorative-patterns'

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage()
  const { days, hours, minutes, seconds, isStarted, isPassed } = useCountdown()

  const countdownUnits = [
    { label: t.countdownLabels.days, value: formatNumber(days, lang) },
    { label: t.countdownLabels.hours, value: padZero(hours, lang) },
    { label: t.countdownLabels.min, value: padZero(minutes, lang) },
    { label: t.countdownLabels.sec, value: padZero(seconds, lang) },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-10 sm:pt-20 sm:pb-14 px-4 bg-pastel-pattern overflow-hidden"
    >
      {/* Delicate Corner Accents */}
      <div className="absolute top-14 left-2 text-pink-400/50">
        <PastelCorner position="tl" size={36} />
      </div>
      <div className="absolute top-14 right-2 text-pink-400/50">
        <PastelCorner position="tr" size={36} />
      </div>

      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Sacred Bismillah */}
        <div
          lang="ar"
          dir="rtl"
          className="font-arabic text-xl sm:text-2xl text-accent mb-1 tracking-wide select-none"
        >
          {t.bismillah}
        </div>

        {/* Hero Tagline */}
        <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-ink-muted mb-2">
          {t.heroTagline}
        </p>

        {/* Animated Wedding Hero Artwork */}
        <div className="my-2 w-full flex justify-center">
          {CONTENT.config.heroMode === 'photo' ? (
            <div className="relative overflow-hidden rounded-t-[50%_35%] rounded-b-2xl border-2 border-pink-400 max-w-[280px] aspect-[4/5] shadow-pastel-card">
              <img
                src={CONTENT.config.heroPhoto}
                alt={t.heroTitle}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ) : (
            <AnimatedWeddingHero />
          )}
        </div>

        {/* Names */}
        <div className="mt-2 space-y-0.5">
          <h1 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-accent tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-400">
            {t.subtitle}
          </p>
        </div>

        <PastelDivider width="max-w-[200px]" className="my-2.5" />

        {/* Date Line */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-pink-200 text-xs sm:text-sm font-medium text-ink shadow-sm mb-3">
          <Calendar size={13} className="text-accent" />
          <span>{t.dateLine}</span>
        </div>

        {/* Compact Single-Row Countdown Tiles */}
        {!isStarted && !isPassed ? (
          <div className="w-full max-w-xs grid grid-cols-4 gap-2">
            {countdownUnits.map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl bg-white/90 border border-pink-200/80 shadow-sm"
              >
                <span className="font-bangla-serif text-base sm:text-xl font-bold text-accent">
                  {unit.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-ink-muted font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-4 py-2 rounded-xl bg-white/90 border border-pink-300 text-xs sm:text-sm font-semibold text-accent shadow-sm animate-fade-in">
            {t.countdownFinished}
          </div>
        )}
      </div>
    </section>
  )
}
