import React from 'react';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

const Presentation3 = () => {
  const featureBox = (emoji, title, description, color = 'pink') => (
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
        <div className={`text-${color === 'pink' ? 'pink' : color === 'purple' ? 'purple' : 'blue'}-400 text-3xl mr-4 mt-1`}>
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
      pageNumber="3" 
      title="Analytics Suite"
      gradient="from-purple-400 to-pink-400"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side: Phone Mockup (reverse order on mobile) */}
        <motion.div 
          className="flex justify-center items-center order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-64 md:w-72 rounded-[2rem] border-8 border-gray-800 overflow-hidden shadow-2xl animate-float">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg z-10"></div>
            
            {/* Resume Analytics UI Mockup */}
            <div className="h-[540px] bg-gray-50 overflow-hidden">
              {/* App Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <div className="text-lg font-bold text-white">Resume Analytics</div>
                <div className="text-sm text-white/80">Optimize your job applications</div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-4 h-[467px] overflow-y-auto text-gray-800">
                {/* Overall Score */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between border border-purple-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(168, 85, 247, 0.2)" }}
                >
                  <div>
                    <div className="text-sm text-gray-500">Overall Score</div>
                    <div className="text-2xl font-bold text-purple-600">75%</div>
                  </div>
                  <div className="w-16 h-16 relative">
                    <svg className="transform -rotate-90" width="64" height="64">
                      <circle
                        stroke="#e2e8f0"
                        strokeWidth="8"
                        fill="transparent"
                        r="24"
                        cx="32"
                        cy="32"
                      />
                      <motion.circle
                        stroke="#a855f7"
                        strokeWidth="8"
                        fill="transparent"
                        r="24"
                        cx="32"
                        cy="32"
                        strokeDasharray="150.8"
                        initial={{ strokeDashoffset: "150.8" }}
                        animate={{ strokeDashoffset: "37.7" }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-purple-600">75%</div>
                  </div>
                </motion.div>
                
                {/* Score Components */}
                <motion.div 
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div 
                    className="bg-white rounded-xl shadow p-3 border border-yellow-100"
                    whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.2)" }}
                  >
                    <div className="text-sm text-gray-500">ATS Score</div>
                    <div className="text-xl font-bold text-yellow-600">68%</div>
                    <motion.div 
                      className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden"
                    >
                      <motion.div 
                        className="h-full bg-yellow-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "68%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-xl shadow p-3 border border-green-100"
                    whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)" }}
                  >
                    <div className="text-sm text-gray-500">Keyword Match</div>
                    <div className="text-xl font-bold text-green-600">82%</div>
                    <motion.div 
                      className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden"
                    >
                      <motion.div 
                        className="h-full bg-green-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "82%" }}
                        transition={{ duration: 1, delay: 1.1 }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-xl shadow p-3 border border-green-100"
                    whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)" }}
                  >
                    <div className="text-sm text-gray-500">Format</div>
                    <div className="text-xl font-bold text-green-600">85%</div>
                    <motion.div 
                      className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden"
                    >
                      <motion.div 
                        className="h-full bg-green-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-xl shadow p-3 border border-yellow-100"
                    whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.2)" }}
                  >
                    <div className="text-sm text-gray-500">Content</div>
                    <div className="text-xl font-bold text-yellow-600">65%</div>
                    <motion.div 
                      className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden"
                    >
                      <motion.div 
                        className="h-full bg-yellow-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1, delay: 1.3 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Critical Improvements */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-4 border border-red-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(239, 68, 68, 0.15)" }}
                >
                  <h3 className="text-base font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Critical Improvements
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
                      <div className="font-medium text-red-800">Missing key achievements</div>
                      <div className="text-sm text-red-600">Add quantifiable results to your work experience</div>
                    </div>
                    <div className="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
                      <div className="font-medium text-yellow-800">Improve ATS compatibility</div>
                      <div className="text-sm text-yellow-600">Use standard section headings for better parsing</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Missing Keywords */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-4 border border-orange-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.15)" }}
                >
                  <h3 className="text-base font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Missing Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["REST API", "Docker", "CI/CD", "Agile"].map((keyword, index) => (
                      <motion.span 
                        key={index}
                        className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + (index * 0.1) }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-1"></span>
                        {keyword}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Side: Text Content */}
        <motion.div 
          className="flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 glass-card p-6 rounded-xl bg-soft-purple-gradient shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our AI-powered Resume Analytics provides detailed insights and improvements to optimize your resume 
            for Applicant Tracking Systems (ATS) and hiring managers, increasing your chances of landing interviews by up to 40%.
          </motion.p>
          
          <div className="space-y-6">
            {featureBox(
              '🎯', 
              'ATS Optimization', 
              'Intelligent analysis to ensure your resume passes through automated screening systems with higher match rates.',
              'pink'
            )}
            
            {featureBox(
              '📊', 
              'Detailed Scoring', 
              'Comprehensive analysis across format, content, and keyword metrics with specific improvement recommendations.',
              'purple'
            )}
            
            {featureBox(
              '💡', 
              'Actionable Improvements', 
              'Get tailored, industry-specific suggestions to enhance your resume and significantly boost your application success rate.',
              'blue'
            )}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12 glass-card p-6 rounded-xl max-w-3xl mx-auto bg-soft-purple-gradient shadow-lg animated-border-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <h3 className="text-xl font-semibold mb-5 text-white text-shadow-sm text-center">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="glass-card p-4 rounded-lg hover-lift"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mr-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-pink-400 font-semibold">Higher Interview Rates</div>
            </div>
            <p className="text-gray-300 text-sm mt-2">Users report a 40% increase in interview callbacks after optimizing their resumes with our AI-powered analytics.</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-4 rounded-lg hover-lift"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-blue-400 font-semibold">ATS-Friendly Format</div>
            </div>
            <p className="text-gray-300 text-sm mt-2">Ensures your resume passes through automated screening systems successfully with optimized formatting and keywords.</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-4 rounded-lg hover-lift"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mr-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="text-purple-400 font-semibold">Industry-Specific Insights</div>
            </div>
            <p className="text-gray-300 text-sm mt-2">Tailored recommendations based on your target industry and role with keyword analysis across 200+ job categories.</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-4 rounded-lg hover-lift"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="text-green-400 font-semibold">Continuous Improvement</div>
            </div>
            <p className="text-gray-300 text-sm mt-2">Track progress and receive updated suggestions as your resume improves with AI that learns from your edits and preferences.</p>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 text-sm">
          <span className="w-2 h-2 rounded-full bg-pink-400 mr-2 animate-pulse"></span>
          Backed by analysis of over 1 million successful resumes across all industries
        </div>
      </motion.div>
    </PresentationLayout>
  );
};

export default Presentation3; 