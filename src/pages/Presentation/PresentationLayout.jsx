import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PresentationLayout = ({ children, title, pageNumber, gradient = "from-blue-500 to-purple-500" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800/90 to-gray-900/90 pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern-light opacity-20 z-0"></div>
      
      {/* Light beams effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl -z-10 transform translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Home button - always visible */}
        <Link to="/">
          <motion.div 
            className="fixed top-24 right-4 md:right-8 z-20 flex items-center bg-gray-800/80 backdrop-blur-lg rounded-full pl-3 pr-4 py-2 border border-white/10 shadow-lg hover:bg-gray-700/80 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-white font-medium">Home</span>
          </motion.div>
        </Link>
        
        {/* Page indicator */}
        <div className="fixed top-24 left-4 md:left-8 z-20">
          <div className="flex flex-col items-center space-y-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Link key={num} to={`/presentation/${num}`}>
                <div 
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    num === parseInt(pageNumber) 
                      ? 'bg-white scale-125 shadow-lg shadow-white/30' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                >
                  {num === parseInt(pageNumber) && (
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white/30"
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Page navigation */}
        <div className="fixed bottom-4 left-0 right-0 flex justify-center z-20">
          <div className="bg-gray-800/80 backdrop-blur-lg rounded-full px-2 py-1 flex items-center space-x-1 border border-white/10 shadow-lg">
            <Link to={parseInt(pageNumber) > 1 ? `/presentation/${parseInt(pageNumber) - 1}` : '/presentation'}>
              <button 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                disabled={parseInt(pageNumber) <= 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
            
            <div className="px-2 text-sm text-white/80">{pageNumber} / 5</div>
            
            <Link to={parseInt(pageNumber) < 5 ? `/presentation/${parseInt(pageNumber) + 1}` : '/presentation/5'}>
              <button 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                disabled={parseInt(pageNumber) >= 5}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-block">
            <motion.h1 
              className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.div 
              className={`h-1 w-32 mx-auto bg-gradient-to-r ${gradient} rounded-full`}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '8rem', opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </header>
        
        {/* Content */}
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PresentationLayout; 