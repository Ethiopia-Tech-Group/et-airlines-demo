"use client"

import { forwardRef, useEffect, useState } from "react"
import QRCodeGenerator from "./qr-code-generator"
import PhoneSimulator from "./phone-simulator"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"

const HowItWorks = forwardRef<HTMLElement>(() => {
  

  return (
    <section  className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#F7F4E9] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5e8f4d] mb-4" style={{ fontFamily: "Poppins" }}>
           How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience Smart Traveler in action. Scan the QR code below with your phone to see real-time translation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Simulator */}
          <div className="flex-1 max-w-md">
            <div className="bg-black rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-black relative">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Phone Screen */}
              <div className="bg-white h-full min-h-[600px] rounded-[2rem] overflow-hidden pt-6">
                {/* Status Bar */}
                <div className="px-6 py-1 flex justify-between items-center text-xs text-black mb-4">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Ethiopian Airlines</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* App Content */}
                <div className="px-6">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#5e8f4d] to-[#00A04D] rounded-2xl px-6 py-4 mb-6 shadow-lg">
                    <h3 className="text-white font-bold text-xl text-center" style={{ fontFamily: "Poppins" }}>
                      CHECK-IN COUNTER
                    </h3>
                  </div>

                  {/* Message Alert */}
                  <div className="bg-[#FFB81C]/20 border-2 border-[#FFB81C] rounded-xl p-6 mb-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#FFB81C] rounded-full p-2 shrink-0">
                        <span className="text-white text-lg">⚠️</span>
                      </div>
                      <p className="text-[#5e8f4d] font-semibold text-lg leading-relaxed">
                        Your bag is too heavy. Please remove 2 kilograms or pay more.
                      </p>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="bg-[#F7F4E9] rounded-2xl p-6 shadow-inner">
                    <div className="text-center mb-4">
                      <p className="text-[#5e8f4d] font-medium text-sm">
                        Scan to translate this message
                      </p>
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-4 rounded-xl shadow-md">
                      
                    <QrCode />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-600 text-xs">
                        Point your camera at the QR code
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors">
                      Ask for Help
                    </button>
                    <button className="flex-1 bg-[#5e8f4d] text-white py-3 rounded-xl font-medium text-sm hover:bg-[#005A26] transition-colors">
                      Pay Extra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#5e8f4d] mb-4" style={{ fontFamily: "Poppins" }}>
                How to Try It
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5e8f4d] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Open Your Camera</h4>
                    <p className="text-gray-600 text-sm">
                      Use your phone&apos;s camera app or any QR code scanner
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#5e8f4d] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Scan the QR Code</h4>
                    <p className="text-gray-600 text-sm">
                      Point your camera at the QR code on the screen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#5e8f4d] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Experience Translation</h4>
                    <p className="text-gray-600 text-sm">
                      See the message instantly translated to your language
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm text-center">
                  💡 <strong>Tip:</strong> No need to take a screenshot - just scan directly from your screen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

HowItWorks.displayName = "HowItWorks"

export default HowItWorks