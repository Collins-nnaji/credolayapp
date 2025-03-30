import React from 'react';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

const Presentation4 = () => {
  // Market statistics data
  const marketStats = [
    {
      value: "$11.6B",
      label: "HR Tech Market",
      description: "Global market size valuation for 2023",
      color: "blue"
    },
    {
      value: "24.8%",
      label: "CAGR Growth",
      description: "Projected annual growth for AI career tech",
      color: "green"
    },
    {
      value: "85%",
      label: "ATS Market",
      description: "Companies using applicant tracking systems",
      color: "purple"
    }
  ];

  // Market share data
  const marketShareData = [
    { label: 'Traditional ATS', value: 45, color: 'bg-blue-500' },
    { label: 'Credolay', value: 15, color: 'bg-purple-500' },
    { label: 'AI-Enhanced Tools', value: 25, color: 'bg-green-500' },
    { label: 'Manual Process', value: 15, color: 'bg-orange-500' }
  ];

  // Satisfaction ratings data
  const satisfactionData = [
    { 
      category: 'Credolay',
      employer: 92,
      candidate: 88
    },
    { 
      category: 'Traditional ATS',
      employer: 68,
      candidate: 35
    },
    { 
      category: 'AI-Enhanced Tools',
      employer: 81,
      candidate: 64
    },
    { 
      category: 'Manual Process',
      employer: 42,
      candidate: 28
    }
  ];

  // Competitive advantages data
  const competitiveAdvantages = [
    {
      icon: "🧠",
      title: "Advanced AI",
      description: "Our proprietary AI algorithm outperforms industry standards by 47% in skill matching accuracy.",
      metric: "47%",
      metricLabel: "Higher Accuracy"
    },
    {
      icon: "🔄",
      title: "Cross-Market Integration",
      description: "Seamlessly connects job seekers and employers across 35+ job board platforms and company career sites.",
      metric: "35+",
      metricLabel: "Platforms"
    },
    {
      icon: "⚙️",
      title: "Personalization Engine",
      description: "Tailors the experience to each user, increasing engagement by 3.2x compared to traditional systems.",
      metric: "3.2x",
      metricLabel: "Higher Engagement"
    }
  ];

  // Customer pain points data
  const painPoints = [
    {
      percent: 76,
      title: "Job Seekers",
      description: "feel they lack tools to effectively showcase their skills",
      color: "from-blue-400 to-cyan-400"
    },
    {
      percent: 82,
      title: "Hiring Managers",
      description: "struggle to efficiently identify qualified candidates",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <PresentationLayout 
      pageNumber="4" 
      title="Market Analysis"
      gradient="from-cyan-400 to-blue-500"
    >
      {/* Market Stats Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {marketStats.map((stat, index) => (
          <motion.div
            key={index}
            className={`glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift shadow-lg animated-border-gradient`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="flex items-center mb-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-500/20 text-${stat.color}-400 mr-4`}>
                <span className="text-2xl">
                  {stat.color === "blue" ? "🏢" : stat.color === "green" ? "📈" : "📄"}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white text-shadow-sm">{stat.value}</h3>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
            <p className="text-gray-400">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Market Share Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Market Share Chart */}
        <motion.div 
          className="glass-card p-6 rounded-xl shadow-lg bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift"
          whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white text-shadow-sm">Market Share</h3>
          <div className="h-64 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="w-32 h-32 rounded-full bg-gray-700/50 flex items-center justify-center relative mb-4">
                <div className="absolute w-full h-full rounded-full">
                  {marketShareData.map((segment, index) => {
                    const rotation = index * 90;
                    return (
                      <div
                        key={index}
                        className={`absolute top-0 left-0 w-1/2 h-1/2 ${segment.color} origin-bottom-right`}
                        style={{ 
                          transform: `rotate(${rotation}deg)`,
                          clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 0)`
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div className="z-10 bg-gray-800 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold text-white">15%</div>
                  <div className="text-xs text-gray-300">Credolay</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {marketShareData.map((item, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                  <div className="text-gray-300">{item.label} <span className="text-white font-medium">{item.value}%</span></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Satisfaction Ratings */}
        <motion.div 
          className="glass-card p-6 rounded-xl shadow-lg bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift"
          whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white text-shadow-sm">Satisfaction Ratings</h3>
          <div className="h-64 flex flex-col justify-center">
            <div className="space-y-5">
              {satisfactionData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-sm text-gray-300 mb-1">{item.category}</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-24 text-xs text-gray-400">Employer</div>
                      <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.employer}%` }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        />
                      </div>
                      <div className="w-10 text-xs text-right ml-2 text-white">{item.employer}%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-xs text-gray-400">Candidate</div>
                      <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.candidate}%` }}
                          transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                        />
                      </div>
                      <div className="w-10 text-xs text-right ml-2 text-white">{item.candidate}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Competitive Advantages Section */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-white text-center text-shadow-sm">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-blue-300 text-lg mb-2">
            Competitive Landscape
          </span>
          <br />
          Our Key Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" 
              }}
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white text-shadow-sm">{advantage.title}</h3>
              <p className="text-gray-300 mb-4">{advantage.description}</p>
              <div className="absolute top-6 right-6 text-right">
                <div className="text-2xl font-bold text-white text-shadow-sm">{advantage.metric}</div>
                <div className="text-xs text-blue-300">{advantage.metricLabel}</div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/5 blur-2xl"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Customer Pain Points Section */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-white text-center text-shadow-sm">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-blue-300 text-lg mb-2">
            Market Gap
          </span>
          <br />
          Customer Pain Points
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift border border-white/10 shadow-lg"
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" 
              }}
            >
              <div className="relative h-8 w-full mb-6 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div 
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${point.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${point.percent}%` }}
                  transition={{ duration: 1, delay: 1.2 + (index * 0.1) }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">{point.percent}%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-shadow-sm">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Market Gap Conclusion */}
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="inline-block p-6 glass-card rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 shadow-lg mb-8 animated-border-gradient">
          <p className="text-lg text-gray-200">
            Credolay directly addresses a gap in the market where <span className="text-blue-300 font-semibold">76%</span> of job seekers feel they lack tools to effectively showcase their skills, while <span className="text-blue-300 font-semibold">82%</span> of hiring managers struggle to identify qualified candidates.
          </p>
        </div>
        
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-blue-300 text-sm mx-auto"
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 0 10px rgba(59, 130, 246, 0)'],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Market research conducted across 5,000+ professionals in Q1 2023
        </motion.div>
      </motion.div>
    </PresentationLayout>
  );
};

export default Presentation4; 