import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { IslamicStar } from '../assets/decorative-patterns'

interface InvitationEnvelopeProps {
  isOpen: boolean
  onOpen: () => void
  onClose?: () => void
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({
  isOpen,
  onOpen,
}) => {
  const { lang, t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()
  const [isOpening, setIsOpening] = useState(false)

  // Prevent background scrolling while envelope overlay is active
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prevOverflow
      }
    }
  }, [isOpen])

  const handleStartOpen = useCallback(() => {
    if (isOpening) return

    if (prefersReducedMotion) {
      sessionStorage.setItem('envelope_opened', 'true')
      onOpen()
      return
    }

    setIsOpening(true)

    // Sequence: Wax seal opens -> Flap opens -> Card slides -> Modal fades
    setTimeout(() => {
      sessionStorage.setItem('envelope_opened', 'true')
      onOpen()
      setIsOpening(false)
    }, 1450)
  }, [isOpening, prefersReducedMotion, onOpen])

  // Support keyboard accessibility: Enter to open
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isOpening) {
        handleStartOpen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, isOpening, handleStartOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        role="dialog"
        aria-modal="true"
        aria-label={t.envelope.tagline}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-crimson-950/75 backdrop-blur-md overflow-hidden select-none"
      >
        {/* Ambient Warm Golden Glow */}
        <div className="absolute -inset-10 bg-radial from-gold-500/20 via-crimson-900/10 to-transparent pointer-events-none blur-3xl" />

        {/* Outer Wrapper */}
        <div className="w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center">
          {/* Sacred Bismillah on Ivory Badge for Maximum Legibility & Contrast */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-3"
          >
            <div className="inline-block px-5 py-2.5 rounded-2xl bg-[#FBF6EA] border border-gold-500/50 shadow-md">
              <p
                lang="ar"
                dir="rtl"
                style={{ color: '#000000' }}
                className="font-arabic text-xl sm:text-2xl font-bold tracking-wide leading-relaxed select-none"
              >
                {t.envelope.bismillah}
              </p>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-ink mt-0.5">
                {t.envelope.tagline}
              </p>
            </div>
          </motion.div>

          {/* 3D Envelope Container */}
          <div className="relative w-full aspect-[4/3] [perspective:1000px]">
            {/* The Envelope Base / Backplate */}
            <div className="absolute inset-0 bg-[#F6EEDC] rounded-2xl border-2 border-gold-500/50 shadow-2xl overflow-hidden">
              {/* Subtle Paper Texture Lines */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-ivory-50/60 to-gold-300/10" />
            </div>

            {/* The Inner Invitation Card (Slides Upward when Opening) */}
            <motion.div
              initial={{ y: 0, opacity: 0.9 }}
              animate={
                isOpening
                  ? { y: -72, opacity: 1, transition: { delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                  : { y: 0, opacity: 0.9 }
              }
              className="absolute inset-x-4 top-4 bottom-4 bg-[#FBF6EA] rounded-xl border border-gold-500/60 shadow-lg p-4 sm:p-5 flex flex-col items-center justify-center text-center z-10"
            >
              {/* Card Gold Trim Border */}
              <div className="w-full h-full rounded-lg border border-gold-500/35 p-3 flex flex-col items-center justify-between">
                <IslamicStar size={14} className="text-gold-700" />
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-crimson-700 mb-0.5">
                    {lang === 'en' ? 'Wedding Reception' : 'বৌভাত অনুষ্ঠান'}
                  </span>
                  <h3 className="font-english-display sm:font-bangla-serif text-lg sm:text-2xl font-bold text-crimson-700">
                    {t.envelope.coupleNames}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 font-medium">
                    {t.dateLine}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </div>
            </motion.div>

            {/* Front Pocket: Left & Right Geometric Folds */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
              {/* Left Triangle Fold */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <polygon points="0,0 0,300 200,165" fill="#EFE3CA" />
                {/* Right Triangle Fold */}
                <polygon points="400,0 400,300 200,165" fill="#E8D9BD" />
                {/* Bottom Triangle Fold */}
                <polygon points="0,300 400,300 200,150" fill="#FBF6EA" />
                <path d="M0,300 L200,150 L400,300" stroke="#DFCFAB" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Monogram on Bottom Flap when closed */}
              <div className="absolute bottom-3 inset-x-0 text-center">
                <span className="font-english-display text-xs sm:text-sm font-bold tracking-widest text-crimson-700/80 uppercase">
                  Fahim &amp; Joyee
                </span>
              </div>
            </div>

            {/* Top Triangular Flap (Folds Open Upward 3D) */}
            <motion.div
              style={{ transformOrigin: 'top center' }}
              initial={{ rotateX: 0 }}
              animate={
                isOpening
                  ? {
                      rotateX: 180,
                      transition: { duration: 0.65, delay: 0.15, ease: [0.4, 0, 0.2, 1] },
                    }
                  : { rotateX: 0 }
              }
              className="absolute inset-x-0 top-0 h-[52%] z-30 pointer-events-none"
            >
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 400 156" preserveAspectRatio="none">
                <polygon points="0,0 400,0 200,156" fill="#F2E6CE" />
                <path d="M0,0 L200,156 L400,0" stroke="#DFCFAB" strokeWidth="1.5" fill="none" />
              </svg>
            </motion.div>

            {/* Centered Wax Seal with Initials F & J positioned dead-center */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  isOpening
                    ? {
                        scale: 1.25,
                        opacity: 0,
                        transition: { duration: 0.35, ease: 'easeOut' },
                      }
                    : { scale: 1, opacity: 1 }
                }
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#8F2336] via-[#7A1F2E] to-[#5E1520] text-gold-300 border-2 border-gold-300/85 shadow-xl flex items-center justify-center p-1 pointer-events-auto"
              >
                {/* Wax Seal Outer Ruffled Rim */}
                <div className="w-full h-full rounded-full border border-gold-300/40 flex flex-col items-center justify-center">
                  <IslamicStar size={10} className="text-gold-300/90 mb-0.5" />
                  <span className="font-english-display text-sm sm:text-base font-bold tracking-wider text-gold-300 leading-none">
                    F&amp;J
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Primary Action Button: Open Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-6 flex flex-col items-center gap-2.5 w-full"
          >
            <motion.button
              type="button"
              disabled={isOpening}
              onClick={handleStartOpen}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-primary text-ivory-50 font-bold text-sm sm:text-base shadow-crimson-btn flex items-center justify-center gap-2.5 border border-gold-500/40 cursor-pointer transition-all disabled:opacity-75"
            >
              {isOpening ? (
                <>
                  <Sparkles size={18} className="animate-spin text-gold-300" />
                  <span>{lang === 'en' ? 'Opening...' : 'খুলছে...'}</span>
                </>
              ) : (
                <>
                  <Mail size={18} className="text-gold-300" />
                  <span>{t.envelope.openButton}</span>
                </>
              )}
            </motion.button>

            <div className="mt-1">
              <span
                style={{ color: '#000000' }}
                className="inline-block px-3.5 py-1 rounded-full bg-[#FBF6EA] border border-gold-500/40 shadow-sm text-xs font-semibold tracking-wide text-black select-none"
              >
                {lang === 'en' ? 'Click to open or press Enter' : 'খুলতে ক্লিক করুন অথবা Enter চাপুন'}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
