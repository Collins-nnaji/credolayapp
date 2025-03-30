import React from 'react';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

const Presentation2 = () => {
  const featureBox = (emoji, title, description, color = 'blue') => (
    <motion.div 
      className={`glass-card p-5 rounded-xl border border-${color}-500/30 hover-lift bg-gradient-to-br from-gray-800/40 to-gray-900/30`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
        borderColor: `rgba(var(--${color}-500-rgb), 0.4)`
      }}
    >
      <div className="flex items-start">
        <div className={`text-${color === 'blue' ? 'blue' : color === 'purple' ? 'purple' : 'amber'}-400 text-3xl mr-4 mt-1`}>
          {emoji}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white text-shadow-sm">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="2" 
      title="AI Technology"
      gradient="from-blue-400 to-cyan-400"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side: Text Content */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 glass-card p-6 rounded-xl bg-soft-blue-gradient shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our AI Career Assistant provides personalized career guidance and job recommendations 
            based on your skills, experience, and career goals, powered by state-of-the-art machine learning models.
          </motion.p>
          
          <div className="space-y-6">
            {featureBox(
              '🎯', 
              'Intelligent Job Matching', 
              'Get personalized job recommendations based on your skills, experience, and preferences with 94% relevance accuracy.',
              'blue'
            )}
            
            {featureBox(
              '✨', 
              'AI-Powered Insights', 
              'Receive data-driven career advice and industry insights drawn from analyzing millions of career trajectories and market trends.',
              'purple'
            )}
            
            {featureBox(
              '⚡', 
              'Interview Success', 
              'Practice with our AI interview coach that simulates real-world scenarios and provides constructive feedback to improve your performance.',
              'amber'
            )}
          </div>
        </motion.div>
        
        {/* Right Side: Phone Mockup */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-64 md:w-72 rounded-[2rem] border-8 border-gray-800 overflow-hidden shadow-2xl animate-float">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg z-10"></div>
            
            {/* Chat UI Mockup */}
            <div className="h-[540px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
              {/* Navbar */}
              <div className="bg-white/10 backdrop-blur-md p-3 text-center border-b border-white/20">
                <div className="text-lg font-bold text-white">Credolay Assistant</div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-4 space-y-4 h-[430px] overflow-y-auto">
                {/* User Message */}
                <motion.div 
                  className="flex justify-end mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg p-3 max-w-3/4 shadow-lg">
                    Find remote software developer jobs in Europe paying above $80,000
                  </div>
                </motion.div>
                
                {/* AI Response */}
                <motion.div 
                  className="flex justify-start mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="glass-card text-white rounded-lg p-3 max-w-3/4 shadow-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                      <div className="text-xs text-blue-300">AI Assistant</div>
                    </div>
                    I've found 12 remote software developer positions in Europe with salaries above $80,000. Here are the top 3 matches based on your profile:
                  </div>
                </motion.div>
                
                {/* Job Cards */}
                <div className="space-y-3">
                  <motion.div 
                    className="glass-card rounded-lg p-3 border border-blue-500/30 shadow-glow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="font-bold text-white">Senior React Developer</div>
                    <div className="text-blue-300">Fintech Company • Remote (EU)</div>
                    <div className="flex justify-between mt-1">
                      <div className="text-gray-300 text-sm">$95,000 - $120,000</div>
                      <div className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full">98% Match</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card rounded-lg p-3 border border-purple-500/30 shadow-glow-purple"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="font-bold text-white">Lead Frontend Engineer</div>
                    <div className="text-purple-300">Tech Startup • Remote (EU/UK)</div>
                    <div className="flex justify-between mt-1">
                      <div className="text-gray-300 text-sm">$85,000 - $110,000</div>
                      <div className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">95% Match</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card rounded-lg p-3 border border-green-500/30 shadow-glow-green"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <div className="font-bold text-white">Full-Stack JavaScript Developer</div>
                    <div className="text-green-300">Health Tech • Remote (EU)</div>
                    <div className="flex justify-between mt-1">
                      <div className="text-gray-300 text-sm">$90,000 - $105,000</div>
                      <div className="text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full">92% Match</div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-3 border-t border-white/20">
                <div className="bg-white/20 rounded-full p-2 flex">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-full p-1 ml-auto animate-pulse-subtle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12 glass-card p-6 rounded-xl max-w-3xl mx-auto bg-soft-blue-gradient shadow-lg animated-border-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-white">How Our AI Technology Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {[
            { step: 1, text: "Users describe their job preferences and career goals" },
            { step: 2, text: "AI analyzes job market data and matches with user's skills" },
            { step: 3, text: "System provides personalized job recommendations" },
            { step: 4, text: "Users receive career insights and growth opportunities" },
            { step: 5, text: "Interview preparation with AI-powered mock interviews" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex md:flex-col items-center md:items-start gap-3 md:gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + (index * 0.1) }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-semibold shrink-0">
                {item.step}
              </div>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Powered by cutting-edge AI technology with over 400 million data points
        </div>
      </motion.div>
    </PresentationLayout>
  );
};

export default Presentation2; 