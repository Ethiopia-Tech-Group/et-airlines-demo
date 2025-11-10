"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FaBolt, 
  FaVolumeUp, 
  FaMobileAlt, 
  FaMagic,
  FaApple,
  FaGooglePlay
} from "react-icons/fa"

const benefits = [
  {
    icon: FaBolt,
    title: "Real-time Translation",
    description: "Instant airport announcements and messages in 120+ languages",
  },
  {
    icon: FaVolumeUp,
    title: "Voice Output",
    description: "Natural speech synthesis for multiple languages",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App",
    description: "Personalized travel assistance with offline access",
  },
  {
    icon: FaMagic,
    title: "AI-Powered",
    description: "Context-aware translations with advanced accuracy",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6 as const
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section ref={ref} className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
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
            Key Features
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-xl mx-auto"
          >
            Comprehensive mobile solution for seamless airport communication
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#5e8f4d]/30 transition-all duration-200 group"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#5e8f4d]/10 rounded-lg mb-4 group-hover:bg-[#5e8f4d]/20 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#5e8f4d]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* App Download Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-6 text-base"
          >
            Available for download
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-5 py-2.5 rounded-lg cursor-pointer flex items-center space-x-2 text-sm"
            >
              <FaApple className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on</div>
                <div className="font-semibold">App Store</div>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-5 py-2.5 rounded-lg cursor-pointer flex items-center space-x-2 text-sm"
            >
              <FaGooglePlay className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}