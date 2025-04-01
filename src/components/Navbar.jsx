import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/presentation/1", label: "Product Vision" },
    { href: "/presentation/2", label: "AI Technology" },
    { href: "/presentation/3", label: "Analytics Suite" },
    { href: "/presentation/4", label: "Market Analysis" },
    { href: "/presentation/5", label: "Growth Strategy" },
  ];

  const renderDesktopNav = () => (
    <div className="hidden lg:flex items-center space-x-4">
      <div className="relative group">
        <button className="py-2 px-3 text-sm rounded-lg flex items-center gap-1 text-gray-700 hover:bg-gray-100 transition duration-150">
          Slides <span className="h-4 w-4 opacity-70">▼</span>
        </button>
        <div className="absolute left-0 mt-2 w-56 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
          <div className="py-2">
            {navigationItems.slice(1).map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Link to="/" className="py-2 px-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150">
        Home
      </Link>
    </div>
  );

  const renderMobileNav = () => (
    <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-end p-4">
        <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700">
          <span className="h-6 w-6 block">✕</span>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4 p-4">
        {navigationItems.map((item) => (
          <Link 
            key={item.href} 
            to={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-2 px-4 w-full text-center text-gray-700 text-lg font-medium hover:bg-gray-100 rounded-lg transition duration-150"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg py-3 shadow-md border-b border-gray-200' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 relative mr-3">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <div className="absolute inset-1 bg-white rounded-md"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-sm"></div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Interactive Platform
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Simplified with dropdown for slides */}
          <div className="hidden lg:flex items-center space-x-1">
            {renderDesktopNav()}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              className="text-gray-700 p-2 focus:outline-none rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <span className="block w-6 h-6">✕</span>
              ) : (
                <span className="block w-6 h-6">☰</span>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {renderMobileNav()}
    </motion.nav>
  );
};

export default Navbar;