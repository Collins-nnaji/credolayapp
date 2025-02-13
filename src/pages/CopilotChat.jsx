import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CopilotChat = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const copilotUrl =
    "https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_credolay/canvas?__version__=2&enableFileAttachment=true";

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowChat(true);
    }, 5000);

    return () => clearTimeout(introTimer);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Background Video */}
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

      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={introAnimation}
            className="relative z-20 h-screen flex flex-col items-center justify-center px-4"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white text-center mb-8 tracking-tight"
            >
              Welcome to Credolay
            </motion.h1>
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

      {/* Main Content */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-20 container mx-auto px-4 pt-24 pb-8"
          >
            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  icon: "🎯",
                  title: "Smart Job Matching",
                  description:
                    "Discover job opportunities that perfectly align with your unique skills and ambitions."
                },
                {
                  icon: "💡",
                  title: "Career Insights",
                  description:
                    "Dive into detailed role insights and industry trends to guide your career path."
                },
                {
                  icon: "🤖",
                  title: "Copilot Chat",
                  description:
                    "Engage with our AI for personalized career advice, resume tips, interview strategies, and more."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-lg text-gray-200">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                {/* Custom header overlay */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-blue-600 to-purple-600 z-50">
                  <div className="flex items-center justify-between h-full px-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white">Elevate Your Career</h2>
                      <p className="text-sm text-blue-100">
                        Explore roles, unlock tailored advice, and step confidently into your future.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Chat iframe */}
                <div className="h-[calc(60vh)] bg-white relative">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-600 to-purple-600 z-40" />
                  <iframe
                    src={copilotUrl}
                    title="Microsoft Copilot Chat"
                    className="w-full h-full border-0 -mt-20"
                    allow="microphone; camera"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopilotChat;
