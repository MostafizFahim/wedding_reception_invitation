import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CONTENT } from '../content'
import { IslamicStar } from '../assets/decorative-patterns'

interface AnimatedWeddingHeroProps {
  className?: string
}

export const AnimatedWeddingHero: React.FC<AnimatedWeddingHeroProps> = ({ className = '' }) => {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [bgLoaded, setBgLoaded] = useState(false)
  const [bgError, setBgError] = useState(false)

  // Listen to tab visibility to pause animations when hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible')
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const shouldAnimate = !prefersReducedMotion && isVisible

  const { desktop, mobile, background } = CONTENT.config.heroImages

  return (
    <div
      className={`relative w-full max-w-[290px] sm:max-w-[340px] md:max-w-[370px] aspect-[3/4] mx-auto select-none ${className}`}
      aria-label="Fahim & Joyee — Animated Wedding Hero"
    >
      <style>{`
        @keyframes petalDrift1 {
          0% { transform: translate3d(0, -20px, 0) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.85; }
          85% { opacity: 0.75; }
          100% { transform: translate3d(-35px, 380px, 0) rotate(180deg) scale(1); opacity: 0; }
        }
        @keyframes petalDrift2 {
          0% { transform: translate3d(0, -20px, 0) rotate(20deg) scale(0.9); opacity: 0; }
          20% { opacity: 0.9; }
          80% { opacity: 0.7; }
          100% { transform: translate3d(30px, 390px, 0) rotate(-140deg) scale(1.1); opacity: 0; }
        }
        @keyframes petalDrift3 {
          0% { transform: translate3d(0, -20px, 0) rotate(-10deg) scale(0.75); opacity: 0; }
          25% { opacity: 0.8; }
          75% { opacity: 0.8; }
          100% { transform: translate3d(-25px, 370px, 0) rotate(220deg) scale(0.95); opacity: 0; }
        }
        @keyframes lanternSwayLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3.2deg); }
        }
        @keyframes lanternSwayRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3.2deg); }
        }
        @keyframes bokehPulse {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.35; }
          50% { transform: translate3d(0, -6px, 0) scale(1.25); opacity: 0.85; }
        }
        @keyframes shimmerGlow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes archDrawIn {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        .anim-petal-1 { animation: petalDrift1 8.5s ease-in-out infinite; animation-delay: 0s; }
        .anim-petal-2 { animation: petalDrift2 9.5s ease-in-out infinite; animation-delay: 2.2s; }
        .anim-petal-3 { animation: petalDrift3 8s ease-in-out infinite; animation-delay: 4.5s; }
        .anim-petal-4 { animation: petalDrift1 10s ease-in-out infinite; animation-delay: 6s; }
        .anim-petal-5 { animation: petalDrift2 9s ease-in-out infinite; animation-delay: 3.5s; }

        .anim-lantern-l {
          transform-origin: 50% 0%;
          animation: lanternSwayLeft 5.2s ease-in-out infinite;
        }
        .anim-lantern-r {
          transform-origin: 50% 0%;
          animation: lanternSwayRight 5.8s ease-in-out infinite;
        }

        .anim-bokeh-1 { animation: bokehPulse 4.2s ease-in-out infinite; animation-delay: 0.3s; }
        .anim-bokeh-2 { animation: bokehPulse 5.1s ease-in-out infinite; animation-delay: 2s; }
        .anim-bokeh-3 { animation: bokehPulse 4.6s ease-in-out infinite; animation-delay: 1.2s; }
        .anim-bokeh-4 { animation: bokehPulse 5.4s ease-in-out infinite; animation-delay: 3.1s; }

        .anim-shimmer {
          animation: shimmerGlow 4.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-petal-1, .anim-petal-2, .anim-petal-3, .anim-petal-4, .anim-petal-5,
          .anim-lantern-l, .anim-lantern-r,
          .anim-bokeh-1, .anim-bokeh-2, .anim-bokeh-3, .anim-bokeh-4,
          .anim-shimmer {
            animation: none !important;
          }
        }
      `}</style>

      {/* Atmospheric Ambient Glow behind the whole frame */}
      <div
        className={`absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-pink-300/35 via-sky-200/30 to-pink-200/40 blur-2xl pointer-events-none ${
          shouldAnimate ? 'anim-shimmer' : ''
        }`}
      />

      {/* Floating Petals Layer 1 (Outside & Across the Arch) */}
      {shouldAnimate && (
        <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
          {/* Petal 1 */}
          <div className="absolute left-[12%] top-0 anim-petal-1">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path
                d="M7 0 C12 4, 15 12, 7 18 C-1 12, 2 4, 7 0 Z"
                fill="#EFA9BF"
                fillOpacity="0.85"
              />
            </svg>
          </div>
          {/* Petal 2 */}
          <div className="absolute left-[82%] top-0 anim-petal-2">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M8 0 C14 5, 17 14, 8 20 C-1 14, 2 5, 8 0 Z"
                fill="#F9D5E0"
                fillOpacity="0.9"
              />
            </svg>
          </div>
          {/* Petal 3 */}
          <div className="absolute left-[30%] top-0 anim-petal-3">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none">
              <path
                d="M6 0 C10 3, 13 10, 6 15 C-1 10, 2 3, 6 0 Z"
                fill="#B04C6C"
                fillOpacity="0.6"
              />
            </svg>
          </div>
          {/* Petal 4 */}
          <div className="absolute left-[70%] top-0 anim-petal-4">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
              <path
                d="M6.5 0 C11 4, 14 11, 6.5 17 C-1 11, 2 4, 6.5 0 Z"
                fill="#F4BAC9"
                fillOpacity="0.85"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Hanging Moroccan Lantern Left */}
      <div className="absolute -top-3 left-1 sm:left-2 z-20 pointer-events-none w-7 sm:w-9">
        <div className={shouldAnimate ? 'anim-lantern-l' : ''}>
          <svg viewBox="0 0 30 70" fill="none" className="w-full drop-shadow-sm">
            {/* Cord */}
            <line x1="15" y1="0" x2="15" y2="22" stroke="#EFA9BF" strokeWidth="1.2" />
            {/* Lantern Cap */}
            <path d="M10 22 L20 22 L18 26 L12 26 Z" fill="#B04C6C" />
            {/* Lantern Glass Body */}
            <path
              d="M9 26 L21 26 L23 44 L15 54 L7 44 Z"
              fill="#FFF5F8"
              stroke="#B04C6C"
              strokeWidth="1.2"
            />
            {/* Inner Candle Glow */}
            <ellipse cx="15" cy="38" rx="4" ry="7" fill="#FDE68A" fillOpacity="0.95" />
            <ellipse cx="15" cy="38" rx="2" ry="4" fill="#F59E0B" />
            {/* Bottom Finial */}
            <path d="M14 54 L16 54 L15 62 Z" fill="#B04C6C" />
            <circle cx="15" cy="63" r="1.5" fill="#B04C6C" />
          </svg>
        </div>
      </div>

      {/* Hanging Moroccan Lantern Right */}
      <div className="absolute -top-3 right-1 sm:right-2 z-20 pointer-events-none w-7 sm:w-9">
        <div className={shouldAnimate ? 'anim-lantern-r' : ''}>
          <svg viewBox="0 0 30 70" fill="none" className="w-full drop-shadow-sm">
            {/* Cord */}
            <line x1="15" y1="0" x2="15" y2="26" stroke="#8EC5E8" strokeWidth="1.2" />
            {/* Lantern Cap */}
            <path d="M10 26 L20 26 L18 30 L12 30 Z" fill="#3B82F6" opacity="0.8" />
            {/* Lantern Glass Body */}
            <path
              d="M9 30 L21 30 L23 48 L15 58 L7 48 Z"
              fill="#E8F5FD"
              stroke="#60A5FA"
              strokeWidth="1.2"
            />
            {/* Inner Candle Glow */}
            <ellipse cx="15" cy="42" rx="4" ry="7" fill="#FDE68A" fillOpacity="0.95" />
            <ellipse cx="15" cy="42" rx="2" ry="4" fill="#F59E0B" />
            {/* Bottom Finial */}
            <path d="M14 58 L16 58 L15 66 Z" fill="#3B82F6" opacity="0.8" />
            <circle cx="15" cy="67" r="1.5" fill="#3B82F6" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Main Luxury Arched Frame */}
      <div className="relative w-full h-full p-[2.5px] sm:p-[3px] rounded-t-[48%_30%] rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-b from-pink-300 via-sky-200 to-pink-300 shadow-pastel-card overflow-hidden">
        {/* Inner Arch Clipping Container */}
        <div className="relative w-full h-full rounded-t-[48%_30%] rounded-b-[14px] sm:rounded-b-[22px] overflow-hidden bg-gradient-to-b from-sky-100/60 via-pink-50/70 to-pink-100/80">
          
          {/* Optional Background Layer (Supplied via heroImages.background or graceful default) */}
          {background && !bgError && (
            <motion.div
              animate={
                shouldAnimate
                  ? {
                      scale: [1, 1.025, 1],
                    }
                  : undefined
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={background}
                alt=""
                aria-hidden="true"
                onLoad={() => setBgLoaded(true)}
                onError={() => setBgError(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${
                  bgLoaded ? 'opacity-90' : 'opacity-0'
                }`}
                loading="eager"
              />
            </motion.div>
          )}

          {/* Fallback Atmospheric Arch & Floral Trellis Setting (Always active behind couple) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Romantic Sunburst / Halo Glow */}
            <div
              className={`absolute top-[12%] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-b from-amber-100/60 via-pink-100/50 to-transparent blur-xl pointer-events-none ${
                shouldAnimate ? 'anim-shimmer' : ''
              }`}
            />

            {/* Subtle Islamic Arch Line Watermark (only shown if no background image loaded) */}
            {(!bgLoaded || bgError) && (
              <svg
                viewBox="0 0 320 400"
                fill="none"
                className="absolute inset-0 w-full h-full text-pink-300/40"
                preserveAspectRatio="none"
              >
                <path
                  d="M 25 390 L 25 160 C 25 80, 105 25, 160 12 C 215 25, 295 80, 295 160 L 295 390"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 38 390 L 38 165 C 38 92, 110 38, 160 26 C 210 38, 282 92, 282 165 L 282 390"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
              </svg>
            )}

            {/* Glowing Bokeh Dust Motes */}
            {shouldAnimate && (
              <>
                <div className="absolute left-[25%] top-[25%] w-2 h-2 rounded-full bg-amber-200/80 shadow-[0_0_8px_rgba(251,191,36,0.9)] anim-bokeh-1" />
                <div className="absolute right-[22%] top-[32%] w-2.5 h-2.5 rounded-full bg-pink-200/85 shadow-[0_0_8px_rgba(239,169,191,0.9)] anim-bokeh-2" />
                <div className="absolute left-[18%] bottom-[30%] w-1.5 h-1.5 rounded-full bg-sky-200/90 shadow-[0_0_6px_rgba(142,197,232,0.9)] anim-bokeh-3" />
                <div className="absolute right-[28%] bottom-[25%] w-2 h-2 rounded-full bg-amber-100/85 shadow-[0_0_8px_rgba(254,243,199,0.9)] anim-bokeh-4" />
              </>
            )}
          </div>

          {/* Couple Artwork Container with Natural Breathing-like Scale Motion */}
          <motion.div
            animate={
              shouldAnimate
                ? {
                    scale: [1, 1.014, 1],
                    y: [0, -2, 0],
                  }
                : undefined
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full flex items-end justify-center pt-8 sm:pt-10 pb-2 sm:pb-3 px-3 sm:px-4"
          >
            {/* If actual couple artwork is provided and loads without error */}
            {!imageError && (
              <picture className="w-full h-full flex items-end justify-center">
                <source media="(max-width: 640px)" srcSet={mobile} type="image/webp" />
                <img
                  src={desktop}
                  alt="Fahim & Joyee"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    // Graceful fallback: file missing or 404, never show broken icon
                    setImageError(true)
                  }}
                  className={`w-full h-full object-contain object-bottom drop-shadow-[0_8px_18px_rgba(46,58,77,0.22)] transition-opacity duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            )}

            {/* Graceful Fallback: Premium Realistic Aesthetic Couple Illustration */}
            {(!imageLoaded || imageError) && (
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end overflow-hidden">
                <svg
                  viewBox="0 0 340 420"
                  className="w-full h-full select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Groom Sherwani Gradient (Powder Blue) */}
                    <linearGradient id="sherwaniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F0F8FF" />
                      <stop offset="35%" stopColor="#D9ECF9" />
                      <stop offset="70%" stopColor="#BCDDF5" />
                      <stop offset="100%" stopColor="#9BC7EB" />
                    </linearGradient>

                    {/* Sherwani Embroidery Accent */}
                    <linearGradient id="sherwaniEmbroidery" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E0EDF8" />
                      <stop offset="50%" stopColor="#FDFBF7" />
                      <stop offset="100%" stopColor="#CADFF2" />
                    </linearGradient>

                    {/* Bride Saree / Lehenga Gradient (Blush Baby Pink) */}
                    <linearGradient id="brideLehengaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF0F5" />
                      <stop offset="30%" stopColor="#F9D5E0" />
                      <stop offset="70%" stopColor="#EFA9BF" />
                      <stop offset="100%" stopColor="#D97B99" />
                    </linearGradient>

                    {/* Bride Sheer Dupatta Gradient */}
                    <linearGradient id="dupattaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF5F8" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#F9D5E0" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#EFA9BF" stopOpacity="0.5" />
                    </linearGradient>

                    {/* Champagne Gold Accents */}
                    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE68A" />
                      <stop offset="50%" stopColor="#D97706" />
                      <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>

                    {/* Natural South Asian Skin Tones */}
                    <linearGradient id="skinGroom" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F7DFD2" />
                      <stop offset="100%" stopColor="#E8C4B0" />
                    </linearGradient>
                    <linearGradient id="skinBride" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FCECE2" />
                      <stop offset="100%" stopColor="#ECCDBE" />
                    </linearGradient>

                    {/* Realistic Soft Drop Shadows */}
                    <radialGradient id="shadowCast" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2E3A4D" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#2E3A4D" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Cast shadow under couple base */}
                  <ellipse cx="170" cy="405" rx="120" ry="12" fill="url(#shadowCast)" />

                  {/* ============================================================== */}
                  {/* GROOM (Left - Powder Blue Traditional Sherwani)                */}
                  {/* ============================================================== */}
                  <g id="groom-figure">
                    {/* Sherwani Body / Torso */}
                    <path
                      d="M 92 195 C 105 185, 130 185, 142 195 L 148 245 L 152 400 L 78 400 L 84 245 Z"
                      fill="url(#sherwaniGrad)"
                      stroke="#A5CDEC"
                      strokeWidth="0.8"
                    />

                    {/* Sherwani Fabric Folds & Side Slits */}
                    <path
                      d="M 115 195 L 115 400"
                      stroke="#85B7DE"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 98 250 C 105 285, 102 340, 96 395"
                      stroke="#9EC9EC"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M 132 250 C 126 295, 128 350, 134 395"
                      stroke="#9EC9EC"
                      strokeWidth="1"
                      fill="none"
                    />

                    {/* Sherwani Embroidered Placket & Royal Buttons */}
                    <path
                      d="M 112 198 L 118 198 L 118 315 L 112 315 Z"
                      fill="url(#sherwaniEmbroidery)"
                      stroke="#85B7DE"
                      strokeWidth="0.5"
                    />
                    {[208, 222, 236, 250, 264, 278, 292].map((y) => (
                      <circle key={y} cx="115" cy={y} r="1.6" fill="url(#goldAccent)" />
                    ))}

                    {/* Left Arm / Shoulder */}
                    <path
                      d="M 92 195 C 75 205, 68 240, 72 290 C 76 330, 84 350, 88 360 L 98 355 C 92 335, 85 290, 86 240 C 86 215, 90 205, 92 195 Z"
                      fill="url(#sherwaniGrad)"
                      stroke="#A5CDEC"
                      strokeWidth="0.8"
                    />
                    {/* Groom Hand */}
                    <path
                      d="M 88 355 C 89 365, 94 372, 98 370 C 102 368, 100 358, 98 352 Z"
                      fill="url(#skinGroom)"
                    />

                    {/* Right Arm (Gracefully turned toward bride) */}
                    <path
                      d="M 142 195 C 152 205, 158 230, 156 270 C 154 300, 150 330, 146 350 L 138 348 C 142 325, 146 295, 146 265 C 146 225, 144 205, 142 195 Z"
                      fill="url(#sherwaniGrad)"
                      stroke="#A5CDEC"
                      strokeWidth="0.8"
                    />

                    {/* Bandhgala Mandarin Collar */}
                    <path
                      d="M 106 182 C 106 177, 124 177, 124 182 L 126 197 C 120 200, 110 200, 104 197 Z"
                      fill="#D9ECF9"
                      stroke="#85B7DE"
                      strokeWidth="0.8"
                    />

                    {/* Neck & Jawline */}
                    <path
                      d="M 109 178 L 121 178 L 121 166 C 117 169, 113 169, 109 166 Z"
                      fill="url(#skinGroom)"
                    />

                    {/* Head & Realistic Face Contour */}
                    <path
                      d="M 106 142 C 106 126, 124 126, 124 142 C 124 158, 119 168, 115 168 C 111 168, 106 158, 106 142 Z"
                      fill="url(#skinGroom)"
                    />

                    {/* Styled Hair / Groom Coiffure */}
                    <path
                      d="M 105 142 C 104 128, 111 122, 119 122 C 126 122, 128 130, 127 138 C 125 130, 118 126, 112 128 C 107 130, 105 137, 105 142 Z"
                      fill="#2B2D42"
                    />
                    <path
                      d="M 106 130 C 109 124, 117 123, 125 125 C 127 120, 122 116, 115 116 C 108 116, 104 122, 106 130 Z"
                      fill="#1E202B"
                    />

                    {/* Subtle Pocket Square / Brooch */}
                    <path d="M 128 220 L 136 220 L 132 227 Z" fill="url(#goldAccent)" />
                  </g>

                  {/* ============================================================== */}
                  {/* BRIDE (Right - Blush Pink Bridal Lehenga & Saree)               */}
                  {/* ============================================================== */}
                  <g id="bride-figure">
                    {/* Voluminous Flared Bridal Lehenga Skirt */}
                    <path
                      d="M 172 260 C 185 258, 205 258, 218 260 L 255 400 L 145 400 Z"
                      fill="url(#brideLehengaGrad)"
                      stroke="#EFA9BF"
                      strokeWidth="0.8"
                    />

                    {/* Lehenga Vertical Pleats & Zari Borders */}
                    <path
                      d="M 195 260 C 196 300, 198 350, 200 400"
                      stroke="#D97B99"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M 180 262 C 178 305, 172 355, 168 400"
                      stroke="#D97B99"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M 210 262 C 215 305, 224 355, 232 400"
                      stroke="#D97B99"
                      strokeWidth="1"
                      fill="none"
                    />

                    {/* Scalloped Gold Zari Hemline */}
                    <path
                      d="M 145 394 Q 155 390 165 394 Q 175 390 185 394 Q 195 390 205 394 Q 215 390 225 394 Q 235 390 245 394 Q 252 390 255 394 L 255 400 L 145 400 Z"
                      fill="url(#goldAccent)"
                    />

                    {/* Fitted Bridal Blouse / Choli */}
                    <path
                      d="M 176 205 C 188 198, 205 198, 216 205 L 218 260 C 205 263, 185 263, 174 260 Z"
                      fill="url(#brideLehengaGrad)"
                      stroke="#EFA9BF"
                      strokeWidth="0.8"
                    />

                    {/* Choli Neckline & Delicate Necklace */}
                    <path
                      d="M 183 206 C 190 216, 202 216, 209 206"
                      stroke="url(#goldAccent)"
                      strokeWidth="2.2"
                      fill="none"
                    />
                    {/* Hanging Pearl Choker droplets */}
                    {[186, 191, 196, 201, 206].map((x) => (
                      <circle key={x} cx={x} cy={213} r="1" fill="#FDFBF7" />
                    ))}

                    {/* Neck & Graceful Face Contour */}
                    <path
                      d="M 191 192 L 201 192 L 201 180 C 198 182, 194 182, 191 180 Z"
                      fill="url(#skinBride)"
                    />
                    <path
                      d="M 188 152 C 188 136, 204 136, 204 152 C 204 168, 200 178, 196 178 C 192 178, 188 168, 188 152 Z"
                      fill="url(#skinBride)"
                    />

                    {/* Bride Traditional Hair Updo */}
                    <path
                      d="M 187 150 C 186 136, 193 130, 200 130 C 207 130, 212 136, 211 150 C 208 140, 204 136, 196 136 C 191 136, 188 142, 187 150 Z"
                      fill="#201C1D"
                    />
                    <ellipse cx="204" cy="144" rx="6" ry="8" fill="#1C1819" />

                    {/* Maang Tikka (Golden Forehead Ornament) */}
                    <line x1="196" y1="132" x2="196" y2="144" stroke="url(#goldAccent)" strokeWidth="1" />
                    <circle cx="196" cy="145" r="2" fill="url(#goldAccent)" />
                    <circle cx="196" cy="145" r="0.8" fill="#B04C6C" />

                    {/* Jhumka Earring */}
                    <circle cx="187" cy="158" r="1.2" fill="url(#goldAccent)" />
                    <path d="M 185 161 L 189 161 L 187 165 Z" fill="url(#goldAccent)" />

                    {/* Left Arm / Bangles (Chooda) */}
                    <path
                      d="M 176 205 C 168 215, 164 240, 166 280 C 168 305, 172 325, 174 340 L 182 338 C 178 320, 175 295, 174 275 C 174 245, 176 218, 176 205 Z"
                      fill="url(#brideLehengaGrad)"
                    />
                    {/* Traditional Red & Gold Bangles */}
                    <line x1="172" y1="322" x2="178" y2="320" stroke="url(#goldAccent)" strokeWidth="2" />
                    <line x1="173" y1="326" x2="179" y2="324" stroke="#B04C6C" strokeWidth="2" />
                    <line x1="174" y1="330" x2="180" y2="328" stroke="url(#goldAccent)" strokeWidth="2" />

                    {/* Bride Hand */}
                    <path
                      d="M 174 340 C 174 350, 178 356, 182 354 C 186 352, 184 342, 182 338 Z"
                      fill="url(#skinBride)"
                    />

                    {/* Elegant Draped Sheer Dupatta over Head & Shoulder */}
                    <path
                      d="M 186 136 C 188 126, 214 126, 218 138 C 224 155, 230 200, 235 250 C 240 310, 248 370, 252 400 L 236 400 C 230 365, 222 310, 218 260 C 214 220, 208 170, 206 150 C 202 144, 194 142, 186 136 Z"
                      fill="url(#dupattaGrad)"
                      stroke="#EFA9BF"
                      strokeWidth="0.8"
                    />

                    {/* Embroidered Dupatta Border (Zari Patti) */}
                    <path
                      d="M 187 134 C 195 129, 212 129, 217 136 C 223 150, 229 195, 234 245 C 239 305, 246 365, 250 400"
                      stroke="url(#goldAccent)"
                      strokeWidth="1.6"
                      strokeDasharray="3 2"
                      fill="none"
                    />
                  </g>

                  {/* Delicate Botanical Floral Arch Framing the Couple */}
                  <g id="floral-arch-foreground">
                    {/* Left Floral Sprig */}
                    <path
                      d="M 28 350 C 28 260, 42 160, 85 90 C 105 58, 130 40, 155 35"
                      stroke="#8EC5E8"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                      fill="none"
                    />
                    <circle cx="85" cy="90" r="5" fill="#FFF0F5" stroke="#EFA9BF" strokeWidth="1" />
                    <circle cx="85" cy="90" r="2.5" fill="#EFA9BF" />
                    <circle cx="56" cy="130" r="6" fill="#F9D5E0" stroke="#B04C6C" strokeWidth="0.8" />
                    <circle cx="40" cy="180" r="5" fill="#FFF0F5" stroke="#EFA9BF" strokeWidth="0.8" />

                    {/* Right Floral Sprig */}
                    <path
                      d="M 312 350 C 312 260, 298 160, 255 90 C 235 58, 210 40, 185 35"
                      stroke="#EFA9BF"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                      fill="none"
                    />
                    <circle cx="255" cy="90" r="5" fill="#E8F5FD" stroke="#8EC5E8" strokeWidth="1" />
                    <circle cx="255" cy="90" r="2.5" fill="#8EC5E8" />
                    <circle cx="284" cy="130" r="6" fill="#F9D5E0" stroke="#B04C6C" strokeWidth="0.8" />
                    <circle cx="300" cy="180" r="5" fill="#E8F5FD" stroke="#8EC5E8" strokeWidth="0.8" />

                    {/* Center Top Arch Keystone Jewel */}
                    <circle cx="170" cy="34" r="6" fill="#FFF5F8" stroke="#B04C6C" strokeWidth="1.2" />
                    <circle cx="170" cy="34" r="3" fill="url(#goldAccent)" />
                  </g>
                </svg>

                {/* Subtle Graceful Watermark Badge at Lower Arch Base */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white/85 border border-pink-200/90 shadow-sm flex items-center gap-1.5 backdrop-blur-[2px] pointer-events-none">
                  <IslamicStar size={10} className="text-accent" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-accent whitespace-nowrap">
                    Fahim &amp; Joyee
                  </span>
                  <IslamicStar size={10} className="text-accent" />
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  )
}
