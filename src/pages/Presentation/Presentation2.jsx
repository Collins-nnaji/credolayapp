import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

// Animation variants
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
  slideInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7 }
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

const AiTechnologyPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('conversation');
  const [typingText, setTypingText] = useState('');
  const [completedTyping, setCompletedTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  // Text to be typed
  const fullText = "Find remote software developer jobs in Europe paying above $80,000";
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    if (!isLoaded) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setCompletedTyping(true);
      }
    }, 60);
    
    return () => clearInterval(typingInterval);
  }, [isLoaded]);
  
  // Blinking cursor effect
  useEffect(() => {
    if (!isLoaded) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, [isLoaded]);

  // Enhanced feature box component
  const FeatureBox = ({ emoji, title, description, color = 'blue', metrics, delay = 0 }) => (
    <motion.div 
      className={`glass-card p-6 rounded-xl border border-${color}-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-800/40 to-gray-900/30`}
      variants={animations.staggerItem}
      whileHover={{ 
        boxShadow: `0 20px 40px -12px rgba(var(--${color}-500-rgb), 0.2)`,
        borderColor: `rgba(var(--${color}-500-rgb), 0.5)`
      }}
    >
      <div className="flex items-start">
        <div className={`text-${color === 'blue' ? 'blue' : color === 'purple' ? 'purple' : 'amber'}-400 text-4xl mr-5 mt-1`}>
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

  // Job card component
  const JobCard = ({ title, company, location, salary, match, color, delay }) => (
    <motion.div 
      className={`glass-card rounded-lg p-4 border border-${color}-500/30 shadow-lg transition-all duration-300`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ 
        y: -4, 
        boxShadow: `0 10px 25px -5px rgba(var(--${color}-500-rgb), 0.25)`,
        borderColor: `rgba(var(--${color}-500-rgb), 0.5)`
      }}
    >
      <div className="font-bold text-white text-lg">{title}</div>
      <div className={`text-${color}-300 flex items-center text-sm`}>
        <span className="mr-2">{company}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-500/50"></span>
        <span className="ml-2">{location}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-gray-300 text-sm font-medium">{salary}</div>
        <div className={`text-xs px-2 py-1 bg-${color}-500/30 text-${color}-300 rounded-full font-medium`}>{match}</div>
      </div>
    </motion.div>
  );

  // Implementation step component
  const ImplementationStep = ({ number, text, delay }) => (
    <motion.div 
      className="relative"
      variants={animations.staggerItem}
    >
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-lg shadow-lg border border-blue-500/30">
            {number}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <p className="text-gray-300">{text}</p>
        </div>
      </div>
      {number < 5 && (
        <div className="absolute left-5 top-10 h-12 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
      )}
    </motion.div>
  );

  // Tech badge component
  const TechBadge = ({ label, delay }) => (
    <motion.div
      className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
    >
      {label}
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="2" 
      title="AI Technology"
      gradient="from-blue-500 to-cyan-500"
    >
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-16"
          >
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Left Side: Text Content */}
              <motion.div 
                className="flex flex-col justify-center space-y-8"
                variants={animations.slideInLeft}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="glass-card p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 shadow-lg border border-blue-400/20"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                    borderColor: "rgba(96, 165, 250, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex mb-3 items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-2 animate-pulse"></span>
                    <h3 className="text-lg font-semibold text-blue-300">AI Engine</h3>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Our AI Career Assistant provides personalized career guidance and job recommendations 
                    based on your skills, experience, and career goals, powered by state-of-the-art machine learning models.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-5"
                  variants={animations.staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <FeatureBox
                    emoji='🎯' 
                    title='Intelligent Job Matching' 
                    description='Get personalized job recommendations based on your skills, experience, and preferences with 94% relevance accuracy.'
                    color='blue'
                    metrics='94% Accuracy'
                  />
                  
                  <FeatureBox
                    emoji='✨' 
                    title='AI-Powered Insights' 
                    description='Receive data-driven career advice and industry insights drawn from analyzing millions of career trajectories and market trends.'
                    color='purple'
                    metrics='400M+ Data Points'
                  />
                  
                  <FeatureBox
                    emoji='⚡' 
                    title='Interview Success' 
                    description='Practice with our AI interview coach that simulates real-world scenarios and provides constructive feedback to improve your performance.'
                    color='amber'
                    metrics='87% Success Rate'
                  />
                </motion.div>
              </motion.div>
              
              {/* Right Side: Interactive Device Mockup */}
              <motion.div 
                className="flex justify-center items-center"
                variants={animations.slideInRight}
                initial="hidden"
                animate="visible"
              >
                <div className="relative max-w-xs md:max-w-sm mx-auto">
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/20 rounded-full blur-3xl"></div>
                  
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
                    
                    {/* UI Tabs */}
                    <div className="h-[560px] bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
                      {/* Navbar */}
                      <div className="bg-white/10 backdrop-blur-md p-4 text-center border-b border-white/10 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-2">
                            <span className="text-white font-bold">C</span>
                          </div>
                          <div className="text-lg font-bold text-white">Credolay AI</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-100"></div>
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200"></div>
                        </div>
                      </div>
                      
                      {/* Tab Bar */}
                      <div className="flex border-b border-white/10">
                        <button 
                          className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${activeTab === 'conversation' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                          onClick={() => setActiveTab('conversation')}
                        >
                          Conversation
                        </button>
                        <button 
                          className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${activeTab === 'jobs' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                          onClick={() => setActiveTab('jobs')}
                        >
                          Jobs
                        </button>
                        <button 
                          className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${activeTab === 'insights' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                          onClick={() => setActiveTab('insights')}
                        >
                          Insights
                        </button>
                      </div>
                      
                      {/* Conversation Tab */}
                      <div className={`p-4 space-y-4 h-[430px] overflow-y-auto ${activeTab !== 'conversation' ? 'hidden' : ''}`}>
                        {/* Initial welcome message */}
                        <motion.div 
                          className="flex justify-start mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="glass-card text-white rounded-lg p-3 max-w-[85%] shadow-lg border border-white/10">
                            <div className="flex items-center mb-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                              <div className="text-xs text-blue-300">Credolay Assistant</div>
                            </div>
                            <p className="text-gray-200">Hello! I'm your AI career assistant. How can I help with your job search today?</p>
                          </div>
                        </motion.div>
                        
                        {/* User typing message */}
                        <motion.div 
                          className="flex justify-end mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg p-3 max-w-[85%] shadow-lg">
                            {typingText}{showCursor && !completedTyping && <span className="animate-blink">|</span>}
                          </div>
                        </motion.div>
                        
                        {/* AI Response - only show after typing is complete */}
                        {completedTyping && (
                          <motion.div 
                            className="flex justify-start mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="glass-card text-white rounded-lg p-3 max-w-[85%] shadow-lg border border-white/10">
                              <div className="flex items-center mb-2">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                                <div className="text-xs text-blue-300">Credolay Assistant</div>
                              </div>
                              <p className="text-gray-200 mb-2">I've found 12 remote software developer positions in Europe with salaries above $80,000. Here are the top 3 matches based on your profile:</p>
                              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                <span>Analyzing 400+ job boards</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Job Cards - only show after typing is complete */}
                        {completedTyping && (
                          <div className="space-y-3 pl-8">
                            <JobCard 
                              title="Senior React Developer"
                              company="Fintech Company"
                              location="Remote (EU)"
                              salary="$95,000 - $120,000"
                              match="98% Match"
                              color="blue"
                              delay={0.6}
                            />
                            
                            <JobCard 
                              title="Lead Frontend Engineer"
                              company="Tech Startup"
                              location="Remote (EU/UK)"
                              salary="$85,000 - $110,000"
                              match="95% Match"
                              color="purple"
                              delay={0.8}
                            />
                            
                            <JobCard 
                              title="Full-Stack JavaScript Developer"
                              company="Health Tech"
                              location="Remote (EU)"
                              salary="$90,000 - $105,000"
                              match="92% Match"
                              color="green"
                              delay={1.0}
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Jobs Tab */}
                      <div className={`p-4 space-y-3 h-[430px] overflow-y-auto ${activeTab !== 'jobs' ? 'hidden' : ''}`}>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-white font-semibold">Recommended Jobs</h4>
                          <div className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                            12 matches
                          </div>
                        </div>
                        
                        <JobCard 
                          title="Senior React Developer"
                          company="Fintech Company"
                          location="Remote (EU)"
                          salary="$95,000 - $120,000"
                          match="98% Match"
                          color="blue"
                          delay={0.2}
                        />
                        
                        <JobCard 
                          title="Lead Frontend Engineer"
                          company="Tech Startup"
                          location="Remote (EU/UK)"
                          salary="$85,000 - $110,000"
                          match="95% Match"
                          color="purple"
                          delay={0.3}
                        />
                        
                        <JobCard 
                          title="Full-Stack JavaScript Developer"
                          company="Health Tech"
                          location="Remote (EU)"
                          salary="$90,000 - $105,000"
                          match="92% Match"
                          color="green"
                          delay={0.4}
                        />
                        
                        <JobCard 
                          title="Senior Frontend Developer"
                          company="E-commerce Platform"
                          location="Remote (EU)"
                          salary="$88,000 - $115,000"
                          match="90% Match"
                          color="amber"
                          delay={0.5}
                        />
                      </div>
                      
                      {/* Insights Tab */}
                      <div className={`p-4 h-[430px] overflow-y-auto ${activeTab !== 'insights' ? 'hidden' : ''}`}>
                        <div className="glass-card p-4 rounded-lg border border-blue-500/20 mb-3">
                          <h4 className="text-blue-300 font-medium mb-2">Career Insights</h4>
                          <p className="text-white text-sm mb-3">Based on your profile, here are some insights:</p>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                              <p className="text-gray-300 text-sm">Your React skills are in high demand (37% above market)</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                              <p className="text-gray-300 text-sm">Consider improving TypeScript for better opportunities</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                              <p className="text-gray-300 text-sm">Remote EU market has 28% more openings this quarter</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glass-card p-4 rounded-lg border border-purple-500/20">
                          <h4 className="text-purple-300 font-medium mb-2">Skill Analysis</h4>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">React</span>
                                <span className="text-blue-300">94%</span>
                              </div>
                              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '94%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">JavaScript</span>
                                <span className="text-blue-300">90%</span>
                              </div>
                              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">TypeScript</span>
                                <span className="text-blue-300">76%</span>
                              </div>
                              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '76%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">Node.js</span>
                                <span className="text-blue-300">82%</span>
                              </div>
                              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '82%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input Area */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-3 border-t border-white/10">
                        <div className="bg-white/20 rounded-full p-2 flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-700/50 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 text-gray-400 text-sm">Type your message...</div>
                          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-full p-1 ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* How It Works Section */}
            <motion.div 
              className="mt-16"
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto bg-gradient-to-br from-blue-500/15 to-cyan-500/10 shadow-lg border border-blue-500/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">How Our AI Technology Works</h3>
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full font-medium">
                    5-Step Process
                  </div>
                </div>
                
                <motion.div 
                  className="space-y-6"
                  variants={animations.staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <ImplementationStep 
                    number={1} 
                    text="Users describe their job preferences and career goals using natural language or structured inputs. Our NLP system processes these requests with 98% comprehension accuracy."
                  />
                  
                  <ImplementationStep 
                    number={2} 
                    text="AI analyzes job market data from over 500 sources, processing current openings, salary trends, and skill demands — then matches these with the user's specific skills and experience profile."
                  />
                  
                  <ImplementationStep 
                    number={3} 
                    text="The recommendation engine provides personalized job matches ranked by relevance, fit, and growth potential, filtering for user-specified criteria like remote work or salary requirements."
                  />
                  
                  <ImplementationStep 
                    number={4} 
                    text="Users receive detailed career insights including skill gap analysis, industry trends relevant to their field, and personalized growth opportunities based on career trajectory modeling."
                  />
                  
                  <ImplementationStep 
                    number={5} 
                    text="The interview preparation module uses contextual understanding of both the job requirements and the user's background to create realistic interview simulations with adaptive difficulty levels."
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Technology Stack Section */}
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              variants={animations.slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Powered By Advanced Technology</h4>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <TechBadge label="Natural Language Processing" delay={0.3} />
                <TechBadge label="Deep Learning" delay={0.4} />
                <TechBadge label="GPT-4 Architecture" delay={0.5} />
                <TechBadge label="Computer Vision" delay={0.6} />
                <TechBadge label="Knowledge Graphs" delay={0.7} />
              </div>
              
              <motion.div
                className="glass-card px-6 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm inline-flex items-center group hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
                <span className="font-medium">Powered by cutting-edge AI technology with over 400 million data points</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>
            
            {/* AI Models Section - New */}
            <motion.div
              className="max-w-4xl mx-auto mt-16"
              variants={animations.slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-purple-500/15 to-blue-500/10 shadow-lg border border-purple-500/20">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Our AI Models</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.2)" }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">SkillMatch™</h4>
                    <p className="text-gray-300 text-sm">Our proprietary skill mapping algorithm that identifies relevant job opportunities with 94% precision based on your unique skill profile.</p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Accuracy</span>
                        <span className="text-purple-300">94%</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.2)" }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">CareerPathAI</h4>
                    <p className="text-gray-300 text-sm">Predictive model that suggests optimal career paths based on current skills and career goals, trained on millions of successful career trajectories.</p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Prediction Accuracy</span>
                        <span className="text-blue-300">89%</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.2)" }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">InterviewCoach</h4>
                    <p className="text-gray-300 text-sm">Advanced NLP model that simulates realistic interview scenarios, analyzes responses, and provides personalized feedback to improve interview performance.</p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Success Rate</span>
                        <span className="text-cyan-300">87%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationLayout>
  );
};

export default AiTechnologyPresentation;