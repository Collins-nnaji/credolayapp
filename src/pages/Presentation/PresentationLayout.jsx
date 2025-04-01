import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const PresentationLayout = ({ children, title, pageNumber, gradient = "from-blue-500 to-purple-500" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Page transitions
  const isHomePage = !pageNumber;

  // Hide/show controls based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 20) {
        setShowControls(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowControls(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Page navigation data with titles for tooltips
  const navPages = [
    { num: 1, title: "Introduction" },
    { num: 2, title: "AI Career Assistant" },
    { num: 3, title: "Resume Analytics" },
    { num: 4, title: "Market Opportunity" },
    { num: 5, title: "Business Strategy" }
  ];

  // Get current page index for animations
  const getCurrentPageIndex = () => {
    if (!pageNumber) return 0;
    return parseInt(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Enhanced background with animated elements - reduced intensity */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern-light opacity-10 z-0"></div>
      
      {/* Animated background gradients - toned down for lighter theme and better performance */}
      <motion.div 
        className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -z-10 transform -translate-y-1/2"
        animate={{ 
          rotate: [0, 3, -3, 0],
          scale: [1, 1.03, 0.97, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 30,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl -z-10 transform translate-y-1/2"
        animate={{ 
          rotate: [0, -3, 3, 0],
          scale: [1, 0.97, 1.03, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 25,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Additional ambient light effect - lighter and more subtle */}
      <motion.div 
        className={`absolute top-1/3 left-1/2 w-full h-full bg-gradient-to-r ${gradient} opacity-3 blur-3xl -z-10 transform -translate-x-1/2`}
        animate={{ 
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      ></motion.div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            className="max-w-7xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Home button with enhanced animation - updated for light theme */}
            <motion.div 
              className={`fixed top-24 right-4 md:right-8 z-20 transition-all duration-300 ${
                showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/">
                <motion.div 
                  className="flex items-center bg-white/80 backdrop-blur-lg rounded-full pl-3 pr-4 py-2 border border-gray-200 shadow-lg hover:bg-white/90 transition-colors group"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 text-gray-700"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ x: [0, -2, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </motion.svg>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Home</span>
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Enhanced page indicator with labels - updated for light theme */}
            {!isHomePage && (
              <motion.div 
                className={`fixed top-24 left-4 md:left-8 z-20 transition-all duration-300 ${
                  showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-col items-center space-y-3">
                  {navPages.map((page) => (
                    <Link key={page.num} to={`/presentation/${page.num}`}>
                      <div className="group relative flex items-center">
                        <div 
                          className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                            page.num === parseInt(pageNumber) 
                              ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-400/20' 
                              : 'bg-gray-400/50 group-hover:bg-gray-400'
                          }`}
                        >
                          {page.num === parseInt(pageNumber) && (
                            <motion.div 
                              className="absolute inset-0 rounded-full bg-blue-400/30"
                              animate={{ scale: [1, 1.6, 1], opacity: [1, 0, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </div>
                        
                        {/* Tooltip with page title - updated for light theme */}
                        <div className="absolute left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md text-xs text-gray-700 whitespace-nowrap border border-gray-200">
                            {page.title}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Enhanced page navigation with previews - updated for light theme */}
            {!isHomePage && (
              <motion.div 
                className={`fixed bottom-4 left-0 right-0 flex justify-center z-20 transition-all duration-300 ${
                  showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-full px-2 py-1 flex items-center space-x-1 border border-gray-200 shadow-lg">
                  {/* Previous button */}
                  <Link to={parseInt(pageNumber) > 1 ? `/presentation/${parseInt(pageNumber) - 1}` : '/presentation'}>
                    <motion.button 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${parseInt(pageNumber) <= 1 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'} transition-colors group relative`}
                      disabled={parseInt(pageNumber) <= 1}
                      whileHover={{ scale: parseInt(pageNumber) <= 1 ? 1 : 1.05 }}
                      whileTap={{ scale: parseInt(pageNumber) <= 1 ? 1 : 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      
                      {/* Preview tooltip for previous page - updated for light theme */}
                      {parseInt(pageNumber) > 1 && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md text-xs text-gray-700 text-center whitespace-nowrap border border-gray-200">
                            {navPages[parseInt(pageNumber) - 2].title}
                          </div>
                        </div>
                      )}
                    </motion.button>
                  </Link>
                  
                  {/* Page indicator - updated for light theme */}
                  <div className="px-3 text-sm text-gray-700 flex items-center">
                    <motion.span 
                      key={pageNumber}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="inline-block"
                    >
                      {pageNumber}
                    </motion.span>
                    <span className="mx-1">/</span>
                    <span>5</span>
                  </div>
                  
                  {/* Next button - updated for light theme */}
                  <Link to={parseInt(pageNumber) < 5 ? `/presentation/${parseInt(pageNumber) + 1}` : '/presentation/5'}>
                    <motion.button 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${parseInt(pageNumber) >= 5 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'} transition-colors group relative`}
                      disabled={parseInt(pageNumber) >= 5}
                      whileHover={{ scale: parseInt(pageNumber) >= 5 ? 1 : 1.05 }}
                      whileTap={{ scale: parseInt(pageNumber) >= 5 ? 1 : 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      
                      {/* Preview tooltip for next page - updated for light theme */}
                      {parseInt(pageNumber) < 5 && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md text-xs text-gray-700 text-center whitespace-nowrap border border-gray-200">
                            {navPages[parseInt(pageNumber)].title}
                          </div>
                        </div>
                      )}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
            
            {/* Main content container */}
            <div>
              {/* Page title */}
              {title && (
                <div className="mb-16 text-center" style={{ overflow: 'hidden' }}>
                  <motion.h1 
                    className="text-3xl md:text-5xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {title}
                  </motion.h1>
                </div>
              )}

              {/* Children with reduced motion to prevent twitching */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ willChange: 'transform, opacity' }}
              >
                {children}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Keyboard navigation indicator - only shows briefly on load */}
      {!isHomePage && (
        <motion.div 
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/70 backdrop-blur-sm px-3 py-2 rounded-full text-xs text-white/70 flex items-center space-x-2 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <span>Navigate with</span>
          <div className="px-2 py-0.5 bg-white/10 rounded text-white/90">←</div>
          <span>and</span>
          <div className="px-2 py-0.5 bg-white/10 rounded text-white/90">→</div>
          <span>keys</span>
        </motion.div>
      )}
    </div>
  );
};

export default PresentationLayout;