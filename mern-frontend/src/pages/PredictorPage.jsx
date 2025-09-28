import React, { useState } from 'react';
import axios from 'axios';

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
          // IMPORTANT: The key here MUST match your Node.js and Python backend
          image_file: base64String,
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

export default PredictorPage;
