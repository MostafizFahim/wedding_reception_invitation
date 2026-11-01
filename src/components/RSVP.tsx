import React from 'react'
import { MessageCircle, Phone, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { GoldDivider, IslamicStar, ArabesqueCorner } from '../assets/decorative-patterns'

export const RSVP: React.FC = () => {
  const { lang, t } = useLanguage()

  const encodedMessage = encodeURIComponent(CONTENT.contact.whatsappMessage[lang])
  const whatsappUrl = `https://wa.me/${CONTENT.contact.whatsappNumber}?text=${encodedMessage}`
  const phoneUrl = `tel:${CONTENT.contact.internationalPhone}`

  return (
    <section
      id="rsvp"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-emerald-deep text-ivory border-t border-gold/30 overflow-hidden"
    >
      {/* Decorative Corners */}
      <div className="absolute top-6 left-4 text-gold/30">
        <ArabesqueCorner position="tl" size={48} />
      </div>
      <div className="absolute top-6 right-4 text-gold/30">
        <ArabesqueCorner position="tr" size={48} />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Badge & Title */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-emerald/60 mb-3 shadow-sm">
          <IslamicStar size={14} className="text-gold" />
          <span className="text-xs uppercase tracking-widest text-gold-shimmer font-semibold">
            {lang === 'bn' ? 'সম্মতি জ্ঞাপন' : 'Confirmation'}
          </span>
          <IslamicStar size={14} className="text-gold" />
        </div>

        <h2 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-3">
          {t.rsvp.sectionTitle}
        </h2>

        <p className="text-base sm:text-lg text-ivory/80 max-w-lg mx-auto font-medium">
          {t.rsvp.subtitle}
        </p>

        <GoldDivider width="max-w-xs" />

        {/* Action Buttons Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-lg mx-auto">
          {/* WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={`${t.rsvp.whatsappBtn} (${CONTENT.contact.displayPhone})`}
          >
            <MessageCircle size={22} className="fill-white/20 stroke-white" />
            <span>{t.rsvp.whatsappBtn}</span>
          </a>

          {/* Call Action */}
          <a
            href={phoneUrl}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-gold bg-emerald hover:bg-emerald-light text-gold-shimmer font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`${t.rsvp.callBtn}: ${CONTENT.contact.displayPhone}`}
          >
            <Phone size={20} className="text-gold" />
            <span>{t.rsvp.callBtn}</span>
          </a>
        </div>

        {/* Display Contact Info Card */}
        <div className="mt-8 p-4 rounded-2xl bg-emerald-dark/60 border border-gold/25 max-w-sm mx-auto flex items-center justify-center gap-3">
          <CheckCircle2 size={18} className="text-gold" />
          <span className="text-sm font-medium text-ivory/90">
            {t.rsvp.phoneLabel}:{' '}
            <strong className="text-gold-shimmer tracking-wider">
              {CONTENT.contact.displayPhone}
            </strong>
          </span>
        </div>

        <p className="mt-4 text-xs text-ivory/60">
          {t.rsvp.inquiries}
        </p>
      </div>
    </section>
  )
}
