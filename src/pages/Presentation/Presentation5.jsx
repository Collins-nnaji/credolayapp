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

const ImplementationPlanPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Implementation step card component
  const StepCard = ({ number, title, description, duration }) => (
    <motion.div 
      className="bg-white rounded-xl border border-indigo-200 p-6 shadow-md"
      variants={animations.staggerItem}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.15)" }}
      style={{ willChange: "transform", fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-start">
        <div className="bg-indigo-100 text-indigo-600 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
          {number}
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            {duration && (
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                {duration}
              </span>
            )}
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
  
  // Technology card component
  const TechCard = ({ icon, name, description }) => (
    <motion.div
      className="bg-white rounded-xl border border-indigo-200 p-5 shadow-md"
      variants={animations.staggerItem}
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-center mb-3">
        <div className="text-2xl mr-3">{icon}</div>
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
  
  // Resource card component
  const ResourceCard = ({ title, items }) => (
    <motion.div
      className="bg-white rounded-xl border border-indigo-200 p-5 shadow-md"
      variants={animations.staggerItem}
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <h3 className="text-lg font-bold mb-3 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
            <p className="text-gray-700">{item}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="5" 
      title="Implementation Plan" 
      gradient="from-indigo-600 to-purple-600"
    >
      <div className="max-w-5xl mx-auto" style={{ fontFamily: "Consolas, monospace" }}>
        {/* Main headline */}
        <motion.div
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Strategic Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive plan for efficient development and successful deployment
          </p>
        </motion.div>
        
        {/* Implementation timeline */}
        <motion.section
          variants={animations.slideUp}
          initial="hidden"
          animate="visible" 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Development Timeline
          </h3>
          
          <div className="space-y-4">
            <StepCard 
              number="1"
              title="Planning & Requirements Gathering"
              description="Define project scope, gather detailed requirements, and finalize technology stack. Establish project milestones and success metrics."
              duration="Week 1"
            />
            <StepCard 
              number="2"
              title="Architecture & Design"
              description="Design system architecture, database schema, and API interfaces. Create UI/UX wireframes and mockups for approval."
              duration="Week 2"
            />
            <StepCard 
              number="3"
              title="Core Development"
              description="Implement backend services, database operations, and API endpoints. Develop front-end components and integrate with APIs."
              duration="Weeks 3-6"
            />
            <StepCard 
              number="4"
              title="AI Model Integration"
              description="Train and fine-tune AI models for job matching and skills analysis. Implement conversational interface and recommendation system."
              duration="Weeks 7-9"
            />
            <StepCard 
              number="5"
              title="Testing & Quality Assurance"
              description="Conduct unit testing, integration testing, and user acceptance testing. Address bugs and performance issues."
              duration="Weeks 10-11"
            />
            <StepCard 
              number="6"
              title="Deployment & Launch"
              description="Prepare production environment, deploy application, and monitor system health. Implement feedback loop for continuous improvement."
              duration="Week 12"
            />
          </div>
        </motion.section>
        
        {/* Technology stack */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible" 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Technology Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TechCard 
              icon="🖥️"
              name="Frontend"
              description="React.js with TypeScript for type safety, Redux for state management, and Tailwind CSS for responsive design."
            />
            <TechCard 
              icon="⚙️"
              name="Backend"
              description="Node.js with Express.js framework, RESTful API design, and GraphQL for efficient data querying."
            />
            <TechCard 
              icon="🧠"
              name="AI & Machine Learning"
              description="TensorFlow for model training, NLP libraries for text processing, and custom recommendation algorithms."
            />
            <TechCard 
              icon="💾"
              name="Data Storage"
              description="MongoDB for flexible document storage, Redis for caching, and AWS S3 for file storage needs."
            />
            <TechCard 
              icon="☁️"
              name="Cloud Infrastructure"
              description="AWS for hosting, with auto-scaling EC2 instances, load balancers, and CloudFront for content delivery."
            />
            <TechCard 
              icon="🔒"
              name="Security"
              description="JWT authentication, HTTPS encryption, regular security audits, and GDPR-compliant data handling."
            />
          </div>
        </motion.section>
        
        {/* Resource allocation */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Resource Allocation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ResourceCard 
              title="Development Team"
              items={[
                "2 Frontend Developers",
                "2 Backend Developers",
                "1 Machine Learning Engineer",
                "1 UI/UX Designer",
                "1 QA Engineer"
              ]}
            />
            <ResourceCard 
              title="Infrastructure"
              items={[
                "Cloud hosting (AWS)",
                "CI/CD pipeline",
                "Monitoring tools",
                "Development environments",
                "Testing frameworks"
              ]}
            />
            <ResourceCard 
              title="External Resources"
              items={[
                "Job board API integrations",
                "Skills taxonomy dataset",
                "Industry benchmark data",
                "Beta testing partners",
                "Analytics services"
              ]}
            />
          </div>
        </motion.section>
        
        {/* Risk management */}
        <motion.section
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Risk Management
          </h3>
          
          <div className="bg-white rounded-xl border border-indigo-200 p-6 shadow-lg" style={{ fontFamily: "Consolas, monospace" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-800">Technical Risks</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Moderate</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">AI Model Accuracy</p>
                        <p className="text-sm text-gray-600">Implement progressive training with accuracy benchmarks and fallback mechanisms</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Scalability Challenges</p>
                        <p className="text-sm text-gray-600">Stress test with simulated loads and use auto-scaling infrastructure from day one</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-800">Integration Risks</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">High</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Third-party API Reliability</p>
                        <p className="text-sm text-gray-600">Implement caching layers and graceful degradation for service disruptions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Data Format Incompatibilities</p>
                        <p className="text-sm text-gray-600">Build standardization layer with robust error handling for data transformations</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-800">Timeline Risks</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Moderate</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Scope Creep</p>
                        <p className="text-sm text-gray-600">Implement rigorous change management process with impact assessment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Resource Availability</p>
                        <p className="text-sm text-gray-600">Create contingency plans with cross-training and flexible resource allocation</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-800">Market Risks</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Low</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Competitor Response</p>
                        <p className="text-sm text-gray-600">Monitor market continuously and maintain 3-month feature roadmap advantage</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xs mt-0.5 mr-2">!</div>
                      <div>
                        <p className="text-gray-800 font-medium">Adoption Resistance</p>
                        <p className="text-sm text-gray-600">Early access program with key influencers and comprehensive onboarding support</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Continuous Monitoring & Adaptation</h4>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                <p className="text-gray-700">
                  Our implementation approach includes weekly risk assessment reviews, bi-weekly stakeholder updates, and a flexible sprint structure that allows for mid-cycle adjustments based on emerging challenges or opportunities. All risks have assigned owners and defined trigger points for contingency plan activation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </PresentationLayout>
  );
};

export default ImplementationPlanPresentation;