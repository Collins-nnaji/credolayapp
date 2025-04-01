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

const MarketOpportunityPresentation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Stat card component
  const StatCard = ({ icon, title, value, description }) => (
    <motion.div 
      className="bg-white rounded-xl border border-blue-200 p-6 shadow-md"
      variants={animations.staggerItem}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)" }}
      style={{ willChange: "transform", fontFamily: "Consolas, monospace" }}
    >
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );

  // Market segment card component
  const SegmentCard = ({ title, percentage, description }) => (
    <motion.div
      className="bg-white rounded-xl border border-blue-200 p-5 shadow-md"
      variants={animations.staggerItem}
      style={{ fontFamily: "Consolas, monospace" }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <span className="text-lg font-bold text-blue-600">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-3 overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );

  // Trend card component
  const TrendCard = ({ icon, title, description }) => (
    <motion.div 
      className="bg-white rounded-xl border border-blue-200 p-6 shadow-md"
      variants={animations.staggerItem}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)" }}
      style={{ willChange: "transform", fontFamily: "Consolas, monospace" }}
    >
      <div className="flex items-start">
        <div className="text-blue-600 text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <PresentationLayout 
      pageNumber="4" 
      title="Market Opportunity" 
      gradient="from-blue-600 to-purple-600"
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
            Massive Untapped Market Potential
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The career tech sector is experiencing unprecedented growth with significant revenue opportunities
          </p>
        </motion.div>
        
        {/* Market size and growth */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible" 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Market Size & Growth
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              icon="💼"
              title="HR Tech Market"
              value="$34.7B"
              description="Current global market valuation with projections to double in the next 5 years"
            />
            <StatCard 
              icon="📈"
              title="CAGR"
              value="24.5%"
              description="Compound annual growth rate of AI-powered career tech solutions through 2028"
            />
            <StatCard 
              icon="🌐"
              title="Global Reach"
              value="125+"
              description="Countries with active demand for innovative career matching solutions"
            />
          </div>
          
          <div className="bg-white rounded-xl border border-blue-200 p-6 shadow-lg" style={{ fontFamily: "Consolas, monospace" }}>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Market Growth Forecast</h4>
            <div className="relative h-64 mb-4">
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  {/* Market growth chart visualization */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute left-0 bottom-0 top-0 w-px bg-gray-300"></div>
                  
                  {/* Y-axis labels */}
                  <div className="absolute -left-14 bottom-0 text-xs text-gray-500">$0</div>
                  <div className="absolute -left-14 bottom-1/4 text-xs text-gray-500">$25B</div>
                  <div className="absolute -left-14 bottom-2/4 text-xs text-gray-500">$50B</div>
                  <div className="absolute -left-14 bottom-3/4 text-xs text-gray-500">$75B</div>
                  <div className="absolute -left-14 bottom-full -translate-y-2 text-xs text-gray-500">$100B</div>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-[-20px] left-0 text-xs text-gray-500">2023</div>
                  <div className="absolute bottom-[-20px] left-1/4 text-xs text-gray-500">2025</div>
                  <div className="absolute bottom-[-20px] left-2/4 text-xs text-gray-500">2027</div>
                  <div className="absolute bottom-[-20px] left-3/4 text-xs text-gray-500">2029</div>
                  <div className="absolute bottom-[-20px] right-0 text-xs text-gray-500">2031</div>
                  
                  {/* Market growth line - Overall market */}
                  <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                    <motion.path
                      d="M 0,192 C 100,160 200,100 400,32"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </svg>
                  
                  {/* Market growth line - AI segment */}
                  <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                    <motion.path
                      d="M 0,230 C 100,210 200,130 400,10"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </svg>
                  
                  {/* Current position indicator */}
                  <motion.div 
                    className="absolute left-0 bottom-[192px] w-4 h-4 bg-blue-500 rounded-full -translate-x-2 -translate-y-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-1 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Overall HR Tech Market</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-1 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">AI Career Tech Segment</span>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Target segments */}
        <motion.section
          variants={animations.slideUp}
          initial="hidden"
          animate="visible" 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Target Market Segments
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SegmentCard 
              title="Enterprise HR Departments"
              percentage={40}
              description="Large companies seeking to optimize their recruitment processes and reduce time-to-hire by leveraging AI technology."
            />
            <SegmentCard 
              title="Professional Job Seekers"
              percentage={30}
              description="Mid to senior-level professionals looking for career advancement opportunities and intelligent job matching."
            />
            <SegmentCard 
              title="Recent Graduates"
              percentage={15}
              description="Early-career individuals seeking guidance on career paths and skill development to enhance employability."
            />
            <SegmentCard 
              title="Recruitment Agencies"
              percentage={15}
              description="Staffing firms and headhunters looking to improve candidate matching and placement success rates."
            />
          </div>
        </motion.section>
        
        {/* Market trends */}
        <motion.section
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Key Market Trends
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrendCard 
              icon="🤖"
              title="AI-Driven Recruitment"
              description="64% of companies are now adopting AI technologies in talent acquisition, with 78% reporting improved quality of hire."
            />
            <TrendCard 
              icon="🌐"
              title="Remote Work Revolution"
              description="58% increase in global remote recruitment versus pre-pandemic levels, creating demand for better virtual hiring solutions."
            />
            <TrendCard 
              icon="🧠"
              title="Skills-Based Hiring"
              description="72% shift from degree-based to skill-based candidate evaluation, requiring more sophisticated matching algorithms."
            />
            <TrendCard 
              icon="📊"
              title="Data-Driven Decisions"
              description="85% of HR leaders seek analytics to inform hiring strategies and predict successful candidates more accurately."
            />
          </div>
        </motion.section>
        
        {/* Competitive landscape */}
        <motion.section
          variants={animations.fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Competitive Landscape
          </h3>
          
          <div className="bg-white rounded-xl border border-blue-200 p-6 shadow-lg" style={{ fontFamily: "Consolas, monospace" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">Market Positioning</h4>
                <div className="aspect-square relative bg-gray-50 rounded-lg p-4 border border-gray-100">
                  {/* Competitive positioning map */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300"></div>
                    
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">Innovative</div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">Traditional</div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">Affordable</div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">Premium</div>
                    
                    {/* Competitors */}
                    <motion.div 
                      className="absolute" 
                      style={{ top: '60%', left: '70%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center text-xs font-bold">C1</div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute" 
                      style={{ top: '75%', left: '45%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center text-xs font-bold">C2</div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute" 
                      style={{ top: '40%', left: '30%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center text-xs font-bold">C3</div>
                    </motion.div>
                    
                    {/* Our position */}
                    <motion.div 
                      className="absolute" 
                      style={{ top: '25%', left: '55%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shadow-lg">US</div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">Competitive Advantages</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Advanced AI Matching Algorithm</p>
                      <p className="text-sm text-gray-600">47% higher accuracy than traditional keyword matching, reducing hiring time by 68%</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Integrated Career Development</p>
                      <p className="text-sm text-gray-600">Unique combination of job matching with personalized skill development recommendations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Cross-Platform Integration</p>
                      <p className="text-sm text-gray-600">Seamless connection to 35+ job boards and company career sites, capturing 78% of available positions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Conversation-First Approach</p>
                      <p className="text-sm text-gray-600">Natural language interface leads to 3.2x higher engagement compared to traditional form-based systems</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Market Gap Analysis</h4>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-gray-700">
                  Our research identified a significant gap in the market where <span className="text-blue-700 font-semibold">76%</span> of job seekers feel they lack tools to effectively showcase their skills, while <span className="text-blue-700 font-semibold">82%</span> of hiring managers struggle to identify qualified candidates efficiently. This represents a <span className="text-blue-700 font-semibold">$8.4B</span> addressable market opportunity for our solution.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </PresentationLayout>
  );
};

export default MarketOpportunityPresentation;