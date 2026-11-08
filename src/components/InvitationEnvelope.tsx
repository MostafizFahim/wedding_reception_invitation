import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { IslamicStar } from '../assets/decorative-patterns'

interface InvitationEnvelopeProps {
  isOpen: boolean
  onOpen: () => void
  onClose?: () => void
}

type AnimationPhase = 'idle' | 'opening' | 'rising' | 'forward' | 'fading'

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({
  isOpen,
  onOpen,
}) => {
  const { lang, t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()

  const [phase, setPhase] = useState<AnimationPhase>('idle')
  const [flapBehind, setFlapBehind] = useState(false)
  const [cardFront, setCardFront] = useState(false)

  const timeoutsRef = useRef<number[]>([])

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id))
    timeoutsRef.current = []
  }, [])

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => clearAllTimeouts()
  }, [clearAllTimeouts])

  // Reset states when envelope opens or closes
  useEffect(() => {
    if (isOpen) {
      setPhase('idle')
      setFlapBehind(false)
      setCardFront(false)
    } else {
      clearAllTimeouts()
    }
  }, [isOpen, clearAllTimeouts])

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
    if (phase !== 'idle') return

    clearAllTimeouts()

    if (prefersReducedMotion) {
      setPhase('forward')
      setCardFront(true)
      const tId = window.setTimeout(() => {
        sessionStorage.setItem('envelope_opened', 'true')
        onOpen()
        setPhase('idle')
      }, 600)
      timeoutsRef.current.push(tId)
      return
    }

    // Sequence (Approximately 3.2s total):
    // Phase 1 (0.0s - 0.8s): Flap rotates backward around top edge (0 -> 180deg). Wax seal fades and scales away gently.
    // Midway (0.4s): Switch flap z-index to 1 (behind card).
    setPhase('opening')

    const t1 = window.setTimeout(() => {
      setFlapBehind(true)
    }, 400)
    timeoutsRef.current.push(t1)

    // Phase 2 (0.8s - 1.8s): Brief pause, then card slowly glides UP out of pocket at z-index 2.
    const t2 = window.setTimeout(() => {
      setPhase('rising')
    }, 800)
    timeoutsRef.current.push(t2)

    // Phase 3 (1.8s - 2.5s): Card clears pocket. Switch to z-index 10 (in front of all envelope layers).
    // Card glides forward toward center of viewport, subtle scale up (1.05), soft realistic paper shadow.
    const t3 = window.setTimeout(() => {
      setCardFront(true)
      setPhase('forward')
    }, 1800)
    timeoutsRef.current.push(t3)

    // Phase 4 (2.5s - 3.2s): Card remains stationary in center. Envelope layers move down 28%, fade to 0, subtle scale down (0.96).
    const t4 = window.setTimeout(() => {
      setPhase('fading')
    }, 2500)
    timeoutsRef.current.push(t4)

    // Phase 5 (3.2s): Existing handoff to main page
    const t5 = window.setTimeout(() => {
      sessionStorage.setItem('envelope_opened', 'true')
      onOpen()
      setPhase('idle')
      setCardFront(false)
      setFlapBehind(false)
    }, 3200)
    timeoutsRef.current.push(t5)
  }, [phase, prefersReducedMotion, onOpen, clearAllTimeouts])

  // Support keyboard accessibility: Enter to open
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && phase === 'idle') {
        handleStartOpen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, phase, handleStartOpen])

  if (!isOpen) return null

  const isOpening = phase !== 'idle'

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
        <div className="w-full max-w-[310px] min-[390px]:max-w-[340px] sm:max-w-[420px] flex flex-col items-center overflow-visible">
          {/* Sacred Bismillah on Ivory Badge for Maximum Legibility & Contrast */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={
              prefersReducedMotion
                ? { opacity: phase === 'forward' ? 0 : 1 }
                : phase === 'fading'
                ? { opacity: 0, y: -16, transition: { duration: 0.5, ease: 'easeOut' } }
                : { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }
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

          {/* 3D Envelope Container (Perspective on parent, relative, overflow: visible) */}
          <div className="relative w-full aspect-[4/3] [perspective:1200px] overflow-visible">
            {/* 1. The Envelope Base / Backplate (z-index 1) */}
            <motion.div
              style={{ zIndex: 1 }}
              initial={{ y: 0, opacity: 1, scale: 1 }}
              animate={
                prefersReducedMotion
                  ? { opacity: phase === 'forward' ? 0 : 1 }
                  : phase === 'fading'
                  ? { y: '28%', opacity: 0, scale: 0.96 }
                  : { y: 0, opacity: 1, scale: 1 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.5 }
                  : { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
              }
              className="absolute inset-0 bg-[#F6EEDC] rounded-2xl border-2 border-gold-500/50 shadow-2xl overflow-hidden"
            >
              {/* Subtle Paper Texture Lines */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-ivory-50/60 to-gold-300/10" />
            </motion.div>

            {/* 2. Top Triangular Flap (z-index 4 closed, switches to z-index 1 at halfway 0.4s) */}
            <motion.div
              style={{
                transformOrigin: 'top center',
                zIndex: flapBehind ? 1 : 4,
              }}
              initial={{ rotateX: 0, y: 0, opacity: 1, scale: 1 }}
              animate={
                prefersReducedMotion
                  ? { opacity: phase === 'forward' ? 0 : 1 }
                  : phase === 'fading'
                  ? { rotateX: 180, y: '28%', opacity: 0, scale: 0.96 }
                  : isOpening
                  ? { rotateX: 180, y: 0, opacity: 1, scale: 1 }
                  : { rotateX: 0, y: 0, opacity: 1, scale: 1 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.5 }
                  : phase === 'fading'
                  ? { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
                  : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
              }
              className="absolute inset-x-0 top-0 h-[52%] pointer-events-none"
            >
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 400 156" preserveAspectRatio="none">
                <polygon points="0,0 400,0 200,156" fill="#F2E6CE" />
                <path d="M0,0 L200,156 L400,0" stroke="#DFCFAB" strokeWidth="1.5" fill="none" />
              </svg>
            </motion.div>

            {/* 3. The Inner Invitation Card (Starts at z-index 2, switches to z-index 10 at phase 3) */}
            <motion.div
              style={{
                zIndex: cardFront ? 10 : 2,
              }}
              initial={{ y: 0, scale: 1, opacity: 0.95 }}
              animate={
                prefersReducedMotion
                  ? {
                      opacity: 1,
                      scale: phase === 'forward' ? 1.05 : 1,
                      boxShadow:
                        phase === 'forward'
                          ? '0 20px 45px -10px rgba(58, 42, 34, 0.32), 0 0 0 1px rgba(184, 145, 58, 0.35)'
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.5 },
                    }
                  : phase === 'rising'
                  ? {
                      y: '-68%',
                      scale: 1,
                      opacity: 1,
                      boxShadow: '0 8px 16px -2px rgba(58, 42, 34, 0.15)',
                      transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] },
                    }
                  : phase === 'forward' || phase === 'fading'
                  ? {
                      y: -8,
                      scale: 1.05,
                      opacity: 1,
                      rotate: 0,
                      boxShadow:
                        '0 20px 45px -10px rgba(58, 42, 34, 0.32), 0 0 0 1px rgba(184, 145, 58, 0.35)',
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    }
                  : { y: 0, scale: 1, opacity: 0.95 }
              }
              className="absolute inset-x-3 sm:inset-x-4 top-3 sm:top-4 bottom-3 sm:bottom-4 max-w-[88vw] max-h-[80svh] bg-[#FBF6EA] rounded-xl border border-gold-500/60 shadow-lg p-3 sm:p-5 flex flex-col items-center justify-center text-center select-none"
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

            {/* 4. Front Pocket: Left & Right Geometric Folds (z-index 3) */}
            <motion.div
              style={{ zIndex: 3 }}
              initial={{ y: 0, opacity: 1, scale: 1 }}
              animate={
                prefersReducedMotion
                  ? { opacity: phase === 'forward' ? 0 : 1 }
                  : phase === 'fading'
                  ? { y: '28%', opacity: 0, scale: 0.96 }
                  : { y: 0, opacity: 1, scale: 1 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.5 }
                  : { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
              }
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            >
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
            </motion.div>

            {/* 5. Centered Wax Seal (z-index 4/5 while closed, fades out during Phase 1) */}
            <motion.div
              style={{ zIndex: flapBehind ? 1 : 5 }}
              className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: phase === 'forward' ? 0 : 1 }
                    : isOpening
                    ? {
                        scale: 1.15,
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
            </motion.div>
          </div>

          {/* Primary Action Button: Open Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              prefersReducedMotion
                ? { opacity: phase === 'forward' ? 0 : 1 }
                : phase === 'fading'
                ? { opacity: 0, y: 16, transition: { duration: 0.5, ease: 'easeOut' } }
                : { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } }
            }
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
