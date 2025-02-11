import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/credolay.png"
                alt="Credolay Logo"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900"></span>
            </Link>
          </div>
          <div className="flex items-center space-x-8"> {/* Increased space between items */}
            <Link
              to="/job-search"
              className="px-6 py-3 rounded-md text-xl font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200" /* Increased text size and added transition */
            >
              AI Job Copilot
            </Link>
            <Link
              to="/cv-review"
              className="px-6 py-3 rounded-md text-xl font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200" /* Increased text size and added transition */
            >
              CV Review
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;