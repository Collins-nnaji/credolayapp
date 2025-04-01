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

const DataAnalyticsPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Insight card component
  const InsightCard = ({ icon, title, description, stat }) => (
    <motion.div 
      className="bg-white rounded-xl border border-cyan-200 p-6 shadow-md"
      variants={animations.staggerItem}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.15)" }}
      style={{ willChange: "transform", fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-start">
        <div className="text-cyan-600 text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-700 mb-3">{description}</p>
          {stat && (
            <div className="flex items-center">
              <span className="text-2xl font-bold text-cyan-700">{stat.value}</span>
              <span className="ml-2 text-gray-600">{stat.label}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Data visualization card
  const VisualizationCard = ({ title, icon, children }) => (
    <motion.div
      className="bg-white rounded-xl border border-cyan-200 p-5 shadow-md"
      variants={animations.staggerItem}
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
        <div className="flex items-center">
          <div className="text-cyan-600 text-xl mr-2">{icon}</div>
          <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      {children}
    </motion.div>
  );

  // Analytics metric component
  const MetricCard = ({ title, value, change, description }) => (
    <motion.div
      className="bg-white rounded-xl border border-cyan-200 p-5 shadow-md"
      variants={animations.staggerItem}
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <h4 className="text-gray-600 text-sm mb-1">{title}</h4>
      <div className="flex items-baseline mb-1">
        <span className="text-2xl font-bold text-gray-800">{value}</span>
        {change && (
          <span className={`ml-2 text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500">{description}</p>
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="3" 
      title="Data Analytics" 
      gradient="from-cyan-600 to-teal-600"
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
            Career Data Analytics Platform
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transforming career progression data into actionable insights through sophisticated analytics
          </p>
        </motion.div>
        
        {/* Key metrics */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible" 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Key Performance Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              title="Placement Rate"
              value="74.3%"
              change="+12.7%"
              description="Successful job placements within 60 days"
            />
            <MetricCard
              title="Skill Match Accuracy"
              value="92.1%"
              change="+5.4%"
              description="Precision of skill-to-job requirements matching"
            />
            <MetricCard
              title="Engagement Score"
              value="8.7/10"
              change="+1.2"
              description="User engagement with platform recommendations"
            />
            <MetricCard
              title="ROI Coefficient"
              value="6.4x"
              change="+2.1x"
              description="Return on investment for enterprise clients"
            />
          </div>
        </motion.section>
        
        {/* Main analytics dashboard */}
        <motion.section
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Analytics Dashboard
          </h3>
          
          <div className="bg-gray-50 rounded-xl border border-cyan-200 p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Time-series visualization */}
              <div className="md:col-span-2">
                <VisualizationCard title="Career Progression Trends" icon="📈">
                  <div className="relative h-64 mt-2">
                    {/* X-axis */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
                    {/* Y-axis */}
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-300"></div>
                    
                    {/* Y-axis labels */}
                    <div className="absolute -left-6 top-0 text-xs text-gray-500">100%</div>
                    <div className="absolute -left-6 top-1/4 text-xs text-gray-500">75%</div>
                    <div className="absolute -left-6 top-1/2 text-xs text-gray-500">50%</div>
                    <div className="absolute -left-6 top-3/4 text-xs text-gray-500">25%</div>
                    <div className="absolute -left-6 bottom-0 text-xs text-gray-500">0%</div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-[-20px] left-0 text-xs text-gray-500">Jan</div>
                    <div className="absolute bottom-[-20px] left-1/5 text-xs text-gray-500">Mar</div>
                    <div className="absolute bottom-[-20px] left-2/5 text-xs text-gray-500">May</div>
                    <div className="absolute bottom-[-20px] left-3/5 text-xs text-gray-500">Jul</div>
                    <div className="absolute bottom-[-20px] left-4/5 text-xs text-gray-500">Sep</div>
                    <div className="absolute bottom-[-20px] right-0 text-xs text-gray-500">Nov</div>
                    
                    {/* Line plot for skill acquisition */}
                    <svg className="absolute inset-0 h-full w-full overflow-visible">
                      <motion.path
                        d="M 0,160 C 40,140 80,100 120,90 C 160,80 200,60 240,40 C 280,20 320,10 360,5"
                        fill="none"
                        stroke="#0891b2"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                      />
                    </svg>
                    
                    {/* Line plot for placement rate */}
                    <svg className="absolute inset-0 h-full w-full overflow-visible">
                      <motion.path
                        d="M 0,200 C 40,180 80,160 120,140 C 160,120 200,90 240,70 C 280,60 320,45 360,30"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </svg>
                    
                    {/* Data points for emphasis */}
                    <motion.div 
                      className="absolute" 
                      style={{ left: '33%', top: '35%' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 }}
                    >
                      <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-sm"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute" 
                      style={{ left: '66%', top: '15%' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                    >
                      <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-sm"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute" 
                      style={{ left: '33%', top: '55%' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.6 }}
                    >
                      <div className="w-3 h-3 bg-teal-500 rounded-full shadow-sm"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute" 
                      style={{ left: '66%', top: '27%' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.8 }}
                    >
                      <div className="w-3 h-3 bg-teal-500 rounded-full shadow-sm"></div>
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-center mt-4 space-x-6">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Skill Acquisition</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Placement Rate</span>
                    </div>
                  </div>
                </VisualizationCard>
              </div>
              
              {/* Distribution visualization */}
              <div>
                <VisualizationCard title="Skill Distribution" icon="🔄">
                  <div className="relative h-64 flex items-center justify-center">
                    {/* Skill radar chart */}
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {/* Radar background */}
                      <motion.polygon
                        points="100,30 170,60 170,140 100,170 30,140 30,60"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.polygon
                        points="100,55 145,75 145,125 100,145 55,125 55,75"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      <motion.polygon
                        points="100,80 120,90 120,110 100,120 80,110 80,90"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      />
                      
                      {/* Radar axes */}
                      <motion.line x1="100" y1="30" x2="100" y2="170" stroke="#d1d5db" strokeWidth="1" 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.line x1="30" y1="100" x2="170" y2="100" stroke="#d1d5db" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      />
                      <motion.line x1="50" y1="50" x2="150" y2="150" stroke="#d1d5db" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      <motion.line x1="150" y1="50" x2="50" y2="150" stroke="#d1d5db" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                      
                      {/* Skill data area */}
                      <motion.polygon
                        points="100,40 160,70 150,140 80,150 40,100"
                        fill="rgba(8, 145, 178, 0.2)"
                        stroke="#0891b2"
                        strokeWidth="2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                      />
                      
                      {/* Skill points */}
                      <motion.circle cx="100" cy="40" r="4" fill="#0891b2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                      />
                      <motion.circle cx="160" cy="70" r="4" fill="#0891b2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      />
                      <motion.circle cx="150" cy="140" r="4" fill="#0891b2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                      />
                      <motion.circle cx="80" cy="150" r="4" fill="#0891b2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                      />
                      <motion.circle cx="40" cy="100" r="4" fill="#0891b2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                      />
                      
                      {/* Skill labels */}
                      <motion.text x="100" y="20" textAnchor="middle" fill="#1f2937" fontSize="10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.9 }}
                      >Technical</motion.text>
                      <motion.text x="185" y="70" textAnchor="middle" fill="#1f2937" fontSize="10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      >Problem Solving</motion.text>
                      <motion.text x="165" y="160" textAnchor="middle" fill="#1f2937" fontSize="10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.1 }}
                      >Leadership</motion.text>
                      <motion.text x="70" y="165" textAnchor="middle" fill="#1f2937" fontSize="10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                      >Communication</motion.text>
                      <motion.text x="20" y="100" textAnchor="middle" fill="#1f2937" fontSize="10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3 }}
                      >Teamwork</motion.text>
                    </svg>
                  </div>
                </VisualizationCard>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Active Users</div>
                <div className="text-xl font-bold text-gray-800">12,485</div>
                <div className="text-xs text-green-600">+24% MoM</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Avg. Session</div>
                <div className="text-xl font-bold text-gray-800">14.2 min</div>
                <div className="text-xs text-green-600">+3.5 min</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Conversion</div>
                <div className="text-xl font-bold text-gray-800">7.8%</div>
                <div className="text-xs text-green-600">+1.2%</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Job Views</div>
                <div className="text-xl font-bold text-gray-800">458K</div>
                <div className="text-xs text-green-600">+34K</div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Data insights */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible" 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Key Data Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsightCard 
              icon="⚡"
              title="Skill Gap Analysis"
              description="Identifies disparities between current skills and market demands, providing targeted learning recommendations."
              stat={{ value: "86%", label: "of users improved relevant skills" }}
            />
            <InsightCard 
              icon="🧠"
              title="Career Trajectory Prediction"
              description="Machine learning models forecast optimal career paths based on current skills, experience, and market trends."
              stat={{ value: "93%", label: "prediction accuracy" }}
            />
            <InsightCard 
              icon="🔍"
              title="Market Demand Identification"
              description="Real-time analysis of employment market to identify emerging opportunities and high-demand skill sets."
              stat={{ value: "24", label: "days average market prediction lead time" }}
            />
            <InsightCard 
              icon="📊"
              title="Performance Benchmarking"
              description="Comparative analysis against industry peers to identify competitive advantages and improvement areas."
              stat={{ value: "4.2x", label: "faster career advancement" }}
            />
          </div>
        </motion.section>
        
        {/* Technical implementation */}
        <motion.section
          variants={animations.slideUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Analytics Infrastructure
          </h3>
          
          <div className="bg-white rounded-xl border border-cyan-200 p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-100">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Data Collection</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">1</div>
                    <p className="text-gray-700 text-sm">Automated ETL pipelines from 50+ data sources</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">2</div>
                    <p className="text-gray-700 text-sm">Real-time data streaming with Apache Kafka</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">3</div>
                    <p className="text-gray-700 text-sm">Privacy-first anonymization and compliance layer</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-100">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Processing Engine</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">1</div>
                    <p className="text-gray-700 text-sm">Distributed Spark clusters for batch processing</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">2</div>
                    <p className="text-gray-700 text-sm">Custom ML models deployed in containerized environments</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">3</div>
                    <p className="text-gray-700 text-sm">Auto-scaling compute resources based on demand</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-100">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Visualization Layer</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">1</div>
                    <p className="text-gray-700 text-sm">Interactive dashboards with D3.js and React</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">2</div>
                    <p className="text-gray-700 text-sm">Real-time data updates with WebSocket connections</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs mt-0.5 mr-2">3</div>
                    <p className="text-gray-700 text-sm">Customizable export options with white-labeling</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </PresentationLayout>
  );
};

export default DataAnalyticsPresentation;