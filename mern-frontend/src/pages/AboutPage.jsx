import React from 'react';

const AboutPage = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS", "Axios for API calls", "React Router"]
    },
    {
      category: "Backend Bridge",
      items: ["Node.js", "Express.js", "CORS handling", "REST API"]
    },
    {
      category: "AI & Machine Learning",
      items: ["Python", "FastAPI", "Convolutional Neural Network (CNN)", "TensorFlow/Keras", "97% Accuracy Model"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Plantify AI</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Revolutionizing agriculture through artificial intelligence and deep learning
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              I built Plantify AI to address a critical challenge in modern agriculture: 
              <span className="text-green-600 font-semibold"> the devastating impact of plant diseases on farmer livelihoods and global food security</span>.
            </p>
            <p>
              Having witnessed firsthand how small-scale farmers struggle with crop losses, I was inspired to leverage my 
              expertise in machine learning to create an accessible, accurate, and instant solution for plant disease detection.
            </p>
            <p>
              This project represents my commitment to 
              <span className="text-green-600 font-semibold"> sustainable agriculture</span> and using technology 
              to make a tangible difference in people's lives.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-green-700 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Upload", description: "Take or upload a clear photo of the plant leaf", icon: "📸" },
              { step: "2", title: "Analyze", description: "Our CNN model processes the image with 97% accuracy", icon: "🤖" },
              { step: "3", title: "Detect", description: "Instant identification of potential diseases", icon: "🔍" },
              { step: "4", title: "Act", description: "Get detailed treatment and prevention guidance", icon: "💡" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                  {item.icon}
                </div>
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Note */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white">
            👨‍💻
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Developer</h3>
          <p className="text-gray-600 text-lg mb-4">
            Passionate about using technology to solve real-world problems in agriculture and environmental sustainability.
          </p>
          <p className="text-gray-700">
            "My goal is to bridge the gap between advanced AI technology and practical agricultural needs, 
            making cutting-edge tools accessible to farmers worldwide."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;