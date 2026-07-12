import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch plants from the backend as soon as the component loads
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axiosClient.get('/plants');
        setPlants(res.data);
      } catch (err) {
        setError('Failed to fetch plants from the database.');
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-forest text-2xl font-bold">Loading garden...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-700 text-xl font-semibold">{error}</div>;
  }

  return (
    <div className="mt-8 mb-12">
      <h1 className="text-4xl text-forest text-center mb-10">Explore the Garden</h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div key={plant._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-sage/30 hover:shadow-lg transition-shadow">
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl text-forest font-display font-bold">{plant.name}</h3>
                <span className="bg-turmeric/20 text-forest text-xs px-3 py-1 rounded-full font-bold">
                  {plant.category}
                </span>
              </div>
              
              <p className="text-sm italic text-sage mb-4 font-semibold">{plant.scientificName}</p>
              <p className="text-gray-700 text-sm mb-5 line-clamp-3">{plant.description}</p>
              
              <div className="text-sm font-bold text-forest bg-parchment p-3 rounded">
                Region: <span className="font-normal text-gray-800">{plant.region}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}