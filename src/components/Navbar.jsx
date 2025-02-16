// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="anonymous" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Righteous&family=Quicksand:wght@500;700&display=swap" 
        rel="stylesheet" 
      />

      <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo container */}
            <div className="flex-shrink-0 flex items-center pl-2">
              <Link to="/" className="flex items-center group">
                {/* Logo size */}
                <img
                  className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-200"
                  src="/credolay.png"
                  alt="Credolay Logo"
                />
                <span
                  className="ml-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  style={{ fontFamily: 'Righteous, cursive' }}
                >
                  {/* Optional text here */}
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center space-x-4 sm:space-x-6 md:space-x-8">
              <Link
                to="/"
                className="nav-link group relative px-3 py-1"
              >
                <span 
                  className="relative z-10 text-base md:text-lg font-bold text-gray-700 group-hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Copilot Chat
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
              
              <Link
                to="/career-tools"
                className="nav-link group relative px-3 py-1"
              >
                <span 
                  className="relative z-10 text-base md:text-lg font-bold text-gray-700 group-hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Career Tools
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hover effect CSS */}
      <style jsx>{`
        .nav-link:hover .hover-gradient {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Navbar;
