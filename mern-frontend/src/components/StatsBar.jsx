import React from 'react';

const StatsBar = () => {
  const stats = [
    { value: '97%', label: 'Accuracy' },
    { value: '50+', label: 'Diseases' },
    { value: '10k+', label: 'Plants Analyzed' },
    { value: '24/7', label: 'Available' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white p-4 rounded-xl shadow-lg border border-green-100 text-center transform hover:scale-105 transition-transform duration-300"
        >
          <div className="text-2xl font-bold text-green-700">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;