import React from 'react'
import { MapPin, ExternalLink, Navigation } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { GoldDivider, IslamicStar } from '../assets/decorative-patterns'

export const Venue: React.FC = () => {
  const { lang, t } = useLanguage()

  if (!CONTENT.config.showMap) return null

  return (
    <section
      id="venue"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-ivory text-ink border-t border-gold/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-white mb-3 shadow-sm">
            <IslamicStar size={14} className="text-gold" />
            <span className="text-xs uppercase tracking-widest text-emerald-dark font-semibold">
              {t.venue.badge}
            </span>
            <IslamicStar size={14} className="text-gold" />
          </div>
          <h2 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-dark">
            {t.venue.sectionTitle}
          </h2>
          <GoldDivider width="max-w-xs" />
        </div>

        {/* Venue Information Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-ivory-card mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gold">
                <MapPin size={22} className="text-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  {lang === 'bn' ? 'ভেন্যু অবস্থান' : 'Venue Location'}
                </span>
              </div>
              <h3 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-emerald-dark">
                {CONTENT.venue.name[lang]}
              </h3>
              <p className="text-base sm:text-lg text-ink-muted font-medium">
                {CONTENT.venue.address[lang]}
              </p>
            </div>

            {/* Direct Action Link */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTENT.venue.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald text-ivory hover:bg-emerald-light transition-colors font-semibold text-sm shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Navigation size={16} className="text-gold" />
                <span>{t.venue.getDirections}</span>
              </a>
              <a
                href={`https://www.google.com/maps?q=${CONTENT.venue.latitude},${CONTENT.venue.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold/40 text-emerald-dark hover:bg-ivory-light transition-colors font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <ExternalLink size={16} className="text-gold" />
                <span>{t.venue.viewFullMap}</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div className="mt-8 relative w-full overflow-hidden rounded-2xl border border-gold/30 shadow-inner bg-ivory-dark aspect-[16/10] sm:aspect-[16/8]">
            <iframe
              title={
                lang === 'bn'
                  ? 'প্রকৌশলী কনভেনশন হল গুগল ম্যাপ অবস্থান'
                  : 'Prokoushali Convention Hall Google Map'
              }
              src={CONTENT.venue.googleMapsEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
