import React, { useState } from 'react'
import { MessageCircle, Phone, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { PastelDivider, IslamicStar } from '../assets/decorative-patterns'

export const RSVP: React.FC = () => {
  const { lang, t } = useLanguage()
  const [accordionOpen, setAccordionOpen] = useState(true)

  const encodedMessage = encodeURIComponent(CONTENT.contact.whatsappMessage[lang])
  const whatsappUrl = `${CONTENT.contact.whatsappRsvp.url}?text=${encodedMessage}`
  const phoneUrl = CONTENT.contact.informationPhone.telUrl

  return (
    <section id="rsvp" className="relative py-12 sm:py-16 px-4 bg-sky-100/40 text-ink border-t border-pink-200/50">
      <div className="max-w-xl mx-auto text-center">
        {/* Primary Elevated RSVP Card - 100% Permanently Visible without Toggle */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-pastel-card mb-6">
          {/* Card Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-50 border border-pink-200 mb-2 shadow-sm">
            <IslamicStar size={12} className="text-accent" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-accent">
              {lang === 'en' ? 'Confirmation' : 'সম্মতি জ্ঞাপন'}
            </span>
            <IslamicStar size={12} className="text-accent" />
          </div>

          {/* Heading */}
          <h2 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-accent">
            {t.rsvpHeading}
          </h2>

          {/* Helper Text */}
          <p className="text-xs sm:text-sm text-ink-muted mt-1.5 max-w-md mx-auto font-normal">
            {t.rsvpHelper}
          </p>
          <PastelDivider width="max-w-[140px]" className="my-3" />

          {/* WhatsApp & Call Action Buttons (Permanently Visible) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-4">
            {/* WhatsApp RSVP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`${t.buttons.whatsapp}: ${CONTENT.contact.whatsappRsvp.display}`}
            >
              <MessageCircle size={19} className="fill-white/20 stroke-white" />
              <span>{t.buttons.whatsapp}</span>
            </a>

            {/* Direct Telephone Call for Event Information */}
            <a
              href={phoneUrl}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-accent bg-white hover:bg-pink-100/60 text-accent font-bold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`${t.buttons.call}: ${CONTENT.contact.informationPhone.display}`}
            >
              <Phone size={18} className="text-accent" />
              <span>{t.buttons.call}</span>
            </a>
          </div>

          {/* Event Information Phone Number Display Info */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50/70 border border-pink-200/60 text-xs text-ink-muted">
            <CheckCircle2 size={14} className="text-accent" />
            <span>
              {t.rsvpContactLabel}
              <strong className="text-accent tracking-wider font-semibold">
                {lang === 'en'
                  ? CONTENT.contact.informationPhone.display
                  : CONTENT.contact.informationPhone.displayBn}
              </strong>
            </span>
          </div>
        </div>

        {/* Collapsible Hosts & Welcome Committee Accordion (Starts Expanded by Default) */}
        <div className="bg-white/90 rounded-2xl border border-pink-200/90 shadow-sm overflow-hidden text-left">
          <button
            type="button"
            data-testid="accordion-toggle"
            aria-label="Toggle Hosts & Welcome Committee"
            aria-controls="hosts-accordion-content"
            onClick={() => setAccordionOpen(!accordionOpen)}
            aria-expanded={accordionOpen}
            className="w-full flex items-center justify-between p-4 sm:p-4.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent hover:bg-pink-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="flex items-center gap-2">
              <IslamicStar size={14} className="text-accent" />
              <span>{t.accordion.title}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-muted font-normal">
              <span>{accordionOpen ? (lang === 'en' ? 'Hide' : 'সংক্ষেপ') : (lang === 'en' ? 'View details' : 'বিস্তারিত')}</span>
              <ChevronDown
                size={16}
                className={`text-accent transition-transform duration-300 ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {accordionOpen && (
            <div
              id="hosts-accordion-content"
              className="p-4 sm:p-5 pt-0 border-t border-pink-100 text-xs sm:text-sm space-y-4 animate-fade-in"
            >
              {/* Hosts (With love / দাওয়াতান্তে) */}
              <div>
                <h4 className="font-semibold text-accent uppercase tracking-wider text-[11px] mb-1.5">
                  {t.accordion.withLove}
                </h4>
                <div className="space-y-0.5 text-ink font-medium">
                  {CONTENT.hosts.members.map((member, idx) => (
                    <p key={idx}>{member[lang]}</p>
                  ))}
                </div>
              </div>

              {/* Welcoming Committee (Welcoming you / অভ্যর্থনায়) */}
              <div>
                <h4 className="font-semibold text-accent uppercase tracking-wider text-[11px] mb-1.5">
                  {t.accordion.welcoming}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {CONTENT.welcomingCommittee.members.map((member, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-ink text-xs font-medium"
                    >
                      {member[lang]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
