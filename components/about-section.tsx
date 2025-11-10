"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FaGlobe, 
  FaRocket, 
  FaLightbulb, 
  FaHandshake, 
  FaPlane,
  FaMapMarkerAlt,
  FaUsers,
  FaChartLine,
  FaAward,
  FaHeart
} from "react-icons/fa"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8 as const
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

  const cardVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const, 
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  }


  const features = [
    { icon: FaRocket, title: "Innovation", description: "Cutting-edge technology solutions" },
    { icon: FaPlane, title: "Aviation", description: "Specialized in air travel" },
    { icon: FaHandshake, title: "Partnership", description: "Collaborating with Ethiopian Airlines" },
    { icon: FaGlobe, title: "Global Reach", description: "120+ destinations worldwide" }
  ]

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-[#5e8f4d] text-white font-bold rounded-full text-sm mb-4 shadow-lg space-x-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(94, 143, 77, 0.3)"
            }}
          >
            <FaHeart className="text-white" />
            <span>Made in Ethiopia</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "Poppins" }}
          >
            About <span className="text-[#5e8f4d]">Ethiopia Tech Group</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Pioneering the future of air travel through innovative technology solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                Revolutionizing Global Air Travel
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                Ethiopia Tech Group is at the forefront of transforming air travel through cutting-edge technology. 
                We&apos;ve developed{" "}
                <span className="font-bold text-[#5e8f4d] bg-[#f0f7ed] px-2 py-1 rounded-lg">
                  Smart Traveler for ET
                </span>
                , a state-of-the-art real-time translation system specifically engineered for Ethiopian Airlines&apos; global operations.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Our innovative solution empowers Ethiopian Airlines to enhance passenger communication across 120+ destinations worldwide. 
                By eliminating language barriers at airports, we&apos;re creating a more inclusive, efficient, and connected travel experience 
                for millions of passengers annually.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="flex justify-center mb-2"
                  >
                    <FaMapMarkerAlt className="text-2xl text-[#5e8f4d]" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-[#5e8f4d]">120+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="flex justify-center mb-2"
                  >
                    <FaUsers className="text-2xl text-[#5e8f4d]" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-[#5e8f4d]">Millions</div>
                  <div className="text-sm text-gray-600">Passengers Served</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#5e8f4d] to-[#7cb462] rounded-2xl p-8 text-white h-full">
                <div className="text-center">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="flex justify-center mb-4"
                  >
                    <FaGlobe className="text-5xl text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-4">Global Impact</h4>
                  <p className="text-white/90 leading-relaxed">
                    Connecting cultures and breaking down communication barriers across six continents through innovative technology made in Ethiopia.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" as const
                }}
              >
                <FaLightbulb />
                <span>Innovation</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  delay: 1
                }}
              >
                <FaChartLine />
                <span>Technology</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-12 border-t-2 border-gray-100 text-center"
          >
            <motion.blockquote
              className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              `Connecting passengers globally through the power of technology, made with pride in Ethiopia.`
            </motion.blockquote>
            <motion.div
              className="mt-6 flex items-center justify-center space-x-4"
              variants={itemVariants}
            >
              <motion.div
                className="w-12 h-12 bg-[#5e8f4d] rounded-full flex items-center justify-center text-white font-bold"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaAward />
              </motion.div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Ethiopia Tech Group</div>
                <div className="text-sm text-gray-600">Pioneering African Innovation</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
              whileHover={{ 
                y: -8,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                variants={iconVariants}
                whileHover="hover"
              >
                <feature.icon className="text-3xl text-[#5e8f4d]" />
              </motion.div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}