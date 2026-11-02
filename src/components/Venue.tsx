import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { PastelDivider, IslamicStar } from '../assets/decorative-patterns'
import { RevealSection } from './ScrollReveal'

export const Venue: React.FC = () => {
  const { lang, t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()

  if (!CONTENT.config.showMap) return null

  return (
    <section id="venue" className="relative py-12 sm:py-16 px-4 bg-pink-50 text-ink">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-pink-200 mb-2 shadow-sm">
              <IslamicStar size={12} className="text-accent" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-accent">
                {lang === 'en' ? 'Location' : 'ভেন্যু'}
              </span>
              <IslamicStar size={12} className="text-accent" />
            </div>
            <h2 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-accent">
              {t.venueHeading}
            </h2>
            <PastelDivider width="max-w-[140px]" className="my-2" />
          </div>
        </RevealSection>

        {/* Address Card */}
        <RevealSection delay={0.08}>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-pink-200 shadow-pastel-card mb-4 text-center hover:border-pink-300 transition-colors">
            <div className="flex items-center justify-center gap-2 text-accent font-bold text-sm sm:text-base mb-1">
              <MapPin size={18} className="shrink-0" />
              <span>{CONTENT.venue.name[lang]}</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted font-medium">
              {CONTENT.venue.address[lang]}
            </p>
          </div>
        </RevealSection>

        {/* Compact Map Container (4/3 mobile, 16/9 desktop) */}
        <RevealSection delay={0.16}>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-2xl border border-pink-200 shadow-pastel-card bg-sky-100">
            <iframe
              title={lang === 'en' ? 'Prokoushali Convention Hall Google Map' : 'প্রকৌশলী কনভেনশন হল গুগল ম্যাপ'}
              src={CONTENT.venue.googleMapsEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Direct Link Below Map with Micro-Interaction */}
          <div className="mt-3.5 text-center">
            <motion.a
              href={CONTENT.venue.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/80 text-xs font-semibold text-accent hover:bg-pink-100/50 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <ExternalLink size={13} />
              <span>{t.details.directionsBtn}</span>
            </motion.a>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
