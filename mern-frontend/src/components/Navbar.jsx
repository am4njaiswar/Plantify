import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // 1. Import the Auth context

const Navbar = () => {
  const location = useLocation();
  // --- 2. Get auth state and navigation function ---
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  // --- 3. Create the logout handler ---
  const handleLogout = async () => {
    try {
      // Call the backend logout endpoint
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      
      // Clear user data from local storage and context
      localStorage.removeItem('user-info');
      setAuthUser(null);
      
      // Redirect to the Home page
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        location.pathname === to
          ? 'bg-green-600 text-white shadow-lg transform scale-105'
          : 'text-gray-700 hover:bg-green-100 hover:text-green-800 hover:shadow-md'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* ... (your logo JSX) */}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink> {/* <-- ADD THIS LINE */}

            {authUser ? (
              // --- Logged In View ---
              <>
                <NavLink to="/predict">Predictor</NavLink>
                <span className="px-4 py-2 text-gray-700 font-medium">Hi, {authUser.fullName}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-100 hover:shadow-md transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              // --- Logged Out View ---
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;