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

const ProductFeaturesPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Technical feature component
  const TechFeature = ({ icon, title, description, tech }) => (
    <motion.div 
      className="bg-white rounded-xl border border-indigo-200 p-6 shadow-md"
      variants={animations.staggerItem}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.15)" }}
      style={{ willChange: "transform", fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-start">
        <div className="text-indigo-600 text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-700 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Architecture component section
  const ArchitectureComponent = ({ title, description, color }) => (
    <motion.div 
      className={`bg-white rounded-lg border border-${color}-200 p-4 shadow-sm`}
      variants={animations.staggerItem}
      whileHover={{ y: -2 }}
    >
      <h4 className={`text-${color}-700 font-bold mb-1`}>{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );

  // API endpoint component
  const Endpoint = ({ method, path, description }) => (
    <motion.div 
      className="bg-gray-800 rounded-lg p-4 mb-2 overflow-hidden"
      variants={animations.staggerItem}
    >
      <div className="flex items-center mb-2">
        <span className={`
          inline-block w-16 text-center py-1 rounded text-xs font-bold mr-2
          ${method === 'GET' ? 'bg-green-200 text-green-800' : 
            method === 'POST' ? 'bg-blue-200 text-blue-800' :
            method === 'PUT' ? 'bg-yellow-200 text-yellow-800' : 
            'bg-red-200 text-red-800'}
        `}>
          {method}
        </span>
        <code className="text-gray-200 font-semibold">{path}</code>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="2" 
      title="Product Features" 
      gradient="from-indigo-600 to-violet-600"
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
            Advanced AI Architecture & Technical Features
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive look at our platform's core technology stack, capabilities, and implementation details
          </p>
        </motion.div>
        
        {/* Core technical features */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Technical Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TechFeature 
              icon="🧠"
              title="Neural Matching System"
              description="Deep learning model that analyzes 250+ data points from resumes, job descriptions, and market trends to create optimal matching scores."
              tech={["TensorFlow", "PyTorch", "BERT", "Transformer"]}
            />
            <TechFeature 
              icon="📊"
              title="Predictive Analytics Engine"
              description="Forecasting system that predicts career trajectory based on historical patterns and real-time market conditions with 87% accuracy."
              tech={["SciKit-Learn", "XGBoost", "TimeSeries", "Prophet"]}
            />
            <TechFeature 
              icon="💬"
              title="NLP Intent Recognition"
              description="Conversational interface that understands complex career queries and provides contextually relevant responses and recommendations."
              tech={["RASA", "NLP", "Transformers", "Named Entity Recognition"]}
            />
            <TechFeature 
              icon="🔄"
              title="Real-time Integration Layer"
              description="Microservices architecture connecting to 35+ job platforms, education resources, and skill assessment systems through unified API gateway."
              tech={["GraphQL", "REST", "Kafka", "Kubernetes"]}
            />
          </div>
        </motion.section>
        
        {/* System architecture */}
        <motion.section
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            System Architecture
          </h3>
          
          <div className="bg-white rounded-xl border border-indigo-200 p-6 shadow-lg">
            {/* Architecture diagram */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6 min-h-[300px] relative">
              {/* Client layer */}
              <div className="absolute top-6 left-0 right-0 flex justify-center">
                <motion.div 
                  className="bg-indigo-100 border border-indigo-200 rounded-lg px-4 py-2 w-48 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-indigo-800 font-bold">Client Applications</p>
                </motion.div>
              </div>
              
              {/* API Gateway */}
              <div className="absolute top-[80px] left-0 right-0 flex justify-center">
                <motion.div 
                  className="bg-purple-100 border border-purple-200 rounded-lg px-4 py-2 w-72 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-purple-800 font-bold">API Gateway / GraphQL Endpoint</p>
                </motion.div>
              </div>
              
              {/* Connect lines */}
              <motion.div 
                className="absolute top-[40px] left-1/2 w-px h-10 bg-gray-300"
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ delay: 0.6 }}
              ></motion.div>
              
              {/* Microservices layer */}
              <div className="absolute top-[140px] left-0 right-0 flex justify-center space-x-4">
                <motion.div 
                  className="bg-blue-100 border border-blue-200 rounded-lg px-3 py-2 text-center w-40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-blue-800 font-bold text-sm">User Service</p>
                </motion.div>
                <motion.div 
                  className="bg-blue-100 border border-blue-200 rounded-lg px-3 py-2 text-center w-40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <p className="text-blue-800 font-bold text-sm">Matching Service</p>
                </motion.div>
                <motion.div 
                  className="bg-blue-100 border border-blue-200 rounded-lg px-3 py-2 text-center w-40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <p className="text-blue-800 font-bold text-sm">Analytics Service</p>
                </motion.div>
              </div>
              
              {/* Connect lines */}
              <motion.div 
                className="absolute top-[105px] left-1/2 w-px h-10 bg-gray-300"
                initial={{ height: 0 }}
                animate={{ height: 35 }}
                transition={{ delay: 0.8 }}
              ></motion.div>
              
              {/* Connect lines to services */}
              <motion.div 
                className="absolute top-[140px] left-[calc(50%-85px)] w-px h-10 bg-gray-300"
                initial={{ height: 0 }}
                animate={{ height: 0 }}
                transition={{ delay: 0.8 }}
              ></motion.div>
              
              {/* AI Layer */}
              <div className="absolute top-[210px] left-0 right-0 flex justify-center">
                <motion.div 
                  className="bg-green-100 border border-green-200 rounded-lg px-4 py-2 w-80 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <p className="text-green-800 font-bold">AI & Machine Learning Layer</p>
                </motion.div>
              </div>
              
              {/* Connect lines */}
              <motion.div 
                className="absolute top-[175px] left-1/2 w-px h-10 bg-gray-300"
                initial={{ height: 0 }}
                animate={{ height: 35 }}
                transition={{ delay: 1.2 }}
              ></motion.div>
              
              {/* Data Layer */}
              <div className="absolute top-[270px] left-0 right-0 flex justify-center space-x-4">
                <motion.div 
                  className="bg-yellow-100 border border-yellow-200 rounded-lg px-3 py-2 text-center w-32"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <p className="text-yellow-800 font-bold text-sm">PostgreSQL</p>
                </motion.div>
                <motion.div 
                  className="bg-yellow-100 border border-yellow-200 rounded-lg px-3 py-2 text-center w-32"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <p className="text-yellow-800 font-bold text-sm">Redis Cache</p>
                </motion.div>
                <motion.div 
                  className="bg-yellow-100 border border-yellow-200 rounded-lg px-3 py-2 text-center w-32"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  <p className="text-yellow-800 font-bold text-sm">Vector DB</p>
                </motion.div>
              </div>
              
              {/* Connect lines */}
              <motion.div 
                className="absolute top-[235px] left-1/2 w-px h-10 bg-gray-300"
                initial={{ height: 0 }}
                animate={{ height: 35 }}
                transition={{ delay: 1.4 }}
              ></motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">Key Components</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">1</div>
                    <p className="text-gray-700 text-sm">Containerized microservices for scalability (Kubernetes)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">2</div>
                    <p className="text-gray-700 text-sm">Event-driven architecture for real-time updates (Kafka)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">3</div>
                    <p className="text-gray-700 text-sm">GraphQL for flexible client-specific data requests</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">4</div>
                    <p className="text-gray-700 text-sm">Isolated ML models for continuous retraining without downtime</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">Technical Specifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">•</div>
                    <p className="text-gray-700 text-sm">99.99% system uptime with multi-region failover</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">•</div>
                    <p className="text-gray-700 text-sm">Sub-150ms response times for core matching operations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">•</div>
                    <p className="text-gray-700 text-sm">GDPR & SOC2 compliant data handling processes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-2">•</div>
                    <p className="text-gray-700 text-sm">Horizontal scaling to 10M+ concurrent users</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* API overview */}
        <motion.section
          variants={animations.slideUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Core API Endpoints
          </h3>
          
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-lg">
            <motion.div
              variants={animations.staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Endpoint 
                method="POST"
                path="/api/v1/profiles/analyze"
                description="Analyzes user resume/profile and returns comprehensive skill assessment with confidence scores"
              />
              <Endpoint 
                method="GET"
                path="/api/v1/opportunities/match/{userId}"
                description="Returns personalized job recommendations based on user profile, preferences, and market conditions"
              />
              <Endpoint 
                method="POST"
                path="/api/v1/career/paths/simulate"
                description="Projects potential career paths based on current skills and desired outcomes with timeline estimates"
              />
              <Endpoint 
                method="PUT"
                path="/api/v1/profiles/{userId}/skills/gap"
                description="Identifies skill gaps for target roles and recommends specific learning resources to address them"
              />
              <Endpoint 
                method="GET"
                path="/api/v1/market/trends/{industry}/{region}"
                description="Retrieves real-time market analysis for specified industry and region with demand forecasting"
              />
            </motion.div>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="text-gray-400 mb-2 text-sm">All endpoints support:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">OAuth 2.0</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Rate limiting</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Pagination</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Field filtering</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Versioning</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">JSON & Protocol Buffers</span>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Machine learning models */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            AI Models Overview
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white rounded-xl border border-indigo-200 p-5 shadow-md"
              variants={animations.staggerItem}
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 text-lg">🔍</span>
                Skill Extraction Model
              </h4>
              <div className="space-y-2">
                <p className="text-gray-700">Named entity recognition model that identifies and categorizes skills from unstructured text with 94% precision.</p>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs text-gray-600 font-mono">
                  Architecture: Fine-tuned BERT<br />
                  Training Data: 2.7M labeled skill mentions<br />
                  Inference Time: 87ms avg<br />
                  Update Frequency: Bi-weekly
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl border border-indigo-200 p-5 shadow-md"
              variants={animations.staggerItem}
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 text-lg">🎯</span>
                Job-Candidate Matcher
              </h4>
              <div className="space-y-2">
                <p className="text-gray-700">Hybrid recommendation system combining collaborative filtering with content-based matching for optimal job suggestions.</p>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs text-gray-600 font-mono">
                  Architecture: LambdaMART Ranking<br />
                  Features: 250+ data points analyzed<br />
                  Accuracy: 91% relevance score<br />
                  Update Frequency: Daily
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl border border-indigo-200 p-5 shadow-md"
              variants={animations.staggerItem}
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 text-lg">📈</span>
                Career Path Predictor
              </h4>
              <div className="space-y-2">
                <p className="text-gray-700">Time series forecasting model that analyzes career trajectories and predicts optimal next steps based on desired outcomes.</p>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs text-gray-600 font-mono">
                  Architecture: XGBoost + LSTM hybrid<br />
                  Training Data: 1.2M career paths<br />
                  Forecast Window: 2-10 years<br />
                  Update Frequency: Monthly
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl border border-indigo-200 p-5 shadow-md"
              variants={animations.staggerItem}
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 text-lg">💬</span>
                Conversational Assistant
              </h4>
              <div className="space-y-2">
                <p className="text-gray-700">Domain-specific LLM fine-tuned for career-related conversational interactions and personalized recommendations.</p>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs text-gray-600 font-mono">
                  Architecture: Transformer-based LLM<br />
                  Context Window: 8K tokens<br />
                  Intent Recognition: 97% accuracy<br />
                  Update Frequency: Quarterly
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PresentationLayout>
  );
};

export default ProductFeaturesPresentation;