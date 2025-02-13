import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Download, RefreshCw, PlusCircle, Trash2, Send } from 'lucide-react';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [{ 
      company: '', 
      position: '', 
      duration: '', 
      description: '' 
    }],
    education: [{
      school: '',
      degree: '',
      year: '',
      gpa: ''
    }],
    skills: ['']
  });

  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePersonalInfoChange = (e) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { company: '', position: '', duration: '', description: '' }]
    });
  };

  const removeExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = formData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    setFormData({ ...formData, experience: newExperience });
  };

  const generateAISuggestions = async () => {
    setIsGenerating(true);
    // Future GPT integration will go here
    setTimeout(() => {
      setAiSuggestions([
        "Consider adding metrics to your job descriptions",
        "Your summary could be more impactful with industry keywords",
        "Add specific technologies you've worked with"
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-8">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/career-tools"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Tools
          </Link>
          <button
            onClick={generateAISuggestions}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-4 h-4 mr-2" />
            Get AI Suggestions
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.personalInfo.fullName}
                    onChange={handlePersonalInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                {/* Add other personal info fields */}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
                <button
                  onClick={addExperience}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Add Experience
                </button>
              </div>
              
              {formData.experience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Experience fields */}
                </div>
              ))}
            </motion.div>
          </div>

          {/* AI Suggestions Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-fit sticky top-24"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">AI Suggestions</h3>
              <RefreshCw 
                className={`w-5 h-5 text-blue-200 ${isGenerating ? 'animate-spin' : ''}`}
              />
            </div>
            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/5 rounded-lg text-gray-200"
                >
                  {suggestion}
                </div>
              ))}
              {aiSuggestions.length === 0 && !isGenerating && (
                <div className="text-gray-300 text-center">
                  Click "Get AI Suggestions" to receive personalized feedback
                </div>
              )}
              {isGenerating && (
                <div className="text-gray-300 text-center animate-pulse">
                  Generating suggestions...
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;