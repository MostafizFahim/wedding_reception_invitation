import React from 'react'

/**
 * Elegant Gold Divider with Leaf or Ring Ornament
 * Thin gold line (gold-500 hairline at ~60% opacity) with central ornament
 */
export const GoldDivider: React.FC<{
  className?: string
  width?: string
  variant?: 'leaf' | 'ring'
}> = ({ className = '', width = 'max-w-xs', variant = 'leaf' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${width} mx-auto my-4 ${className}`} aria-hidden="true">
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-500/80" />
      <div className="relative flex items-center justify-center text-gold-500">
        {variant === 'leaf' ? (
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-gold-500">
            <path
              d="M10 11C10 7 7 3 2 2C6 5 8 8 10 11Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
            <path
              d="M10 11C10 7 13 3 18 2C14 5 12 8 10 11Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
            <circle cx="10" cy="11" r="1.5" fill="currentColor" />
          </svg>
        ) : (
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="text-gold-500">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="11" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        )}
      </div>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-500/80" />
    </div>
  )
}

/**
 * Gold Corner Flourish
 */
export const GoldCorner: React.FC<{
  className?: string
  position?: 'tl' | 'tr' | 'bl' | 'br'
  size?: number
}> = ({ className = 'text-gold-500/40', position = 'tl', size = 32 }) => {
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
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  )
}

/**
 * Backward-compatible aliases for existing components
 */
export const PastelDivider = GoldDivider
export const PastelCorner = GoldCorner
export const IslamicStar: React.FC<{
  className?: string
  size?: number
  strokeWidth?: number
}> = ({ className = 'text-gold-500', size = 18, strokeWidth = 1.2 }) => {
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
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
