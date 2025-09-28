import React, { useState } from 'react';
import axios from 'axios';

// --- Mock Data for the Disease Guide ---
// In a real app, you might fetch this from a server or a JSON file.
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


// --- Page Components ---
// We define each "page" as a separate component inside this file.

/**
 * The main prediction component (your original App)
 */
const PredictorPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
      setPredictionResult(null);
      setError(null);
    }
  };

  const handlePrediction = async () => {
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError(null);
    setPredictionResult(null);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      const base64String = reader.result.split(',')[1];
      try {
        const response = await axios.post('http://localhost:5000/api/predict', {
          image: base64String,
        });
        setPredictionResult(response.data.output_string || 'No prediction result found.');
      } catch (err) {
        setError("Prediction failed. Please ensure backend servers are running.");
        console.error("API call error:", err);
      } finally {
        setLoading(false);
      }
    };
    reader.onerror = () => {
        setError("Failed to read the file.");
        setLoading(false);
    }
  };

  return (
    <div className="text-center p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">Plant Disease Classifier</h1>
      <p className="text-lg text-gray-600 mb-8">Upload a photo of a plant leaf to get a diagnosis with 97% accuracy.</p>
      
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-green-500 transition-colors duration-300">
          <input 
            type="file" 
            id="file-upload"
            className="hidden" 
            onChange={handleFileChange} 
            accept="image/*" 
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            <span className="mt-2 text-sm font-medium text-gray-600">{selectedFile ? selectedFile.name : 'Click to select an image'}</span>
          </label>
        </div>

        {previewImage && (
          <div className="mt-6">
            <img src={previewImage} alt="Selected leaf" className="max-w-xs mx-auto rounded-xl shadow-md" />
          </div>
        )}

        <button 
          onClick={handlePrediction} 
          disabled={!selectedFile || loading}
          className="mt-6 w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-transform transform hover:scale-105"
        >
          {loading ? 'Processing...' : 'Classify'}
        </button>

        {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
        
        {predictionResult && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-green-800">Prediction Result:</h2>
            <p className="text-md text-gray-700 mt-1">{predictionResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * The Disease Guide Page
 */
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

/**
 * The About Page
 */
const AboutPage = () => {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About This Project</h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6 text-lg text-gray-700">
        <p>
          This Plant Disease Classifier is a powerful tool designed to help farmers, gardeners, and agricultural professionals quickly identify potential diseases in their crops. By leveraging the power of deep learning, we provide a fast, accessible, and highly accurate diagnostic tool.
        </p>
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Our Technology</h2>
          <p>
            The core of this application is a sophisticated Convolutional Neural Network (CNN) model trained on thousands of images of plant leaves. The model has achieved an impressive **97% accuracy** on our test dataset, ensuring reliable results.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><span className="font-semibold">Frontend:</span> Built with React for a dynamic and responsive user experience.</li>
            <li><span className="font-semibold">Backend Bridge:</span> A Node.js and Express server acts as a proxy to handle web requests.</li>
            <li><span className="font-semibold">AI & Machine Learning:</span> The prediction engine is a Python server using the FastAPI framework, running our trained deep learning model.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Our Mission</h2>
          <p>
            Our goal is to make plant disease identification accessible to everyone. Early detection is key to preventing widespread crop damage, and by providing this tool, we hope to contribute to healthier plants and more sustainable agriculture.
          </p>
        </div>
      </div>
    </div>
  );
};


/**
 * The main App component that handles navigation
 */
function App() {
  // This state variable will control which page is visible
  const [currentPage, setCurrentPage] = useState('predictor');

  const renderPage = () => {
    switch (currentPage) {
      case 'predictor':
        return <PredictorPage />;
      case 'guide':
        return <DiseaseGuidePage />;
      case 'about':
        return <AboutPage />;
      default:
        return <PredictorPage />;
    }
  };

  const NavLink = ({ pageName, children }) => (
      <button
        onClick={() => setCurrentPage(pageName)}
        className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
          currentPage === pageName 
          ? 'bg-green-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-green-100'
        }`}
      >
        {children}
      </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* --- Navigation Bar --- */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-700">🌿 Plantify</span>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink pageName="predictor">Predictor</NavLink>
              <NavLink pageName="guide">Disease Guide</NavLink>
              <NavLink pageName="about">About</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
      
      {/* --- Footer --- */}
      <footer className="bg-white mt-auto py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>&copy; 2025 Plantify AI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
