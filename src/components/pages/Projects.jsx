import { useState } from 'react'

import ProjectCard from '../utils/ProjectCard'
import ProjectUnity from '../projects/ProjectUnity'
import ProjectSAE from '../projects/ProjectSAE';
import ProjectGameEngine from '../projects/ProjectGameEngine';

export default function Projects() {
    const [showProjects, setShowProjects] = useState(true);
    const [currentProject, setCurrentProject] = useState(null);

    return (
        <div className="w-full">
            {showProjects ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard 
                    image="./src/assets/images/build-worlds.png"
                    title="Unity Project"
                    description="Unity voxel game"
                    onClick={() => {
                        setCurrentProject("unity");
                        setShowProjects(false);
                    }}
                />
                <ProjectCard 
                    image="./src/assets/images/site-sae.png"
                    title="SAE Project"
                    description="University website project"
                    onClick={() => {
                        setCurrentProject("sae");
                        setShowProjects(false);
                    }}
                />
                <ProjectCard 
                    image="./src/assets/images/pillar-terrain.png"
                    title="Game Engine Project"
                    description="C# Voxel game engine"
                    onClick={() => {
                        setCurrentProject("game-engine");
                        setShowProjects(false);
                    }}
                />
            </div>) : (
                <>
                    <div className="w-full flex items-start justify-start">
                        <button onClick={() => setShowProjects(true)} className="mb-4 text-blue-500 hover:underline">
                            &larr; Back to Projects
                        </button>
                    </div>
                    <div>
                        {currentProject === "unity" && <ProjectUnity />}
                        {currentProject === "sae" && <ProjectSAE />}
                        {currentProject === "game-engine" && <ProjectGameEngine />}
                    </div>
                </>       
            )}
        </div>
    )
}
