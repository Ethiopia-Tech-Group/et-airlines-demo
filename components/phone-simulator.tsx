"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "./language-selector"
import QRCodeGenerator from "./qr-code-generator"

interface PhoneSimulatorProps {
  qrScanned: boolean
}

const translations: Record<string, string> = {
  en: "Your bag is too heavy. Please remove 2 kilograms or pay more.",
  am: "የእርስዎ ክييስ በጣም ከባድ ነው። እባክዎ 2 ኪሎግራም ያስወግዱ ወይም ተጨማሪ ይክፈሉ።",
  ar: "حقيبتك ثقيلة جداً. يرجى إزالة كيلوغرامين أو دفع رسم إضافي.",
  fr: "Votre sac est trop lourd. Veuillez retirer 2 kilogrammes ou payer un supplément.",
}

export default function PhoneSimulator({ qrScanned }: PhoneSimulatorProps) {
  const [qrValue, setQrValue] = useState<string>("")

  const handleGenerateQR = () => {
    // Create a demo message with translation demo URL
    const demoUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/passenger?message=Your+bag+is+too+heavy.+Please+remove+2+kilograms+or+pay+more.`
    setQrValue(demoUrl)
  }
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en")
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVoice = () => {
    setIsPlaying(true)
    const text = translations[selectedLanguage] || translations.en

    // Use browser's speech synthesis
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang =
      selectedLanguage === "en"
        ? "en-US"
        : selectedLanguage === "am"
          ? "am-ET"
          : selectedLanguage === "ar"
            ? "ar-SA"
            : selectedLanguage === "fr"
              ? "fr-FR"
              : "en-US"
    utterance.rate = 1
    utterance.pitch = 1

    utterance.onend = () => setIsPlaying(false)
    speechSynthesis.speak(utterance)
  }

  const currentTranslation = translations[selectedLanguage] || translations.en

  return (
    <div className="w-full max-w-5xl">
          <div className="mb-8">
          <Button
            onClick={handleGenerateQR}
            className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-[#007A33] text-white hover:bg-[#005A26] rounded-lg"
          >
            Generate QR Code
          </Button>
        </div>
      {/* Phone Frame */}
      <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 aspect-video flex flex-col">
        {/* Phone Status Bar */}
        <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-xs">
          <span>9:41</span>
          <span>Ethiopian Airlines</span>
          <span>●●●●●</span>
        </div>

        {/* Phone Screen */}
        <div className="flex-1 bg-white flex flex-col">
          {qrScanned ? (
            <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#007A33]">
              <div className="bg-gradient-to-r from-[#007A33] to-[#00A04D] px-6 py-4">
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Poppins" }}>
                  CHECK-IN COUNTER
                </h3>
              </div>

              <div className="p-8">
                <div className="bg-[#FFB81C]/20 border-2 border-[#FFB81C] rounded-lg p-6 mb-6">
                  <p className="text-center text-[#007A33] font-semibold text-lg leading-relaxed">
                    Your bag is too heavy. Please remove 2 kilograms or pay more.
                  </p>
                </div>

                {qrValue && (
                  <div className="bg-[#F7F4E9] p-4 rounded-lg flex items-center justify-center">
                    <QRCodeGenerator value={qrValue} />
                  </div>
                )}

                {!qrValue && (
                  <div className="bg-[#E8E5DC] p-8 rounded-lg flex items-center justify-center text-center">
                    <p className="text-gray-600">Generate QR code to display here</p>
                  </div>
                )}

                <p className="text-center text-sm text-gray-600 mt-4">Scan with your phone to translate</p>
              </div>
            </div>
          </div> 
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <div className="text-5xl mb-4">📱</div>
              <p className="text-gray-600 font-semibold">Scan the QR code on the left to see the translation</p>
            </div>
          )}
        </div>
      </div>

      {/* Phone Bottom Notch */}
      <div className="bg-black h-6 rounded-b-3xl mx-auto w-32"></div>
    </div>
  )
}
