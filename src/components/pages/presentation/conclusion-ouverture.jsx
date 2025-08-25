"use client"

export default function ConclusionOuverture({ onImageClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Conclusion & ouverture</h1>

        <div className="flex items-center justify-center">
          {/* Contenu */}
          <div className="space-y-8 w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Résumé du stage</h3>
              <p className="text-gray-700">
                Ce stage de 8 semaines chez Defacto m'a permis de développer des solutions techniques innovantes tout
                en acquérant une expérience professionnelle précieuse dans le domaine du développement web.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Ouverture sur l'avenir</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Développement professionnel et acquisition de nouvelles compétences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Projets personnels en développement full-stack</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Suivi des évolutions technologiques et nouvelles pratiques</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
