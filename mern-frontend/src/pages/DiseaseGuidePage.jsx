import React from 'react';

// Data for the disease guide
const diseaseData = [
  {
    id: 1,
    name: 'Tomato - Late Blight',
    description: 'Caused by the oomycete Phytophthora infestans, this is a devastating disease for tomatoes and potatoes.',
    symptoms: 'Large, dark-green to black lesions on leaves and stems, which often appear water-soaked. A white, downy mildew may appear on the underside of leaves.',
    imageUrl: 'https://placehold.co/600x400/228B22/FFFFFF?text=Late+Blight+Example'
  },
  {
    id: 2,
    name: 'Corn - Common Rust',
    description: 'Caused by the fungus Puccinia sorghi, it is one of the most common diseases affecting corn crops worldwide.',
    symptoms: 'Small, cinnamon-brown, powdery pustules on both upper and lower leaf surfaces. Pustules become darker as the plant matures.',
    imageUrl: 'https://placehold.co/600x400/FFA500/FFFFFF?text=Common+Rust+Example'
  },
  {
    id: 3,
    name: 'Apple - Scab',
    description: 'Caused by the fungus Venturia inaequalis, it affects leaves, blossoms, and fruits of apple and crabapple trees.',
    symptoms: 'Olive-green to brown spots on leaves and fruit. The spots on fruit become corky and cracked over time.',
    imageUrl: 'https://placehold.co/600x400/8B4513/FFFFFF?text=Apple+Scab+Example'
  }
];

const DiseaseGuidePage = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Disease Guide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {diseaseData.map(disease => (
          <div key={disease.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <img src={disease.imageUrl} alt={disease.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">{disease.name}</h2>
              <p className="text-gray-600 mb-4">{disease.description}</p>
              <h3 className="font-semibold text-gray-700">Symptoms:</h3>
              <p className="text-gray-600">{disease.symptoms}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseGuidePage;
