import React, { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { CONTENT } from '../content'
import { IslamicStar } from '../assets/decorative-patterns'

export const Navbar: React.FC = () => {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.invitation, href: '#invitation' },
    { label: t.nav.event, href: '#event' },
    { label: t.nav.venue, href: '#venue' },
    ...(CONTENT.config.showGallery ? [{ label: t.nav.gallery, href: '#gallery' }] : []),
    { label: t.nav.rsvp, href: '#rsvp' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-deep/95 backdrop-blur-md shadow-lg border-b border-gold/20 py-2.5'
          : 'bg-gradient-to-b from-emerald-deep/90 via-emerald-deep/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full px-1"
          aria-label="Fahim & Joyee Wedding Invitation"
        >
          <div className="relative flex items-center justify-center">
            <IslamicStar size={24} className="text-gold group-hover:rotate-45 transition-transform duration-500" />
            <span className="absolute text-[10px] font-english-display font-bold text-gold-shimmer">
              FJ
            </span>
          </div>
          <span className="font-english-display text-lg tracking-wider text-ivory group-hover:text-gold transition-colors font-semibold">
            {lang === 'bn' ? 'ফাহিম & জয়ী' : 'Fahim & Joyee'}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-ivory/85 hover:text-gold-light hover:bg-emerald-light/30 px-3 py-1.5 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-gold/40 text-gold-shimmer hover:border-gold hover:bg-gold/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold shadow-sm"
            aria-label={`Switch language to ${lang === 'bn' ? 'English' : 'Bangla'}`}
          >
            <Globe size={14} className="text-gold" />
            <span>{t.nav.languageSwitch}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-ivory/90 hover:text-gold hover:bg-emerald-light/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-deep/98 border-b border-gold/25 px-5 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-ivory hover:text-gold px-3 py-2 rounded-lg text-base font-medium hover:bg-emerald-subtle/20 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
