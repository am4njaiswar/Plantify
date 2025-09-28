import React from 'react';

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

export default AboutPage;
