import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  X, 
  MessageSquare, 
  Briefcase, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

const CopilotChat = () => {
  // ----------------------------------------
  // 1. States
  // ----------------------------------------
  // For country selection
  const [showCountrySelection, setShowCountrySelection] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');

  // For intro, chat, tutorial, etc.
  const [showIntro, setShowIntro] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  // For notifications and the sidebar
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

  // For remembering recent prompts
  const [recentPrompts, setRecentPrompts] = useState([]);

  // ----------------------------------------
  // 2. Animations & Mock Data
  // ----------------------------------------
  const introAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Job Matching",
      description: "Get personalized job recommendations based on your skills and preferences.",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Insights",
      description: "Receive data-driven career advice and industry insights.",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Interview Success",
      description: "Practice with AI for better interview performance.",
      gradient: "from-amber-500/20 to-amber-600/20"
    }
  ];

  const promptTips = [
    {
      category: "Job Search",
      icon: <Briefcase className="w-6 h-6" />,
      examples: [
        "Find remote software developer jobs in Europe paying above $80,000",
        "Show me entry-level marketing positions in Lagos that offer training",
        "What are the highest paying tech jobs in Nigeria with growth potential?",
      ]
    },
    {
      category: "Career Development",
      icon: <Award className="w-6 h-6" />,
      examples: [
        "Create a 6-month learning path for becoming a data scientist",
        "What skills should I focus on for a UX design career in 2025?",
        "Compare the career prospects of product management vs. project management",
      ]
    },
    {
      category: "Interview Preparation",
      icon: <MessageSquare className="w-6 h-6" />,
      examples: [
        "Prepare me for a senior frontend developer interview at a fintech company",
        "What are the top behavioral questions for product managers and how to answer them?",
        "Practice technical interview questions for a Python backend role",
      ]
    }
  ];

  // ----------------------------------------
  // 3. Effects: Load prompts, handle intro
  // ----------------------------------------
  useEffect(() => {
    // Load any previously-saved prompts
    const savedPrompts = localStorage.getItem('recentPrompts');
    if (savedPrompts) {
      setRecentPrompts(JSON.parse(savedPrompts));
    }

    // Only proceed to intro -> chat once country has been selected
    if (!showCountrySelection) {
      setShowIntro(true);

      // Intro is shown for 5 seconds, then hidden, and chat is shown
      const introTimer = setTimeout(() => {
        setShowIntro(false);
        setShowChat(true);
        // Show tutorial after 1 second
        setTimeout(() => setShowTutorial(true), 1000);
      }, 5000);

      return () => clearTimeout(introTimer);
    }
  }, [showCountrySelection]);

  // ----------------------------------------
  // 4. Handlers
  // ----------------------------------------
  const handleCopyPrompt = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotificationMessage('Prompt copied to clipboard!');

      const updatedPrompts = [text, ...recentPrompts.slice(0, 4)];
      setRecentPrompts(updatedPrompts);
      localStorage.setItem('recentPrompts', JSON.stringify(updatedPrompts));
    } catch {
      showNotificationMessage('Failed to copy prompt');
    }
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  // ----------------------------------------
  // 5. Components: Notification, Sidebar, Toolbar
  // ----------------------------------------
  const Notification = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
    >
      {notificationMessage}
    </motion.div>
  );

  const Sidebar = () => (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-40 p-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Recent Prompts</h3>
        <button onClick={() => setShowSidebar(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-3">
        {recentPrompts.map((prompt, index) => (
          <div
            key={index}
            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => handleCopyPrompt(prompt)}
          >
            {prompt}
          </div>
        ))}
      </div>
    </motion.div>
  );

  const Toolbar = () => (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-40 flex items-center space-x-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
        onClick={() => setShowTutorial(true)}
      >
        <HelpCircle className="w-6 h-6" />
        <span className="text-sm">Example Prompts</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
        onClick={() => setShowSidebar(true)}
      >
        <Clock className="w-6 h-6" />
        <span className="text-sm">Recent Prompts</span>
      </motion.button>
    </div>
  );

  // ----------------------------------------
  // 6. Tutorial Overlay
  // ----------------------------------------
  const TutorialOverlay = () => (
    <AnimatePresence>
      {showTutorial && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-2xl mx-4 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                {promptTips[currentTip].icon}
                <h3 className="text-2xl font-bold text-gray-800">
                  {promptTips[currentTip].category}
                </h3>
              </div>
              <button 
                onClick={() => setShowTutorial(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">Try these example prompts:</p>
              <div className="space-y-3">
                {promptTips[currentTip].examples.map((example, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-blue-50 rounded-lg text-blue-700 cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => handleCopyPrompt(example)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{example}</span>
                      <span className="text-sm text-blue-500">Click to copy</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => setCurrentTip(prev => prev === 0 ? promptTips.length - 1 : prev - 1)}
                className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-2">
                {promptTips.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentTip === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => {
                  if (currentTip === promptTips.length - 1) {
                    setShowTutorial(false);
                  } else {
                    setCurrentTip(prev => prev + 1);
                  }
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>{currentTip === promptTips.length - 1 ? 'Get Started' : 'Next'}</span>
                {currentTip !== promptTips.length - 1 && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ----------------------------------------
  // 7. Country Selection Overlay
  // ----------------------------------------
  const CountrySelectionOverlay = () => {
    const countries = [
      {
        name: 'Nigeria',
        image: '/flags/nigeria.jpg', 
        gradient: 'from-green-600 via-green-500 to-green-400',
      },
      {
        name: 'United Kingdom',
        image: '/flags/uk.jpg',
        gradient: 'from-blue-600 via-blue-500 to-blue-400',
      },
    ];

    const handleCountryClick = (country) => {
      setSelectedCountry(country);
      setShowCountrySelection(false);
    };

    return (
      <AnimatePresence>
        {showCountrySelection && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-3xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                Select Your Country
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {countries.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleCountryClick(item.name)}
                  >
                    {/* Background image with a subtle zoom on hover */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    {/* Overlay gradient tint */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-40`} 
                    />
                    
                    {/* Country name */}
                    <div className="relative z-10 flex items-center justify-center h-32 sm:h-40 text-white font-semibold text-2xl">
                      {item.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // ----------------------------------------
  // 8. Main Render
  // ----------------------------------------
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Video / background overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 backdrop-blur-sm z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/credolay2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Country selection overlay (only shows if showCountrySelection = true) */}
      <CountrySelectionOverlay />

      {/* Intro screen */}
      <AnimatePresence>
        {showIntro && !showCountrySelection && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={introAnimation}
            className="relative z-20 h-screen flex flex-col items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/credolay.png" 
                alt="Credolay Logo" 
                className="h-48 md:h-64 w-auto brightness-110 filter drop-shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-3xl md:text-4xl text-gray-200 text-center max-w-4xl leading-relaxed"
            >
              Your AI-Powered Career Partner
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="mt-12 text-2xl text-blue-200 animate-pulse"
            >
              Loading your personalized career journey...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main chat + features */}
      <AnimatePresence>
        {showChat && !showCountrySelection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-20 container mx-auto px-4 pt-24 pb-8"
          >
            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className={`p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl 
                    bg-gradient-to-br ${feature.gradient}`}
                >
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-base text-gray-200">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Chat window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white">Credolay Assistant</h2>
                      <p className="text-blue-100">
                        Your AI-powered guide to career success
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => setShowTutorial(true)}
                    >
                      <HelpCircle className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Pass selectedCountry to the iframe as a URL parameter */}
                <div className="h-[70vh] bg-white">
                  <iframe
                    // Example: you can use `selectedCountry.toLowerCase()` or a custom logic
                    // For now, we just append ?country=Selected_Country
                    src={`https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_credolay/webchat?__version__=2&country=${encodeURIComponent(selectedCountry)}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="microphone; camera"
                    title="Copilot Chat"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlays, notifications, etc. */}
      <TutorialOverlay />
      <AnimatePresence>{showNotification && <Notification />}</AnimatePresence>
      <AnimatePresence>{showSidebar && <Sidebar />}</AnimatePresence>

      {/* Bottom toolbar if chat is visible */}
      {showChat && !showCountrySelection && <Toolbar />}

      {/* 
        If you'd like to see what the user selected:
        {selectedCountry && (
          <div className="fixed top-4 left-4 text-white z-40">
            Selected Country: {selectedCountry}
          </div>
        )}
      */}
    </div>
  );
};

export default CopilotChat;
