"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface HeroSectionProps {
  onTryDemo: () => void
}
interface Particle {
  left: string
  top: string
  duration: number
  delay: number
  size: number
}

export default function HeroSection({ onTryDemo }: HeroSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  // Particles: generate random positions and timing only once
  // const [particles, setParticles] = useState<Particle[]>([])

  // Generate particles in useEffect to avoid impure function during render
  // useEffect(() => {
  //   setParticles(
  //     [...Array(8)].map(() => ({
  //       left: `${Math.random() * 100}%`,
  //       top: `${Math.random() * 100}%`,
  //       duration: 6 + Math.random() * 4,
  //       delay: Math.random() * 3,
  //       size: Math.random() * 3 + 1
  //     }))
  //   )
  // }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Floating background elements */}
      <motion.div className="absolute inset-0 opacity-10" animate={floatingAnimation}>
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <path d="M0,300 Q300,200 600,300 T1200,300" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.05)" />
          <circle cx="1000" cy="450" r="120" fill="rgba(255,255,255,0.05)" />
        </svg>
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center min-h-full px-4 md:px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "Poppins" }}
          variants={itemVariants}
        >
          Breaking Language Barriers in Air Travel
        </motion.h1>

        {/* <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]"
          variants={itemVariants}
        >
          Experience <span className="font-bold text-[#5e8f4d]">Smart Traveler</span> — the world&apos;s first real-time airport translation demo.
        </motion.p> */}

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" variants={itemVariants}>
          <Button
            onClick={onTryDemo}
            className="px-8 py-6 text-lg font-semibold bg-[#5e8f4d] hover:bg-[#4a7240] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl min-w-[160px]"
          >
            Try Live Demo
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg font-semibold border-2 border-[#5e8f4d] text-white hover:bg-[#5e8f4d] rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm min-w-[160px]"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Features */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12" variants={containerVariants}>
          {[
            { title: "Real-time Translation", description: "Instant voice and text translation for seamless communication" },
            { title: "Airport Context", description: "Specialized vocabulary for check-in, security, and boarding" },
            { title: "Multi-language", description: "Support for 50+ languages used in international travel" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-[#5e8f4d] transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, borderColor: "#5e8f4d" }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="text-[#5e8f4d] font-semibold text-lg mb-2">{feature.title}</div>
              <p className="text-white/90 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <svg className="w-6 h-6 text-[#5e8f4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>

        
      </motion.div>
    </section>
  )
}
