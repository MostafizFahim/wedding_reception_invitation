import React from 'react'
import { ChevronDown, Calendar, MapPin } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { GoldDivider, IslamicStar, ArabesqueCorner } from '../assets/decorative-patterns'

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage()

  const scrollToInvitation = () => {
    const el = document.querySelector('#invitation')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center pt-24 pb-12 px-4 sm:px-6 bg-islamic-pattern-dark overflow-hidden"
    >
      {/* Decorative Corner Filigrees */}
      <div className="absolute top-16 left-3 text-gold/30">
        <ArabesqueCorner position="tl" size={60} />
      </div>
      <div className="absolute top-16 right-3 text-gold/30">
        <ArabesqueCorner position="tr" size={60} />
      </div>

      {/* Top Section: Sacred Bismillah */}
      <div className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center animate-fade-in">
        <div
          lang="ar"
          dir="rtl"
          className="font-arabic text-2xl sm:text-3xl md:text-4xl text-gold-shimmer mb-2 tracking-wide select-none drop-shadow-sm"
        >
          {t.bismillah}
        </div>
        <p className="text-xs sm:text-sm text-ivory/70 tracking-widest font-light uppercase max-w-md">
          {t.bismillahTranslation}
        </p>

        {/* Event Header Pill */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-emerald-dark/80 backdrop-blur-sm shadow-gold-soft">
          <IslamicStar size={14} className="text-gold" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold-shimmer">
            {t.eventTitle} • {t.eventSubtitle}
          </span>
          <IslamicStar size={14} className="text-gold" />
        </div>
      </div>

      {/* Center Section: Islamic Mihrab Arch Portrait Frame & Names */}
      <div className="w-full max-w-4xl mx-auto my-6 z-10 flex flex-col items-center">
        {/* Main Names Typography */}
        <div className="mb-6 space-y-1">
          <h1 className="font-bangla-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gold-gradient drop-shadow-md">
            {lang === 'bn' ? 'ফাহিম & জয়ী' : 'Fahim & Joyee'}
          </h1>
          <p className="font-english-display text-xl sm:text-2xl md:text-3xl italic tracking-wider text-ivory/90 font-medium">
            {lang === 'bn'
              ? 'Fahim & Joyee'
              : 'Mostafizur Rahman Fahim & Naeema Jannat Joyee'}
          </p>
        </div>

        <GoldDivider width="max-w-xs" />

        {/* Mihrab Arch Framed Couple Image / Placeholder */}
        {CONTENT.config.showCouplePhoto && (
          <div className="relative mt-2 mb-6 group">
            {/* Soft Ambient Gold Glow */}
            <div className="absolute -inset-2 bg-gradient-to-t from-gold/30 via-gold/10 to-transparent rounded-t-[50%] blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Mihrab Arch Outer Gold Border */}
            <div className="relative p-1.5 sm:p-2 rounded-t-[50%_35%] rounded-b-2xl bg-gradient-to-b from-gold via-gold/70 to-gold/30 shadow-2xl">
              <div className="relative overflow-hidden rounded-t-[50%_35%] rounded-b-xl w-[260px] h-[340px] sm:w-[320px] h-[410px] md:w-[360px] md:h-[460px] bg-emerald-deep">
                <img
                  src={CONTENT.media.heroImage}
                  alt={CONTENT.media.heroImageAlt[lang]}
                  width={360}
                  height={460}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Inner Filigree Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-emerald-deep/80 via-transparent to-black/20" />
              </div>
            </div>

            {/* Apex Finial Star */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-deep p-1 rounded-full border border-gold shadow-md">
              <IslamicStar size={18} className="text-gold animate-pulse" />
            </div>
          </div>
        )}

        {/* Date and Venue Pill Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-ivory/90 text-sm sm:text-base font-medium">
          <div className="flex items-center gap-2 bg-emerald-deep/70 px-4 py-2 rounded-full border border-gold/30 backdrop-blur-sm">
            <Calendar size={16} className="text-gold" />
            <span>
              {t.dateDisplay}, {t.dayOfWeek}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-deep/70 px-4 py-2 rounded-full border border-gold/30 backdrop-blur-sm">
            <MapPin size={16} className="text-gold" />
            <span>
              {CONTENT.venue.name[lang]}, {CONTENT.venue.address[lang]}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Scroll Down Indicator */}
      <div className="w-full z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={scrollToInvitation}
          className="group flex flex-col items-center gap-1 text-gold/75 hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full p-2"
          aria-label="Scroll down to view invitation"
        >
          <span className="text-xs uppercase tracking-widest text-ivory/70 group-hover:text-gold transition-colors font-light">
            {lang === 'bn' ? 'আমন্ত্রণপত্র দেখুন' : 'View Invitation'}
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}
