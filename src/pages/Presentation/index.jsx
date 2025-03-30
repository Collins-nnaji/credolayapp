import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PresentationIndex = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const presentationSlides = [
    { 
      number: 1, 
      title: "Introduction to Credolay", 
      description: "Overview of our revolutionary career development platform",
      gradient: "from-green-400 to-blue-500",
      techStack: ["React", "TailwindCSS", "Framer Motion"],
      techDetails: [
        "Dynamic component rendering",
        "Responsive layout design",
        "Custom animations and transitions"
      ],
      codePreview: `
const IntroAnimation = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-gradient">Credolay</h1>
  </motion.div>
);`
    },
    { 
      number: 2, 
      title: "AI Career Assistant", 
      description: "Personalized career guidance powered by advanced AI",
      gradient: "from-purple-400 to-pink-500",
      techStack: ["OpenAI API", "WebSockets", "Stream Processing"],
      techDetails: [
        "Real-time response streaming",
        "Interactive UI patterns",
        "Advanced state management"
      ],
      codePreview: `
// Real-time AI chat streaming implementation
const [messages, setMessages] = useState([]);
const [isTyping, setIsTyping] = useState(false);

const streamResponse = async (prompt) => {
  setIsTyping(true);
  const stream = await fetchAIStream(prompt);
  // Process streamed response...
};`
    },
    { 
      number: 3, 
      title: "Resume Analytics", 
      description: "Data-driven insights to optimize resumes for ATS systems",
      gradient: "from-yellow-400 to-orange-500",
      techStack: ["NLP", "Data Visualization", "Document Processing"],
      techDetails: [
        "Interactive chart components",
        "Document parsing and analysis",
        "Realtime keyword highlighting"
      ],
      codePreview: `
const renderResumeScore = (data) => (
  <div className="relative">
    <svg viewBox="0 0 100 100">
      <circle 
        cx="50" cy="50" r="45" 
        fill="none" 
        stroke="currentColor"
        strokeWidth="10"
        strokeDasharray={\`\${data.score * 283} 283\`} 
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-3xl font-bold">{data.score}%</span>
    </div>
  </div>
);`
    },
    { 
      number: 4, 
      title: "Market Opportunity", 
      description: "Analysis of our target market and competitive advantages",
      gradient: "from-blue-500 to-indigo-500",
      techStack: ["Interactive Charts", "Animated Data Visualization", "React Transitions"],
      techDetails: [
        "Dynamic data rendering",
        "Animated statistical components",
        "Responsive data visualization"
      ],
      codePreview: `
const MarketStat = ({ value, label, trend }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="stat-card"
  >
    <h3 className="text-4xl font-bold">{value}</h3>
    <p className="text-sm text-gray-400">{label}</p>
    {trend && (
      <div className="trend trend-up">
        <span>+{trend}%</span>
      </div>
    )}
  </motion.div>
);`
    },
    { 
      number: 5, 
      title: "Strategy & Growth", 
      description: "Our roadmap for market expansion and revenue generation",
      gradient: "from-purple-500 to-indigo-500",
      techStack: ["SVG Animation", "Dynamic Rendering", "Responsive Design"],
      techDetails: [
        "SVG path animations",
        "Timeline visualization",
        "Animated charts and graphs"
      ],
      codePreview: `
// Revenue chart component with animation
const RevenueChart = ({ data }) => {
  // Calculate paths and coordinates
  const paths = calculateChartPaths(data);
  
  return (
    <svg className="w-full h-64">
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke={colors[i]}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
};`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
      
      <motion.div
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-xs font-semibold tracking-wider text-blue-300 border border-blue-800">
                TECHNICAL SHOWCASE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Credolay Presentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A comprehensive demonstration of advanced front-end development techniques
              using React, Framer Motion, and modern web technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <motion.span 
                className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-300 border border-blue-800"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 64, 175, 0.3)" }}
              >
                React
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300 border border-purple-800"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(126, 34, 206, 0.3)" }}
              >
                Framer Motion
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-cyan-900/50 rounded-full text-sm text-cyan-300 border border-cyan-800"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 116, 144, 0.3)" }}
              >
                TailwindCSS
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-green-900/50 rounded-full text-sm text-green-300 border border-green-800"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(22, 163, 74, 0.3)" }}
              >
                Responsive Design
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-orange-900/50 rounded-full text-sm text-orange-300 border border-orange-800"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(194, 65, 12, 0.3)" }}
              >
                Data Visualization
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8"
          >
            {presentationSlides.map((slide) => (
              <motion.div
                key={slide.number}
                variants={item}
                onHoverStart={() => setHoveredSlide(slide.number)}
                onHoverEnd={() => setHoveredSlide(null)}
                className="group"
              >
                <Link 
                  to={`/presentation/${slide.number}`} 
                  className="block glass-morphism card-hover rounded-xl overflow-hidden transition-all duration-300 transform-gpu"
                >
                  <div className="grid md:grid-cols-12 items-stretch transition-all">
                    <div className={`md:col-span-3 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center items-center relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full"></div>
                        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
                      </div>
                      
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: hoveredSlide === slide.number ? 1.1 : 1,
                          rotate: hoveredSlide === slide.number ? 10 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="relative z-10 mb-4"
                      >
                        <span className="text-7xl font-bold text-white/90">{slide.number}</span>
                      </motion.div>
                      
                      <div className="relative z-10">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Slide {slide.number}</span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-9 p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{slide.title}</h2>
                        <p className="text-gray-300 mb-4">{slide.description}</p>
                        
                        {/* Technical details */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technical Highlights:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                            {slide.techDetails.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <svg className="h-5 w-5 mr-2 text-blue-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Tech stack tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {slide.techStack.map((tech, index) => (
                            <span 
                              key={index}
                              className={`px-2 py-1 rounded text-xs font-medium 
                              ${tech.includes("React") ? 'bg-blue-900/30 text-blue-300' : 
                                tech.includes("Motion") ? 'bg-purple-900/30 text-purple-300' :
                                tech.includes("Visualization") ? 'bg-green-900/30 text-green-300' :
                                tech.includes("API") ? 'bg-yellow-900/30 text-yellow-300' :
                                tech.includes("SVG") ? 'bg-pink-900/30 text-pink-300' :
                                'bg-white/10 text-gray-300'}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Code snippet preview */}
                      <div className="mt-4 overflow-hidden">
                        <AnimatePresence>
                          {hoveredSlide === slide.number && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-gray-900 rounded-md border border-gray-800 p-4 mb-4 overflow-x-auto"
                            >
                              <pre className="text-xs text-gray-300 font-mono"><code>{slide.codePreview}</code></pre>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="flex -space-x-2">
                              {[...Array(3)].map((_, i) => (
                                <div key={i} className={`h-6 w-6 rounded-full ${
                                  i === 0 ? 'bg-blue-500/30' : 
                                  i === 1 ? 'bg-purple-500/30' : 
                                  'bg-green-500/30'
                                } flex items-center justify-center text-xs`}>
                                  <span className="opacity-50">●</span>
                                </div>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">Preview code on hover</span>
                          </div>
                        
                          <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-sm mr-2">Explore</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Link to home */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-400 mb-8">
                This technical showcase demonstrates our ability to create beautiful, 
                responsive, and interactive web applications using modern frontend technologies.
                Each slide highlights different technical aspects of our implementation.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/" 
                  className="inline-flex items-center bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PresentationIndex; 