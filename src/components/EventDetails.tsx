import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Download, Navigation, Check } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { downloadCalendarInvite } from '../utils/calendar'
import { GoldDivider, IslamicStar } from '../assets/decorative-patterns'

export const EventDetails: React.FC = () => {
  const { lang, t } = useLanguage()
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownloadCalendar = () => {
    downloadCalendarInvite(lang)
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 4000)
  }

  const detailsList = [
    {
      icon: <Calendar className="text-gold" size={24} />,
      label: t.details.dateLabel,
      primary: t.dateDisplay,
      secondary: t.dayOfWeek,
    },
    {
      icon: <Clock className="text-gold" size={24} />,
      label: t.details.timeLabel,
      primary: t.mealTime,
      secondary: lang === 'bn' ? 'দুপুর থেকে বিকেল' : 'Afternoon Luncheon',
    },
    {
      icon: <MapPin className="text-gold" size={24} />,
      label: t.details.venueLabel,
      primary: CONTENT.venue.name[lang],
      secondary: CONTENT.venue.address[lang],
    },
  ]

  return (
    <section
      id="event"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-emerald-dark text-ivory overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-emerald/60 mb-3">
            <IslamicStar size={14} className="text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold-shimmer font-semibold">
              {t.details.eventLabel}
            </span>
            <IslamicStar size={14} className="text-gold" />
          </div>
          <h2 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {t.details.sectionTitle}
          </h2>
          <GoldDivider width="max-w-xs" />
        </div>

        {/* 3 Detail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {detailsList.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-emerald/50 border border-gold/30 hover:border-gold hover:shadow-gold-soft transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-3.5 rounded-full bg-emerald-deep border border-gold/40 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs uppercase tracking-widest text-gold/80 font-medium mb-1">
                {item.label}
              </span>
              <h3 className="font-bangla-serif text-xl sm:text-2xl font-bold text-ivory mb-1">
                {item.primary}
              </h3>
              <p className="text-sm text-ivory/70">{item.secondary}</p>
            </div>
          ))}
        </div>

        {/* 2 Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          {/* Add to Calendar Button */}
          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full gold-shimmer-btn text-emerald-deep font-semibold text-base shadow-lg hover:shadow-gold-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {downloadSuccess ? (
              <>
                <Check size={18} className="text-emerald-deep stroke-[3]" />
                <span>{t.details.calendarAddedSuccess}</span>
              </>
            ) : (
              <>
                <Download size={18} className="text-emerald-deep stroke-[2.5]" />
                <span>{t.details.calendarBtn}</span>
              </>
            )}
          </button>

          {/* Get Directions Button */}
          <a
            href={CONTENT.venue.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-gold text-gold-shimmer hover:bg-gold/15 font-semibold text-base transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Navigation size={18} className="text-gold" />
            <span>{t.details.directionsBtn}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
