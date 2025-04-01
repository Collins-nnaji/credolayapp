import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PresentationLayout from './PresentationLayout';

// Animation variants - simplified to prevent twitching
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }
};

const CompanyVisionPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Vision pillar component
  const VisionPillar = ({ icon, title, description }) => (
    <motion.div 
      className="bg-white rounded-xl border border-emerald-200 p-6 shadow-md"
      variants={animations.staggerItem}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.15)" }}
      style={{ willChange: "transform", fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-start">
        <div className="text-emerald-600 text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  // Milestone component
  const Milestone = ({ year, title, description }) => (
    <motion.div
      className="flex items-start"
      variants={animations.staggerItem}
    >
      <div className="flex-shrink-0 w-24 text-right pr-6">
        <div className="text-emerald-600 font-bold">{year}</div>
      </div>
      <div className="flex-grow pb-8 relative">
        <div className="absolute top-0 left-0 h-full w-px bg-emerald-200">
          <div className="absolute top-1 -left-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-500 bg-white"></div>
        </div>
        <div className="pl-6">
          <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  // Value component
  const ValueCard = ({ icon, title, description }) => (
    <motion.div
      className="bg-white rounded-xl border border-emerald-200 p-5 shadow-sm"
      variants={animations.staggerItem}
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="1" 
      title="Company Vision" 
      gradient="from-emerald-600 to-teal-600"
    >
      <div className="max-w-5xl mx-auto" style={{ fontFamily: "Consolas, monospace" }}>
        {/* Hero section */}
        <motion.div
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Transforming Global Workforce Potential
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Credolay exists to create meaningful connections between talent and opportunity through innovation that benefits society as a whole
          </p>
        </motion.div>
        
        {/* Company purpose */}
        <motion.section
          variants={animations.slideUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Our Purpose
          </h3>
          
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-2/3">
                <p className="text-gray-800 text-xl leading-relaxed mb-6 font-semibold">
                  "We believe that every person deserves to reach their full professional potential, unconstrained by geographical, socioeconomic, or systemic barriers."
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This purpose guides everything we build and every decision we make. By creating a more efficient, transparent, and equitable labor market, we're working to unlock human potential at a global scale and redefine how careers develop in the digital age.
                </p>
              </div>
              
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center border-8 border-emerald-100 shadow-inner">
                  <div className="text-7xl">🌍</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Vision pillars */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible" 
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Vision Pillars
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VisionPillar 
              icon="🌱"
              title="Sustainable Growth"
              description="Creating an environment where professionals continuously develop through meaningful work that aligns with long-term career aspirations."
            />
            <VisionPillar 
              icon="⚖️"
              title="Market Equity"
              description="Removing invisible barriers that create unequal access to opportunities by prioritizing skills and potential over traditional credentials."
            />
            <VisionPillar 
              icon="🤝"
              title="Human Connection"
              description="Maintaining the critical human element in career development while augmenting relationships with powerful technology."
            />
          </div>
        </motion.section>
        
        {/* Strategic roadmap */}
        <motion.section
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Strategic Vision Roadmap
          </h3>
          
          <div className="bg-white rounded-xl border border-emerald-200 p-8 shadow-lg">
            <motion.div
              variants={animations.staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-0"
            >
              <Milestone 
                year="2023-2024"
                title="Foundation Building"
                description="Establish core AI matching technology and platform infrastructure focused on select professional industries."
              />
              <Milestone 
                year="2025-2026"
                title="Ecosystem Development"
                description="Expand into educational partnerships, creating end-to-end career development pathways from training to placement."
              />
              <Milestone 
                year="2027-2028"
                title="Global Expansion"
                description="Scale technology to underserved markets and establish regional expertise centers for localized workforce solutions."
              />
              <Milestone 
                year="2029-2030"
                title="Market Transformation"
                description="Pioneer new workforce development models that fundamentally change how organizations build and manage talent pipelines."
              />
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-emerald-600 font-bold">Beyond</div>
                </div>
                <div className="flex-grow relative">
                  <div className="absolute top-0 left-0 h-full w-px bg-emerald-200">
                    <div className="absolute top-1 -left-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-500 bg-white"></div>
                  </div>
                  <div className="pl-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">Universal Opportunity Access</h4>
                    <p className="text-gray-700">Creating a world where talent is the only limiting factor in career progression.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Core values */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ValueCard 
              icon="🔍"
              title="Intellectual Honesty"
              description="We pursue truth, even when inconvenient, and base our decisions on evidence rather than assumptions or wishful thinking."
            />
            <ValueCard 
              icon="💡"
              title="Innovation with Purpose"
              description="We push boundaries not for novelty's sake, but to solve meaningful problems that transform human potential."
            />
            <ValueCard 
              icon="🌟"
              title="Excellence in Execution"
              description="We believe that how we do anything is how we do everything, and strive for excellence in all aspects of our work."
            />
            <ValueCard 
              icon="🔄"
              title="Adaptive Resilience"
              description="We embrace change, learn from setbacks, and continuously evolve our approach to meet emerging challenges."
            />
          </div>
        </motion.section>
      </div>
    </PresentationLayout>
  );
};

export default CompanyVisionPresentation;

