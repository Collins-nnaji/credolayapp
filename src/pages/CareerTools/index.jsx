import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Mail, Search } from 'lucide-react';

const CareerTools = () => {
  const [activeTab, setActiveTab] = useState('resume');

  const tools = [
    {
      id: 'resume',
      title: 'AI Resume Builder',
      icon: <FileText size={24} />,
      description: 'Create and customize your resume with AI suggestions',
      features: [
        'Multiple professional templates',
        'AI-powered content suggestions',
        'ATS-friendly formatting',
        'Industry-specific keywords'
      ]
    },
    {
      id: 'cover',
      title: 'Cover Letter Generator',
      icon: <Mail size={24} />,
      description: 'Generate personalized cover letters for each application',
      features: [
        'Company-specific customization',
        'Professional tone adjustment',
        'Achievement highlighting',
        'Value proposition emphasis'
      ]
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Optimizer',
      icon: <Linkedin size={24} />,
      description: 'Enhance your LinkedIn profile with AI recommendations',
      features: [
        'Profile strength analysis',
        'Keyword optimization',
        'Content suggestions',
        'Network growth tips'
      ]
    },
    {
      id: 'scanner',
      title: 'Quick Resume Scanner',
      icon: <Search size={24} />,
      description: 'Instant resume analysis and improvement suggestions',
      features: [
        'ATS compatibility check',
        'Keyword analysis',
        'Format verification',
        'Quick improvement tips'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
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

      <div className="relative z-20 container mx-auto px-4 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Tools</h1>
          <p className="text-xl text-gray-200">Enhance your job search with our AI-powered tools</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-300">
                  {tool.icon}
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-white">{tool.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{tool.description}</p>
              <ul className="space-y-3">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveTab(tool.id)}
                className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Start Using {tool.title}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Future enhancement: Tool interfaces will appear here based on activeTab */}
        {activeTab && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {tools.find(t => t.id === activeTab)?.title}
            </h2>
            <p className="text-gray-600">
              This feature is coming soon. You'll be able to use this tool directly from this interface.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CareerTools;