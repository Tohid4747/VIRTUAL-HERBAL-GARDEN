import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ plant }) => {
  // Use the database image, or a fallback if it's empty
  const displayImage = plant.imageUrl || 'https://images.unsplash.com/photo-1466692476877-3392850b55e5?auto=format&fit=crop&q=80&w=400&h=300';

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-transparent hover:border-green-200">
      
      {/* 1. The New Image Section (Wrapped in a link) */}
      <Link to={`/plants/${plant.slug}`} className="block relative h-48 w-full overflow-hidden group">
        <img 
          src={displayImage} 
          alt={plant.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
            {plant.category}
          </span>
        </div>
      </Link>
      
      {/* 2. Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/plants/${plant.slug}`} className="mb-2 block">
          <h2 className="text-2xl font-bold text-green-900 hover:text-green-700 transition-colors">
            {plant.name}
          </h2>
          <p className="text-sm italic text-gray-500">{plant.scientificName}</p>
        </Link>
        
        <p className="text-gray-700 text-sm line-clamp-3 mb-4 flex-grow">
          {plant.description}
        </p>
        
        <div className="bg-green-50 p-3 rounded-lg mt-auto border border-green-100 mb-4">
          <span className="font-semibold text-green-800 text-sm">Region: </span>
          <span className="text-sm text-gray-700">{plant.region}</span>
        </div>

        {/* 3. Keeping your Favorites Button */}
        <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition-colors">
          Save to Favorites
        </button>
      </div>
    </div>
  );
};

export default PlantCard;