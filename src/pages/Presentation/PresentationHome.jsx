import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PresentationHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const presentationCards = [
    {
      number: '01',
      title: 'Introduction',
      description: 'App concept and core value proposition',
      path: '/presentation/1',
      icon: '🚀',
      color: 'blue',
      details: 'Learn about the vision and mission behind Credolay and how we\'re transforming career development with AI technology.'
    },
    {
      number: '02',
      title: 'AI Career Assistant',
      description: 'Personalized job matching and career guidance',
      path: '/presentation/2',
      icon: '🧠',
      color: 'cyan',
      details: 'Discover our AI-powered matching algorithm that connects professionals with their ideal opportunities based on skills, experience, and career goals.'
    },
    {
      number: '03',
      title: 'Resume Analytics',
      description: 'AI-powered resume optimization tools',
      path: '/presentation/3',
      icon: '📊',
      color: 'purple',
      details: 'Explore our intelligent resume analysis tools that help candidates optimize their applications for both ATS systems and human recruiters.'
    },
    {
      number: '04',
      title: 'Market Opportunity',
      description: 'Target market and competitive advantages',
      path: '/presentation/4',
      icon: '📈',
      color: 'green',
      details: 'Understand the market landscape, growth potential, and how Credolay offers unique advantages over traditional recruitment solutions.'
    },
    {
      number: '05',
      title: 'Implementation Plan',
      description: 'Revenue model and expansion roadmap',
      path: '/presentation/5',
      icon: '💼',
      color: 'amber',
      details: 'Review our multi-stream revenue model, growth trajectory, and strategic roadmap for market expansion and product development.'
    },
  ];

  // Animation variants - reduced intensity to prevent twitching
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -8,
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: 'rgba(0, 0, 0, 0.1)',
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white relative overflow-hidden pt-24 pb-16 px-4">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern-light opacity-10 z-0"></div>
      
      {/* Animated gradient accents - reduced intensity */}
      <motion.div 
        className="absolute -left-64 top-1/3 w-1/2 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{ 
          rotate: [0, 3, -3, 0],
          scale: [1, 1.03, 0.97, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 25,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute -right-64 bottom-1/3 w-1/2 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"
        animate={{ 
          rotate: [0, -3, 3, 0],
          scale: [1, 0.97, 1.03, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Home button */}
        <motion.div 
          className="absolute top-0 right-4 md:right-8 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/">
            <motion.div 
              className="flex items-center bg-white/80 backdrop-blur-lg rounded-full pl-3 pr-4 py-2 border border-gray-200 shadow-md hover:bg-white/90 transition-colors group"
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
        
        {/* Presentation Content */}
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                  Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Presentation</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our interactive presentation showcasing our innovative platform, technology, and growth strategy.
                </p>
              </motion.div>
              
              {/* Card Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {presentationCards.map((card, index) => (
                  <motion.div
                    key={card.number}
                    className="flex flex-col"
                    variants={cardVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => setActiveCard(index === activeCard ? null : index)}
                  >
                    <Link to={card.path}>
                      <div className="h-full glass-card p-6 rounded-xl border border-gray-200 overflow-hidden relative flex flex-col bg-white/90">
                        <div className={`absolute top-0 left-0 h-1 w-full bg-${card.color}-500`}></div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-${card.color}-100 text-${card.color}-600`}>
                            {card.icon}
                          </div>
                          <span className={`text-lg font-bold text-${card.color}-600`}>{card.number}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h3>
                        <p className="text-gray-600 mb-4">{card.description}</p>
                        
                        <div className="mt-auto flex items-center text-blue-600">
                          <span className="text-sm font-medium">View Slide</span>
                          <svg className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Selected Card Details */}
              <AnimatePresence>
                {activeCard !== null && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-3xl mx-auto mb-12 mt-10"
                  >
                    <div className={`glass-card p-6 rounded-xl bg-gradient-to-br from-${presentationCards[activeCard].color}-50 to-${presentationCards[activeCard].color}-100/20 border border-${presentationCards[activeCard].color}-200`}>
                      <div className="flex items-start">
                        <div className={`w-12 h-12 rounded-xl bg-${presentationCards[activeCard].color}-100 flex items-center justify-center text-2xl mr-4 flex-shrink-0 text-${presentationCards[activeCard].color}-600`}>
                          {presentationCards[activeCard].icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">{presentationCards[activeCard].title}</h3>
                          <p className="text-gray-600">{presentationCards[activeCard].details}</p>
                          <div className="mt-4">
                            <Link 
                              to={presentationCards[activeCard].path} 
                              className={`inline-flex items-center px-4 py-2 rounded-full bg-${presentationCards[activeCard].color}-100 text-${presentationCards[activeCard].color}-600 text-sm hover:bg-${presentationCards[activeCard].color}-200 transition-all duration-300`}
                            >
                              View Presentation
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Start Presentation Button */}
              <motion.div 
                className="mt-12 md:mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/presentation/1">
                  <motion.button 
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Start Presentation</span>
                    <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PresentationHome;