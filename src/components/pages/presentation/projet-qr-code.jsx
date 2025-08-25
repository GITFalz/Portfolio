"use client"

export default function ProjetQRCode({ onImageClick }) {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Projet 1 – Plugin QR Code Nutritionnel</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Objectif</h3>
              <p className="text-gray-700">
                Développer un plugin WordPress permettant de générer automatiquement des QR codes contenant les
                informations nutritionnelles d'un vin.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Fonctionnalités</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Interface d'administration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Génération automatique de QR codes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Intégration avec les produits WooCommerce</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Personnalisation des informations affichées</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div
                className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onImageClick && onImageClick("src/assets/images/nutricode.png")}
              >
                <img src="src/assets/images/nutricode.png" alt="Interface Plugin" className="w-full h-full object-cover rounded-lg" />
              </div>
              <p className="text-sm text-gray-600 text-center">Capture de l'interface d'administration</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div
                  className="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center mb-2 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => onImageClick && onImageClick("src/assets/images/qr-code.png")}
                >
                  <img src="src/assets/images/qr-code.png" alt="QR Code" className="w-full h-full object-cover rounded-lg" />
                </div>
                <p className="text-xs text-gray-600 text-center">QR généré</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
