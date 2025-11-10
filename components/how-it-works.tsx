"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaQrcode, FaCamera, FaLanguage, FaMobile, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"
import { FileWarning, MessageCircleWarning } from "lucide-react"

const HowItWorks = forwardRef<HTMLElement>((_, ref) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const phoneVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      x: -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  }

  const steps = [
    {
      icon: FaCamera,
      title: "Open Camera",
      description: "Use your phone's camera or QR scanner"
    },
    {
      icon: FaQrcode,
      title: "Scan QR Code",
      description: "Point camera at the code on screen"
    },
    {
      icon: FaLanguage,
      title: "Get Translation",
      description: "Message instantly translated to your language"
    }
  ]

  return (
    <section ref={ref} className="py-16 px-4 md:px-8 bg-white">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
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
            How It Works
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Scan the QR code to experience real-time translation
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Compact Phone Simulator */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-shrink-0"
          >
            <div className="bg-gray-900 rounded-[2rem] shadow-xl overflow-hidden border-[10px] border-gray-900 relative w-64">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-lg z-10"></div>
              
              {/* Phone Screen */}
              <div className="bg-white h-full min-h-[500px] rounded-[1.5rem] overflow-hidden pt-4">
                {/* Status Bar */}
                <div className="px-4 py-1 flex justify-between items-center text-xs text-black mb-3">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium">Ethiopian</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋</span>
                  </div>
                </div>

                {/* App Content */}
                <div className="px-4">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#5e8f4d] to-[#4a7240] rounded-xl px-4 py-3 mb-4">
                    <h3 className="text-white font-bold text-sm text-center tracking-wide">
                      CHECK-IN COUNTER
                    </h3>
                  </div>

                  {/* Message Alert */}
                  <div className="bg-[#FFB81C]/10 border border-[#FFB81C]/30 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-[#FFB81C] rounded-full p-1 shrink-0 mt-0.5">
                        <span className="text-white text-xs"><FaExclamationTriangle  /></span>
                      </div>
                      <p className="text-gray-800 font-medium text-xs leading-relaxed">
                        Your bag is too heavy. Remove 2kg or pay additional fees.
                      </p>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="text-center mb-3">
                      <p className="text-[#5e8f4d] font-medium text-xs">
                        Scan to translate
                      </p>
                    </div>
                    
                    <div className="flex justify-center mb-3">
                      <div className="bg-white p-3 rounded-lg border border-gray-300">
                        <FaQrcode className="w-16 h-16 text-gray-700" />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-500 text-xs">
                        Point camera at QR code
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium text-xs hover:bg-gray-200 transition-colors">
                      Get Help
                    </button>
                    <button className="flex-1 bg-[#5e8f4d] text-white py-2 rounded-lg font-medium text-xs hover:bg-[#4a7240] transition-colors">
                      Pay Fees
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 max-w-md"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Start Guide
              </h3>
              
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="bg-[#5e8f4d] text-white rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Tip Box */}
              <motion.div
                variants={itemVariants}
                className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200"
              >
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="w-3 h-3 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-800 text-xs">
                    <strong>Pro tip:</strong> No screenshot needed - scan directly from the screen
                  </p>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-4 flex items-center gap-2 text-gray-500 text-xs"
              >
                <FaMobile className="w-3 h-3" />
                <span>Works with any smartphone camera</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

HowItWorks.displayName = "HowItWorks"

export default HowItWorks