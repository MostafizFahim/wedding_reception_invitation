import React from 'react'

/**
 * 8-Point Islamic Geometric Star (Khatim) in soft pastel line art
 */
export const IslamicStar: React.FC<{
  className?: string
  size?: number
  strokeWidth?: number
}> = ({ className = 'text-accent', size = 20, strokeWidth = 1.4 }) => {
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
        x="9"
        y="9"
        width="22"
        height="22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        rx="1"
      />
      <rect
        x="9"
        y="9"
        width="22"
        height="22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        rx="1"
        transform="rotate(45 20 20)"
      />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

/**
 * Soft Hairline Pastel Divider with Central Diamond
 */
export const PastelDivider: React.FC<{
  className?: string
  width?: string
}> = ({ className = '', width = 'max-w-xs' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${width} mx-auto my-4 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-pink-400/50 to-pink-400/80" />
      <div className="relative flex items-center justify-center">
        <div className="w-2 h-2 rotate-45 border border-accent bg-pink-50" />
      </div>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-400/50 to-sky-400/80" />
    </div>
  )
}

/**
 * Delicate Corner Flourish in soft rose
 */
export const PastelCorner: React.FC<{
  className?: string
  position?: 'tl' | 'tr' | 'bl' | 'br'
  size?: number
}> = ({ className = 'text-pink-400/60', position = 'tl', size = 36 }) => {
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
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}
