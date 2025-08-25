"use client"

export default function BilanPersonnel({ onImageClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Bilan personnel</h1>

        <div className="flex items-center justify-center">

          {/* Contenu */}
          <div className="order-1 lg:order-2 space-y-8 w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Stage formateur</h3>
              <p className="text-gray-700">
                Cette expérience m'a permis de développer mes compétences techniques tout en découvrant le monde
                professionnel dans un environnement bienveillant et stimulant.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Confirmation full-stack</h3>
              <p className="text-gray-700">
                J'ai confirmé mon intérêt pour le développement full-stack et ma capacité à gérer des projets complexes
                de bout en bout.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Atouts pour l'avenir</h3>
              <p className="text-gray-700">
                Les compétences acquises et l'expérience pratique constituent des atouts précieux pour la suite de mon
                parcours professionnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
