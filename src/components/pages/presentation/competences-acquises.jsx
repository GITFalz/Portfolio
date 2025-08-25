"use client"

export default function CompetencesAcquises({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Compétences acquises</h1>

        {/* Timeline/Escalier */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 h-1/3 bg-gradient-to-b from-blue-500 to-green-500"></div>
          <div className="absolute left-8 top-[33%] bottom-0 w-1 h-1/3 bg-gradient-to-b from-green-500 to-yellow-500"></div>
          <div className="absolute left-8 top-[66%] bottom-0 w-1 h-1/3 bg-gradient-to-b from-yellow-500 to-purple-500"></div>

          <div className="space-y-8">
            {/* Compétence 1 */}
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-white font-bold">WP</span>
              </div>
              <div
                className="bg-blue-50 p-6 rounded-lg flex-1 cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">WordPress avancé</h3>
                <p className="text-gray-700">
                  Développement de plugins personnalisés, hooks, actions, et intégration avec l'écosystème WordPress
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">Plugins</span>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">Hooks</span>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">WooCommerce</span>
                </div>
              </div>
            </div>

            {/* Compétence 2 */}
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-white font-bold">FS</span>
              </div>
              <div
                className="bg-green-50 p-6 rounded-lg flex-1 cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-3">Full-stack React/Node.js/MySQL</h3>
                <p className="text-gray-700">
                  Maîtrise complète de la stack moderne avec React, Node.js, Express, Prisma et MySQL
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">Prisma</span>
                </div>
              </div>
            </div>

            {/* Compétence 3 */}
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-white font-bold">PM</span>
              </div>
              <div
                className="bg-yellow-50 p-6 rounded-lg flex-1 cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">Gestion de projet</h3>
                <p className="text-gray-700">
                  Planification, organisation et suivi de projets en autonomie avec méthodologie agile
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">Scrum</span>
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">Autonomie</span>
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">Planning</span>
                </div>
              </div>
            </div>

            {/* Compétence 4 */}
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-white font-bold">DV</span>
              </div>
              <div
                className="bg-purple-50 p-6 rounded-lg flex-1 cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Développement et Versioning</h3>
                <p className="text-gray-700">
                  Maîtrise de Git/GitHub et de bonnes pratiques de développement
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image montée en compétences */}
        <div className="mt-16 text-center">
          <div
            className="w-64 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mx-auto flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("/placeholder.svg?key=skills-progression")}
          >
            <div className="text-white text-center">
              <div className="text-4xl mb-2">📈</div>
              <span className="font-semibold">Montée en compétences</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
