import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();

  // Apply theme to <html> whenever it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "emerald" ? "dark" : "emerald";
    setTheme(newTheme);
  };

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "bg-green-600 text-white shadow-md px-4 py-2 rounded-md text-lg font-medium"
      : "text-gray-600 hover:bg-green-100 dark:text-gray-300 dark:hover:bg-gray-700 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300";

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-green-700 dark:text-green-500"
            >
              🌿 Plantify
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={getLinkClass}>
              Predictor
            </NavLink>
            <NavLink to="/guide" className={getLinkClass}>
              Disease Guide
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "emerald" ? (
                <Moon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-6 w-6 text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
