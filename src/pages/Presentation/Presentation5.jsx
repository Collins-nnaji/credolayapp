import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

// Reusable animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  },
  fadeInUp: {
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

const GrowthStrategyPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('timeline');
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const [investmentHover, setInvestmentHover] = useState(null);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Growth stages data with enhanced content
  const growthStages = [
    {
      id: "market-entry",
      title: "Stage 1: Market Entry",
      quarters: "Q3 2023 - Q1 2024",
      icon: "🚀",
      items: [
        "Initial product launch with core AI-powered matching",
        "Build strategic partnerships with 5 major job boards",
        "Acquire 25,000 active users across target segments"
      ],
      color: "blue",
      keyMetrics: [
        { label: "User Acquisition", value: "25K" },
        { label: "Partnerships", value: "5" },
        { label: "MRR", value: "$75K" }
      ],
      milestones: [
        { quarter: "Q3 2023", event: "Beta Launch" },
        { quarter: "Q4 2023", event: "First 10K Users" },
        { quarter: "Q1 2024", event: "25K User Milestone" }
      ]
    },
    {
      id: "growth-expansion",
      title: "Stage 2: Growth & Expansion",
      quarters: "Q2 2024 - Q4 2024",
      icon: "📈",
      items: [
        "Launch enterprise solution for mid-sized companies",
        "Release advanced analytics dashboard",
        "Expand to international markets (UK, Canada, Australia)",
        "Reach 100,000 active users milestone"
      ],
      color: "purple",
      keyMetrics: [
        { label: "User Acquisition", value: "100K" },
        { label: "Enterprise Clients", value: "25+" },
        { label: "MRR", value: "$350K" }
      ],
      milestones: [
        { quarter: "Q2 2024", event: "Enterprise Launch" },
        { quarter: "Q3 2024", event: "International Expansion" },
        { quarter: "Q4 2024", event: "100K User Milestone" }
      ]
    },
    {
      id: "market-leadership",
      title: "Stage 3: Market Leadership",
      quarters: "Q1 2025 - Beyond",
      icon: "👑",
      items: [
        "Introduce predictive workforce planning tools",
        "Develop industry-specific vertical solutions",
        "Strategic acquisitions of complementary technologies",
        "Scale to 500,000+ active users globally"
      ],
      color: "pink",
      keyMetrics: [
        { label: "User Acquisition", value: "500K+" },
        { label: "Enterprise Clients", value: "150+" },
        { label: "MRR", value: "$1.2M+" }
      ],
      milestones: [
        { quarter: "Q1 2025", event: "Predictive Tools Launch" },
        { quarter: "Q3 2025", event: "First Acquisition" },
        { quarter: "Q4 2025", event: "Market Leader Position" }
      ]
    }
  ];

  // Enhanced revenue streams data
  const revenueStreams = [
    {
      id: "subscription",
      title: "Subscription Model",
      description: "Tiered packages for job seekers with advanced features",
      percentage: 45,
      icon: "💳",
      color: "blue",
      details: {
        tiers: ["Basic ($9.99/mo)", "Pro ($19.99/mo)", "Premium ($29.99/mo)"],
        features: ["AI-powered matching", "Career roadmap planning", "Interview preparation"],
        projections: "Projected to grow to 60% of revenue by 2025"
      }
    },
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      description: "Custom implementations for corporate HR departments",
      percentage: 30,
      icon: "🏢",
      color: "purple",
      details: {
        tiers: ["Team ($499/mo)", "Business ($999/mo)", "Corporate ($2,499+/mo)"],
        features: ["Bulk candidate processing", "ATS integration", "Custom dashboards"],
        projections: "Highest growth area, targeting 45% of revenue by 2025"
      }
    },
    {
      id: "partnerships",
      title: "Partnerships",
      description: "Revenue share from job boards and recruiting platforms",
      percentage: 15,
      icon: "🤝",
      color: "green",
      details: {
        partners: ["Major job boards", "Recruitment agencies", "Educational institutions"],
        model: "5-15% revenue share on successful placements",
        projections: "Stable revenue stream with 10-15% annual growth"
      }
    },
    {
      id: "data",
      title: "Data Insights",
      description: "Anonymized market intelligence for industry partners",
      percentage: 10,
      icon: "📊",
      color: "amber",
      details: {
        products: ["Industry reports", "Salary benchmarking", "Skills trend analysis"],
        model: "Subscription-based access to insights dashboard",
        projections: "Emerging revenue stream with 25% annual growth potential"
      }
    }
  ];

  // Enhanced KPI data
  const kpiItems = [
    {
      metric: "Monthly Active Users",
      current: "25K",
      target: "500K",
      timeline: "36 months",
      progress: 5, // percentage of progress toward goal
      icon: "👥",
      growth: "+120% YoY",
      details: "Driven by organic growth and strategic partnerships"
    },
    {
      metric: "Revenue Growth",
      current: "$250K ARR",
      target: "$15M ARR",
      timeline: "36 months",
      progress: 1.7, // percentage of progress toward goal
      icon: "💰",
      growth: "+180% YoY",
      details: "Enterprise solutions driving significant revenue acceleration"
    },
    {
      metric: "Customer Retention",
      current: "88%",
      target: "95%",
      timeline: "24 months",
      progress: 92.6, // percentage of progress toward goal (88/95 * 100)
      icon: "🔄",
      growth: "+2% QoQ",
      details: "Continuous product improvements increasing stickiness"
    },
    {
      metric: "Enterprise Clients",
      current: "5",
      target: "150+",
      timeline: "36 months",
      progress: 3.3, // percentage of progress toward goal
      icon: "🏢",
      growth: "+40% QoQ",
      details: "Dedicated enterprise sales team expanding market penetration"
    }
  ];

  // Enhanced funding rounds data
  const fundingRounds = [
    {
      round: "Seed Round",
      amount: "$2.5M",
      status: "Completed Q2 2023",
      investors: ["TechVentures", "AI Capital", "Angel Investors"],
      usage: "Product development and initial go-to-market",
      icon: "🌱",
      color: "green"
    },
    {
      round: "Series A",
      amount: "$8M",
      status: "Target Q3 2024",
      investors: ["Growth Partners", "SaaS Ventures", "Strategic Investors"],
      usage: "Team expansion and international market entry",
      icon: "🚀",
      color: "blue"
    },
    {
      round: "Series B",
      amount: "$25M",
      status: "Target Q4 2025",
      investors: ["Enterprise Capital", "Global Tech Fund", "Industry Leaders"],
      usage: "Scaling operations and strategic acquisitions",
      icon: "💸",
      color: "purple"
    }
  ];

  // Reusable section heading component
  const SectionHeading = ({ icon, tag, title }) => (
    <h2 className="text-2xl font-semibold mb-8 text-white text-center flex flex-col items-center">
      <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-lg mb-2 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {tag}
      </span>
      <span>{title}</span>
    </h2>
  );

  // Reusable card component with enhanced styling
  const Card = ({ children, onClick, isActive, hoverEffect = true, gradient = "from-gray-800/40 to-gray-900/30" }) => {
    const hoverClass = hoverEffect ? "hover:-translate-y-1 hover:shadow-xl" : "";
    const activeClass = isActive ? "border-emerald-500/50" : "border-white/10";
    
    return (
      <motion.div 
        className={`glass-card p-6 rounded-xl bg-gradient-to-br ${gradient} ${hoverClass} transition-all duration-300 border ${activeClass} shadow-lg`}
        onClick={onClick}
        whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" } : {}}
      >
        {children}
      </motion.div>
    );
  };

  // Section navigation component
  const SectionNav = () => (
    <div className="flex justify-center mb-10">
      <div className="flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full shadow-lg">
        {[
          { id: 'timeline', label: 'Growth Timeline', icon: '📅' },
          { id: 'revenue', label: 'Revenue Streams', icon: '💰' },
          { id: 'kpi', label: 'KPIs', icon: '📊' },
          { id: 'funding', label: 'Funding', icon: '💼' }
        ].map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => {
              setActiveSection(section.id);
              setSelectedStage(null);
              setSelectedStream(null);
            }}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );

  // Progress bar component
  const ProgressBar = ({ percentage, color = "emerald", height = "h-2", animate = true, delay = 0 }) => (
    <div className={`w-full ${height} bg-gray-700 rounded-full overflow-hidden`}>
      <motion.div 
        className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-400`}
        initial={{ width: 0 }}
        animate={{ width: animate ? `${percentage}%` : 0 }}
        transition={{ duration: 1, delay }}
      />
    </div>
  );

  return (
    <PresentationLayout 
      pageNumber="5" 
      title="Growth Strategy"
      gradient="from-green-500 to-emerald-600"
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

            {/* Hero Section - New */}
            <motion.section
              variants={animations.fadeInUp}
              initial="hidden"
              animate="visible"
              className={`max-w-4xl mx-auto mb-16 ${activeSection !== 'timeline' ? 'hidden' : ''}`}
            >
              <Card gradient="from-green-600/20 to-emerald-600/10" hoverEffect={false}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Our Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Market Leadership</span>
                      </h2>
                      <p className="text-gray-300 text-lg mb-4">
                        A strategic roadmap focused on sustainable growth, market expansion, and product innovation to revolutionize the career development landscape.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-sm font-medium">
                          36-Month Strategy
                        </div>
                        <div className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium">
                          3-Stage Approach
                        </div>
                        <div className="px-3 py-1 bg-teal-500/20 rounded-full text-teal-300 text-sm font-medium">
                          Clear Milestones
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.section>

            {/* Strategic Growth Timeline */}
            <motion.section 
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
              className={activeSection !== 'timeline' ? 'hidden' : ''}
            >
              <SectionHeading 
                icon="🚀" 
                tag="Strategic Roadmap" 
                title="Growth Timeline" 
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {growthStages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    variants={animations.staggerItem}
                    className="relative"
                  >
                    <Card 
                      onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)} 
                      isActive={selectedStage === stage.id}
                      gradient={`from-${stage.color}-600/10 to-${stage.color}-500/5`}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-${stage.color}-500/20 flex items-center justify-center text-2xl mr-3`}>
                          {stage.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{stage.title}</h3>
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
                      
                      {/* Expandable Details */}
                      <AnimatePresence>
                        {selectedStage === stage.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            <div className="mb-4">
                              <h4 className="text-white font-medium mb-2">Key Metrics</h4>
                              <div className="grid grid-cols-3 gap-2">
                                {stage.keyMetrics.map((metric, i) => (
                                  <div key={i} className="bg-gray-800/50 p-2 rounded-lg text-center">
                                    <div className="text-emerald-400 font-bold">{metric.value}</div>
                                    <div className="text-xs text-gray-400">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-white font-medium mb-2">Key Milestones</h4>
                              <div className="space-y-2">
                                {stage.milestones.map((milestone, i) => (
                                  <div key={i} className="flex justify-between items-center text-sm">
                                    <div className="text-gray-400">{milestone.quarter}</div>
                                    <div className="h-px flex-1 mx-2 bg-gray-700"></div>
                                    <div className="text-white">{milestone.event}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Toggle indicator */}
                      <div className="mt-4 text-center">
                        <button 
                          className={`text-${stage.color}-400 text-sm flex items-center justify-center w-full`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStage(selectedStage === stage.id ? null : stage.id);
                          }}
                        >
                          {selectedStage === stage.id ? (
                            <>Less Details <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
                          ) : (
                            <>More Details <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
                          )}
                        </button>
                      </div>
                    </Card>
                    
                    {/* Connector lines between stages */}
                    {index < growthStages.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent z-0"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Revenue Streams */}
            <motion.section 
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
              className={activeSection !== 'revenue' ? 'hidden' : ''}
            >
              <SectionHeading 
                icon="💰" 
                tag="Monetization Strategy" 
                title="Revenue Streams" 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {revenueStreams.map((stream, index) => (
                  <motion.div
                    key={stream.id}
                    variants={animations.staggerItem}
                  >
                    <Card
                      onClick={() => setSelectedStream(selectedStream === stream.id ? null : stream.id)}
                      isActive={selectedStream === stream.id}
                      gradient={`from-${stream.color}-500/15 to-${stream.color}-600/5`}
                    >
                      <div className="flex items-center mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-${stream.color}-500/20 flex items-center justify-center text-2xl mr-4 shadow-lg`}>
                          {stream.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{stream.title}</h3>
                          <p className="text-gray-300 text-sm">{stream.description}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm text-gray-400">Revenue Contribution</div>
                          <div className="text-lg font-bold text-white">{stream.percentage}%</div>
                        </div>
                        <ProgressBar 
                          percentage={stream.percentage} 
                          color={stream.color} 
                          delay={0.5 + (index * 0.1)} 
                        />
                      </div>
                      
                      {/* Expandable Details */}
                      <AnimatePresence>
                        {selectedStream === stream.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            {stream.id === "subscription" && (
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-white font-medium mb-2">Pricing Tiers</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {stream.details.tiers.map((tier, i) => (
                                      <div key={i} className={`px-2 py-1 rounded-md bg-${stream.color}-500/10 text-${stream.color}-300 text-xs`}>
                                        {tier}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-white font-medium mb-2">Key Features</h4>
                                  <ul className="space-y-1">
                                    {stream.details.features.map((feature, i) => (
                                      <li key={i} className="text-sm text-gray-300 flex items-start">
                                        <svg className={`w-4 h-4 mr-2 text-${stream.color}-400 flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="text-sm text-gray-400 italic">
                                  {stream.details.projections}
                                </div>
                              </div>
                            )}
                            
                            {stream.id === "enterprise" && (
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-white font-medium mb-2">Enterprise Tiers</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {stream.details.tiers.map((tier, i) => (
                                      <div key={i} className={`px-2 py-1 rounded-md bg-${stream.color}-500/10 text-${stream.color}-300 text-xs`}>
                                        {tier}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-white font-medium mb-2">Key Features</h4>
                                  <ul className="space-y-1">
                                    {stream.details.features.map((feature, i) => (
                                      <li key={i} className="text-sm text-gray-300 flex items-start">
                                        <svg className={`w-4 h-4 mr-2 text-${stream.color}-400 flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="text-sm text-gray-400 italic">
                                  {stream.details.projections}
                                </div>
                              </div>
                            )}
                            
                            {stream.id === "partnerships" && (
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-white font-medium mb-2">Key Partners</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {stream.details.partners.map((partner, i) => (
                                      <div key={i} className={`px-2 py-1 rounded-md bg-${stream.color}-500/10 text-${stream.color}-300 text-xs`}>
                                        {partner}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-white font-medium mb-2">Revenue Model</h4>
                                  <p className="text-sm text-gray-300">{stream.details.model}</p>
                                </div>
                                <div className="text-sm text-gray-400 italic">
                                  {stream.details.projections}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Toggle indicator */}
                      <div className="mt-4 text-center">
                        <button 
                          className={`text-${stream.color}-400 text-sm flex items-center justify-center w-full`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStream(selectedStream === stream.id ? null : stream.id);
                          }}
                        >
                          {selectedStream === stream.id ? (
                            <>Less Details <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
                          ) : (
                            <>More Details <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
                          )}
                        </button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Revenue summary */}
              <motion.div 
                className="mt-10 max-w-3xl mx-auto"
                variants={animations.fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <Card gradient="from-green-600/20 to-emerald-600/10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Revenue Projections
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400 mb-1">Year 1</div>
                      <div className="text-2xl font-bold text-white">$2.1M</div>
                      <div className="text-xs text-emerald-400">ARR</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400 mb-1">Year 2</div>
                      <div className="text-2xl font-bold text-white">$6.5M</div>
                      <div className="text-xs text-emerald-400">ARR</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400 mb-1">Year 3</div>
                      <div className="text-2xl font-bold text-white">$15M+</div>
                      <div className="text-xs text-emerald-400">ARR</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-emerald-300 bg-emerald-500/10 py-2 px-4 rounded-lg">
                    Projected to reach profitability by Q4 2024
                  </div>
                </Card>
              </motion.div>
            </motion.section>

            {/* Key Performance Indicators */}
            <motion.section 
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
              className={activeSection !== 'kpi' ? 'hidden' : ''}
            >
              <SectionHeading 
                icon="📊" 
                tag="Success Metrics" 
                title="Key Performance Indicators" 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiItems.map((kpi, index) => (
                  <motion.div
                    key={index}
                    variants={animations.staggerItem}
                  >
                    <Card gradient="from-emerald-600/10 to-green-600/5">
                      <div className="text-center mb-4">
                        <div className="inline-block text-3xl mb-2">{kpi.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{kpi.metric}</h3>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-xs text-gray-400">Current</div>
                          <div className="text-xs text-gray-400">Target</div>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-xl font-bold text-white">{kpi.current}</div>
                          <div className="text-xl font-bold text-emerald-400">{kpi.target}</div>
                        </div>
                        
                        <ProgressBar 
                          percentage={kpi.progress} 
                          delay={0.5 + (index * 0.1)} 
                        />
                        
                        <div className="flex justify-between mt-1">
                          <div className="text-xs text-emerald-400 font-medium">{kpi.growth}</div>
                          <div className="text-xs text-gray-400">{kpi.timeline}</div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-300 bg-gray-800/50 p-3 rounded-lg">
                        {kpi.details}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* KPI Visualization - New */}
              <motion.div 
                className="mt-10 max-w-4xl mx-auto"
                variants={animations.fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <Card gradient="from-green-600/20 to-emerald-600/10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Growth Trajectory
                  </h3>
                  
                  <div className="h-64 relative">
                    {/* Year markers */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                      <div>Q3 2023</div>
                      <div>Q3 2024</div>
                      <div>Q3 2025</div>
                      <div>Q3 2026</div>
                    </div>
                    
                    {/* Vertical grid lines */}
                    <div className="absolute bottom-6 left-0 right-0 h-[calc(100%-24px)] flex justify-between">
                      <div className="w-px h-full bg-gray-700"></div>
                      <div className="w-px h-full bg-gray-700"></div>
                      <div className="w-px h-full bg-gray-700"></div>
                      <div className="w-px h-full bg-gray-700"></div>
                    </div>
                    
                    {/* Growth curves */}
                    <div className="absolute inset-0 pt-4 pb-6">
                      {/* Users growth curve */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path 
                          d="M0,100 C20,90 40,60 60,30 S80,10 100,5" 
                          fill="none" 
                          stroke="#10B981" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                      </svg>
                      
                      {/* Revenue growth curve */}
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path 
                          d="M0,100 C30,98 50,80 70,40 S90,10 100,0" 
                          fill="none" 
                          stroke="#3B82F6" 
                          strokeWidth="2"
                          strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 1 }}
                        />
                      </svg>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute top-0 right-0 flex items-center space-x-4 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-1 bg-emerald-500 mr-1"></div>
                        <span className="text-gray-300">User Growth</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-1 bg-blue-500 mr-1 border-b border-dashed"></div>
                        <span className="text-gray-300">Revenue</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.section>

            {/* Funding & Investment */}
            <motion.section 
              variants={animations.fadeIn}
              initial="hidden"
              animate="visible"
              className={activeSection !== 'funding' ? 'hidden' : ''}
            >
              <SectionHeading 
                icon="💼" 
                tag="Capital Strategy" 
                title="Funding & Investment" 
              />
              
              <motion.div 
                className="max-w-4xl mx-auto"
                variants={animations.fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <Card gradient="from-green-600/15 to-emerald-600/10" hoverEffect={false}>
                  <h3 className="text-2xl font-semibold mb-8 text-white text-center">Funding Timeline</h3>
                  
                  <div className="space-y-8">
                    {fundingRounds.map((round, index) => (
                      <div 
                        key={index}
                        className="relative"
                        onMouseEnter={() => setInvestmentHover(round.round)}
                        onMouseLeave={() => setInvestmentHover(null)}
                      >
                        <div className="flex items-start">
                          <div className={`w-14 h-14 rounded-xl bg-${round.color}-500/20 flex items-center justify-center text-3xl mr-5 shadow-lg flex-shrink-0`}>
                            {round.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                              <h4 className="text-xl font-bold text-white mb-1">{round.round}</h4>
                              <div className="text-2xl font-bold text-white">{round.amount}</div>
                            </div>
                            <div className="text-sm text-gray-400 mb-3">{round.status}</div>
                            
                            <AnimatePresence>
                              {investmentHover === round.round && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="bg-gray-800/50 p-3 rounded-lg"
                                >
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h5 className="text-sm font-medium text-emerald-400 mb-1">Key Investors</h5>
                                      <ul className="text-sm text-gray-300 space-y-1">
                                        {round.investors.map((investor, i) => (
                                          <li key={i} className="flex items-center">
                                            <svg className="w-3 h-3 mr-1 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {investor}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 className="text-sm font-medium text-emerald-400 mb-1">Fund Allocation</h5>
                                      <p className="text-sm text-gray-300">{round.usage}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        
                        {/* Timeline connector line */}
                        {index < fundingRounds.length - 1 && (
                          <div className="absolute left-7 top-14 bottom-0 w-0.5 h-6 bg-gradient-to-b from-gray-700 to-transparent"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
                    Strategic investors include leading venture capital firms specializing in AI, HR Tech, and enterprise SaaS.
                  </div>
                </Card>
              </motion.div>
              
              {/* Investment Impact - New */}
              <motion.div 
                className="mt-10 max-w-4xl mx-auto"
                variants={animations.fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <Card gradient="from-blue-600/15 to-cyan-600/10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Capital Allocation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Seed Round ($2.5M)</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Product Development</span>
                            <span className="text-white">45%</span>
                          </div>
                          <ProgressBar percentage={45} color="blue" delay={0.8} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Marketing & Sales</span>
                            <span className="text-white">30%</span>
                          </div>
                          <ProgressBar percentage={30} color="blue" delay={0.9} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Operations</span>
                            <span className="text-white">25%</span>
                          </div>
                          <ProgressBar percentage={25} color="blue" delay={1.0} />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-2">Series A ($8M)</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Product Expansion</span>
                            <span className="text-white">35%</span>
                          </div>
                          <ProgressBar percentage={35} color="emerald" delay={1.1} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Team Growth</span>
                            <span className="text-white">30%</span>
                          </div>
                          <ProgressBar percentage={30} color="emerald" delay={1.2} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Market Expansion</span>
                            <span className="text-white">25%</span>
                          </div>
                          <ProgressBar percentage={25} color="emerald" delay={1.3} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Operations</span>
                            <span className="text-white">10%</span>
                          </div>
                          <ProgressBar percentage={10} color="emerald" delay={1.4} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="text-center max-w-xl mx-auto mt-16"
              variants={animations.fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            >
              <motion.div 
                className="glass-card p-6 rounded-xl bg-gradient-to-r from-green-500/30 to-emerald-500/20 text-white shadow-lg mb-6 border border-green-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-2xl font-bold mb-2">Join Our Journey</h3>
                <p className="text-gray-200 mb-4">
                  Credolay is positioned to revolutionize how people find meaningful careers and how companies discover talent.
                </p>
                <div className="inline-block py-2 px-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-emerald-300 font-medium">partnerships@credolay.com</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 text-sm group hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(16, 185, 129, 0)', '0 0 0 8px rgba(16, 185, 129, 0.1)', '0 0 0 0 rgba(16, 185, 129, 0)'],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                <span>Seeking strategic partners and investors</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Fixed Navigation Dots */}
            <motion.div 
              className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-3 z-50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[
                { id: 'timeline', label: 'Growth Timeline' },
                { id: 'revenue', label: 'Revenue Streams' },
                { id: 'kpi', label: 'KPIs' },
                { id: 'funding', label: 'Funding' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-emerald-500 w-4 h-4'
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

export default GrowthStrategyPresentation;