import React from "react";
import { useParams, Link } from "react-router-dom";
import { getDiseaseById } from "../data/diseaseData";

const DiseaseDetailPage = () => {
  const { diseaseId } = useParams();
  const disease = getDiseaseById(diseaseId);

  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Disease Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested disease information is not available.
          </p>
          <Link
            to="/predict"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Predictor
          </Link>
        </div>
      </div>
    );
  }

  const SeverityBadge = ({ severity }) => {
    const colors = {
      None: "bg-green-100 text-green-800 border border-green-200",
      Low: "bg-blue-100 text-blue-800 border border-blue-200",
      Medium: "bg-yellow-100 text-yellow-800 border border-yellow-200",
      High: "bg-orange-100 text-orange-800 border border-orange-200",
      "Very High": "bg-red-100 text-red-800 border border-red-200",
    };

    return (
      <span
        className={`px-4 py-2 rounded-full text-sm font-semibold ${colors[severity]}`}
      >
        {severity} Severity
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/predict"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-green-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Predictor
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Image */}
          <div className="xl:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-2xl p-6 border border-green-100">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={disease.imageUrl}
                  alt={disease.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-700">{disease.severity}</div>
                  <div className="text-xs text-green-600 font-medium">Severity</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-700">{disease.type}</div>
                  <div className="text-xs text-blue-600 font-medium">Type</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Disease Header */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {disease.name}
                  </h1>
                  {disease.scientificName && (
                    <p className="text-lg text-gray-600 italic">
                      {disease.scientificName}
                    </p>
                  )}
                </div>
                <SeverityBadge severity={disease.severity} />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {disease.description}
                </p>
              </div>

              {/* Affected Plants */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Affected Plants
                </h3>
                <div className="flex flex-wrap gap-3">
                  {disease.affectedPlants.map((plant, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Symptoms Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Symptoms</h2>
                </div>
                <ul className="space-y-3">
                  {disease.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prevention Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Prevention</h2>
                </div>
                <ul className="space-y-3">
                  {disease.prevention.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Treatment</h2>
                </div>
                <ul className="space-y-3">
                  {disease.treatment.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Detect diseases early and protect your crops with our AI technology. Get instant diagnosis and treatment recommendations.
          </p>
          <Link
            to="/predict"
            className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            Detect Another Plant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetailPage;