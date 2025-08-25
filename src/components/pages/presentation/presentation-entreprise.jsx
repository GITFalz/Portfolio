"use client"

export default function PresentationEntreprise({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Présentation de l'entreprise</h1>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Logo */}
          <div
            className="rounded-lg h-100 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform overflow-hidden"
            onClick={() => onImageClick && onImageClick("src/assets/images/defacto-endroit.png")}
          >
            <img src="src/assets/images/defacto-endroit.png" alt="Defacto Logo" className=" object-contain" />
          </div>

          <div className="space-y-8 overflow-hidden">
            {/* Projet 1 */}
            <div
              className="rounded-lg h-48 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform overflow-hidden"
              onClick={() => onImageClick && onImageClick("src/assets/images/qr-fourchette-wp.png")}
            >
              <img src="src/assets/images/qr-fourchette-wp.png" alt="Projet 1" className="object-contain" />
            </div>
            

            {/* Projet 2 */}
            <div
              className="rounded-lg h-48 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform overflow-hidden"
              onClick={() => onImageClick && onImageClick("src/assets/images/tonneliers.png")}
            >
              <img src="src/assets/images/tonneliers.png" alt="Projet 2" className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Activités</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Design graphique</li>
                <li>• Sites WordPress</li>
                <li>• Communication digitale</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Clients</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• PME locales</li>
                <li>• Artisans</li>
                <li>• Viticulteurs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Organisation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 6 personnes</li>
                <li>• Travail collaboratif</li>
                <li>• Projets variés</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
