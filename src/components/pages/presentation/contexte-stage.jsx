"use client"

export default function ContexteStage({ onImageClick }) {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Contexte du stage
        </h1>

        <div className="flex">


          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Colonne gauche */}
            <div className="w-100 h-40 overflow-hidden flex items-center justify-center pb-10 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onImageClick && onImageClick("src/assets/images/map.png")}
            >
              <img src="src/assets/images/map.png" alt="Map" className=" h-40" />
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow-sm cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Informations générales
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Durée :</strong> 8 semaines
                </li>
                <li>
                  <strong>Période :</strong> Juin - Août 2025
                </li>
                <li>
                  <strong>Objectif :</strong> Développement web full-stack
                </li>
              </ul>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow-sm cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Missions principales
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Développement de plugins WordPress</li>
                <li>• Création d'applications web</li>
                <li>• Intégration d'APIs externes</li>
                <li>• Optimisation des performances</li>
              </ul>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow-sm h-full cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">PHP</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">WordPress</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">React</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
