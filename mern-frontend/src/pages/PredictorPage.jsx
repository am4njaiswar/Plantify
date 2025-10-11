import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import { diseaseExists } from '../data/diseaseData';

const PredictorPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setPreviewImage(URL.createObjectURL(file));
        setPredictionResult(null);
        setError(null);
      } else {
        setError("Please select an image file.");
      }
    }
  };

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
        },{
          withCredentials: true,
        });
        
        const result = response.data.output_string || 'No prediction result found.';
        setPredictionResult(result);
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

  const handleLearnMore = () => {
  if (predictionResult) {
    console.log("Raw prediction result:", predictionResult);
    
    let diseaseId = '';
    
    // Method 1: Extract text between single quotes
    const match = predictionResult.match(/'([^']+)'/);
    if (match && match[1]) {
      diseaseId = match[1];
    } 
    // Method 2: Look for disease pattern with underscores
    else {
      const diseasePattern = /([A-Za-z]+___[A-Za-z_]+)/;
      const diseaseMatch = predictionResult.match(diseasePattern);
      if (diseaseMatch && diseaseMatch[1]) {
        diseaseId = diseaseMatch[1];
      }
    }
    
    console.log("Extracted disease ID:", diseaseId);
    
    if (diseaseId) {
      // Check if disease exists in our database
      if (diseaseExists(diseaseId)) {
        navigate(`/disease/${diseaseId}`);
      } else {
        setError(`Detailed information for "${diseaseId}" is not available yet.`);
        console.warn(`Disease ID not found: ${diseaseId}`);
        
        // Debug: Show available diseases in console
        console.log("Available diseases:", Object.keys(diseaseData));
      }
    } else {
      setError("Could not extract disease information from the prediction.");
    }
  }
};

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewImage(null);
    setPredictionResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plant Disease <span className="text-green-600">Detector</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a clear photo of a plant leaf, and our AI will analyze it for common diseases with 97% accuracy.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <div 
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
              dragActive 
                ? 'border-green-500 bg-green-50 scale-105' 
                : 'border-gray-300 hover:border-green-400 bg-gray-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <input 
              type="file" 
              id="file-upload"
              className="hidden" 
              onChange={handleFileChange} 
              accept="image/*" 
            />
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedFile ? 'Image Selected' : 'Upload Leaf Image'}
                </h3>
                <p className="text-gray-600">
                  {selectedFile 
                    ? selectedFile.name 
                    : 'Drag & drop or click to select an image'
                  }
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Supports JPG, PNG, WEBP • Max 5MB
                </p>
              </div>
            </div>
          </div>

          {/* Preview Image with Clear Button */}
          {previewImage && (
            <div className="mt-8 text-center">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Image Preview</h3>
                <button 
                  onClick={clearSelection}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Clear Selection
                </button>
              </div>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-lg">
                <img 
                  src={previewImage} 
                  alt="Selected leaf" 
                  className="max-w-xs max-h-64 rounded-xl object-cover mx-auto"
                />
              </div>
            </div>
          )}

          {/* Predict Button */}
          <button 
            onClick={handlePrediction} 
            disabled={!selectedFile || loading}
            className="mt-8 w-full bg-green-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            {loading ? '🔍 Analyzing...' : '🌿 Analyze for Diseases'}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 font-semibold text-center">{error}</p>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Prediction Result */}
        {predictionResult && !loading && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Analysis Complete</h2>
              
              <div className="bg-green-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Prediction Result:</h3>
                <p className="text-xl text-gray-800 font-medium">{predictionResult}</p>
              </div>

              <button 
                onClick={handleLearnMore}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
              >
                📚 Learn More About This Disease
              </button>
              
              <button 
                onClick={clearSelection}
                className="block mx-auto text-gray-600 hover:text-gray-800 font-medium text-sm"
              >
                Analyze another image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictorPage;