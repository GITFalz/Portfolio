import defactoLogo from "../../../assets/images/defacto-logo.png";
import iutLogo from "../../../assets/images/iut-logo.png";

export default function Questions({ onImageClick }) {
  return (
    <div className="min-h-screen bg-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Point d'interrogation stylisé */}
        <div className="mb-12">
          <div
            className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-8 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick("/placeholder.svg?key=question-mark")}
          >
            <span className="text-white text-6xl font-bold">?</span>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-8">Questions</h1>

        <p className="text-2xl text-gray-600 mb-16">Merci de votre attention</p>

        {/* Logos */}
        <div className="flex justify-center items-center gap-12 mb-8">
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick(defactoLogo)}
          >
            <img src={defactoLogo} alt="DEFACTO Logo" className="w-16 h-16 object-contain" />
          </div>
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onImageClick && onImageClick(iutLogo)}
          >
            <img src={iutLogo} alt="IUT Logo" className="w-16 h-16 object-contain" />
          </div>
        </div>

        <div className="text-lg text-gray-700">
          <p className="font-semibold">Schinkel Björnar</p>
          <p>Stage de développement web • 2025</p>
        </div>

        {/* Decoration */}
        <div
          className="mt-16 flex justify-center gap-4 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onImageClick && onImageClick("/placeholder.svg?key=final-decoration")}
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
