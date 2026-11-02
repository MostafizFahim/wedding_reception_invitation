import React, { useState } from 'react'
import { LanguageProvider } from './hooks/useLanguage'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CountdownStrip } from './components/CountdownStrip'
import { Invitation } from './components/Invitation'
import { Venue } from './components/Venue'
import { RSVP } from './components/RSVP'
import { FloatingRSVP } from './components/FloatingRSVP'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { InvitationEnvelope } from './components/InvitationEnvelope'

export const App: React.FC = () => {
  // Check if digital invitation envelope has already been opened in this session
  const [envelopeOpen, setEnvelopeOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('envelope_opened') !== 'true'
    }
    return true
  })

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ivory-50 text-ink flex flex-col font-bangla-body selection:bg-gold-500/25 selection:text-ink">
        {/* Animated Introductory Digital Invitation Envelope */}
        <InvitationEnvelope
          isOpen={envelopeOpen}
          onOpen={() => setEnvelopeOpen(false)}
          onClose={() => setEnvelopeOpen(false)}
        />

        {/* Elegant Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Sticky Accessible Navigation Bar */}
        <Navbar onReplayEnvelope={() => setEnvelopeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          {/* Section 1: Hero with Painted Golden Wedding Arch */}
          <Hero />

          {/* Slim Crimson Countdown Strip directly below Hero */}
          <CountdownStrip />

          {/* Section 2: Merged Invitation Card + Connected Timeline & Calendar Actions */}
          <Invitation />

          {/* Section 3: Compact Map & Directions */}
          <Venue />

          {/* Section 4: RSVP & Collapsible Hosts/Welcoming Committee Accordion */}
          <RSVP />
        </main>

        {/* Compact Footer in Crimson-900 */}
        <Footer />

        {/* Mobile Floating RSVP Button */}
        <FloatingRSVP />
      </div>
    </LanguageProvider>
  )
}

export default App
