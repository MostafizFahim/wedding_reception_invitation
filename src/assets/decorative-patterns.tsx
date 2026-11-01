import React from 'react'

/**
 * 8-Point Islamic Geometric Star (Khatim)
 */
export const IslamicStar: React.FC<{
  className?: string
  size?: number
  strokeWidth?: number
}> = ({ className = 'text-gold', size = 24, strokeWidth = 1.5 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        rx="1"
      />
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        rx="1"
        transform="rotate(45 20 20)"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

/**
 * Elegant Thin Gold Divider with Islamic Diamond
 */
export const GoldDivider: React.FC<{
  className?: string
  width?: string
}> = ({ className = '', width = 'max-w-xs' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${width} mx-auto my-6 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold to-gold/70" />
      <div className="relative flex items-center justify-center">
        <div className="w-2.5 h-2.5 rotate-45 border border-gold bg-emerald-deep" />
        <div className="absolute w-1 h-1 rounded-full bg-gold-shimmer" />
      </div>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold to-gold/70" />
    </div>
  )
}

/**
 * Delicate Islamic Arabesque Corner
 */
export const ArabesqueCorner: React.FC<{
  className?: string
  position?: 'tl' | 'tr' | 'bl' | 'br'
  size?: number
}> = ({ className = 'text-gold', position = 'tl', size = 48 }) => {
  const getTransform = () => {
    switch (position) {
      case 'tr':
        return 'scale(-1, 1)'
      case 'bl':
        return 'scale(1, -1)'
      case 'br':
        return 'scale(-1, -1)'
      default:
        return ''
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} pointer-events-none`}
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <path
        d="M2 48 V 16 C 2 8, 8 2, 16 2 H 48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 48 V 20 C 8 13, 13 8, 20 8 H 48"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="2 3"
        strokeOpacity="0.7"
      />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  )
}

/**
 * Arch Outline Graphic for Card Top
 */
export const ArchTopOrnament: React.FC<{
  className?: string
}> = ({ className = 'text-gold' }) => {
  return (
    <div className={`w-full flex justify-center items-center py-2 ${className}`}>
      <svg
        viewBox="0 0 240 30"
        className="w-48 h-6 stroke-current fill-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 10 25 C 60 25, 90 6, 120 4 C 150 6, 180 25, 230 25"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="120" cy="4" r="2.5" fill="currentColor" />
      </svg>
    </div>
  )
}
