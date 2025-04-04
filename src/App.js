import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Presentation1 from './pages/Presentation/Presentation1';
import Presentation2 from './pages/Presentation/Presentation2';
import Presentation3 from './pages/Presentation/Presentation3';
import Presentation4 from './pages/Presentation/Presentation4';
import Presentation5 from './pages/Presentation/Presentation5';
import PresentationHome from './pages/Presentation/PresentationHome';

// Enhanced layout with animated background elements - updated with light theme
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50/20 to-white relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
    <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/40 to-transparent"></div>
    <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-purple-200/20 filter blur-3xl animate-float"></div>
    <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-blue-200/20 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    
    {/* Main content */}
    <div className="relative z-10">
      <Navbar />
      <main className="pt-24 min-h-[calc(100vh-6rem)]">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <img src="/credolay.png" alt="Credolay Logo" className="h-8 mr-2" />
            </div>
            <p className="text-xs text-gray-500 mt-2">© 2023 Credolay. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
              Terms
            </button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
              Privacy
            </button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

// Enhanced home page with more dynamic content and animations - updated with light theme
const Home = () => (
  <div className="relative">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <img 
            src="/credolay.png" 
            alt="Credolay Logo" 
            className="h-24 mx-auto mb-6"
          />
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our interactive showcase demonstrating advanced frontend development techniques
            using React, Framer Motion, and modern design principles.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-4xl mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="relative px-6 py-8 md:p-12 glass-morphism bg-white/70">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Technical Showcase</h2>
                  <p className="text-gray-600 mb-6">
                    This interactive presentation demonstrates our expertise in building modern, responsive 
                    web applications with sophisticated UI/UX design.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Animated transitions with Framer Motion",
                      "Responsive design using TailwindCSS",
                      "Interactive data visualizations",
                      "Advanced styling techniques"
                    ].map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center"
                      >
                        <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a 
                      href="/presentation" 
                      className="btn btn-primary"
                    >
                      Explore Presentation
                    </a>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative grid grid-cols-2 gap-3 p-4 transform rotate-6">
                        {[
                          { color: "from-green-400 to-blue-500", delay: 0 },
                          { color: "from-purple-400 to-pink-500", delay: 0.2 },
                          { color: "from-yellow-400 to-orange-500", delay: 0.1 },
                          { color: "from-blue-500 to-indigo-500", delay: 0.3 }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + item.delay, duration: 0.5 }}
                            className={`h-20 rounded-lg bg-gradient-to-br ${item.color} glass-morphism shadow-lg`}
                          ></motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { name: "React", icon: "💻" },
            { name: "Framer Motion", icon: "🔄" },
            { name: "TailwindCSS", icon: "🎨" },
            { name: "Animation", icon: "✨" },
            { name: "Responsive", icon: "📱" }
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex items-center px-4 py-2 bg-gray-200/60 rounded-full"
            >
              <span className="mr-2">{tech.icon}</span>
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Home/dashboard */}
          <Route path="/" element={<Layout><Home /></Layout>} />

          {/* Presentation routes */}
          <Route path="/presentation" element={<PresentationHome />} />
          <Route path="/presentation/1" element={<Presentation1 />} />
          <Route path="/presentation/2" element={<Presentation2 />} />
          <Route path="/presentation/3" element={<Presentation3 />} />
          <Route path="/presentation/4" element={<Presentation4 />} />
          <Route path="/presentation/5" element={<Presentation5 />} />

          {/* Catch-all route redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App; 