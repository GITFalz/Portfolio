import { useState } from 'react'
import About from './About'
import Projects from './Projects'
import { Link } from 'react-router-dom'
import pfp from '../../assets/images/profile-photo.png'

export default function Home() {
    const [page, setPage] = useState('main')
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold cursor-pointer" onClick={() => setPage('main')}>Schinkel Björnar</h1>
                        </div>
                        <div className="flex items-center space-x-8">
                            <Link to="#about" className="hover:text-gray-600 cursor-pointer" onClick={() => setPage('about')}>About</Link>
                            <Link to="#projects" className="hover:text-gray-600 cursor-pointer" onClick={() => setPage('projects')}>Projects</Link>
                            <Link to="/presentation" className="hover:text-gray-600 cursor-pointer">Presentation</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        { page === "main" && (
                        <div className="text-center mb-8">
                            <div className="mb-4">
                                <img 
                                src={pfp}
                                alt="Profile" 
                                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Schinkel Björnar</h1>
                            <p className="text-xl text-gray-600">Developer</p>
                        </div>)}
                        
                        <div className="rounded-lg flex items-center justify-center">
                            { page === 'about' && <About /> }
                            { page === 'projects' && <Projects /> }
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-50 border-t">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center">
                        <p className="text-gray-500 text-sm">© 2025 Schinkel Björnar. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}