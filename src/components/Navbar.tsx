import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, Globe, Mail } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

interface NavbarProps {
  onReplayEnvelope?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayEnvelope }) => {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const prefersReducedMotion = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Track active section and scroll state
  useEffect(() => {
    const sections = ['hero', 'invitation', 'venue', 'rsvp']
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)

      const scrollPos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i]
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          if (scrollPos >= top) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Close mobile menu on click outside
  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const navItems = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'invitation', label: t.nav.invitation, href: '#invitation' },
    { id: 'venue', label: t.nav.venue, href: '#venue' },
    { id: 'rsvp', label: t.nav.rsvp, href: '#rsvp' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isBn = lang === 'bn'
  const linkFontSize = isBn ? 'text-[16px]' : 'text-[15px]'

  return (
    <header
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-shadow duration-300 bg-[var(--ivory-50)] supports-[backdrop-filter]:bg-[rgba(251,246,234,0.94)] backdrop-blur-[10px] border-b border-[rgba(184,145,58,0.6)] ${
        isScrolled ? 'shadow-[0_4px_20px_-2px_rgba(58,42,34,0.06)]' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[56px] md:h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 rounded-md py-1 px-0.5"
          aria-label="Fahim & Joyee"
        >
          {/* Mobile: compact monogram "F & J" (crimson, serif) */}
          <span className="md:hidden font-english-display text-xl font-bold text-crimson-700 tracking-wider">
            F <span className="font-light italic text-gold-700 text-sm">&amp;</span> J
          </span>

          {/* Desktop: Full monogram + couple names */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-8 h-8 rounded-full border border-gold-500/60 bg-ivory-100 flex items-center justify-center font-english-display text-sm font-bold text-crimson-700 shadow-xs">
              FJ
            </span>
            <span className="font-english-display text-lg tracking-wider text-crimson-700 font-bold">
              {t.heroTitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative px-3.5 py-2 rounded-md font-semibold ${linkFontSize} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 ${
                  isActive
                    ? 'text-crimson-700'
                    : 'text-ink hover:text-crimson-700 hover:bg-gold-500/10'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="desktop-active-indicator"
                    className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gold-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Actions Cluster: Replay, Language Toggle, and Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Envelope Replay Button */}
          {onReplayEnvelope && (
            <button
              type="button"
              onClick={onReplayEnvelope}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full border border-gold-500/50 bg-ivory-50/90 hover:border-gold-700 hover:bg-gold-500/15 text-crimson-700 text-xs font-semibold shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 cursor-pointer flex items-center gap-1.5"
              title={t.envelope.replayButton}
              aria-label={t.envelope.replayButton}
            >
              <Mail size={14} className="text-crimson-700" />
              <span className="hidden sm:inline text-xs">{t.envelope.replayButton}</span>
            </button>
          )}

          {/* Language Switcher (Always visible on mobile & desktop) */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/60 bg-ivory-50/90 hover:border-gold-700 hover:bg-gold-500/15 text-crimson-700 text-xs sm:text-[13px] font-semibold shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 cursor-pointer"
            aria-label={`Switch language to ${lang === 'en' ? 'Bangla' : 'English'}`}
          >
            <Globe size={13} className="text-gold-700 shrink-0" />
            <span className="tracking-wide">{lang === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* Hamburger Button (Mobile only: 44x44px touch target) */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-ink hover:text-crimson-700 hover:bg-gold-500/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 cursor-pointer"
            aria-label={
              lang === 'bn'
                ? mobileMenuOpen
                  ? 'মেনু বন্ধ করুন'
                  : 'মেনু খুলুন'
                : mobileMenuOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            ref={menuRef}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[var(--ivory-50)] border-b border-[rgba(184,145,58,0.6)] shadow-lg"
          >
            <nav className="flex flex-col py-2 px-3 divide-y divide-gold-500/20" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`min-h-[48px] flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 ${
                      isBn ? 'text-[18px]' : 'text-[17px]'
                    } ${
                      isActive
                        ? 'text-crimson-700 bg-gold-500/15'
                        : 'text-ink hover:text-crimson-700 hover:bg-gold-500/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-gold-500" aria-hidden="true" />
                    )}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
