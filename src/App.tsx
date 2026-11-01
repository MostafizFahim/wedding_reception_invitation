import React from 'react'
import { LanguageProvider } from './hooks/useLanguage'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { Venue } from './components/Venue'
import { RSVP } from './components/RSVP'
import { FloatingRSVP } from './components/FloatingRSVP'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-pink-50 text-ink flex flex-col font-bangla-body selection:bg-pink-200 selection:text-ink">
        {/* Sticky Accessible Navigation Bar */}
        <Navbar />

        {/* 4 Compact Sections (Max ~4 mobile screens of scrolling) */}
        <main className="flex-1 w-full">
          {/* Section 1: Hero with Animated Illustration & Embedded Countdown */}
          <Hero />

          {/* Section 2: Merged Invitation Card + 3-Row Details & Calendar Actions */}
          <Invitation />

          {/* Section 3: Compact Map & Directions */}
          <Venue />

          {/* Section 4: RSVP & Collapsible Hosts/Welcoming Committee Accordion */}
          <RSVP />
        </main>

        {/* Compact Footer */}
        <Footer />

        {/* Mobile Floating RSVP Button */}
        <FloatingRSVP />
      </div>
    </LanguageProvider>
  )
}

export default App
