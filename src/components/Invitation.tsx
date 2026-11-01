import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Download, Navigation, Check } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { downloadCalendarInvite } from '../utils/calendar'
import { PastelDivider, IslamicStar, PastelCorner } from '../assets/decorative-patterns'

export const Invitation: React.FC = () => {
  const { lang, t } = useLanguage()
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownloadCalendar = () => {
    downloadCalendarInvite(lang)
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3500)
  }

  const detailRows = [
    {
      icon: <Calendar size={18} className="text-accent shrink-0" />,
      text: t.details.date,
    },
    {
      icon: <Clock size={18} className="text-accent shrink-0" />,
      text: t.details.time,
    },
    {
      icon: <MapPin size={18} className="text-accent shrink-0" />,
      text: t.details.venue,
    },
  ]

  return (
    <section
      id="invitation"
      className="relative py-12 sm:py-16 px-4 bg-sky-100/50 text-ink border-y border-pink-200/50"
    >
      <div className="max-w-2xl mx-auto">
        {/* Merged Invitation & Details Card */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-pink-200 shadow-pastel-card">
          <div className="absolute top-3 left-3 text-pink-400/40">
            <PastelCorner position="tl" size={28} />
          </div>
          <div className="absolute top-3 right-3 text-pink-400/40">
            <PastelCorner position="tr" size={28} />
          </div>

          {/* Heading */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-50 border border-pink-200 mb-2">
              <IslamicStar size={12} className="text-accent" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-accent">
                {lang === 'en' ? 'Warm Welcome' : 'আমন্ত্রণপত্র'}
              </span>
              <IslamicStar size={12} className="text-accent" />
            </div>
            <h2 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-accent">
              {t.invitationHeading}
            </h2>
            <PastelDivider width="max-w-[160px]" className="my-2" />
          </div>

          {/* Short Invitation Body */}
          <p className="font-bangla-body text-sm sm:text-base text-ink/90 leading-relaxed text-center mb-6">
            {t.invitationBody}
          </p>

          {/* Family Details Block: Both Mothers and Fathers Visibly Displayed */}
          <div className="mb-6 p-3.5 sm:p-4 rounded-xl bg-pink-50/50 border border-pink-200/80 shadow-sm text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Groom's Parents */}
              <div className="p-3 rounded-lg bg-white/90 border border-pink-200/90 shadow-sm">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                  {t.familyBlock.groomParentsTitle}
                </span>
                <p className="font-semibold text-xs sm:text-sm text-ink">{CONTENT.groom.father[lang]}</p>
                <p className="font-semibold text-xs sm:text-sm text-ink">{CONTENT.groom.mother[lang]}</p>
              </div>

              {/* Bride's Parents */}
              <div className="p-3 rounded-lg bg-white/90 border border-sky-200/90 shadow-sm">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                  {t.familyBlock.brideParentsTitle}
                </span>
                <p className="font-semibold text-xs sm:text-sm text-ink">{CONTENT.bride.father[lang]}</p>
                <p className="font-semibold text-xs sm:text-sm text-ink">{CONTENT.bride.mother[lang]}</p>
              </div>
            </div>
          </div>

          {/* 3-Row Detail List */}
          <div className="bg-pink-50/70 rounded-xl p-4 sm:p-5 border border-pink-200/70 space-y-3 mb-6">
            {detailRows.map((row, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-ink">
                <div className="p-1.5 rounded-lg bg-white border border-pink-200">
                  {row.icon}
                </div>
                <span>{row.text}</span>
              </div>
            ))}
          </div>

          {/* Two Prominent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadCalendar}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full btn-accent text-xs sm:text-sm font-semibold shadow-pastel-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {downloadSuccess ? (
                <>
                  <Check size={16} />
                  <span>{lang === 'en' ? 'Added!' : 'যুক্ত হয়েছে!'}</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>{t.details.calendarBtn}</span>
                </>
              )}
            </button>

            <a
              href={CONTENT.venue.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-accent/70 bg-white hover:bg-pink-100/60 text-accent text-xs sm:text-sm font-semibold shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Navigation size={16} />
              <span>{t.details.directionsBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
