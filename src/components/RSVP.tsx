import React, { useState } from 'react'
import { MessageCircle, Phone, ChevronDown } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { PastelDivider, IslamicStar } from '../assets/decorative-patterns'

export const RSVP: React.FC = () => {
  const { lang, t } = useLanguage()
  const [accordionOpen, setAccordionOpen] = useState(false)

  const encodedMessage = encodeURIComponent(CONTENT.contact.whatsappMessage[lang])
  const whatsappUrl = `https://wa.me/${CONTENT.contact.whatsappNumber}?text=${encodedMessage}`
  const phoneUrl = `tel:${CONTENT.contact.internationalPhone}`

  return (
    <section id="rsvp" className="relative py-12 sm:py-16 px-4 bg-sky-100/40 text-ink border-t border-pink-200/50">
      <div className="max-w-xl mx-auto text-center">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-pink-200 mb-2 shadow-sm">
            <IslamicStar size={12} className="text-accent" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-accent">
              RSVP
            </span>
            <IslamicStar size={12} className="text-accent" />
          </div>
          <h2 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-accent">
            {t.rsvpHeading}
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-1">
            {t.rsvpHelper}
          </p>
          <PastelDivider width="max-w-[140px]" className="my-2" />
        </div>

        {/* WhatsApp & Call Buttons First */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${t.buttons.whatsapp}: ${CONTENT.contact.displayPhone}`}
          >
            <MessageCircle size={18} className="fill-white/20 stroke-white" />
            <span>{t.buttons.whatsapp}</span>
          </a>

          <a
            href={phoneUrl}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-accent bg-white hover:bg-pink-100/60 text-accent font-semibold text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${t.buttons.call}: ${CONTENT.contact.displayPhone}`}
          >
            <Phone size={17} className="text-accent" />
            <span>{t.buttons.call}</span>
          </a>
        </div>

        {/* Collapsible Accordion: Hosts & Welcome Committee (closed by default) */}
        <div className="bg-white rounded-2xl border border-pink-200 shadow-pastel-card overflow-hidden text-left">
          <button
            type="button"
            data-testid="accordion-toggle"
            aria-label="Toggle Hosts & Welcome Committee"
            onClick={() => setAccordionOpen(!accordionOpen)}
            aria-expanded={accordionOpen}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-sm sm:text-base font-semibold text-ink hover:text-accent hover:bg-pink-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="flex items-center gap-2">
              <IslamicStar size={15} className="text-accent" />
              <span>{t.accordion.title}</span>
            </div>
            <ChevronDown
              size={18}
              className={`text-accent transition-transform duration-300 ${
                accordionOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {accordionOpen && (
            <div className="p-4 sm:p-6 pt-0 border-t border-pink-100 text-xs sm:text-sm space-y-5 animate-fade-in">
              {/* Hosts (With love / দাওয়াতান্তে) */}
              <div>
                <h4 className="font-semibold text-accent uppercase tracking-wider text-[11px] mb-2">
                  {t.accordion.withLove}
                </h4>
                <div className="space-y-1 text-ink font-medium">
                  {CONTENT.hosts.members.map((member, idx) => (
                    <p key={idx}>{member[lang]}</p>
                  ))}
                </div>
              </div>

              {/* Welcoming Committee (Welcoming you / অভ্যর্থনায়) */}
              <div>
                <h4 className="font-semibold text-accent uppercase tracking-wider text-[11px] mb-2">
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
