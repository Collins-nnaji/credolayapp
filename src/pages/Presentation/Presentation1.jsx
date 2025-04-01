import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

// Animation variants extracted for reuse and consistency
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
    exit: { 
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  fadeSlideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
};

// Reusable styled components
const Tag = ({ children, color = "blue" }) => (
  <span className={`inline-block py-1 px-4 rounded-full bg-gradient-to-r from-${color}-500/20 to-purple-500/20 text-${color}-300 text-sm`}>
    {children}
  </span>
);

const GlassCard = ({ children, className, hoverEffect = true, gradient = "" }) => {
  const hoverClass = hoverEffect ? "hover:-translate-y-1 hover:shadow-xl transition-all duration-300" : "";
  const gradientClass = gradient ? `bg-gradient-to-br ${gradient}` : "bg-gradient-to-br from-gray-800/40 to-gray-900/30";
  
  return (
    <div className={`glass-card p-6 rounded-xl ${gradientClass} border border-white/10 shadow-lg ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

const ProductVisionPresentation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate a loading state for a smoother entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll functionality with section tracking
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.6 });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [isLoaded]);

  // Enhanced feature cards with more detailed metrics
  const featureCards = [
    {
      emoji: "🎯",
      title: "Intelligent Job Matching",
      description: "AI-powered job recommendations matched to your skills, experience, and career goals with 93% accuracy",
      metric: "93% match accuracy",
      color: "blue"
    },
    {
      emoji: "🔍",
      title: "Skill Analysis",
      description: "Deep skill evaluation across 500+ technical and soft skills with personalized growth recommendations",
      metric: "500+ skills analyzed",
      color: "purple"
    },
    {
      emoji: "🚀",
      title: "Career Advancement",
      description: "Custom roadmaps to progress your career with tailored courses, skill gaps identified, and milestone tracking",
      metric: "78% faster progression",
      color: "pink"
    },
    {
      emoji: "📊",
      title: "Performance Insights",
      description: "Track application success rates, interview performances, and improvement metrics in real-time",
      metric: "2.4x interview success",
      color: "green"
    }
  ];

  const testimonials = [
    {
      quote: "Credolay's AI matched me with my dream job that I wouldn't have found through traditional job boards. The personalized roadmap helped me prepare perfectly for the interview process.",
      author: "Sarah J., Software Engineer",
      company: "Previously at Oracle, now at Stripe",
      image: "/api/placeholder/80/80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "The skill analysis helped me understand exactly what I needed to focus on to advance my career. Within 6 months, I secured a promotion that would have taken years.",
      author: "Michael T., Marketing Director",
      company: "Growth at DemandBase",
      image: "/api/placeholder/80/80",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Enhanced market stats
  const marketStats = [
    { value: "67%", label: "Reduction in time-to-hire", color: "blue" },
    { value: "3.5x", label: "Increase in job satisfaction", color: "purple" },
    { value: "89%", label: "Better skill-job alignment", color: "pink" }
  ];

  return (
    <PresentationLayout 
      pageNumber="1" 
      title="Product Vision" 
      gradient="from-blue-600 to-purple-600"
      activeSection={activeSection}
    >
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-14 md:space-y-20"
          >
            {/* Hero Section */}
            <section id="hero" className="scroll-mt-16">
              <motion.div 
                className="glass-card border border-white/20 p-8 md:p-10 rounded-2xl max-w-4xl mx-auto hover-lift shadow-xl bg-gradient-to-br from-gray-900/60 to-gray-900/40"
                variants={animations.fadeSlideUp}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2 md:order-1">
                    <motion.span 
                      className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 text-sm mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Next-Gen Talent Platform
                    </motion.span>
                    
                    <motion.h2 
                      className="text-3xl md:text-5xl font-bold mb-6 text-white text-shadow-lg"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Career Development</span> with AI
                    </motion.h2>
                    
                    <motion.p 
                      className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Credolay seamlessly connects job seekers with their ideal opportunities through advanced AI matching while helping companies discover the perfect candidates based on skills, culture fit, and growth potential.
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <div className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        Intelligent Matching
                      </div>
                      
                      <div className="px-4 py-2 bg-purple-500/30 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                        Skill Development
                      </div>
                      
                      <div className="px-4 py-2 bg-pink-500/30 backdrop-blur-sm rounded-full text-pink-300 text-sm font-medium flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
                        Career Insights
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="flex-1 flex justify-center mb-8 md:mb-0 order-1 md:order-2"
                    variants={animations.scale}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-full blur-3xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ 
                          y: [0, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="text-8xl">👩‍💻</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </section>

            {/* Key Stats - New Section */}
            <section id="stats" className="scroll-mt-16">
              <motion.div
                variants={animations.fadeSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-3 gap-4">
                  {marketStats.map((stat, index) => (
                    <GlassCard
                      key={index}
                      gradient={`from-${stat.color}-500/10 to-${stat.color}-500/5`}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + (index * 0.2) }}
                      >
                        <h4 className={`text-3xl md:text-4xl font-bold mb-2 text-${stat.color}-400`}>{stat.value}</h4>
                        <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                      </motion.div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Key Features */}
            <section id="features" className="scroll-mt-16">
              <motion.div
                variants={animations.container}
                initial="hidden"
                animate="visible"
                className="mb-12 md:mb-16"
              >
                <motion.h3 
                  className="text-2xl font-semibold mb-8 text-center text-white text-shadow-sm"
                  variants={animations.item}
                >
                  <Tag color="blue">Platform Features</Tag>
                  <br />
                  <span className="text-3xl mt-2 inline-block">Key Capabilities</span>
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featureCards.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={animations.item}
                      className={`glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 border border-${feature.color}-500/30 shadow-lg transition-all duration-300`}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
                        borderColor: `rgba(var(--${feature.color}-500-rgb), 0.5)` 
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`text-5xl`}>
                          {feature.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`text-xl font-bold text-${feature.color}-400 text-shadow-sm`}>{feature.title}</h3>
                            <span className={`text-sm font-medium text-${feature.color}-300 bg-${feature.color}-500/20 px-2 py-1 rounded-md`}>
                              {feature.metric}
                            </span>
                          </div>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Value Proposition */}
            <section id="value" className="scroll-mt-16">
              <motion.div 
                className="relative overflow-hidden"
                variants={animations.fadeSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
                
                <GlassCard className="p-8 relative z-10 border-t border-b border-white/20">
                  <h3 className="text-2xl font-semibold mb-8 text-center text-white">
                    <Tag color="purple">Competitive Edge</Tag>
                    <br />
                    <span className="text-3xl mt-2 inline-block">Our Unique Value</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div 
                      className="bg-blue-500/15 backdrop-blur-sm p-5 rounded-xl border border-blue-500/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.2)",
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-3xl mr-3">💡</div>
                        <h4 className="text-lg font-semibold text-blue-300">AI-Powered Precision</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Our proprietary matching algorithm is 3x more accurate than traditional job boards at identifying suitable positions.</p>
                      <div className="mt-4 pt-4 border-t border-blue-500/20">
                        <p className="text-blue-300 text-sm font-medium">3x higher match quality</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-purple-500/15 backdrop-blur-sm p-5 rounded-xl border border-purple-500/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.2)",
                        backgroundColor: "rgba(139, 92, 246, 0.2)"
                      }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-3xl mr-3">🔄</div>
                        <h4 className="text-lg font-semibold text-purple-300">Continuous Learning</h4>
                      </div>
                      <p className="text-gray-300 text-sm">The platform evolves with each interaction, creating increasingly personalized experiences that improve outcomes by 40%.</p>
                      <div className="mt-4 pt-4 border-t border-purple-500/20">
                        <p className="text-purple-300 text-sm font-medium">40% better outcomes</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-pink-500/15 backdrop-blur-sm p-5 rounded-xl border border-pink-500/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 40px -12px rgba(236, 72, 153, 0.2)",
                        backgroundColor: "rgba(236, 72, 153, 0.2)"
                      }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-3xl mr-3">🛠️</div>
                        <h4 className="text-lg font-semibold text-pink-300">Integrated Ecosystem</h4>
                      </div>
                      <p className="text-gray-300 text-sm">End-to-end career management that seamlessly connects application, skill development, and performance tracking.</p>
                      <div className="mt-4 pt-4 border-t border-pink-500/20">
                        <p className="text-pink-300 text-sm font-medium">Complete career platform</p>
                      </div>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="scroll-mt-16">
              <motion.div
                variants={animations.fadeSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-8 text-center text-white text-shadow-sm">
                  <Tag color="green">Success Stories</Tag>
                  <br />
                  <span className="text-3xl mt-2 inline-block">From Our Users</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/20 border border-white/10 transition-all duration-300"
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.2), duration: 0.5 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
                        borderColor: "rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.color} p-0.5 shadow-lg`}>
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author} 
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-200 italic mb-3 text-sm md:text-base">"{testimonial.quote}"</p>
                          <p className="text-sm text-blue-300 font-medium">{testimonial.author}</p>
                          <p className="text-xs text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Vision Statement */}
            <section id="vision" className="scroll-mt-16">
              <motion.div 
                className="text-center max-w-3xl mx-auto"
                variants={animations.fadeSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                <GlassCard 
                  className="p-8 mb-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-t border-b border-white/20" 
                  hoverEffect={false}
                >
                  <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-px rounded-lg mb-6 inline-block">
                    <div className="bg-gray-900/60 px-4 py-2 rounded-lg">
                      <h3 className="text-2xl font-semibold text-white text-shadow-sm">Our Vision</h3>
                    </div>
                  </div>
                  <p className="text-gray-200 text-xl">
                    A world where every professional finds truly fulfilling work that aligns with their skills, passions, and growth potential.
                  </p>
                </GlassCard>
                
                <motion.div
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-300 text-sm font-medium shadow-xl"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0)',
                      '0 0 0 10px rgba(59, 130, 246, 0.1)',
                      '0 0 0 0 rgba(59, 130, 246, 0)'
                    ],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2
                  }}
                >
                  <span className="w-3 h-3 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
                  Building the future of career development with AI
                </motion.div>
              </motion.div>
            </section>

            {/* Navigation Dots - New Feature */}
            <motion.div 
              className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-3 z-50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {['hero', 'stats', 'features', 'value', 'testimonials', 'vision'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section).scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-blue-500 w-4 h-4'
                      : 'bg-gray-400 opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Scroll to ${section} section`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationLayout>
  );
};

export default ProductVisionPresentation;

