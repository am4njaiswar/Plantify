import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-emerald-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Plantify AI</h3>
                <p className="text-green-200 text-sm">Smart Agriculture Solutions</p>
              </div>
            </div>
            <p className="text-green-200 text-sm">
              Empowering farmers with AI-powered plant disease detection for sustainable agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/predict" className="block text-green-200 hover:text-white transition-colors duration-300">
                Disease Detection
              </a>
              <a href="/about" className="block text-green-200 hover:text-white transition-colors duration-300">
                About Project
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Mission</h4>
            <p className="text-green-200 text-sm">
              Making advanced plant disease detection accessible to farmers worldwide through artificial intelligence.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-300">
            © 2025 Plantify AI. All Rights Reserved. | Sustainable Agriculture Initiative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;