import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, Sparkles, Mail } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useCountdown } from '../hooks/useCountdown'
import { CONTENT } from '../content'
import { formatNumber, padZero } from '../utils/formatters'
import { AnimatedWeddingHero } from './AnimatedWeddingHero'
import { PastelDivider, PastelCorner, IslamicStar } from '../assets/decorative-patterns'

interface HeroProps {
  onReplayEnvelope?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onReplayEnvelope }) => {
  const { lang, t } = useLanguage()
  const { days, hours, minutes, seconds, isEventDay, isPostEvent } = useCountdown()
  const prefersReducedMotion = useReducedMotion()

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
      {/* Subtle Floating Corner Accents */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-14 left-2 text-pink-400/50 pointer-events-none"
      >
        <PastelCorner position="tl" size={36} />
      </motion.div>
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-14 right-2 text-pink-400/50 pointer-events-none"
      >
        <PastelCorner position="tr" size={36} />
      </motion.div>

      {/* Very subtle background ambient decorative stars */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-28 left-[8%] text-pink-300"
          >
            <IslamicStar size={16} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-36 right-[10%] text-sky-300"
          >
            <IslamicStar size={18} />
          </motion.div>
        </div>
      )}

      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Sacred Bismillah */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          lang="ar"
          dir="rtl"
          className="font-arabic text-xl sm:text-2xl text-accent mb-1 tracking-wide select-none"
        >
          {t.bismillah}
        </motion.div>

        {/* Hero Tagline */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-xs sm:text-sm font-medium tracking-widest uppercase text-ink-muted mb-2"
        >
          {t.heroTagline}
        </motion.p>

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

        {/* Couple Names & Subtitle */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="mt-2 space-y-0.5"
        >
          <h1 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-accent tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-400">
            {t.subtitle}
          </p>
        </motion.div>

        <PastelDivider width="max-w-[200px]" className="my-2.5" />

        {/* Date Line */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-pink-200 text-xs sm:text-sm font-medium text-ink shadow-sm mb-3"
        >
          <Calendar size={13} className="text-accent" />
          <strong className="font-semibold">{t.dateLine}</strong>
        </motion.div>

        {/* Dynamic Event States for Countdown */}
        {!isEventDay && !isPostEvent ? (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="w-full max-w-xs grid grid-cols-4 gap-2"
          >
            {countdownUnits.map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2 rounded-2xl bg-white/95 border border-pink-200/90 shadow-sm hover:border-pink-300 transition-all"
              >
                <motion.span
                  key={unit.value}
                  initial={prefersReducedMotion ? {} : { opacity: 0.6, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-bangla-serif text-lg sm:text-2xl font-bold text-accent"
                >
                  {unit.value}
                </motion.span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-ink-muted font-semibold mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        ) : isEventDay ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-100/90 via-white to-sky-100/90 border border-pink-300 text-xs sm:text-sm font-bold text-accent shadow-sm flex items-center justify-center gap-2"
          >
            <Sparkles size={16} className="text-accent shrink-0 animate-pulse" />
            <span>{t.countdownStates.eventDay}</span>
            <Sparkles size={16} className="text-accent shrink-0 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-3 rounded-2xl bg-white/95 border border-pink-200 text-xs sm:text-sm font-semibold text-accent shadow-sm flex items-center justify-center gap-2"
          >
            <IslamicStar size={14} className="text-accent shrink-0" />
            <span>{t.countdownStates.postEvent}</span>
            <IslamicStar size={14} className="text-accent shrink-0" />
          </motion.div>
        )}

        {/* Replay Envelope Option */}
        {onReplayEnvelope && (
          <div className="mt-3">
            <button
              type="button"
              onClick={onReplayEnvelope}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 hover:bg-white border border-pink-200 text-[11px] font-semibold text-accent/90 hover:text-accent shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <Mail size={12} className="text-accent" />
              <span>{t.envelope.replayButton}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
