"use client"

import { useState, useEffect } from "react"

// Custom chevron icons as SVG components
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOff = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

// Custom cn function replacement
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

import PageDeGarde from "./presentation/page-de-garde"
import ContexteStage from "./presentation/contexte-stage"
import PresentationEntreprise from "./presentation/presentation-entreprise"
import MissionsPrincipales from "./presentation/missions-principales"
import EnjeuxStage from "./presentation/enjeux-stage"
import ProjetQRCode from "./presentation/projet-qr-code"
import ProjetDevis from "./presentation/projet-devis"
import ProjetQRFourchette from "./presentation/projet-qr-fourchette"
import OrganisationMethodologie from "./presentation/organisation-methodologie"
import DifficultesRencontrees from "./presentation/difficultes-rencontrees"
import CompetencesAcquises from "./presentation/competences-acquises"
import ImpactEntreprise from "./presentation/impact-entreprise"
import BilanPersonnel from "./presentation/bilan-personnel"
import ConclusionOuverture from "./presentation/conclusion-ouverture"
import Questions from "./presentation/questions"

const pages = [
    { component: PageDeGarde, title: "Page de garde" },
    { component: ContexteStage, title: "Contexte du stage" },
    { component: PresentationEntreprise, title: "Présentation de l'entreprise" },
    { component: MissionsPrincipales, title: "Missions principales" },
    { component: EnjeuxStage, title: "Enjeux du stage" },
    { component: ProjetQRCode, title: "Projet 1 – Plugin QR Code Nutritionnel" },
    { component: ProjetDevis, title: "Projet 2 – Plugin de devis interactif" },
    { component: ProjetQRFourchette, title: "Projet 3 – Application QR-Fourchette" },
    { component: OrganisationMethodologie, title: "Organisation et méthodologie" },
    { component: DifficultesRencontrees, title: "Difficultés rencontrées" },
    { component: CompetencesAcquises, title: "Compétences acquises" },
    { component: ImpactEntreprise, title: "Impact pour l'entreprise" },
    { component: BilanPersonnel, title: "Bilan personnel" },
    { component: ConclusionOuverture, title: "Conclusion & ouverture" },
    { component: Questions, title: "Questions" },
]

export default function Presentation() {
    const [currentPage, setCurrentPage] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true)
    const [zoomedImage, setZoomedImage] = useState(null)

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
        if (event.key === "r" || event.key === "R") {
            nextPage()
        } else if (event.key === "e" || event.key === "E") {
            prevPage()
        } else if (event.key === "Escape" && zoomedImage) {
            setZoomedImage(null)
        }
    }

    window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress)
    }, [currentPage, zoomedImage])

    const handleImageClick = (imageSrc) => {
        setZoomedImage(imageSrc)
    }

    const CurrentPageComponent = pages[currentPage].component

    return (
        <div className="w-full h-full bg-white overflow-hidden">
            {/* Navigation Header */}
            {showNavbar && (
                <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 0}
                                className={cn(
                                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-transparent hover:bg-gray-50 transition-colors",
                                currentPage === 0 && "opacity-50 cursor-not-allowed hover:bg-transparent",
                                )}
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Précédent
                            </button>
                            <button
                                onClick={nextPage}
                                disabled={currentPage === pages.length - 1}
                                className={cn(
                                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-transparent hover:bg-gray-50 transition-colors",
                                currentPage === pages.length - 1 && "opacity-50 cursor-not-allowed hover:bg-transparent",
                                )}
                            >
                                Suivant
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="text-sm text-gray-600">
                            {currentPage + 1} / {pages.length}
                        </div>

                        <div className="flex items-center gap-4">
                        <div className="text-sm font-medium text-gray-800 max-w-xs truncate">{pages[currentPage].title}</div>
                        <button
                            onClick={() => setShowNavbar(false)}
                            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                            title="Hide navbar (E: next, R: previous)"
                        >
                            <EyeOff className="w-4 h-4" />
                        </button>
                        </div>
                    </div>
                </header>
            )}

            {!showNavbar && (
                <button
                onClick={() => setShowNavbar(true)}
                className="fixed top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors shadow-lg"
                title="Show navbar"
                >
                <Eye className="w-4 h-4" />
                </button>
            )}

            {/* Page Content */}
            <main className={cn("overflow-hidden", showNavbar ? "pt-16" : "pt-0")} style={{ height: "100vh" }}>
                <CurrentPageComponent onImageClick={handleImageClick} />
            </main>

            {/* Page Indicator Dots */}
            {showNavbar && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                {pages.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === currentPage ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400",
                    )}
                    />
                ))}
                </div>
            )}

            {zoomedImage && (
                <div
                className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
                onClick={() => setZoomedImage(null)}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <img
                        src={zoomedImage || "/placeholder.svg"}
                        alt="Zoomed view"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                        />
                        <button
                        onClick={() => setZoomedImage(null)}
                        className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
