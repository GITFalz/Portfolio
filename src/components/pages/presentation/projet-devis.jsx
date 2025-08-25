"use client"

export default function ProjetDevis({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Projet 2 – Plugin de devis interactif</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Objectif</h3>
              <p className="text-gray-700">
                Développer un système de devis interactif permettant aux propriétaires de configurer leurs options et aux clients de sélectionner rapidement leur produit.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Fonctionnalités clés</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Formulaire multi-étapes</li>
                <li>• Étapes et options personnalisables</li>
                <li>• Formulaire personnalisable</li>
                <li>• Email personnalisable</li>
                <li>• Envoi par email personnalisé</li>
                <li>• Calcul automatique du prix</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Défis techniques</h3>
              <p className="text-gray-700">
                Gestion complexe de la base de données pour stocker les configurations et maintenir la cohérence des
                données entre les étapes.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 pt-0">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onImageClick && onImageClick("src/assets/images/page-devis.png")}
              >
                <img src="src/assets/images/page-devis.png" alt="Formulaire de Devis" className="w-full h-full object-cover rounded-lg" />
              </div>
              <p className="text-sm text-gray-600 text-center">Capture de la page de devis</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div
                className="w-full h-64 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-lg flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onImageClick && onImageClick("src/assets/images/structure-bd.png")}
              >
                <img src="src/assets/images/structure-bd.png" alt="Structure de BDD" className="w-full h-full object-cover rounded-lg" />
              </div>
              <p className="text-sm text-gray-600 text-center">Structure de base de données simplifiée</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
