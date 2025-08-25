import qrFourchetteApp from "../../../assets/images/qr-fourchette-app.png";

export default function ProjetQRFourchette({ onImageClick }) {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Projet 3 – Application QR-Fourchette</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Objectif</h3>
              <p className="text-gray-700">
                Refonte complète de l'application QR-Fourchette avec des technologies modernes pour améliorer les
                performances et l'expérience utilisateur.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Technologies utilisées</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Frontend :</strong> React avec Astro
                </li>
                <li>
                  • <strong>Backend :</strong> Node.js avec Express
                </li>
                <li>
                  • <strong>ORM :</strong> Prisma pour la gestion BDD
                </li>
                <li>
                  • <strong>Base de données :</strong> MySQL
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Fonctionnalités</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Gestion des menus restaurants</li>
                <li>• Personnalisation visuelle avancée</li>
                <li>• Interface d'administration</li>
              </ul>
            </div>

          </div>

          

          {/* Images */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4">
              <div
                className="w-full h-[310px] bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onImageClick && onImageClick(qrFourchetteApp)}
              >
                <img src={qrFourchetteApp} alt="QR Fourchette App" className="w-full h-full object-cover rounded-lg" />
              </div>
              <p className="text-sm text-gray-600 text-center">Capture de l'interface menu</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Défis techniques</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mises en place de l'application</li>
                <li>• Migration des données existantes</li>
                <li>• Utilisation correcte des technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
