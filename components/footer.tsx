export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold mb-4" style={{ fontFamily: "Poppins" }}>
            © {currentYear} Ethiopia Tech Group — Proudly Made in Ethiopia 🇪🇹
          </p>
        </div>

        {/* Ethiopian Airlines color bar */}
        <div className="h-1 bg-gradient-to-r from-[#007A33] via-[#FFB81C] to-[#E4002B] rounded-full"></div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>Empowering global travel through technology and innovation</p>
        </div>
      </div>
    </footer>
  )
}
