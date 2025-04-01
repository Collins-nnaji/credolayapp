import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants - simplified to prevent twitching
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }
};

// Section data
const sections = [
  {
    number: "01",
    title: "Product Vision",
    description: "Our AI-powered platform's mission and core features for transforming career development",
    path: "/presentation/1",
    color: "blue",
    icon: "🚀",
    features: ["Platform Overview", "Key Features", "Value Proposition"]
  },
  {
    number: "02",
    title: "AI Career Assistant",
    description: "Intelligent job matching and career guidance through conversational AI interface",
    path: "/presentation/2",
    color: "purple",
    icon: "🤖",
    features: ["Job Matching", "Skill Analysis", "Career Guidance"]
  },
  {
    number: "03",
    title: "Data Visualization",
    description: "Interactive dashboards providing actionable insights on career progress and opportunities",
    path: "/presentation/3",
    color: "green",
    icon: "📊",
    features: ["Career Analytics", "Market Comparison", "Goal Tracking"]
  },
  {
    number: "04",
    title: "User Experience",
    description: "Intuitive, accessible interfaces designed for seamless interaction across all devices",
    path: "/presentation/4",
    color: "amber",
    icon: "✨",
    features: ["Responsive Design", "Accessibility", "User Flow"]
  },
  {
    number: "05",
    title: "Implementation Plan",
    description: "Development roadmap, technology stack, and deployment strategy",
    path: "/presentation/5",
    color: "indigo",
    icon: "🔧",
    features: ["Tech Stack", "Timeline", "Resource Planning"]
  }
];

const PresentationHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Credolay Platform Presentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our AI-powered career development platform through this interactive presentation
          </p>
        </motion.div>
        
        {/* Presentation Sections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.number}
              className="col-span-1"
              variants={animations.staggerItem}
            >
              <Link 
                to={section.path}
                className="block h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`bg-white rounded-xl shadow-md border border-${section.color}-200 p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                  style={{ borderColor: hoveredCard === index ? `var(--${section.color}-400)` : '' }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`text-4xl`}>
                      {section.icon}
                    </div>
                    <div className={`text-${section.color}-600 text-lg font-bold`}>
                      {section.number}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  
                  <div className="mt-auto">
                    <div className={`flex flex-wrap gap-2 mb-4`}>
                      {section.features.map((feature, i) => (
                        <span 
                          key={i}
                          className={`text-sm px-2 py-1 rounded-full bg-${section.color}-100 text-${section.color}-700`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex justify-end`}>
                      <div className={`text-${section.color}-600 flex items-center text-sm font-medium`}>
                        View Presentation
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Navigation Info */}
        <motion.div 
          className="mt-16 text-center"
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Navigation Instructions</h3>
            <ul className="space-y-2 text-gray-700 text-left">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mt-0.5 mr-2">1</span>
                <span>Select any section above to view its detailed presentation</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mt-0.5 mr-2">2</span>
                <span>Use the navigation controls at the bottom of each presentation to move between sections</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mt-0.5 mr-2">3</span>
                <span>Each presentation includes interactive elements to explore the platform's features</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PresentationHome; 