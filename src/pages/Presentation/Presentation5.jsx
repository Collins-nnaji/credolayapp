import React from 'react';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

const Presentation5 = () => {
  const growthStages = [
    {
      title: "Stage 1: Market Entry",
      quarters: "Q3 2023 - Q1 2024",
      icon: "🚀",
      items: [
        "Initial product launch with core AI-powered matching",
        "Build strategic partnerships with 5 major job boards",
        "Acquire 25,000 active users across target segments"
      ],
      color: "blue"
    },
    {
      title: "Stage 2: Growth & Expansion",
      quarters: "Q2 2024 - Q4 2024",
      icon: "📈",
      items: [
        "Launch enterprise solution for mid-sized companies",
        "Release advanced analytics dashboard",
        "Expand to international markets (UK, Canada, Australia)",
        "Reach 100,000 active users milestone"
      ],
      color: "purple"
    },
    {
      title: "Stage 3: Market Leadership",
      quarters: "Q1 2025 - Beyond",
      icon: "👑",
      items: [
        "Introduce predictive workforce planning tools",
        "Develop industry-specific vertical solutions",
        "Strategic acquisitions of complementary technologies",
        "Scale to 500,000+ active users globally"
      ],
      color: "pink"
    }
  ];

  const revenueStreams = [
    {
      title: "Subscription Model",
      description: "Tiered packages for job seekers with advanced features",
      percentage: 45,
      icon: "💳",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom implementations for corporate HR departments",
      percentage: 30,
      icon: "🏢",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Partnerships",
      description: "Revenue share from job boards and recruiting platforms",
      percentage: 15,
      icon: "🤝",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Insights",
      description: "Anonymized market intelligence for industry partners",
      percentage: 10,
      icon: "📊",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const kpiItems = [
    {
      metric: "Monthly Active Users",
      current: "25K",
      target: "500K",
      timeline: "36 months",
      icon: "👥"
    },
    {
      metric: "Revenue Growth",
      current: "$250K ARR",
      target: "$15M ARR",
      timeline: "36 months",
      icon: "💰"
    },
    {
      metric: "Customer Retention",
      current: "88%",
      target: "95%",
      timeline: "24 months",
      icon: "🔄"
    },
    {
      metric: "Enterprise Clients",
      current: "5",
      target: "150+",
      timeline: "36 months",
      icon: "🏢"
    }
  ];

  return (
    <PresentationLayout 
      pageNumber="5" 
      title="Growth Strategy"
      gradient="from-green-400 to-emerald-600"
    >
      {/* Strategic Growth Timeline */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-white text-center text-shadow-sm flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-lg mb-2">
            Strategic Roadmap
          </span>
          <span>Growth Timeline</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {growthStages.map((stage, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift shadow-lg animated-border-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
                background: `radial-gradient(circle at center, rgba(var(--${stage.color}-500-rgb), 0.15), transparent)` 
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${stage.color}-500/20 flex items-center justify-center text-2xl mr-3`}>
                  {stage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white text-shadow-sm">{stage.title}</h3>
                  <div className="text-sm text-gray-400">{stage.quarters}</div>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                {stage.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.2) + (itemIndex * 0.1) }}
                  >
                    <span className={`text-${stage.color}-400 mr-2 mt-1`}>•</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Revenue Streams */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-white text-center text-shadow-sm flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-lg mb-2">
            Monetization
          </span>
          <span>Revenue Streams</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {revenueStreams.map((stream, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" 
              }}
            >
              <div className="flex items-center mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stream.color} bg-clip-padding backdrop-filter backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl mr-4`}>
                  {stream.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white text-shadow-sm">{stream.title}</h3>
                  <p className="text-gray-300 text-sm">{stream.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-400">Revenue Contribution</div>
                  <div className="text-lg font-bold text-white">{stream.percentage}%</div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${stream.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${stream.percentage}%` }}
                    transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="inline-block py-2 px-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-sm">
            Projected to reach profitability by Q4 2024
          </div>
        </motion.div>
      </motion.div>

      {/* Key Performance Indicators */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-white text-center text-shadow-sm flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-lg mb-2">
            Success Metrics
          </span>
          <span>Key Performance Indicators</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiItems.map((kpi, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + (index * 0.1) }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" 
              }}
            >
              <div className="text-3xl mb-4 text-center">{kpi.icon}</div>
              <h3 className="text-lg font-semibold text-white text-center text-shadow-sm mb-3">{kpi.metric}</h3>
              
              <div className="flex justify-between items-center mb-3">
                <div className="text-gray-400 text-sm">Current:</div>
                <div className="text-white font-bold">{kpi.current}</div>
              </div>
              
              <div className="w-full h-1.5 bg-gray-700 rounded-full mb-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  transition={{ duration: 1, delay: 1.5 + (index * 0.1) }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-gray-400 text-sm">Target:</div>
                <div className="text-emerald-400 font-bold">{kpi.target}</div>
              </div>
              
              <div className="mt-3 text-center">
                <div className="text-xs text-gray-400">{kpi.timeline}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Funding & Investment */}
      <motion.div 
        className="max-w-4xl mx-auto glass-card p-8 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 shadow-lg animated-border-gradient mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-white text-center text-shadow-sm">Funding Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            <div className="text-4xl font-bold text-white text-shadow-sm mb-2">$2.5M</div>
            <div className="text-emerald-400 font-semibold mb-1">Seed Round</div>
            <div className="text-sm text-gray-400">Completed Q2 2023</div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.7 }}
          >
            <div className="text-4xl font-bold text-white text-shadow-sm mb-2">$8M</div>
            <div className="text-emerald-400 font-semibold mb-1">Series A</div>
            <div className="text-sm text-gray-400">Target Q3 2024</div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          >
            <div className="text-4xl font-bold text-white text-shadow-sm mb-2">$25M</div>
            <div className="text-emerald-400 font-semibold mb-1">Series B</div>
            <div className="text-sm text-gray-400">Target Q4 2025</div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          Strategic investors include leading venture capital firms specializing in AI, HR Tech, and enterprise SaaS.
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.div 
          className="inline-block p-4 rounded-xl bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-white shadow-lg mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <h3 className="text-xl font-bold mb-2">Join Our Journey</h3>
          <p className="text-gray-200">
            Credolay is positioned to revolutionize how people find meaningful careers and how companies discover talent.
          </p>
        </motion.div>
        
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-sm"
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(16, 185, 129, 0)', '0 0 0 10px rgba(16, 185, 129, 0)'],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
          Contact us at partnerships@credolay.com
        </motion.div>
      </motion.div>
    </PresentationLayout>
  );
};

export default Presentation5; 