import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

// Animation variants for consistent animations
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
};

const AnalyticsSuitePresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('resume');
  const [progressAnimation, setProgressAnimation] = useState(false);
  const [hoverStat, setHoverStat] = useState(null);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  // Start progress animations after load
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setProgressAnimation(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  // Enhanced feature box component
  const FeatureBox = ({ emoji, title, description, color = 'pink', metrics, delay = 0 }) => (
    <motion.div 
      className={`glass-card p-6 rounded-xl border border-${color}-500/30 bg-gradient-to-br from-gray-800/40 to-gray-900/30 transition-all duration-300`}
      variants={animations.staggerItem}
      whileHover={{ 
        y: -6, 
        boxShadow: `0 25px 50px -12px rgba(var(--${color}-500-rgb), 0.25)`,
        borderColor: `rgba(var(--${color}-500-rgb), 0.5)`
      }}
    >
      <div className="flex items-start">
        <div className={`text-${color === 'pink' ? 'pink' : color === 'purple' ? 'purple' : 'blue'}-400 text-4xl mr-5 mt-1`}>
          {emoji}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold mb-2 text-white text-shadow-sm">{title}</h3>
            {metrics && (
              <span className={`text-sm font-medium text-${color}-300 bg-${color}-500/20 px-2 py-0.5 rounded-md ml-2`}>
                {metrics}
              </span>
            )}
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  // Benefit card component
  const BenefitCard = ({ icon, title, description, color, delay }) => (
    <motion.div 
      className={`glass-card p-5 rounded-lg transition-all duration-300`}
      variants={animations.staggerItem}
      whileHover={{ 
        y: -6, 
        boxShadow: `0 25px 50px -12px rgba(var(--${color}-500-rgb), 0.25)`,
        borderColor: `rgba(var(--${color}-500-rgb), 0.5)`
      }}
    >
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full bg-${color}-500/20 flex items-center justify-center text-${color}-400 mr-4 shadow-lg`}>
          {icon}
        </div>
        <div className={`text-${color}-400 font-semibold text-lg`}>{title}</div>
      </div>
      <p className="text-gray-300 mt-3">{description}</p>
      <div className={`mt-4 pt-3 border-t border-${color}-500/10`}>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Success Rate</span>
          <span className={`text-${color}-300 font-medium`}>92%</span>
        </div>
      </div>
    </motion.div>
  );

  // ComparisonStat component
  const ComparisonStat = ({ title, beforeValue, afterValue, increase, color = 'pink' }) => (
    <motion.div
      className={`glass-card p-5 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-${color}-500/20 transition-all duration-300`}
      variants={animations.staggerItem}
      whileHover={{ 
        y: -5, 
        boxShadow: `0 20px 40px -12px rgba(var(--${color}-500-rgb), 0.25)`,
        borderColor: `rgba(var(--${color}-500-rgb), 0.5)`
      }}
      onMouseEnter={() => setHoverStat(title)}
      onMouseLeave={() => setHoverStat(null)}
    >
      <div className="text-center">
        <h3 className={`text-lg font-medium mb-3 text-${color}-300`}>{title}</h3>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">Before</div>
            <div className="text-2xl font-bold text-white">{beforeValue}</div>
          </div>
          <div className="text-center px-3">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${color}-500/20`}>
              <svg className={`w-6 h-6 text-${color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">After</div>
            <div className="text-2xl font-bold text-white">{afterValue}</div>
          </div>
        </div>
        <div className={`mt-3 pt-3 border-t border-${color}-500/10 text-center`}>
          <span className={`inline-flex items-center bg-${color}-500/20 px-2 py-1 rounded-full text-${color}-300 text-sm`}>
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            {increase} Increase
          </span>
        </div>
      </div>
    </motion.div>
  );

  // Resume category score component
  const ScoreCategory = ({ name, score, color, delay }) => {
    const colorClass = score >= 80 ? 'green' : score >= 65 ? 'yellow' : 'red';
    
    return (
      <motion.div 
        className={`bg-white rounded-xl shadow p-3 border border-${colorClass}-100 hover:shadow-lg transition-all duration-300`}
        whileHover={{ y: -3, boxShadow: `0 10px 25px -5px rgba(var(--${colorClass}-500-rgb), 0.2)` }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
      >
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">{name}</div>
          <div className={`text-${colorClass}-600 font-medium text-sm px-1.5 py-0.5 bg-${colorClass}-100 rounded-full`}>
            {score}%
          </div>
        </div>
        <motion.div 
          className="w-full h-2 bg-gray-100 rounded-full mt-2 overflow-hidden"
        >
          <motion.div 
            className={`h-full bg-${colorClass}-500 rounded-full`} 
            initial={{ width: 0 }}
            animate={{ width: progressAnimation ? `${score}%` : 0 }}
            transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <PresentationLayout 
      pageNumber="3" 
      title="Analytics Suite"
      gradient="from-purple-500 to-pink-500"
    >
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-16"
          >
            {/* Hero Section */}
            <motion.section
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/10 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-4"
                    >
                      <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 text-sm font-medium">
                        Data-Driven Career Success
                      </span>
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold mb-4 text-white"
                    >
                      Resume Analytics That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Deliver Results</span>
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-300 text-lg"
                    >
                      Our AI-powered Resume Analytics provides detailed insights and improvements to optimize your resume 
                      for Applicant Tracking Systems (ATS) and hiring managers, increasing your chances of landing interviews by up to 40%.
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-32 h-32 md:w-48 md:h-48">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
                      <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 md:w-24 md:h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Left Side: Phone Mockup (reverse order on mobile) */}
              <motion.div 
                className="flex justify-center items-center order-2 md:order-1"
                variants={animations.slideInLeft}
                initial="hidden"
                animate="visible"
              >
                <div className="relative max-w-sm">
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-purple-500/20 rounded-full blur-3xl"></div>
                  
                  <motion.div
                    className="relative w-72 md:w-80 rounded-[2.5rem] border-[10px] border-gray-800 overflow-hidden shadow-2xl"
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
                    
                    {/* App UI */}
                    <div className="h-[560px] bg-gray-50 overflow-hidden">
                      {/* App Header */}
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-white">Resume Analytics</div>
                            <div className="text-sm text-white/80">Optimize your job applications</div>
                          </div>
                          <div className="bg-white/20 rounded-full p-1.5">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tab Bar */}
                      <div className="flex bg-gray-100 border-b border-gray-200">
                        <button 
                          className={`flex-1 py-3 text-center text-sm font-medium transition-colors duration-300 ${activeTab === 'resume' ? 'text-purple-600 border-b-2 border-purple-600 bg-white' : 'text-gray-500'}`}
                          onClick={() => setActiveTab('resume')}
                        >
                          Resume Score
                        </button>
                        <button 
                          className={`flex-1 py-3 text-center text-sm font-medium transition-colors duration-300 ${activeTab === 'improvements' ? 'text-purple-600 border-b-2 border-purple-600 bg-white' : 'text-gray-500'}`}
                          onClick={() => setActiveTab('improvements')}
                        >
                          Improvements
                        </button>
                        <button 
                          className={`flex-1 py-3 text-center text-sm font-medium transition-colors duration-300 ${activeTab === 'keywords' ? 'text-purple-600 border-b-2 border-purple-600 bg-white' : 'text-gray-500'}`}
                          onClick={() => setActiveTab('keywords')}
                        >
                          Keywords
                        </button>
                      </div>
                      
                      {/* Resume Score Tab */}
                      <div className={`p-4 space-y-4 h-[440px] overflow-y-auto bg-white text-gray-800 ${activeTab !== 'resume' ? 'hidden' : ''}`}>
                        {/* Overall Score */}
                        <motion.div 
                          className="bg-white rounded-xl shadow-lg p-5 flex items-center justify-between border border-purple-100"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(168, 85, 247, 0.15)" }}
                        >
                          <div>
                            <div className="text-sm text-gray-500">Overall Score</div>
                            <div className="text-3xl font-bold text-purple-600">75%</div>
                            <div className="text-xs text-purple-400 mt-1">Higher than 68% of applicants</div>
                          </div>
                          <div className="w-20 h-20 relative">
                            <svg className="transform -rotate-90 w-20 h-20">
                              <circle
                                stroke="#e2e8f0"
                                strokeWidth="8"
                                fill="transparent"
                                r="32"
                                cx="40"
                                cy="40"
                              />
                              <motion.circle
                                stroke="url(#purple-pink-gradient)"
                                strokeWidth="8"
                                fill="transparent"
                                r="32"
                                cx="40"
                                cy="40"
                                strokeDasharray="201.1"
                                initial={{ strokeDashoffset: "201.1" }}
                                animate={{ strokeDashoffset: progressAnimation ? "50.3" : "201.1" }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                              />
                            </svg>
                            <defs>
                              <linearGradient id="purple-pink-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#ec4899" />
                              </linearGradient>
                            </defs>
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-purple-600">75%</div>
                          </div>
                        </motion.div>
                        
                        {/* Score Categories */}
                        <div className="grid grid-cols-2 gap-3">
                          <ScoreCategory name="ATS Compatibility" score={68} color="yellow" delay={0.9} />
                          <ScoreCategory name="Keyword Match" score={82} color="green" delay={1.0} />
                          <ScoreCategory name="Format & Structure" score={85} color="green" delay={1.1} />
                          <ScoreCategory name="Content Quality" score={65} color="yellow" delay={1.2} />
                          <ScoreCategory name="Achievements" score={58} color="red" delay={1.3} />
                          <ScoreCategory name="Skills Coverage" score={87} color="green" delay={1.4} />
                        </div>
                        
                        {/* Recent Changes Impact */}
                        <motion.div 
                          className="bg-white rounded-xl shadow-lg p-5 border border-green-100 mt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 }}
                          whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(34, 197, 94, 0.15)" }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-base font-semibold text-gray-700">Impact of Recent Changes</h3>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">+12%</span>
                          </div>
                          <div className="relative h-10">
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-100 rounded-full"></div>
                            <motion.div 
                              className="absolute bottom-0 left-0 h-2 bg-green-500 rounded-full rounded-r-none" 
                              initial={{ width: "63%" }}
                              animate={{ width: "63%" }}
                            />
                            <motion.div 
                              className="absolute bottom-0 left-[63%] h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full rounded-l-none" 
                              initial={{ width: 0 }}
                              animate={{ width: progressAnimation ? "12%" : 0 }}
                              transition={{ duration: 1, delay: 1.7 }}
                            />
                            <div className="absolute bottom-3 left-[63%] w-0.5 h-5 bg-gray-300"></div>
                            <div className="absolute bottom-3 left-calc-75 w-0.5 h-5 bg-gray-300"></div>
                            <div className="absolute bottom-8 left-[58%] text-xs text-gray-500">Before</div>
                            <div className="absolute bottom-8 left-[72%] text-xs text-gray-500">After</div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Improvements Tab */}
                      <div className={`p-4 space-y-4 h-[440px] overflow-y-auto bg-white text-gray-800 ${activeTab !== 'improvements' ? 'hidden' : ''}`}>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-gray-700 font-semibold">Critical Improvements</h4>
                          <div className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                            Priority
                          </div>
                        </div>
                        
                        {/* Critical Improvements */}
                        <motion.div 
                          className="bg-white rounded-xl shadow-lg p-4 border border-red-50"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(239, 68, 68, 0.15)" }}
                        >
                          <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
                              <div className="font-medium text-red-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Missing key achievements
                              </div>
                              <div className="text-sm text-red-600 mt-1">Add quantifiable results to your work experience</div>
                              <div className="mt-2 text-xs text-gray-500">
                                Impact: <span className="text-red-500 font-medium">High</span> • Difficulty: <span className="text-green-500 font-medium">Low</span>
                              </div>
                              <div className="mt-2 p-2 bg-white rounded border border-red-100">
                                <div className="text-xs text-gray-500 mb-1">Example improvement:</div>
                                <div className="text-sm">
                                  <span className="line-through text-gray-400">Managed team projects and client relationships</span>
                                  <span className="text-green-600 block">Increased client retention by 27% while managing 15+ enterprise accounts and leading a team of 5 developers</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
                              <div className="font-medium text-yellow-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Improve ATS compatibility
                              </div>
                              <div className="text-sm text-yellow-600 mt-1">Use standard section headings for better parsing</div>
                              <div className="mt-2 text-xs text-gray-500">
                                Impact: <span className="text-yellow-500 font-medium">Medium</span> • Difficulty: <span className="text-green-500 font-medium">Low</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Secondary Improvements */}
                        <div className="flex justify-between items-center mt-4 mb-2">
                          <h4 className="text-gray-700 font-semibold">Secondary Improvements</h4>
                          <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                            Recommended
                          </div>
                        </div>
                        
                        <motion.div 
                          className="bg-white rounded-xl shadow-lg p-4 border border-blue-50"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.15)" }}
                        >
                          <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                              <div className="font-medium text-blue-800">Use more action verbs</div>
                              <div className="text-sm text-blue-600 mt-1">Replace generic verbs with powerful action words</div>
                              <div className="mt-2 text-xs text-gray-500">
                                Impact: <span className="text-blue-500 font-medium">Medium</span> • Difficulty: <span className="text-green-500 font-medium">Low</span>
                              </div>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                              <div className="font-medium text-blue-800">Expand skills section</div>
                              <div className="text-sm text-blue-600 mt-1">Include specific technical skills relevant to the job descriptions</div>
                              <div className="mt-2 text-xs text-gray-500">
                                Impact: <span className="text-blue-500 font-medium">Medium</span> • Difficulty: <span className="text-green-500 font-medium">Low</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Keywords Tab */}
                      <div className={`p-4 space-y-4 h-[440px] overflow-y-auto bg-white text-gray-800 ${activeTab !== 'keywords' ? 'hidden' : ''}`}>
                        {/* Missing Keywords */}
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-gray-700 font-semibold">Keyword Analysis</h4>
                          <div className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                            82% Match
                          </div>
                        </div>
                        
                        <motion.div 
                          className="bg-white rounded-xl shadow-lg p-4 border border-purple-50"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(168, 85, 247, 0.15)" }}
                        >
                          <h3 className="text-base font-semibold mb-3 flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Matched Keywords
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {["React", "JavaScript", "UI/UX", "Frontend", "HTML/CSS", "User Experience", "Team Leadership"].map((keyword, index) => (
                              <motion.span 
                                key={`matched-${index}`}
                                className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs flex items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                                {keyword}
                              </motion.span>
                            ))}
                          </div>
                          
                          <h3 className="text-base font-semibold my-3 flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Missing Keywords
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {["REST API", "Docker", "CI/CD", "Agile", "Responsive Design", "TypeScript"].map((keyword, index) => (
                              <motion.span 
                                key={`missing-${index}`}
                                className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs flex items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + (index * 0.1) }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-1"></span>
                                {keyword}
                              </motion.span>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <h3 className="text-base font-semibold mb-2 text-gray-700">Keyword Recommendations</h3>
                            <div className="p-3 rounded-lg bg-purple-50">
                              <p className="text-sm text-purple-700">Adding the missing keywords could increase your match rate by <span className="font-bold">18%</span> for your target positions.</p>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Industry Comparison */}
                        <motion.div 
                          className="bg-white rounded-xl shadow-lg p-4 border border-blue-50 mt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                          whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.15)" }}
                        >
                          <h3 className="text-base font-semibold mb-3 flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            Industry Keyword Comparison
                          </h3>
                          <div className="flex items-center h-8 mb-2">
                            <div className="w-20 text-xs text-gray-500">Your Resume</div>
                            <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-purple-500 rounded-full" 
                                initial={{ width: 0 }}
                                animate={{ width: progressAnimation ? "82%" : 0 }}
                                transition={{ duration: 1, delay: 1.2 }}
                              />
                            </div>
                            <div className="w-10 text-xs text-gray-500 text-right">82%</div>
                          </div>
                          <div className="flex items-center h-8 mb-2">
                            <div className="w-20 text-xs text-gray-500">Top 10%</div>
                            <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 rounded-full w-[95%]" />
                            </div>
                            <div className="w-10 text-xs text-gray-500 text-right">95%</div>
                          </div>
                          <div className="flex items-center h-8">
                            <div className="w-20 text-xs text-gray-500">Average</div>
                            <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-yellow-500 rounded-full w-[67%]" />
                            </div>
                            <div className="w-10 text-xs text-gray-500 text-right">67%</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right Side: Text Content */}
              <motion.div 
                className="flex flex-col justify-center order-1 md:order-2 space-y-8"
                variants={animations.slideInRight}
                initial="hidden"
                animate="visible"
              >
                {/* Feature Boxes */}
                <motion.div 
                  className="space-y-5"
                  variants={animations.staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <FeatureBox
                    emoji='🎯' 
                    title='ATS Optimization' 
                    description='Intelligent analysis to ensure your resume passes through automated screening systems with higher match rates.'
                    color='pink'
                    metrics='38% Higher Pass Rate'
                  />
                  
                  <FeatureBox
                    emoji='📊' 
                    title='Detailed Scoring' 
                    description='Comprehensive analysis across format, content, and keyword metrics with specific improvement recommendations.'
                    color='purple'
                    metrics='6 Key Metrics'
                  />
                  
                  <FeatureBox
                    emoji='💡' 
                    title='Actionable Improvements' 
                    description='Get tailored, industry-specific suggestions to enhance your resume and significantly boost your application success rate.'
                    color='blue'
                    metrics='40% Success Boost'
                  />
                </motion.div>
                
                {/* Proven Results */}
                <motion.div 
                  className="glass-card p-6 rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/5 shadow-lg border border-purple-500/20"
                  variants={animations.fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Proven Results</h3>
                  </div>
                  <p className="text-gray-300">Our AI Resume Analytics has been helping professionals land their dream jobs by providing data-driven improvements that make resumes stand out to both ATS systems and hiring managers.</p>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Success Metrics - New Section */}
            <motion.section
              variants={animations.slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-8 text-center">
                <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 text-sm font-medium mb-2">
                  Success Metrics
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Proven Results That Deliver</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ComparisonStat 
                  title="Interview Rate"
                  beforeValue="12%"
                  afterValue="42%"
                  increase="3.5x"
                  color="pink"
                />
                
                <ComparisonStat 
                  title="Application to Interview Time"
                  beforeValue="24 days"
                  afterValue="8 days"
                  increase="67%"
                  color="purple"
                />
                
                <ComparisonStat 
                  title="ATS Pass Rate"
                  beforeValue="23%"
                  afterValue="78%"
                  increase="3.4x"
                  color="blue"
                />
              </div>
            </motion.section>
            
            {/* Benefits Section */}
            <motion.div 
              className="mt-16"
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <div className="mb-8 text-center">
                <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 text-sm font-medium mb-2">
                  Key Benefits
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Why Our Analytics Suite Works</h3>
              </div>
              
              <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto bg-gradient-to-br from-purple-500/15 to-pink-500/10 shadow-lg border border-white/10">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={animations.staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <BenefitCard
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    }
                    title="Higher Interview Rates"
                    description="Users report a 40% increase in interview callbacks after optimizing their resumes with our AI-powered analytics."
                    color="pink"
                  />
                  
                  <BenefitCard
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    }
                    title="ATS-Friendly Format"
                    description="Ensures your resume passes through automated screening systems successfully with optimized formatting and keywords."
                    color="blue"
                  />
                  
                  <BenefitCard
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    }
                    title="Industry-Specific Insights"
                    description="Tailored recommendations based on your target industry and role with keyword analysis across 200+ job categories."
                    color="purple"
                  />
                  
                  <BenefitCard
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    }
                    title="Continuous Improvement"
                    description="Track progress and receive updated suggestions as your resume improves with AI that learns from your edits and preferences."
                    color="green"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Statistics Banner */}
            <motion.div 
              className="mt-16 text-center"
              variants={animations.slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="glass-card px-6 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 text-sm inline-flex items-center group hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="w-3 h-3 rounded-full bg-pink-400 mr-3 animate-pulse"></span>
                <span className="font-medium">Backed by analysis of over 1 million successful resumes across all industries</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationLayout>
  );
};

export default AnalyticsSuitePresentation;