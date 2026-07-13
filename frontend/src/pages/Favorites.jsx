import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axiosClient.get('/favorites');
        setFavorites(res.data); 
      } catch (err) {
        setError('Failed to load favorites.');
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  const handleRemove = async (favoriteId) => {
    try {
      await axiosClient.delete(`/favorites/${favoriteId}`);
      setFavorites(favorites.filter(fav => fav._id !== favoriteId));
    } catch (err) {
      alert('Failed to remove from favorites.');
    }
  };

  if (loading) return <div className="text-center mt-20 text-forest text-2xl font-bold">Loading favorites...</div>;
  if (error) return <div className="text-center mt-20 text-red-700 text-xl font-semibold">{error}</div>;

  return (
    <div className="mt-8 mb-12">
      <h1 className="text-4xl text-forest text-center mb-10">My Saved Herbs</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          You haven't saved any plants to your garden yet!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((fav) => {
            const plant = fav.plant; 
            if (!plant) return null; 

            return (
              <div key={fav._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-sage/30 flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl text-forest font-display font-bold mb-1">{plant.name}</h3>
                  <p className="text-sm italic text-sage mb-4">{plant.scientificName}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{plant.description}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <button 
                    onClick={() => handleRemove(fav._id)}
                    className="w-full border-2 border-red-500 text-red-500 py-2 rounded hover:bg-red-50 transition font-bold"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}