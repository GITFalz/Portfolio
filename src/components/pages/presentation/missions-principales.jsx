"use client"
import { useState } from "react";

export default function MissionsPrincipales({ onImageClick }) {
  const [hovering, setHovering] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Mes missions principales</h1>

        <div className="bg-white p-8 rounded-lg shadow-sm flex">
          <div className="w-1/2 bg-white z-10">
            <h3 className="text-2xl font-semibold text-center mb-8">Axes de développement</h3>
            <div className="flex justify-center items-center">
              <div
                className="relative w-80 h-80 cursor-pointer"
                onClick={() => onImageClick && onImageClick("/placeholder.svg?key=axes-dev")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-50"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center hover:scale-105 transition-transform" onMouseEnter={() => setHovering("plugins")} onMouseLeave={() => setHovering(null)}>
                  <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white">🧩</span>
                  </div>
                  <span className="text-sm font-medium">Plugins</span>
                </div>
                <div className="absolute bottom-12 left-12 text-center hover:scale-105 transition-transform" onMouseEnter={() => setHovering("fullstack")} onMouseLeave={() => setHovering(null)}>
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto flex items-center justify-center ">
                    <span className="text-white">💻</span>
                  </div>
                  <span className="text-sm font-medium">Full-Stack</span>
                </div>
                <div className="absolute bottom-12 right-12 text-center hover:scale-105 transition-transform" onMouseEnter={() => setHovering("autonomie")} onMouseLeave={() => setHovering(null)}>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white">⏰</span>
                  </div>
                  <span className="text-sm font-medium">Autonomie</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative h-full">
            <div
              className={`absolute top-20 bg-white p-8 rounded-lg shadow-sm text-center
                transform transition-all duration-500 ease-out
                ${hovering === "plugins" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50%] pointer-events-none"}`}
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧩</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Plugins WordPress</h3>
              <p className="text-gray-700">Développement de plugins personnalisés pour automatiser les processus</p>
            </div>
            <div
              className={`absolute top-20 bg-white p-8 rounded-lg shadow-sm text-center
                transform transition-all duration-500 ease-out
                ${hovering === "fullstack" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50%] pointer-events-none"}`}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Refonte QR-Fourchette</h3>
              <p className="text-gray-700">Modernisation complète de l'application avec React et Node.js</p>
            </div>
            <div
              className={`absolute top-20 bg-white p-8 rounded-lg shadow-sm text-center
                transform transition-all duration-500 ease-out
                ${hovering === "autonomie" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50%] pointer-events-none"}`}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Gestion autonome</h3>
              <p className="text-gray-700">Prise en charge complète de projets de A à Z</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
      <span className="text-white text-2xl">🧩</span>
    </div>
    <h3 className="text-xl font-semibold text-blue-600 mb-4">Plugins WordPress</h3>
    <p className="text-gray-700">Développement de plugins personnalisés pour automatiser les processus</p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
      <span className="text-white text-2xl">💻</span>
    </div>
    <h3 className="text-xl font-semibold text-green-600 mb-4">Refonte QR-Fourchette</h3>
    <p className="text-gray-700">Modernisation complète de l'application avec React et Node.js</p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
    <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
      <span className="text-white text-2xl">⏰</span>
    </div>
    <h3 className="text-xl font-semibold text-yellow-600 mb-4">Gestion autonome</h3>
    <p className="text-gray-700">Prise en charge complète de projets de A à Z</p>
  </div>
</div>
*/