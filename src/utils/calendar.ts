import { CONTENT } from '../content'

/**
 * Formats a Date object into an iCalendar UTC timestamp string: YYYYMMDDTHHMMSSZ
 */
function formatIcsUtcDate(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  )
}

/**
 * Escapes characters for iCalendar text values per RFC 5545
 */
function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

/**
 * Generates an RFC 5545 compliant .ics file and prompts download
 */
export function downloadCalendarInvite(lang: 'bn' | 'en'): void {
  const startDate = new Date(CONTENT.event.isoDateTime)
  
  // If end time is configured, parse it; otherwise default to +4 hours after start
  let endDate: Date
  if (CONTENT.event.isoEndDateTime) {
    endDate = new Date(CONTENT.event.isoEndDateTime)
  } else {
    endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000)
  }

  const now = new Date()
  const uid = `fahim-joyee-wedding-${startDate.getTime()}@invitation`

  const summary =
    lang === 'bn'
      ? 'ফাহিম ও জয়ীর বিবাহোত্তর সংবর্ধনা (বৌভাত)'
      : "Fahim & Joyee's Bou Bhat (Wedding Reception)"

  const location =
    lang === 'bn'
      ? `${CONTENT.venue.name.bn}, ${CONTENT.venue.address.bn}`
      : `${CONTENT.venue.name.en}, ${CONTENT.venue.address.en}`

  const description =
    lang === 'bn'
      ? `সুধী, আসসালামু আলাইকুম।\n${CONTENT.translations.bn.dawat.bodyP1}\n${CONTENT.translations.bn.dawat.bodyP2}\n\nঅনুষ্ঠানস্থল: ${location}\nতারিখ: ${CONTENT.translations.bn.dateDisplay}, ${CONTENT.translations.bn.dayOfWeek}\nপ্রীতিভোজ: ${CONTENT.translations.bn.mealTime}\nগুগল ম্যাপ: ${CONTENT.venue.googleMapsDirectionsUrl}\nযোগাযোগ: ${CONTENT.contact.displayPhone}`
      : `Dear Sir/Madam, Assalamu Alaikum.\n${CONTENT.translations.en.dawat.bodyP1}\n${CONTENT.translations.en.dawat.bodyP2}\n\nVenue: ${location}\nDate: ${CONTENT.translations.en.dateDisplay}, ${CONTENT.translations.en.dayOfWeek}\nMeal: ${CONTENT.translations.en.mealTime}\nGoogle Maps: ${CONTENT.venue.googleMapsDirectionsUrl}\nInquiries: ${CONTENT.contact.internationalPhone}`

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fahim & Joyee//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcsUtcDate(now)}`,
    `DTSTART:${formatIcsUtcDate(startDate)}`,
    `DTEND:${formatIcsUtcDate(endDate)}`,
    `SUMMARY:${escapeIcsText(summary)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    `GEO:${CONTENT.venue.latitude};${CONTENT.venue.longitude}`,
    `URL:${CONTENT.venue.googleMapsDirectionsUrl}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Fahim & Joyee Wedding Reception Tomorrow',
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Fahim & Joyee Wedding Reception starts in 2 hours',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  const icsContent = icsLines.join('\r\n')
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'fahim-joyee-bou-bhat-invitation.ics'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(url)
}
