import React from 'react';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

const Presentation1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const featureCards = [
    {
      emoji: "🎯",
      title: "Intelligent Job Matching",
      description: "AI-powered job recommendations matched to your skills, experience, and career goals with 93% accuracy",
      color: "blue"
    },
    {
      emoji: "🔍",
      title: "Skill Analysis",
      description: "Deep skill evaluation across 500+ technical and soft skills with personalized growth recommendations",
      color: "purple"
    },
    {
      emoji: "🚀",
      title: "Career Advancement",
      description: "Custom roadmaps to progress your career with tailored courses, skill gaps identified, and milestone tracking",
      color: "pink"
    },
    {
      emoji: "📊",
      title: "Performance Insights",
      description: "Track application success rates, interview performances, and improvement metrics in real-time",
      color: "green"
    }
  ];

  const testimonials = [
    {
      quote: "Credolay's AI matched me with my dream job that I wouldn't have found through traditional job boards.",
      author: "Sarah J., Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "The skill analysis helped me understand exactly what I needed to focus on to advance my career.",
      author: "Michael T., Marketing Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <PresentationLayout 
      pageNumber="1" 
      title="Product Vision" 
      gradient="from-blue-500 to-purple-500"
    >
      {/* Hero Section */}
      <motion.div 
        className="glass-card border border-white/10 p-6 md:p-10 rounded-2xl max-w-4xl mx-auto mb-12 md:mb-16 hover-lift shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          y: -5, 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)"
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 order-2 md:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white text-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Career Development</span> with AI
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
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
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Intelligent Matching
              </div>
              
              <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Skill Development
              </div>
              
              <div className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-pink-300 text-sm flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Career Insights
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 flex justify-center mb-8 md:mb-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl animate-float">👩‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.section
        className="mb-12 md:mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3 
          className="text-2xl font-semibold mb-8 text-center text-white text-shadow-sm"
          variants={itemVariants}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-lg mb-2">
            Platform Features
          </span>
          <br />
          Key Capabilities
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 border border-${feature.color}-500/20 hover-lift shadow-lg`}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
                background: `radial-gradient(circle at center, rgba(var(--${feature.color}-500-rgb), 0.15), transparent)` 
              }}
            >
              <div className="flex items-start">
                <div className={`text-4xl mr-4`}>
                  {feature.emoji}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 text-${feature.color}-400 text-shadow-sm`}>{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section 
        className="mb-12 md:mb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 border border-white/10 shadow-lg relative z-10 animated-border-gradient">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white text-shadow-sm">Our Unique Value</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-blue-500/10 backdrop-blur-sm p-5 rounded-xl border border-blue-500/20 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-lg font-semibold mb-2 text-blue-300">AI-Powered Precision</h4>
              <p className="text-gray-300 text-sm">Our proprietary matching algorithm is 3x more accurate than traditional job boards at identifying suitable positions.</p>
            </motion.div>
            
            <motion.div 
              className="bg-purple-500/10 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.2)" }}
            >
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="text-lg font-semibold mb-2 text-purple-300">Continuous Learning</h4>
              <p className="text-gray-300 text-sm">The platform evolves with each interaction, creating increasingly personalized experiences that improve outcomes by 40%.</p>
            </motion.div>
            
            <motion.div 
              className="bg-pink-500/10 backdrop-blur-sm p-5 rounded-xl border border-pink-500/20 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(236, 72, 153, 0.2)" }}
            >
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="text-lg font-semibold mb-2 text-pink-300">Integrated Ecosystem</h4>
              <p className="text-gray-300 text-sm">End-to-end career management that seamlessly connects application, skill development, and performance tracking.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-center text-white text-shadow-sm">
          <span className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-lg mb-2">
            Success Stories
          </span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 hover-lift shadow-lg"
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + (index * 0.2), duration: 0.5 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" 
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color} p-0.5`}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 italic mb-3">"{testimonial.quote}"</p>
                  <p className="text-sm text-blue-300 font-medium">{testimonial.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Statement */}
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 shadow-lg mb-6 animated-border-gradient">
          <h3 className="text-xl font-semibold mb-3 text-white text-shadow-sm">Our Vision</h3>
          <p className="text-gray-200">
            A world where every professional finds truly fulfilling work that aligns with their skills, passions, and growth potential.
          </p>
        </div>
        
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm"
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 0 10px rgba(59, 130, 246, 0)'],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Building the future of career development with AI
        </motion.div>
      </motion.div>
    </PresentationLayout>
  );
};

export default Presentation1; 