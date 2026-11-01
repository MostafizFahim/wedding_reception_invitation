import React from 'react'
import { Clock, Sparkles } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useCountdown } from '../hooks/useCountdown'
import { padZero } from '../utils/formatters'
import { IslamicStar } from '../assets/decorative-patterns'

export const Countdown: React.FC = () => {
  const { lang, t } = useLanguage()
  const { days, hours, minutes, seconds, isStarted, isPassed } = useCountdown()

  const units = [
    { label: t.countdown.days, value: padZero(days, lang) },
    { label: t.countdown.hours, value: padZero(hours, lang) },
    { label: t.countdown.minutes, value: padZero(minutes, lang) },
    { label: t.countdown.seconds, value: padZero(seconds, lang) },
  ]

  return (
    <section className="relative py-12 px-4 sm:px-6 bg-ivory text-ink border-y border-gold/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title / Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-ivory-light shadow-sm">
          <Clock size={16} className="text-gold" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-dark">
            {t.countdown.title}
          </span>
          <IslamicStar size={14} className="text-gold" />
        </div>

        {/* State 1: Active Countdown */}
        {!isStarted && !isPassed && (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-6 max-w-2xl mx-auto">
            {units.map((unit, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-white border border-gold/30 shadow-ivory-card group hover:border-gold hover:shadow-gold-soft transition-all duration-300"
              >
                {/* Subtle Islamic Star Accent in background */}
                <div className="absolute top-1 right-1 opacity-10 group-hover:opacity-25 transition-opacity">
                  <IslamicStar size={16} className="text-gold" />
                </div>

                {/* Number */}
                <div className="font-bangla-serif text-2xl sm:text-4xl md:text-5xl font-bold text-emerald-dark tracking-tight">
                  {unit.value}
                </div>

                {/* Label */}
                <div className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-ink-muted">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* State 2: Event Started Message */}
        {isStarted && !isPassed && (
          <div className="max-w-xl mx-auto p-6 rounded-2xl bg-emerald text-ivory border border-gold shadow-gold-glow animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="text-gold" size={24} />
              <h3 className="font-bangla-serif text-2xl font-bold text-gold-shimmer">
                {t.countdown.startedTitle}
              </h3>
              <Sparkles className="text-gold" size={24} />
            </div>
            <p className="text-base sm:text-lg text-ivory/90 font-medium">
              {t.countdown.startedMessage}
            </p>
          </div>
        )}

        {/* State 3: Event Passed Message */}
        {isPassed && (
          <div className="max-w-xl mx-auto p-6 rounded-2xl bg-ivory-dark/60 text-ink border border-gold/40 shadow-sm animate-fade-in">
            <h3 className="font-bangla-serif text-xl font-bold text-emerald mb-2">
              {lang === 'bn' ? 'অনুষ্ঠান সম্পন্ন হয়েছে' : 'Event Concluded'}
            </h3>
            <p className="text-base text-ink-muted font-medium">
              {t.countdown.passedMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
