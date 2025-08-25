"use client"
import { useState } from "react";

export default function EnjeuxStage({ onImageClick }) {
  const [hovering, setHovering] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Enjeux du stage</h1>

        <div className="bg-white p-8 rounded-lg shadow-sm flex">
          <div className="w-1/2 relative h-full">
            <div
              className={`absolute top-20 bg-white p-8 rounded-lg shadow-sm text-center
                transform transition-all duration-500 ease-out
                ${hovering === "industrialisation" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50%] pointer-events-none"}`}
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧩</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Industrialisation</h3>
              <p className="text-gray-700 text-sm">Créer des plugins réutilisables pour optimiser les processus</p>
            </div>
            <div
              className={`absolute top-20 bg-white p-8 rounded-lg shadow-sm text-center
                transform transition-all duration-500 ease-out
                ${hovering === "fullstack" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50%] pointer-events-none"}`}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Outils No-Code</h3>
              <p className="text-gray-700 text-sm">Développer des solutions simples pour les clients</p>
            </div>
            <div
              className={`absolute top-20 bg-white p-8 rounded-lg shadow-sm text-center
                transform transition-all duration-500 ease-out
                ${hovering === "autonomie" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50%] pointer-events-none"}`}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Autonomie Technique</h3>
              <p className="text-gray-700 text-sm">Améliorer les compétences techniques de l'équipe</p>
            </div>
          </div>
          <div className="w-1/2 bg-white z-10">
            <h3 className="text-2xl font-semibold text-center mb-8">Enjeux Stratégiquese</h3>
            <div className="flex justify-center items-center">
              <div
                className="relative w-80 h-80 cursor-pointer"
                onClick={() => onImageClick && onImageClick("/placeholder.svg?key=axes-dev")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-50"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center hover:scale-105 transition-transform" onMouseEnter={() => setHovering("industrialisation")} onMouseLeave={() => setHovering(null)}>
                  <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white">🧩</span>
                  </div>
                  <span className="text-sm font-medium">Industrialisation</span>
                </div>
                <div className="absolute bottom-12 left-12 text-center hover:scale-105 transition-transform" onMouseEnter={() => setHovering("fullstack")} onMouseLeave={() => setHovering(null)}>
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto flex items-center justify-center ">
                    <span className="text-white">🛠️</span>
                  </div>
                  <span className="text-sm font-medium">Outils</span>
                </div>
                <div className="absolute bottom-12 right-12 text-center hover:scale-105 transition-transform" onMouseEnter={() => setHovering("autonomie")} onMouseLeave={() => setHovering(null)}>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white">📈</span>
                  </div>
                  <span className="text-sm font-medium">Autonomie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

/*
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Enjeux du stage</h1>

        <div className="relative">
          <div className="flex justify-center mb-12">
            <div
              className="relative w-96 h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onImageClick && onImageClick("/placeholder.svg?key=enjeux-central")}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Enjeux Stratégiques</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-blue-50 p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onImageClick && onImageClick("/placeholder.svg?key=industrialisation")}
            >
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🧩</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Industrialisation</h3>
              <p className="text-gray-700 text-sm">Créer des plugins réutilisables pour optimiser les processus</p>
            </div>

            <div
              className="bg-green-50 p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onImageClick && onImageClick("/placeholder.svg?key=no-code")}
            >
              <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">Outils No-Code</h3>
              <p className="text-gray-700 text-sm">Développer des solutions simples pour les clients</p>
            </div>

            <div
              className="bg-yellow-50 p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onImageClick && onImageClick("/placeholder.svg?key=autonomie")}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-yellow-600 mb-3">Autonomie Technique</h3>
              <p className="text-gray-700 text-sm">Améliorer les compétences techniques de l'équipe</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div
              className="flex items-center justify-center gap-8 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onImageClick && onImageClick("/placeholder.svg?key=agence-client")}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <span className="font-semibold">Agence</span>
              </div>

              <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-green-500 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Solutions
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <span className="font-semibold">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    */