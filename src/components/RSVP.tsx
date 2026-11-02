import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MessageCircle, Phone, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { PastelDivider, IslamicStar } from '../assets/decorative-patterns'
import { RevealSection, StaggerContainer, StaggerItem } from './ScrollReveal'

export const RSVP: React.FC = () => {
  const { lang, t } = useLanguage()
  const [accordionOpen, setAccordionOpen] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  const encodedMessage = encodeURIComponent(CONTENT.contact.whatsappMessage[lang])
  const whatsappUrl = `${CONTENT.contact.whatsappRsvp.url}?text=${encodedMessage}`
  const phoneUrl = CONTENT.contact.informationPhone.telUrl

  return (
    <section id="rsvp" className="relative py-12 sm:py-16 px-4 bg-sky-100/40 text-ink border-t border-pink-200/50">
      <div className="max-w-xl mx-auto text-center">
        {/* Primary Elevated RSVP Card - 100% Permanently Visible without Toggle */}
        <RevealSection>
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

            {/* WhatsApp & Call Action Buttons with Micro-Interactions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-4">
              {/* WhatsApp RSVP */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98, y: 0 }}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`${t.buttons.whatsapp}: ${CONTENT.contact.whatsappRsvp.display}`}
              >
                <MessageCircle size={19} className="fill-white/20 stroke-white" />
                <span>{t.buttons.whatsapp}</span>
              </motion.a>

              {/* Direct Telephone Call for Event Information */}
              <motion.a
                href={phoneUrl}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98, y: 0 }}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-accent bg-white hover:bg-pink-100/60 text-accent font-bold text-sm shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`${t.buttons.call}: ${CONTENT.contact.informationPhone.display}`}
              >
                <Phone size={18} className="text-accent" />
                <span>{t.buttons.call}</span>
              </motion.a>
            </div>

            {/* Event Information Phone Number Display Info */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50/70 border border-pink-200/60 text-xs text-ink-muted">
              <CheckCircle2 size={14} className="text-accent shrink-0" />
              <span>
                {t.rsvpContactLabel}
                <strong className="text-accent tracking-wider font-bold">
                  {lang === 'en'
                    ? CONTENT.contact.informationPhone.display
                    : CONTENT.contact.informationPhone.displayBn}
                </strong>
              </span>
            </div>
          </div>
        </RevealSection>

        {/* Collapsible Hosts & Welcome Committee Accordion (Starts Expanded by Default with Smooth Motion) */}
        <RevealSection delay={0.1}>
          <div className="bg-white/90 rounded-2xl border border-pink-200/90 shadow-sm overflow-hidden text-left">
            <button
              type="button"
              data-testid="accordion-toggle"
              aria-label="Toggle Hosts & Welcome Committee"
              aria-controls="hosts-accordion-content"
              onClick={() => setAccordionOpen(!accordionOpen)}
              aria-expanded={accordionOpen}
              className="w-full flex items-center justify-between p-4 sm:p-4.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent hover:bg-pink-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <IslamicStar size={14} className="text-accent" />
                <span className="font-bold">{t.accordion.title}</span>
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

            <AnimatePresence initial={false}>
              {accordionOpen && (
                <motion.div
                  id="hosts-accordion-content"
                  initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="p-4 sm:p-5 pt-0 border-t border-pink-100 text-xs sm:text-sm space-y-4">
                    {/* Hosts (With love / দাওয়াতান্তে) */}
                    <div>
                      <h4 className="font-bold text-accent uppercase tracking-wider text-[11px] mb-1.5">
                        {t.accordion.withLove}
                      </h4>
                      <div className="space-y-0.5 text-ink font-semibold">
                        {CONTENT.hosts.members.map((member, idx) => (
                          <p key={idx}>{member[lang]}</p>
                        ))}
                      </div>
                    </div>

                    {/* Welcoming Committee with Staggered Entrance (Welcoming you / অভ্যর্থনায়) */}
                    <div>
                      <h4 className="font-bold text-accent uppercase tracking-wider text-[11px] mb-1.5">
                        {t.accordion.welcoming}
                      </h4>
                      <StaggerContainer className="flex flex-wrap gap-1.5" staggerDelay={0.04}>
                        {CONTENT.welcomingCommittee.members.map((member, idx) => (
                          <StaggerItem key={idx}>
                            <span className="inline-block px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-ink text-xs font-medium hover:border-pink-300 transition-colors">
                              {member[lang]}
                            </span>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
