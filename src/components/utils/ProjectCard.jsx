export default function ProjectCard({ image, title, description, onClick, mounted, style }) {
    return (
        <div 
            className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg
                        transition-all duration-700 ease-out transform
                        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={style}
            onClick={onClick}
        >
            <div className="aspect-video bg-gray-100">
                <img 
                src={image || "/placeholder-project.jpg"} 
                alt={title}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}