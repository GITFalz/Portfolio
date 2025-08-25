export default function ProjectCard({ image, title, description, onClick }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
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