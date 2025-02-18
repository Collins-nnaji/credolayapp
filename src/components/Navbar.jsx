import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      path: '/chat',
      label: 'AI Chat Assistant',
      icon: <MessageSquare className="w-5 h-5" />,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      path: '/resume-analytics',
      label: 'Resume Analytics',
      icon: <FileSearch className="w-5 h-5" />,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const NavLink = ({ item }) => {
    const isActive = location.pathname === item.path;

    return (
      <Link
        to={item.path}
        className="relative group"
      >
        <div className={`
          flex items-center px-4 py-2 rounded-full transition-all duration-300
          ${isActive ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
        `}>
          {/* Background */}
          <div className={`
            absolute inset-0 rounded-full transition-all duration-300
            ${isActive 
              ? `bg-gradient-to-r ${item.gradient} opacity-100` 
              : 'opacity-0 group-hover:opacity-10 bg-gray-200'
            }
          `} />

          {/* Content */}
          <div className="relative flex items-center space-x-2">
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-md py-4' 
        : 'bg-transparent py-6'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group">
  <motion.span
    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    Credolay
  </motion.span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-shadow"
              onClick={() => {}} // Add auth handling
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
      >
        <div className="px-4 py-2 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors
                ${location.pathname === item.path 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          <button
            className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
            onClick={() => {}} // Add auth handling
          >
            Sign In
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;