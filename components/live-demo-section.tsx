"use client"

import { forwardRef } from "react"
import QRcode from "./QR"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaPlane, FaMapMarkerAlt, FaDoorOpen, FaExclamationTriangle } from "react-icons/fa"

const LiveDemoSection = forwardRef<HTMLElement>((_, ref) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const screenVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section
      ref={ref}
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div ref={sectionRef} className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "Poppins" }}
          >
            Live Demo
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Experience real-time translations from Ethiopian Airlines counters
          </motion.p>
        </motion.div>

        {/* Airport Screen Simulation */}
        <motion.div
          variants={screenVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#5e8f4d] to-[#4a7240] px-6 py-3 flex justify-between items-center">
            <h3 className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: "Poppins" }}>
              ETHIOPIAN AIRLINES
            </h3>
            <span className="text-xs text-[#FFB81C] font-semibold bg-black/20 px-2 py-1 rounded">
              CHECK-IN COUNTER
            </span>
          </div>

          {/* Screen Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-8 bg-white">
            {/* Message Display */}
            <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
              {/* Alert Header */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mb-6"
              >
                <FaExclamationTriangle className="w-4 h-4 text-[#FFB81C]" />
                <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-wide">
                  Important Notice
                </span>
              </motion.div>

              {/* Main Message */}
              <motion.div
                variants={containerVariants}
                className="space-y-4 mb-8"
              >
                <motion.p
                  variants={itemVariants}
                  className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Poppins" }}
                >
                  Your bag is too heavy.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium"
                  style={{ fontFamily: "Inter" }}
                >
                  Please remove 2 kilograms or pay additional fees.
                </motion.p>
              </motion.div>

              {/* Flight Information */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 max-w-sm"
              >
                <div className="grid grid-cols-1 gap-3 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#5e8f4d]/10 rounded-lg flex items-center justify-center">
                      <FaPlane className="w-3 h-3 text-[#5e8f4d]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Flight</p>
                      <p className="text-sm font-semibold text-gray-900">ET 302</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#5e8f4d]/10 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-3 h-3 text-[#5e8f4d]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Destination</p>
                      <p className="text-sm font-semibold text-gray-900">Addis Ababa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#5e8f4d]/10 rounded-lg flex items-center justify-center">
                      <FaDoorOpen className="w-3 h-3 text-[#5e8f4d]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Gate</p>
                      <p className="text-sm font-semibold text-gray-900">A12</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* QR Code Area */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0 bg-gray-50 rounded-xl p-4 border border-gray-200"
            >
              <div className="text-center mb-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Scan for Translation</p>
                <p className="text-xs text-gray-500">Multiple languages available</p>
              </div>
              <QRcode />
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <div className="bg-gray-100 text-gray-600 text-center py-3 text-xs border-t border-gray-200">
            Proudly Made in Ethiopia 🇪🇹 — Powered by Ethiopia Tech Group
          </div>
        </motion.div>

        {/* Demo Instructions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-8"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm"
          >
            Scan the QR code to see how passengers receive translated messages in real-time
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
})

LiveDemoSection.displayName = "LiveDemoSection"

export default LiveDemoSection