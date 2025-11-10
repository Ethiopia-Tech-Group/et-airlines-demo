'use client'

import QRCodeGenerator from "./qr-code-generator"

const QRcode = () => {
  const qrValue =
    "https://preview-smart-traveler-demo-kzmimrnc40cqole1o9xs.vusercontent.net/passenger?message=Your+bag+is+too+heavy.+Please+remove+2+kilograms+or+pay+more."

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white  p-6 rounded-2xl shadow-2xl">
        <QRCodeGenerator value={qrValue} />
      </div>

      <p className="text-gray-700 text-base font-medium mt-4 text-center">
        📱 Scan the QR code to see translation
      </p>
    </div>
  )
}

export default QRcode
