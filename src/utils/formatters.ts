/**
 * Formatters for bilingual numbers and display
 */

const BANGLA_NUMERALS: Record<string, string> = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯',
}

/**
 * Converts English digits to Bengali numerals if language is 'bn'
 */
export function formatNumber(val: number | string, lang: 'bn' | 'en'): string {
  const str = String(val)
  if (lang === 'en') return str
  return str.replace(/[0-9]/g, (digit) => BANGLA_NUMERALS[digit] || digit)
}

/**
 * Left-pads a number with zeros and converts to appropriate script
 */
export function padZero(val: number, lang: 'bn' | 'en', length = 2): string {
  const padded = String(val).padStart(length, '0')
  return formatNumber(padded, lang)
}
