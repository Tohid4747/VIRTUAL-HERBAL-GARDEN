import React from 'react';

const categories = ['All', 'Ayurvedic', 'Medicinal', 'Aromatic', 'Culinary', 'Other'];

const SearchFilterBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col items-center mb-8 space-y-4">
      {/* Text Search Input */}
      <input
        type="text"
        placeholder="Search for herbs by name, description, or benefit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-2xl px-5 py-3 rounded-full border-2 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 text-lg shadow-sm"
      />
      
      {/* Category Filter Chips */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-green-800 text-white shadow-md'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterBar;