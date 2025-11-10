"use client"

import { useRef } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import LiveDemoSection from "@/components/live-demo-section"
import BenefitsSection from "@/components/benefits-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  const demoRef = useRef<HTMLElement>(null)

  const handleScrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="overflow-hidden">
      <HeroSection onTryDemo={handleScrollToDemo} />
      <AboutSection />
      <HowItWorks  />
      <LiveDemoSection ref={demoRef} />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
