import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

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
      title: 'Business Strategy',
      description: 'Revenue model and expansion roadmap',
      path: '/presentation/5',
      icon: '💼',
      color: 'amber',
      details: 'Review our multi-stream revenue model, growth trajectory, and strategic roadmap for market expansion and product development.'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PresentationLayout>
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-8"
          >
            {/* Header Section */}
            <div className="text-center mb-16 relative">
              {/* Logo & Title */}
              <motion.div 
                className="flex justify-center mb-8 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <img 
                    src="https://i.ibb.co/c8TQxNw/credolay-logo.png" 
                    alt="Credolay Logo" 
                    className="h-36 w-auto drop-shadow-2xl mb-5"
                  />
                </div>
              </motion.div>

              <motion.h1 
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
              >
                Credolay
              </motion.h1>

              <motion.h2 
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-semibold mb-6 text-white text-shadow-sm"
              >
                Innovation Visa Presentation
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                A comprehensive showcase of Credolay's AI-powered career platform 
                for your innovation visa application
              </motion.p>
            </div>

            {/* Cards Section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
            >
              {presentationCards.map((card, i) => (
                <motion.div
                  key={card.number}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`glass-card backdrop-filter backdrop-blur-md border ${
                    hoveredCard === i ? `border-${card.color}-400/50` : 'border-white/20'
                  } rounded-xl p-6 text-center transition-all duration-300 relative overflow-hidden`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveCard(activeCard === i ? null : i)}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}-500/10 to-${card.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <Link to={card.path} className="block h-full hover:no-underline relative z-10">
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <div className={`text-3xl font-bold mb-2 text-${card.color}-300`}>{card.number}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                    <p className="text-gray-300 text-sm">{card.description}</p>
                    
                    {/* Animated arrow - only appears on hover */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredCard === i ? 1 : 0, 
                        y: hoveredCard === i ? 0 : 10 
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-${card.color}-500/20`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-${card.color}-400`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
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
                  className="max-w-3xl mx-auto mb-12"
                >
                  <div className={`glass-card p-6 rounded-xl bg-gradient-to-br from-${presentationCards[activeCard].color}-500/15 to-${presentationCards[activeCard].color}-600/5 border border-${presentationCards[activeCard].color}-400/30`}>
                    <div className="flex items-start">
                      <div className={`w-12 h-12 rounded-xl bg-${presentationCards[activeCard].color}-500/20 flex items-center justify-center text-2xl mr-4 flex-shrink-0`}>
                        {presentationCards[activeCard].icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{presentationCards[activeCard].title}</h3>
                        <p className="text-gray-300">{presentationCards[activeCard].details}</p>
                        <div className="mt-4">
                          <Link 
                            to={presentationCards[activeCard].path} 
                            className={`inline-flex items-center px-4 py-2 rounded-full bg-${presentationCards[activeCard].color}-500/20 text-${presentationCards[activeCard].color}-300 text-sm hover:bg-${presentationCards[activeCard].color}-500/30 transition-all duration-300`}
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

            {/* Instructions Section */}
            <motion.div 
              className="glass-card p-6 rounded-xl max-w-3xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How to Use This Presentation:
              </h3>
              <ol className="space-y-3 text-gray-200 pl-6">
                <li className="flex items-start">
                  <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-blue-300 font-medium mr-3 flex-shrink-0">1</div>
                  <div>Click on any card above to view details and access the full presentation page</div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-blue-300 font-medium mr-3 flex-shrink-0">2</div>
                  <div>Each page showcases a different aspect of the Credolay platform with interactive elements</div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-blue-300 font-medium mr-3 flex-shrink-0">3</div>
                  <div>Navigate through pages in sequence for a cohesive presentation flow</div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-blue-300 font-medium mr-3 flex-shrink-0">4</div>
                  <div>Use the navigation controls at the bottom of each page to move between sections</div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-blue-300 font-medium mr-3 flex-shrink-0">5</div>
                  <div>Take screenshots of each page for your visa application materials or download the presentation</div>
                </li>
              </ol>
            </motion.div>

            {/* Footer Section */}
            <motion.div 
              className="mt-12 text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p>© 2023 Credolay — AI-Powered Career Development Platform</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationLayout>
  );
};

export default PresentationHome;