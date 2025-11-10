"use client"

import { Mail, Phone, Globe, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="py-10 px-4 md:px-8 bg-gradient-to-r from-[#5e8f4d] to-[#5e8f4d]">
      <div className="max-w-4xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
            Partner With Us
          </h2>
          <p className="text-xl text-white/90">To redefine global air travel through innovation</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center group transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-semibold mb-2">Email</p>
              <a
                href="mailto:yahya@etg.et"
                className="text-white/80 hover:text-white transition-colors duration-300 underline"
              >
                yahya@etg.et
              </a>
            </div>

            <div className="text-center group transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-semibold mb-2">Phone</p>
              <a
                href="tel:0987818783"
                className="text-white/80 hover:text-white transition-colors duration-300 underline"
              >
                0987818783
              </a>
            </div>

            <div className="text-center group transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-semibold mb-2">Website</p>
              <a
                href="https://etg.et"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 underline"
              >
                etg.et
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex justify-center items-center gap-2 mb-6 text-white/90">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Bole Bulbula, Refenti Mall (5 minutes from airport)</span>
            </div>
            <div className="flex justify-center">
              <Button className="bg-white text-[#007A33] hover:bg-gray-100 font-semibold rounded-full px-8 py-2 transition-all duration-300">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
