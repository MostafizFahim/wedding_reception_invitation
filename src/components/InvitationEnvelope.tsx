import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Mail, Sparkles, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { IslamicStar } from '../assets/decorative-patterns'

interface InvitationEnvelopeProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({
  isOpen,
  onOpen,
  onClose,
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

  const handleSkip = useCallback(() => {
    sessionStorage.setItem('envelope_opened', 'true')
    setIsOpening(false)
    onClose()
  }, [onClose])

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

  // Support keyboard accessibility: Esc to skip, Enter to open
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip()
      } else if (e.key === 'Enter' && !isOpening) {
        handleStartOpen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, isOpening, handleSkip, handleStartOpen])

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
        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-pink-950/60 backdrop-blur-md overflow-hidden select-none"
      >
        {/* Top Control Bar: Skip button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            type="button"
            onClick={handleSkip}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-ink hover:text-accent border border-pink-200 text-xs font-semibold shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            aria-label="Skip envelope introduction"
          >
            <span>{t.envelope.skipButton}</span>
            <X size={14} className="text-accent" />
          </button>
        </div>

        {/* Ambient Warm Glow */}
        <div className="absolute -inset-10 bg-radial from-pink-400/20 via-pink-200/10 to-transparent pointer-events-none blur-3xl" />

        {/* Outer Wrapper */}
        <div className="w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center">
          {/* Sacred Bismillah on Closed Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-3 text-pink-100"
          >
            <p lang="ar" dir="rtl" className="font-arabic text-lg sm:text-xl text-amber-200 tracking-wide mb-0.5">
              {t.envelope.bismillah}
            </p>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-pink-200/90">
              {t.envelope.tagline}
            </p>
          </motion.div>

          {/* 3D Envelope Container */}
          <div className="relative w-full aspect-[4/3] [perspective:1000px]">
            {/* The Envelope Base / Backplate */}
            <div className="absolute inset-0 bg-[#F9ECEF] rounded-2xl border-2 border-pink-300/80 shadow-2xl overflow-hidden">
              {/* Subtle Paper Texture Lines */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 via-white/40 to-pink-100/20" />
            </div>

            {/* The Inner Invitation Card (Slides Upward when Opening) */}
            <motion.div
              initial={{ y: 0, opacity: 0.9 }}
              animate={
                isOpening
                  ? { y: -72, opacity: 1, transition: { delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                  : { y: 0, opacity: 0.9 }
              }
              className="absolute inset-x-4 top-4 bottom-4 bg-[#FFFDF9] rounded-xl border border-amber-300/60 shadow-lg p-4 sm:p-5 flex flex-col items-center justify-center text-center z-10"
            >
              {/* Card Gold Trim Border */}
              <div className="w-full h-full rounded-lg border border-amber-200/70 p-3 flex flex-col items-center justify-between">
                <IslamicStar size={14} className="text-amber-500" />
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent mb-0.5">
                    {lang === 'en' ? 'Wedding Reception' : 'বৌভাত অনুষ্ঠান'}
                  </span>
                  <h3 className="font-bangla-serif text-lg sm:text-2xl font-bold text-ink">
                    {t.envelope.coupleNames}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 font-medium">
                    {t.dateLine}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              </div>
            </motion.div>

            {/* Front Pocket: Left & Right Geometric Folds */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
              {/* Left Triangle Fold */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <polygon points="0,0 0,300 200,165" fill="#F4DEE4" />
                {/* Right Triangle Fold */}
                <polygon points="400,0 400,300 200,165" fill="#EED2DA" />
                {/* Bottom Triangle Fold */}
                <polygon points="0,300 400,300 200,150" fill="#FFF2F5" />
                <path d="M0,300 L200,150 L400,300" stroke="#F9D5E0" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Monogram on Bottom Flap when closed */}
              <div className="absolute bottom-3 inset-x-0 text-center">
                <span className="font-english-display text-xs sm:text-sm font-bold tracking-widest text-accent/75 uppercase">
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
                <polygon points="0,0 400,0 200,156" fill="#F6E4E9" />
                <path d="M0,0 L200,156 L400,0" stroke="#EFA9BF" strokeWidth="1.5" fill="none" />
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
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#C45E7A] via-[#9B3754] to-[#78233C] text-amber-100 border-2 border-amber-300/80 shadow-xl flex items-center justify-center p-1 pointer-events-auto"
              >
                {/* Wax Seal Outer Ruffled Rim */}
                <div className="w-full h-full rounded-full border border-amber-200/40 flex flex-col items-center justify-center">
                  <IslamicStar size={10} className="text-amber-200/90 mb-0.5" />
                  <span className="font-english-display text-sm sm:text-base font-bold tracking-wider text-amber-100 leading-none">
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-accent text-white font-bold text-sm sm:text-base shadow-pastel-btn flex items-center justify-center gap-2.5 border border-pink-300/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer transition-all disabled:opacity-75"
            >
              {isOpening ? (
                <>
                  <Sparkles size={18} className="animate-spin text-amber-200" />
                  <span>{lang === 'en' ? 'Opening...' : 'খুলছে...'}</span>
                </>
              ) : (
                <>
                  <Mail size={18} className="text-pink-100" />
                  <span>{t.envelope.openButton}</span>
                </>
              )}
            </motion.button>

            <p className="text-[11px] text-pink-200/80 font-normal">
              {lang === 'en' ? 'Click to open or press Enter' : 'খুলতে ক্লিক করুন অথবা Enter চাপুন'}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
