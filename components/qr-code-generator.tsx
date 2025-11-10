"use client"

import { useEffect, useRef } from "react"

interface QRCodeGeneratorProps {
  value: string
}

// Properly typed QRCode declaration
declare global {
  interface Window {
    QRCode?: QRCodeConstructor
  }

  interface QRCodeConstructor {
    new (
      element: HTMLElement,
      options: {
        text: string
        width: number
        height: number
        colorDark: string
        colorLight: string
        correctLevel: number
      }
    ): QRCodeInstance
    CorrectLevel: {
      L: number
      M: number
      Q: number
      H: number
    }
  }

  type QRCodeInstance = object

}

export default function QRCodeGenerator({ value }: QRCodeGeneratorProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!value || !containerRef.current) return

    const scriptSrc = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"

    const loadQRCodeScript = () =>
      new Promise<void>((resolve) => {
        if (window.QRCode) return resolve()
        const script = document.createElement("script")
        script.src = scriptSrc
        script.async = true
        script.onload = () => resolve()
        document.body.appendChild(script)
      })

    loadQRCodeScript().then(() => {
      if (containerRef.current && window.QRCode) {
        containerRef.current.innerHTML = ""

        new window.QRCode(containerRef.current, {
          text: value,
          width: 200,
          height: 200,
          colorDark: "#007A33",
          colorLight: "#FFFFFF",
          correctLevel: window.QRCode.CorrectLevel.H,
        })
      }
    })
  }, [value])

  return <div ref={containerRef} className="flex justify-center items-center" />
}
