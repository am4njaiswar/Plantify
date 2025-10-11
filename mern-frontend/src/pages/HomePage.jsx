import { Link } from 'react-router-dom';
import StatsBar from '../components/StatsBar';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Protect Your
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Crops </span>
                  with AI
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Every year, plant diseases destroy <span className="text-red-600 font-semibold">40% of global crops</span>, 
                  threatening food security and farmer livelihoods. Early detection can prevent up to <span className="text-green-600 font-semibold">90% of these losses</span>.
                </p>
                <p className="text-lg text-gray-700">
                  Our AI-powered system gives farmers the power to identify diseases instantly, saving time, money, and precious harvests.
                </p>
              </div>

              <StatsBar />

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/predict"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  🍃 Try Now - Detect Disease
                </Link>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 text-center">
                  Learn How It Works
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Farmer's Relief</h3>
                  <p className="text-gray-600">Instant disease detection in your pocket</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-100 rounded-xl p-4 shadow-lg">
                <span className="text-2xl">⚠️</span>
                <p className="text-sm font-semibold">Early Detection</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-100 rounded-xl p-4 shadow-lg">
                <span className="text-2xl">💡</span>
                <p className="text-sm font-semibold">AI Powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white mt-20 rounded-3xl mx-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The <span className="text-red-600">Problem</span> We Solve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Economic Loss',
                description: 'Farmers lose billions annually to undetected plant diseases that spread rapidly through crops.'
              },
              {
                icon: '🍽️',
                title: 'Food Security',
                description: 'Crop failures threaten global food supply chains and increase food prices for everyone.'
              },
              {
                icon: '⏰',
                title: 'Time Sensitivity',
                description: 'Traditional detection methods are slow, allowing diseases to spread before treatment.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;