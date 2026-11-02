import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X, Globe, Mail } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { IslamicStar } from '../assets/decorative-patterns'

interface NavbarProps {
  onReplayEnvelope?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayEnvelope }) => {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.invitation, href: '#invitation' },
    { label: t.nav.venue, href: '#venue' },
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
          ? 'bg-pink-50/90 backdrop-blur-md shadow-sm border-b border-pink-200/60 py-2'
          : 'bg-gradient-to-b from-pink-50/90 via-pink-50/50 to-transparent py-3'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full px-1"
          aria-label="Fahim & Joyee"
        >
          <div className="relative flex items-center justify-center">
            <IslamicStar size={20} className="text-accent group-hover:rotate-45 transition-transform duration-500" />
            <span className="absolute text-[9px] font-english-display font-bold text-accent">
              FJ
            </span>
          </div>
          <span className="font-english-display text-base sm:text-lg tracking-wider text-ink font-semibold">
            {t.heroTitle}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-ink/80 hover:text-accent hover:bg-pink-200/40 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Envelope Replay, Language Switcher & Mobile Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {onReplayEnvelope && (
            <motion.button
              type="button"
              onClick={onReplayEnvelope}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-full border border-pink-300/60 bg-white/80 hover:border-accent hover:bg-pink-100/60 text-accent text-xs font-semibold shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer flex items-center gap-1"
              title={t.envelope.replayButton}
              aria-label={t.envelope.replayButton}
            >
              <Mail size={13} className="text-accent" />
              <span className="hidden sm:inline text-[11px]">{t.envelope.replayButton}</span>
            </motion.button>
          )}

          <motion.button
            type="button"
            onClick={toggleLanguage}
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-pink-400/50 bg-white/80 hover:border-accent hover:bg-pink-100/60 text-accent text-xs font-semibold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            aria-label={`Switch language to ${lang === 'en' ? 'Bangla' : 'English'}`}
          >
            <Globe size={13} className="text-accent" />
            <span>{t.nav.languageSwitch}</span>
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-ink/80 hover:text-accent hover:bg-pink-200/30 transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pink-50/95 border-b border-pink-200 px-5 pt-2 pb-5 shadow-lg backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-ink hover:text-accent px-3 py-2 rounded-lg text-sm font-medium hover:bg-pink-200/30 transition-all"
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
