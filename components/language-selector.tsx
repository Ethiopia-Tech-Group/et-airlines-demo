"use client"

interface LanguageSelectorProps {
  value: string
  onChange: (language: string) => void
}

export default function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 font-medium focus:outline-none focus:border-[#5e8fad] focus:ring-2 focus:ring-[#5e8fad]/10 transition-colors"
    >
      <option value="en">English</option>
      <option value="am">Amharic (አማርኛ)</option>
      <option value="ar">Arabic (العربية)</option>
      <option value="fr">French (Français)</option>
    </select>
  )
}
