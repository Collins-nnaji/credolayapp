import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Copy, Download, RefreshCw, AlertCircle } from 'lucide-react';

const CoverLetterGenerator = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    hiringManager: '',
    experience: '',
    jobDescription: '',
    tone: 'professional',
    keyAchievements: ['']
  });

  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addAchievement = () => {
    setFormData({
      ...formData,
      keyAchievements: [...formData.keyAchievements, '']
    });
  };

  const handleAchievementChange = (index, value) => {
    const newAchievements = [...formData.keyAchievements];
    newAchievements[index] = value;
    setFormData({
      ...formData,
      keyAchievements: newAchievements
    });
  };

  const removeAchievement = (index) => {
    const newAchievements = formData.keyAchievements.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      keyAchievements: newAchievements
    });
  };

  const generateCoverLetter = async () => {
    setIsGenerating(true);
    // Future GPT integration will go here
    setTimeout(() => {
      setGeneratedLetter(`Dear ${formData.hiringManager || 'Hiring Manager'},

I am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.company}. With my background in ${formData.experience}, I am confident in my ability to contribute effectively to your team.

[AI-generated content will appear here based on job description and achievements]

Thank you for considering my application. I look forward to discussing how I can contribute to ${formData.company}'s success.

Best regards,
[Your name]`);
      
      setIsGenerating(false);
      setAiSuggestions([
        "Consider adding more specific examples of your relevant experience",
        "Mention your familiarity with the company's recent achievements",
        "Add a strong call-to-action in the closing paragraph"
      ]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/career-tools"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Tools
          </Link>
          <h1 className="text-3xl font-bold text-white">Cover Letter Generator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Basic Information */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Job Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Senior Software Engineer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Tech Corp Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hiring Manager's Name (if known)
                  </label>
                  <input
                    type="text"
                    name="hiringManager"
                    value={formData.hiringManager}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., John Smith"
                  />
                </div>
              </div>
            </div>

            {/* Job Description and Experience */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>
                  <textarea
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Paste the job description here..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Briefly describe your relevant experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Writing Tone
                  </label>
                  <select
                    name="tone"
                    value={formData.tone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="enthusiastic">Enthusiastic</option>
                    <option value="formal">Formal</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={generateCoverLetter}
              disabled={isGenerating}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Generate Cover Letter
                </>
              )}
            </button>
          </motion.div>

          {/* Generated Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Generated Letter */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Generated Cover Letter</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedLetter)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {/* Download logic */}}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    title="Download as PDF"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="prose max-w-none">
                {generatedLetter ? (
                  <div className="whitespace-pre-wrap p-4 bg-gray-50 rounded-lg">
                    {generatedLetter}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 p-8">
                    Your generated cover letter will appear here
                  </div>
                )}
              </div>
            </div>

            {/* AI Suggestions */}
            {aiSuggestions.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">AI Suggestions</h3>
                <div className="space-y-3">
                  {aiSuggestions.map((suggestion, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white/5 rounded-lg text-gray-200"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p>{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;