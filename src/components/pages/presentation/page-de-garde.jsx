"use client"

export default function PageDeGarde({ onImageClick }) {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-4 relative">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-gradient-to-r from-blue-200 to-green-200"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Présentation de stage</h1>

        <div className="space-y-2 text-lg text-gray-700 mb-8">
          <p className="font-semibold">Schinkel Björnar</p>
          <p>Formation • Entreprise Defacto</p>
          <p>Narbonne • 2025</p>
        </div>

        {/* Logo Placeholders */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("src/assets/images/defacto-logo.png")}
          >
            <img src="src/assets/images/defacto-logo.png" alt="Defacto Logo" className="w-full h-full object-contain" />
          </div>
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("src/assets/images/iut-logo.png")}
          >
            <img src="src/assets/images/iut-logo.png" alt="IUT Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
