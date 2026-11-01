import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { PastelDivider, IslamicStar } from '../assets/decorative-patterns'

export const Venue: React.FC = () => {
  const { lang, t } = useLanguage()

  if (!CONTENT.config.showMap) return null

  return (
    <section id="venue" className="relative py-12 sm:py-16 px-4 bg-pink-50 text-ink">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
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

        {/* Address Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-pink-200 shadow-pastel-card mb-4 text-center">
          <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm sm:text-base mb-1">
            <MapPin size={18} />
            <span>{CONTENT.venue.name[lang]}</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted">
            {CONTENT.venue.address[lang]}
          </p>
        </div>

        {/* Compact Map Container (4/3 mobile, 16/9 desktop) */}
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

        {/* Direct Link Below Map */}
        <div className="mt-3 text-center">
          <a
            href={CONTENT.venue.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <ExternalLink size={13} />
            <span>{t.details.directionsBtn}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
