"use client"

export default function OrganisationMethodologie({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Organisation et méthodologie</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* GitHub Codespaces */}
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">GitHub Codespaces</h3>
            <p className="text-gray-600 mb-4">Environnement de développement cloud pour une productivité optimale</p>
          </div>

          {/* Communication */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Communication</h3>
            <p className="text-gray-600 mb-4">Échanges réguliers avec le maître de stage pour validation et conseils</p>
          </div>

          {/* Scrum */}
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="w-20 h-20 bg-green-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Scrum hebdomadaire</h3>
            <p className="text-gray-600 mb-4">Points d'équipe réguliers pour synchronisation et planification</p>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-8">Workflow de développement</h3>
          <div
            className="flex items-center justify-center gap-8 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("/placeholder.svg?key=dev-workflow")}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">☁️</span>
              </div>
              <span className="font-semibold text-sm">Codespaces</span>
            </div>

            <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded text-xs">
                Git
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">💻</span>
              </div>
              <span className="font-semibold text-sm">Poste local</span>
            </div>

            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-green-500 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded text-xs">
                Deploy
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <span className="font-semibold text-sm">Production</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
