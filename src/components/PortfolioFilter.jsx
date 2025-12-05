import React from 'react';

const PortfolioFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: '3d-renders', label: '3D Designs' }
  ];

  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeFilter === filter.id
              ? 'bg-gray-900 text-white shadow-lg'
              : 'border-2 border-gray-200 text-gray-700'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;