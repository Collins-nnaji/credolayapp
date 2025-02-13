import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, RefreshCw, /* CheckCircle, */  AlertCircle } from 'lucide-react';

const LinkedInOptimizer = () => {
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [/* sections, */ /* setSections */ ] = useState({
    headline: { score: 0, suggestions: [] },
    summary: { score: 0, suggestions: [] },
    experience: { score: 0, suggestions: [] },
    skills: { score: 0, suggestions: [] }
  });

  const analyzeProfile = async () => {
    setIsAnalyzing(true);
    // Future GPT integration will go here
    setTimeout(() => {
      setProfileData({
        overallScore: 85,
        sections: {
          headline: {
            score: 90,
            suggestions: [
              "Add industry-specific keywords",
              "Highlight your unique value proposition"
            ]
          },
          summary: {
            score: 80,
            suggestions: [
              "Include more achievements",
              "Add specific metrics and results"
            ]
          },
          experience: {
            score: 85,
            suggestions: [
              "Use more action verbs",
              "Include project outcomes"
            ]
          },
          skills: {
            score: 85,
            suggestions: [
              "Add trending technologies",
              "Remove outdated skills"
            ]
          }
        }
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-8">
        <div className="flex items-center mb-8">
          <Link 
            to="/career-tools"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Tools
          </Link>
        </div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">LinkedIn Profile Optimizer</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={linkedInUrl}
              onChange={(e) => setLinkedInUrl(e.target.value)}
              placeholder="Paste your LinkedIn profile content here"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              onClick={analyzeProfile}
              disabled={isAnalyzing || !linkedInUrl}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 flex items-center"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Analyze Profile
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Results Section */}
        {profileData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overall Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-xl text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overall Profile Score</h3>
              <div className={`text-6xl font-bold ${getScoreColor(profileData.overallScore)}`}>
                {profileData.overallScore}%
              </div>
            </motion.div>

            {/* Section Scores */}
            {Object.entries(profileData.sections).map(([section, data], index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 capitalize">{section}</h3>
                  <span className={`text-2xl font-bold ${getScoreColor(data.score)}`}>
                    {data.score}%
                  </span>
                </div>
                <div className="space-y-3">
                  {data.suggestions.map((suggestion, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-700">
                      <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <p>{suggestion}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInOptimizer;