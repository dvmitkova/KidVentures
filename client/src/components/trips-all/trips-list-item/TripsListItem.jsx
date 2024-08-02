import { Link } from 'react-router-dom';

export default function TripsListItem({
    _id,
    title,
    imageUrl
}) {
    return (
        <div className="relative max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105" style={{ minWidth: '300px' }}>
            <Link to={`/trips/${_id}/details`} className="block">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                    <img
                        src={imageUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                    />
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-bold text-gray-800">{title}</h5>
                </div>
            </Link>
        </div>
    );
}