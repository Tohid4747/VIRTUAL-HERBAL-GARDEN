// import React, { useState, useEffect, useMemo } from 'react';
// import { getAllPlants } from '../api/plantApi';
// import PlantCard from '../components/plant/PlantCard';
// import SearchFilterBar from '../components/plant/SearchFilterBar';

// const Garden = () => {
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Phase 1: New Filter States
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   useEffect(() => {
//     const fetchPlants = async () => {
//       try {
//         const data = await getAllPlants();
//         setPlants(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch plants from the database.');
//         setLoading(false);
//       }
//     };
//     fetchPlants();
//   }, []);

//   // Phase 1: High-Performance Client-Side Filtering
//   const filteredPlants = useMemo(() => {
//     return plants.filter(plant => {
//       // 1. Check if the text matches name, description, or benefits
//       const searchLower = searchTerm.toLowerCase();
//       const matchesSearch = 
//         plant.name.toLowerCase().includes(searchLower) ||
//         plant.description.toLowerCase().includes(searchLower) ||
//         plant.benefits.some(b => b.toLowerCase().includes(searchLower));

//       // 2. Check if the category matches (or if 'All' is selected)
//       const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;

//       // 3. Only return the plant if it matches BOTH conditions
//       return matchesSearch && matchesCategory;
//     });
//   }, [plants, searchTerm, selectedCategory]); // Re-runs instantly when any of these 3 change

//   if (loading) return <div className="text-center mt-20 text-xl font-semibold text-green-800">Loading the garden...</div>;
//   if (error) return <div className="text-center mt-20 text-red-600 font-semibold">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-7xl">
//       <h1 className="text-4xl font-extrabold text-center text-green-900 mb-6">Explore the Garden</h1>

//       {/* Lifted state passed down to the filter component */}
//       <SearchFilterBar 
//         searchTerm={searchTerm} 
//         setSearchTerm={setSearchTerm} 
//         selectedCategory={selectedCategory} 
//         setSelectedCategory={setSelectedCategory} 
//       />

//       <div className="text-center text-green-700 mb-8 font-medium">
//         Showing {filteredPlants.length} result{filteredPlants.length !== 1 ? 's' : ''}
//       </div>

//       {/* Conditional Rendering for Empty State */}
//       {filteredPlants.length === 0 ? (
//         <div className="text-center text-gray-500 mt-16 text-xl">
//           🌿 No herbs match your current search or category. Try adjusting your filters!
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredPlants.map(plant => (
//             <PlantCard key={plant._id} plant={plant} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Garden;


import React, { useState, useEffect, useMemo } from 'react';
import { getAllPlants } from '../api/plantApi';
import PlantCard from '../components/plant/PlantCard';
import SearchFilterBar from '../components/plant/SearchFilterBar';

const Garden = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Phase 1: New Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getAllPlants();
        setPlants(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch plants from the database.');
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  // Phase 1: High-Performance Client-Side Filtering
  const filteredPlants = useMemo(() => {
    return plants.filter(plant => {
      // 1. Check if the text matches name, description, or benefits
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        plant.name.toLowerCase().includes(searchLower) ||
        plant.description.toLowerCase().includes(searchLower) ||
        plant.benefits.some(b => b.toLowerCase().includes(searchLower));

      // 2. Check if the category matches (or if 'All' is selected)
      const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;

      // 3. Only return the plant if it matches BOTH conditions
      return matchesSearch && matchesCategory;
    });
  }, [plants, searchTerm, selectedCategory]); 

  if (loading) return <div className="text-center mt-20 text-xl font-semibold text-green-800">Loading the garden...</div>;
  if (error) return <div className="text-center mt-20 text-red-600 font-semibold">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-extrabold text-center text-green-900 mb-6">Testing thee Garden</h1>

      {/* Lifted state passed down to the filter component */}
      <SearchFilterBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      <div className="text-center text-green-700 mb-8 font-medium">
        Showing {filteredPlants.length} result{filteredPlants.length !== 1 ? 's' : ''}
      </div>

      {/* Conditional Rendering for Empty State */}
      {filteredPlants.length === 0 ? (
        <div className="text-center text-gray-500 mt-16 text-xl">
          🌿 No herbs match your current search or category. Try adjusting your filters!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Garden;