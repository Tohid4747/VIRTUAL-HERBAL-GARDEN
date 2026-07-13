import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Bring in the user state to conditionally show the Save button
  const { user } = useAuth();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axiosClient.get('/plants');
        setPlants(res.data);
        setFilteredPlants(res.data);
      } catch (err) {
        setError('Failed to fetch plants from the database.');
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  useEffect(() => {
    const results = plants.filter(plant => 
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlants(results);
  }, [searchTerm, plants]);

  // Function to handle saving a plant to favorites
  const handleSave = async (plantId) => {
    try {
      await axiosClient.post('/favorites', { plantId });
      alert('Plant saved to your favorites!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save plant.');
    }
  };

  if (loading) return <div className="text-center mt-20 text-forest text-2xl font-bold">Loading garden...</div>;
  if (error) return <div className="text-center mt-20 text-red-700 text-xl font-semibold">{error}</div>;

  return (
    <div className="mt-8 mb-12">
      <h1 className="text-4xl text-forest text-center mb-6">Explore the Garden</h1>
      
      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search for herbs by name, category, or benefit..."
          className="w-full p-4 border-2 border-sage rounded-full focus:outline-none focus:ring-2 focus:ring-turmeric text-lg shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p className="text-center text-sage text-sm mt-2 font-semibold">
          Showing {filteredPlants.length} result{filteredPlants.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <div key={plant._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-sage/30 hover:shadow-lg transition-shadow flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl text-forest font-display font-bold">{plant.name}</h3>
                  <span className="bg-turmeric/20 text-forest text-xs px-3 py-1 rounded-full font-bold">
                    {plant.category}
                  </span>
                </div>
                
                <p className="text-sm italic text-sage mb-4 font-semibold">{plant.scientificName}</p>
                <p className="text-gray-700 text-sm mb-5 line-clamp-3">{plant.description}</p>
                
                <div className="text-sm font-bold text-forest bg-parchment p-3 rounded mb-4">
                  Region: <span className="font-normal text-gray-800">{plant.region}</span>
                </div>
              </div>
              
              {/* Conditionally render the Save button if the user is logged in */}
              {user && (
                <div className="px-6 pb-6 mt-auto">
                  <button 
                    onClick={() => handleSave(plant._id)}
                    className="w-full bg-sage text-white py-2 rounded hover:bg-forest transition font-bold"
                  >
                    Save to Favorites
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-500 mt-8">
            No plants found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}