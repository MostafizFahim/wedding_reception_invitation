import React from 'react'
import { LanguageProvider } from './hooks/useLanguage'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { Invitation } from './components/Invitation'
import { EventDetails } from './components/EventDetails'
import { Venue } from './components/Venue'
import { Gallery } from './components/Gallery'
import { Hosts } from './components/Hosts'
import { RSVP } from './components/RSVP'
import { FloatingRSVP } from './components/FloatingRSVP'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-emerald-deep text-ink flex flex-col font-bangla-body selection:bg-gold selection:text-emerald-deep">
        {/* Sticky Accessible Navigation Bar */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-1 w-full">
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: Countdown Timer */}
          <Countdown />

          {/* Section 3: Printed Dawat Invitation Card */}
          <Invitation />

          {/* Section 4: Event Details, .ics Add to Calendar & Directions */}
          <EventDetails />

          {/* Section 5: Venue & Interactive Google Maps */}
          <Venue />

          {/* Section 6: Photo Gallery (Disabled by default, enabled via content.ts) */}
          <Gallery />

          {/* Section 7: Family Lineage, Cordially Invited By & Welcoming Committee */}
          <Hosts />

          {/* Section 8: RSVP & Inquiries */}
          <RSVP />
        </main>

        {/* Section 9: Footer with Islamic Dua and Blessings */}
        <Footer />

        {/* Discreet Mobile Floating RSVP Action Button */}
        <FloatingRSVP />
      </div>
    </LanguageProvider>
  )
}

export default App
