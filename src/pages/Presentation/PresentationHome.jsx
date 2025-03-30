import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

const PresentationHome = () => {
  const presentationCards = [
    {
      number: '01',
      title: 'Introduction',
      description: 'App concept and core value proposition',
      path: '/presentation/1',
    },
    {
      number: '02',
      title: 'AI Career Assistant',
      description: 'Personalized job matching and career guidance',
      path: '/presentation/2',
    },
    {
      number: '03',
      title: 'Resume Analytics',
      description: 'AI-powered resume optimization tools',
      path: '/presentation/3',
    },
    {
      number: '04',
      title: 'Market Opportunity',
      description: 'Target market and competitive advantages',
      path: '/presentation/4',
    },
    {
      number: '05',
      title: 'Business Strategy',
      description: 'Revenue model and expansion roadmap',
      path: '/presentation/5',
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
      }
    }),
    hover: { 
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
    }
  };

  return (
    <PresentationLayout>
      <div className="text-center mb-16">
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://i.ibb.co/c8TQxNw/credolay-logo.png" 
            alt="Credolay Logo" 
            className="h-32 w-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Credolay
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-3xl font-semibold mb-6 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Innovation Visa Presentation
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A comprehensive showcase of Credolay's AI-powered career platform for your innovation visa application
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {presentationCards.map((card, i) => (
          <motion.div
            key={card.number}
            custom={i}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white/10 backdrop-filter backdrop-blur-md border border-white/20 rounded-xl p-6 text-center transition-all duration-300"
          >
            <Link to={card.path} className="block h-full hover:no-underline">
              <div className="text-3xl font-bold mb-2 text-blue-300">{card.number}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-white">How to Use This Presentation:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-200">
          <li>Click on any card above to view the full presentation page</li>
          <li>Each page showcases a different aspect of the Credolay platform</li>
          <li>Navigate through pages in order for a cohesive presentation</li>
          <li>Use the navigation links to move between presentation pages</li>
          <li>Take screenshots of each page for your visa application materials</li>
        </ol>
      </motion.div>
    </PresentationLayout>
  );
};

export default PresentationHome; 