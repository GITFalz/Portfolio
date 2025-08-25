"use client"

export default function ImpactEntreprise({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Impact pour l'entreprise</h1>

        {/* Schéma avant/après */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Transformation</h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Avant */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-red-600 mb-6">Avant</h4>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <span className="text-red-700">Développements ponctuels</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <span className="text-red-700">Code non réutilisable</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <span className="text-red-700">Clients dépendants</span>
                </div>
              </div>
            </div>

            {/* Après */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-green-600 mb-6">Après</h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-green-700">Plugins standardisés</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-green-700">Code modulaire</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-green-700">Clients autonomes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Impact 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🧩</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Plugins réutilisables</h3>
            <p className="text-gray-700 mb-4">
              Création d'une bibliothèque de plugins standardisés pour accélérer les développements futurs
            </p>
          </div>

          {/* Impact 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-sm text-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Outils no-code clients</h3>
            <p className="text-gray-700 mb-4">
              Interfaces simples permettant aux clients de gérer leurs contenus en autonomie
            </p>
          </div>

          {/* Impact 3 */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-sm text-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-yellow-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Base technique moderne</h3>
            <p className="text-gray-700 mb-4">
              Migration vers des technologies actuelles pour améliorer les performances et la maintenabilité
            </p>
          </div>
        </div>

        {/* Illustration autonomie */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <div
            className="flex items-center justify-center gap-8 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("/placeholder.svg?key=client-autonomy")}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <span className="font-semibold">Clients satisfaits</span>
            </div>

            <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-green-500 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-sm font-medium">
                Autonomie
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <span className="font-semibold">No-code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
