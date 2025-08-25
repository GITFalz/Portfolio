"use client"

export default function DifficultesRencontrees({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Difficultés rencontrées</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Difficulté 1 */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-red-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🗄️</span>
            </div>
            <h3 className="text-xl font-semibold text-red-600 mb-4 text-center">Structure BDD complexe</h3>
            <p className="text-gray-700 text-center mb-6">
              Gestion des relations complexes entre les entités et optimisation des requêtes
            </p>
          </div>

          {/* Difficulté 2 */}
          <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-orange-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-4 text-center">Ordinateur ancien</h3>
            <p className="text-gray-700 text-center mb-6">
              Limitations matérielles impactant la vitesse de développement
            </p>
          </div>

          {/* Difficulté 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Apprentissage intensif</h3>
            <p className="text-gray-700 text-center mb-6">
              De nombreuses technologies à découvrir et maîtriser rapidement
            </p>
          </div>
        </div>

        {/* Solutions apportées */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-center mb-8">Solutions apportées</h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("/placeholder.svg?key=solutions-diagram")}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <p className="text-gray-700 text-sm">Temps de conception et planification plus important</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <p className="text-gray-700 text-sm">Utilisation de GitHub Codespaces</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <p className="text-gray-700 text-sm">Apprentissage par blocs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
