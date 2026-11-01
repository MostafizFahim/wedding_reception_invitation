import React from 'react'
import { Heart, Users } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { GoldDivider, IslamicStar, ArabesqueCorner } from '../assets/decorative-patterns'

export const Hosts: React.FC = () => {
  const { lang, t } = useLanguage()

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-islamic-pattern-light text-ink border-t border-gold/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-white mb-3 shadow-sm">
            <IslamicStar size={14} className="text-gold" />
            <span className="text-xs uppercase tracking-widest text-emerald-dark font-semibold">
              {t.family.sectionTitle}
            </span>
            <IslamicStar size={14} className="text-gold" />
          </div>
          <h2 className="font-bangla-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-dark">
            {lang === 'bn' ? 'পারিবারিক শুভাকাঙ্ক্ষী' : 'Family & Hosts'}
          </h2>
          <GoldDivider width="max-w-xs" />
        </div>

        {/* Groom & Bride Lineage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Groom Side */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-gold/30 shadow-ivory-card">
            <div className="absolute top-3 right-3 text-gold/30">
              <ArabesqueCorner position="tr" size={36} />
            </div>
            <div className="flex items-center gap-2 text-gold mb-3">
              <Heart size={18} className="text-terracotta fill-terracotta" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-dark">
                {t.family.groomSideTitle}
              </span>
            </div>
            <h3 className="font-bangla-serif text-2xl font-bold text-emerald-dark mb-4">
              {CONTENT.groom.fullName[lang]}
            </h3>
            <div className="space-y-2 text-sm sm:text-base border-t border-gold/20 pt-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted sm:w-20">
                  {t.family.fatherLabel}:
                </span>
                <span className="font-medium text-ink">
                  {CONTENT.groom.father[lang]}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted sm:w-20">
                  {t.family.motherLabel}:
                </span>
                <span className="font-medium text-ink">
                  {CONTENT.groom.mother[lang]}
                </span>
              </div>
              {CONTENT.config.showFamilyAddresses && (
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 pt-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted sm:w-20">
                    {t.family.addressLabel}:
                  </span>
                  <span className="text-xs text-ink-muted">
                    {CONTENT.groom.address[lang]}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Bride Side */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-gold/30 shadow-ivory-card">
            <div className="absolute top-3 right-3 text-gold/30">
              <ArabesqueCorner position="tr" size={36} />
            </div>
            <div className="flex items-center gap-2 text-gold mb-3">
              <Heart size={18} className="text-terracotta fill-terracotta" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-dark">
                {t.family.brideSideTitle}
              </span>
            </div>
            <h3 className="font-bangla-serif text-2xl font-bold text-emerald-dark mb-4">
              {CONTENT.bride.fullName[lang]}
            </h3>
            <div className="space-y-2 text-sm sm:text-base border-t border-gold/20 pt-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted sm:w-20">
                  {t.family.fatherLabel}:
                </span>
                <span className="font-medium text-ink">
                  {CONTENT.bride.father[lang]}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted sm:w-20">
                  {t.family.motherLabel}:
                </span>
                <span className="font-medium text-ink">
                  {CONTENT.bride.mother[lang]}
                </span>
              </div>
              {CONTENT.config.showFamilyAddresses && (
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 pt-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted sm:w-20">
                    {t.family.addressLabel}:
                  </span>
                  <span className="text-xs text-ink-muted">
                    {CONTENT.bride.address[lang]}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section: Cordially Invited By (দাওয়াতান্তে) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-ivory-card text-center mb-8">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-gold-dark px-3 py-1 rounded-full bg-ivory border border-gold/30 mb-2">
            {CONTENT.hosts.subtitle[lang]}
          </span>
          <h3 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-emerald-dark mb-6">
            {CONTENT.hosts.title[lang]}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
            {CONTENT.hosts.members.map((member, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <IslamicStar size={14} className="text-gold" />
                <span className="font-bangla-serif text-lg sm:text-xl font-semibold text-emerald-dark">
                  {member[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Welcoming Committee (অভ্যর্থনায়) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-ivory-card text-center">
          <div className="flex items-center justify-center gap-2 text-gold mb-2">
            <Users size={20} className="text-gold" />
            <h3 className="font-bangla-serif text-2xl sm:text-3xl font-bold text-emerald-dark">
              {CONTENT.welcomingCommittee.title[lang]}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted mb-6">
            {lang === 'bn' ? 'সাদর অভ্যর্থনায় আপনাদের অপেক্ষায়' : 'Warmly welcoming your presence'}
          </p>

          {/* Members Badge List */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
            {CONTENT.welcomingCommittee.members.map((member, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-ivory border border-gold/40 text-emerald-dark font-bangla-serif text-sm sm:text-base font-medium shadow-sm hover:border-gold hover:bg-white transition-all"
              >
                {member[lang]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
