import { useState, useEffect } from "react";

function useDateDiff(startDate) {
    const [diff, setDiff] = useState({ months: 0, days: 0 });

    useEffect(() => {
        function calculateDiff() {
            const start = new Date(startDate);
            const now = new Date();

            let months =
                (now.getFullYear() - start.getFullYear()) * 12 +
                (now.getMonth() - start.getMonth());

            let days = now.getDate() - start.getDate();

            if (days < 0) {
                // borrow days from previous month
                months -= 1;
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); 
                days += prevMonth;
            }

            setDiff({ months, days });
        }

        calculateDiff();
        const interval = setInterval(calculateDiff, 1000 * 60 * 60 * 24);
        return () => clearInterval(interval);
    }, [startDate]);

    return diff;
}

export default function ProjectGameEngine() {

    const { months, days } = useDateDiff("2024-12-05");

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-gray-50 border-b">
                <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Custom Game Engine</h1>
                    <p className="text-xl text-gray-600">C# | OpenTK | {months} months {days} days in development</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Started after moving away from Unity to build deeper understanding of graphics programming. 
                        This isn't just about creating a game—it's about mastering the fundamentals of 3D rendering, 
                        shaders, and game engine architecture from the ground up.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Built entirely in C# using OpenTK (OpenGL wrapper), the engine now contains 35,000-40,000 lines 
                        of custom code with no external UI libraries—everything crafted from scratch to maximize learning.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom UI System</h3>
                            <p className="text-gray-600">
                                Text, images, and alignment collections system. No external libraries—built entirely 
                                from shader fundamentals up.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Voxel Terrain Generation</h3>
                            <p className="text-gray-600">
                                Node-based terrain customization system with planned geometric structure creation tools 
                                for houses and vegetation.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Player & Inventory System</h3>
                            <p className="text-gray-600">
                                World navigation, block placement/breaking, basic inventory, with planned custom 
                                abilities system (run, jump, attack).
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3D Modeling Suite</h3>
                            <p className="text-gray-600">
                                Blender-inspired 3D modeling tool, animation system, texture editor, and UV mapping—all 
                                integrated within the engine.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Technical Details */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Approach</h2>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>Why build from scratch?</strong> Instead of using existing libraries like ImGUI, 
                            every system was hand-coded to gain deep understanding of graphics programming fundamentals.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The UI system alone required weeks of shader learning, texture management, and rendering 
                            optimization. The 3D modeler draws inspiration from Blender but implements custom solutions 
                            throughout.
                        </p>
                    </div>
                </div>

                {/* Screenshots Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <img src="./src/assets/images/pillar-nodes.png" alt="Node System" className="object-cover" />
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <img src="./src/assets/images/pillar-terrain.png" alt="Node System" className="object-cover" />
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <img src="./src/assets/images/sword-texture.png" alt="Node System" className="object-cover" />
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <img src="./src/assets/images/uv-sword.png" alt="Node System" className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Links */}
                { false && <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Demo
                    </a>
                    <a href="#" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        GitHub Repository
                    </a>
                </div> }

            </div>
        </div>
    );
}
