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
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

const MarketAnalysisPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);
  const [chartAnimationComplete, setChartAnimationComplete] = useState(false);
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Market statistics data with enhanced details
  const marketStats = [
    {
      value: "$11.6B",
      label: "HR Tech Market",
      description: "Global market size valuation for 2023",
      growth: "+18.6% YoY",
      source: "HR Technology Report 2023",
      color: "blue",
      icon: "🏢"
    },
    {
      value: "24.8%",
      label: "CAGR Growth",
      description: "Projected annual growth for AI career tech",
      growth: "2023-2028",
      source: "McKinsey Future of Work",
      color: "green",
      icon: "📈"
    },
    {
      value: "85%",
      label: "ATS Market",
      description: "Companies using applicant tracking systems",
      growth: "+15% since 2020",
      source: "Enterprise HR Survey",
      color: "purple",
      icon: "📄"
    }
  ];

  // Enhanced market share data
  const marketShareData = [
    { label: 'Traditional ATS', value: 45, color: 'blue-600 to-blue-400', targetGrowth: 'Decreasing 3% yearly' },
    { label: 'Credolay', value: 15, color: 'purple-600 to-purple-400', targetGrowth: 'Projected 35% yearly growth' },
    { label: 'AI-Enhanced Tools', value: 25, color: 'green-600 to-green-400', targetGrowth: 'Growing 15% yearly' },
    { label: 'Manual Process', value: 15, color: 'orange-500 to-orange-300', targetGrowth: 'Decreasing 8% yearly' }
  ];

  // Enhanced satisfaction data
  const satisfactionData = [
    { 
      category: 'Credolay',
      employer: 92,
      candidate: 88,
      details: 'Superior matching accuracy with AI-powered recommendations'
    },
    { 
      category: 'Traditional ATS',
      employer: 68,
      candidate: 35,
      details: 'Limited keyword matching, poor candidate experience'
    },
    { 
      category: 'AI-Enhanced Tools',
      employer: 81,
      candidate: 64,
      details: 'Good matching but lacks comprehensive career insights'
    },
    { 
      category: 'Manual Process',
      employer: 42,
      candidate: 28,
      details: 'Highly subjective, time-intensive, and inconsistent'
    }
  ];

  // Enhanced competitive advantages data
  const competitiveAdvantages = [
    {
      icon: "🧠",
      title: "Advanced AI Matching",
      description: "Our proprietary AI algorithm outperforms industry standards by 47% in skill matching accuracy, reducing hiring time by 68%.",
      metric: "47%",
      metricLabel: "Higher Accuracy",
      color: "blue",
      details: [
        "Multi-dimensional skill assessment beyond keywords",
        "Context-aware understanding of job requirements",
        "Self-learning algorithm that improves with each interaction"
      ]
    },
    {
      icon: "🔄",
      title: "Cross-Market Integration",
      description: "Seamlessly connects job seekers and employers across 35+ job board platforms and company career sites, capturing 78% of available positions.",
      metric: "35+",
      metricLabel: "Platforms",
      color: "green",
      details: [
        "Unified dashboard across multiple job platforms",
        "Real-time synchronization with company ATS systems",
        "Comprehensive coverage of niche job markets"
      ]
    },
    {
      icon: "⚙️",
      title: "Personalization Engine",
      description: "Tailors the experience to each user, increasing engagement by 3.2x compared to traditional systems and improving job placement outcomes.",
      metric: "3.2x",
      metricLabel: "Higher Engagement",
      color: "pink",
      details: [
        "Dynamic skill gap analysis and recommendations",
        "Custom learning paths for career advancement",
        "Personalized job matching based on preferences and culture fit"
      ]
    }
  ];

  // Enhanced customer pain points data
  const painPoints = [
    {
      percent: 76,
      title: "Job Seekers",
      description: "feel they lack tools to effectively showcase their skills",
      details: "Are frustrated with keyword-matching systems that fail to recognize their true capabilities and potential",
      color: "from-blue-400 to-cyan-400",
      solution: "Credolay's AI analyzes skills context and potential, not just keywords"
    },
    {
      percent: 82,
      title: "Hiring Managers",
      description: "struggle to efficiently identify qualified candidates",
      details: "Waste time reviewing unsuitable applications due to poor filtering and matching systems",
      color: "from-purple-400 to-pink-400",
      solution: "Our platform reduces screening time by 65% while improving quality of matches"
    }
  ];

  // Industry trends data
  const industryTrends = [
    { 
      title: "AI-Driven Recruitment", 
      percentage: 64, 
      description: "Companies adopting AI technologies in talent acquisition" 
    },
    { 
      title: "Remote Hiring", 
      percentage: 58, 
      description: "Increase in global remote recruitment versus pre-pandemic" 
    },
    { 
      title: "Skill-Based Hiring", 
      percentage: 72, 
      description: "Shift from degree-based to skill-based candidate evaluation" 
    }
  ];

  // Toggles details view for market share segments
  const toggleMarketShareDetails = (label) => {
    setSelectedDataPoint(selectedDataPoint === label ? null : label);
  };

  // Custom stat card component
  const StatCard = ({ stat, index }) => (
    <motion.div
      className={`glass-card p-6 rounded-xl bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/10 hover:-translate-y-2 transition-all duration-300 border border-${stat.color}-500/20 shadow-lg`}
      variants={animations.staggerItem}
      whileHover={{ 
        boxShadow: `0 20px 40px -12px rgba(var(--${stat.color}-500-rgb), 0.25)`,
        borderColor: `rgba(var(--${stat.color}-500-rgb), 0.4)`
      }}
    >
      <div className="flex items-start mb-3">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-${stat.color}-500/20 text-${stat.color}-400 mr-4 shadow-lg`}>
          <span className="text-2xl">{stat.icon}</span>
        </div>
        <div>
          <div className="flex items-baseline">
            <h3 className="text-3xl font-bold text-white text-shadow-sm mr-2">{stat.value}</h3>
            <span className={`text-xs font-medium text-${stat.color}-400 bg-${stat.color}-500/20 px-2 py-0.5 rounded-md`}>
              {stat.growth}
            </span>
          </div>
          <div className="text-sm text-gray-300">{stat.label}</div>
        </div>
      </div>
      <p className="text-gray-400 mb-2">{stat.description}</p>
      <div className="text-xs text-gray-500 flex items-center mt-2">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Source: {stat.source}
      </div>
    </motion.div>
  );

  // Dynamic DonutChart component
  const DonutChart = () => {
    // Calculate stroke-dasharray and stroke-dashoffset
    const calculateSegment = (value, index, total) => {
      const circumference = 2 * Math.PI * 40; // radius = 40
      const segmentLength = (value / 100) * circumference;
      const previousSegmentsLength = marketShareData
        .slice(0, index)
        .reduce((acc, segment) => acc + (segment.value / 100) * circumference, 0);
      
      return {
        segmentLength,
        dashOffset: circumference - previousSegmentsLength
      };
    };

    return (
      <div className="relative w-80 h-80 mx-auto">
        <svg width="160" height="160" viewBox="0 0 160 160" className="absolute inset-0 m-auto transform">
          <circle cx="80" cy="80" r="60" fill="transparent" stroke="#2D3748" strokeWidth="20" />
          
          {marketShareData.map((segment, index) => {
            const { segmentLength, dashOffset } = calculateSegment(segment.value, index, 100);
            const gradientId = `gradient-${segment.label.replace(/\s+/g, '-').toLowerCase()}`;
            const colors = segment.color.split(' ');
            
            return (
              <motion.circle
                key={index}
                cx="80"
                cy="80"
                r="40"
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="80"
                strokeDasharray={`${segmentLength} ${2 * Math.PI * 40 - segmentLength}`}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 80 80)"
                onClick={() => toggleMarketShareDetails(segment.label)}
                className="cursor-pointer"
                whileHover={{ filter: "brightness(1.2)" }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 + index * 0.1 }
                }}
                onAnimationComplete={() => index === marketShareData.length - 1 && setChartAnimationComplete(true)}
              />
            );
          })}
          
          {/* Center circle */}
          <circle cx="80" cy="80" r="30" fill="#1F2937" />
          
          {/* Add gradients */}
          <defs>
            {marketShareData.map((segment) => {
              const id = `gradient-${segment.label.replace(/\s+/g, '-').toLowerCase()}`;
              const colors = segment.color.split(' ');
              return (
                <linearGradient key={id} id={id} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={`var(--${colors[0]})`} />
                  <stop offset="100%" stopColor={`var(--${colors[1]})`} />
                </linearGradient>
              );
            })}
          </defs>
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: chartAnimationComplete ? 1 : 0, 
              scale: chartAnimationComplete ? 1 : 0.8,
              transition: { duration: 0.3 }
            }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">Market Share</div>
            <div className="text-xs text-gray-400">Click segments for details</div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  // Competitive advantage card component
  const AdvantageCard = ({ advantage, index }) => (
    <motion.div
      className={`glass-card p-6 rounded-xl bg-gradient-to-br from-${advantage.color}-500/15 to-${advantage.color}-600/5 hover:-translate-y-2 transition-all duration-300 border border-${advantage.color}-500/20 shadow-lg relative overflow-hidden`}
      variants={animations.staggerItem}
      whileHover={{ 
        boxShadow: `0 20px 40px -12px rgba(var(--${advantage.color}-500-rgb), 0.25)`,
        borderColor: `rgba(var(--${advantage.color}-500-rgb), 0.4)`
      }}
      onMouseEnter={() => setHoveredAdvantage(advantage.title)}
      onMouseLeave={() => setHoveredAdvantage(null)}
    >
      <div className="flex items-start">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-${advantage.color}-500/20 text-${advantage.color}-400 mr-4 shadow-lg`}>
          <span className="text-3xl">{advantage.icon}</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold mb-2 text-white">{advantage.title}</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{advantage.metric}</div>
              <div className="text-xs text-gray-400">{advantage.metricLabel}</div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{advantage.description}</p>
          
          <AnimatePresence>
            {hoveredAdvantage === advantage.title && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 mt-2 pt-3 border-t border-gray-700"
              >
                {advantage.details.map((detail, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center text-sm text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/5 blur-2xl"></div>
    </motion.div>
  );

  // Section navigation component
  const SectionNav = () => (
    <div className="flex justify-center mb-8">
      <div className="flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full shadow-lg">
        {[
          { id: 'overview', label: 'Market Overview' },
          { id: 'satisfaction', label: 'Satisfaction' },
          { id: 'competitive', label: 'Competitive Edge' },
          { id: 'trends', label: 'Industry Trends' }
        ].map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <PresentationLayout 
      pageNumber="4" 
      title="Market Analysis"
      gradient="from-cyan-500 to-blue-600"
    >
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Section Navigation */}
            <motion.div
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
            >
              <SectionNav />
            </motion.div>

            {/* Market Stats Section */}
            <div className={activeSection === 'overview' ? 'block' : 'hidden'}>
              <motion.div
                variants={animations.staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {marketStats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </motion.div>
            
              {/* Market Share and Growth Section */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                variants={animations.fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                {/* Market Share Chart */}
                <motion.div 
                  className="glass-card p-6 rounded-xl shadow-lg bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover:shadow-xl transition-all duration-300"
                  variants={animations.slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">Market Share Analysis</h3>
                  <div className="flex flex-col items-center">
                    <DonutChart />
                    
                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                      {marketShareData.map((item, index) => (
                        <motion.div 
                          key={index} 
                          className={`flex items-center text-sm p-2 rounded-lg transition-colors duration-300 cursor-pointer ${selectedDataPoint === item.label ? 'bg-gray-700/50' : 'hover:bg-gray-800/30'}`}
                          onClick={() => toggleMarketShareDetails(item.label)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-${item.color} mr-2`}></div>
                          <div>
                            <div className="text-gray-300">{item.label}</div>
                            <div className="text-white font-medium">{item.value}%</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Selected segment details */}
                    <AnimatePresence>
                      {selectedDataPoint && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                        >
                          <div className="text-sm text-gray-300">
                            <span className="font-medium text-white">{selectedDataPoint}</span>
                            <div className="mt-1">
                              {marketShareData.find(item => item.label === selectedDataPoint)?.targetGrowth}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Industry Growth Trends */}
                <motion.div 
                  className="glass-card p-6 rounded-xl shadow-lg bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover:shadow-xl transition-all duration-300"
                  variants={animations.slideInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">Industry Growth Trends</h3>
                  <div className="space-y-6">
                    {industryTrends.map((trend, index) => (
                      <motion.div 
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-medium">{trend.title}</span>
                          <span className="text-cyan-300 font-medium">{trend.percentage}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${trend.percentage}%` }}
                            transition={{ duration: 1, delay: 0.7 + (index * 0.2) }}
                          />
                        </div>
                        <p className="text-sm text-gray-400">{trend.description}</p>
                      </motion.div>
                    ))}
                    
                    <div className="pt-4 mt-4 border-t border-gray-700">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">Key Insight</h4>
                          <p className="text-gray-300">AI-driven recruitment technologies show the highest growth rate, with Credolay positioned to capture significant market share in this expanding sector.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Satisfaction Section */}
            <div className={activeSection === 'satisfaction' ? 'block' : 'hidden'}>
              <motion.div
                variants={animations.fadeIn}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto"
              >
                <div className="glass-card p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-6 text-white text-center">Satisfaction Comparison</h3>
                  
                  <div className="space-y-8">
                    {satisfactionData.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-base font-medium text-white">{item.category}</div>
                          <div className={`text-xs px-2 py-0.5 rounded-full ${
                            index === 0 ? 'bg-green-500/20 text-green-300' : 'bg-gray-700/50 text-gray-300'
                          }`}>
                            {index === 0 ? 'Market Leader' : 'Competitor'}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm text-gray-300">Employer Satisfaction</span>
                              </div>
                              <span className="text-sm font-medium text-white">{item.employer}%</span>
                            </div>
                            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full rounded-full ${
                                  item.candidate >= 90 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                                  item.candidate >= 70 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                                  item.candidate >= 50 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                                  'bg-gradient-to-r from-red-500 to-red-400'
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.candidate}%` }}
                                transition={{ duration: 1, delay: 0.6 + (index * 0.2) }}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-400 bg-gray-800/30 p-3 rounded-lg">
                          {item.details}
                        </div>
                        
                        {index < satisfactionData.length - 1 && (
                          <div className="border-b border-gray-700/50 pt-4"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Satisfaction Insight</h4>
                        <p className="text-gray-300">Credolay achieves the highest satisfaction rates for both employers and candidates, with a remarkable <span className="text-blue-300 font-medium">53%</span> higher candidate satisfaction compared to traditional ATS solutions.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Competitive Advantages Section */}
            <div className={activeSection === 'competitive' ? 'block' : 'hidden'}>
              <motion.div 
                className="mb-12"
                variants={animations.fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <div className="text-center mb-8">
                  <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-blue-300 text-sm mb-2">
                    Competitive Landscape
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Key Advantages</h2>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={animations.staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {competitiveAdvantages.map((advantage, index) => (
                    <AdvantageCard key={index} advantage={advantage} index={index} />
                  ))}
                </motion.div>
                
                <motion.div 
                  className="max-w-3xl mx-auto mt-10 glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-blue-500/20 shadow-lg"
                  variants={animations.slideUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Competitive Edge Summary</h3>
                      <p className="text-gray-300">Our unique combination of advanced AI matching, cross-platform integration, and personalization creates a significant competitive advantage. This translates to measurable improvements in hiring outcomes with reduced time-to-hire by <span className="text-blue-300 font-medium">68%</span> and increased retention rates by <span className="text-blue-300 font-medium">42%</span> compared to companies using traditional solutions.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Industry Trends Section */}
            <div className={activeSection === 'trends' ? 'block' : 'hidden'}>
              <motion.div
                variants={animations.fadeIn}
                initial="hidden"
                animate="visible"
                className="mb-12"
              >
                {/* Customer Pain Points Section */}
                <div className="text-center mb-8">
                  <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-blue-300 text-sm mb-2">
                    Market Gap
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Customer Pain Points</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                  {painPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover:-translate-y-2 transition-all duration-300 border border-white/10 shadow-lg"
                      variants={animations.slideInLeft}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 + (index * 0.2) }}
                    >
                      <div className="relative h-8 w-full mb-6 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${point.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${point.percent}%` }}
                          transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-base font-semibold text-white">{point.percent}%</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{point.description}</p>
                      <div className="text-sm text-gray-400 bg-gray-800/30 p-3 rounded-lg mb-4">
                        "{point.details}"
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="text-sm text-green-300">Solution: {point.solution}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Market Gap Conclusion */}
                <motion.div 
                  className="max-w-3xl mx-auto text-center"
                  variants={animations.slideUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 shadow-lg mb-8 border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Market Gap Analysis</h3>
                    <p className="text-lg text-gray-200">
                      Credolay directly addresses a significant gap in the market where <span className="text-blue-300 font-semibold">76%</span> of job seekers feel they lack tools to effectively showcase their skills, while <span className="text-blue-300 font-semibold">82%</span> of hiring managers struggle to identify qualified candidates.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-center">
                        <div className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 mr-4">
                          5,000+ professionals surveyed
                        </div>
                        <div className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30">
                          Q1 2023 data
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="glass-card px-6 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm inline-flex items-center group hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="w-3 h-3 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
                    <span className="font-medium">Market research conducted across 5,000+ professionals in Q1 2023</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Fixed Navigation Dots */}
            <motion.div 
              className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-3 z-50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[
                { id: 'overview', label: 'Market Overview' },
                { id: 'satisfaction', label: 'Satisfaction' },
                { id: 'competitive', label: 'Competitive Edge' },
                { id: 'trends', label: 'Industry Trends' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-blue-500 w-4 h-4'
                      : 'bg-gray-400 opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`View ${section.label} section`}
                  title={section.label}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationLayout>
  );
};

export default MarketAnalysisPresentation;