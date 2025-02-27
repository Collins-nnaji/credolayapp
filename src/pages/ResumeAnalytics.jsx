
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload,
  AlertTriangle,
  Briefcase,
  Target,
  AlertCircle,
  Loader,
  Zap,
  Download,
  RotateCw,  // Replace Refresh with RotateCw
  Search
} from 'lucide-react';

// Backend API URL - adjust as needed
const API_URL = process.env.REACT_APP_API_URL || 'https://credolaybackend.azurewebsites.net/api';

const ResumeAnalytics = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeSection, setActiveSection] = useState('upload');
  const [analysis, setAnalysis] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [jobRole, setJobRole] = useState('');

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setErrorMessage('');

    if (!uploadedFile) return;

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    
    if (!allowedTypes.includes(uploadedFile.type)) {
      setErrorMessage('Please upload a PDF, DOCX, or TXT file');
      return;
    }

    if (uploadedFile.size > 5 * 1024 * 1024) {
      setErrorMessage('File size must be less than 5MB');
      return;
    }

    analyzeResume(uploadedFile);
  };

  const analyzeResume = async (uploadedFile) => {
    setIsAnalyzing(true);
    
    try {
      // Create form data to send file to backend
      const formData = new FormData();
      formData.append('file', uploadedFile);
      
      // Add job role if provided
      if (jobRole) {
        formData.append('job_role', jobRole);
      }
      
      // Send request to backend
      const response = await fetch(`${API_URL}/analyze`, {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Error analyzing resume');
      }
      
      // Set analysis data from backend
      setAnalysis(result.data);
      setActiveSection('dashboard');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.message || 'Error analyzing resume. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRetry = () => {
    setAnalysis(null);
    setActiveSection('upload');
    setErrorMessage('');
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Calculate overall score
  const calculateOverallScore = () => {
    if (!analysis) return 0;
    const { atsScore, keywordMatch, formatScore, contentScore } = analysis;
    return Math.round((atsScore + keywordMatch + formatScore + contentScore) / 4);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 relative">
      {/* Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/credolay.png"
          alt="Watermark"
          className="w-full max-w-[800px] opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume Analytics
          </h1>
          <p className="text-xl text-gray-600">
            Analyze, optimize, and enhance your resume with AI-powered insights
          </p>
        </div>

        {isAnalyzing ? (
          <div className="flex flex-col items-center justify-center h-96">
            <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-xl text-gray-600">Analyzing your resume...</p>
            <p className="text-gray-500 mt-2">This will just take a moment</p>
          </div>
        ) : (
          <>
            {activeSection === 'upload' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto text-center"
              >
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Job Role Input */}
                <div className="mb-6">
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter target job role (optional)"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Specifying a job role helps tailor the analysis to your career goals
                  </p>
                </div>

                <div className="relative">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-white/50 hover:bg-white/80 transition-colors backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-12 h-12 mb-4 text-blue-500" />
                      <p className="mb-2 text-xl text-gray-700">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOCX, or TXT (Max. 5MB)
                      </p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.docx,.doc,.txt"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Target className="w-8 h-8 text-blue-500" />,
                      title: "ATS Optimization",
                      description: "Get scored on ATS compatibility"
                    },
                    {
                      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
                      title: "Job Matching",
                      description: "Find matching job opportunities"
                    },
                    {
                      icon: <Zap className="w-8 h-8 text-amber-500" />,
                      title: "Smart Analysis",
                      description: "Get actionable improvements"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                      <div className="flex flex-col items-center text-center">
                        {feature.icon}
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'dashboard' && analysis && (
              <div className="space-y-6">
                {/* Dashboard Header with Overall Score */}
                <div className="bg-white rounded-xl shadow p-6 mb-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Resume Analysis Results</h2>
                      <p className="text-gray-600">Here's how your resume performs against industry standards</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                    <button 
  onClick={handleRetry}
  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
>
  <RotateCw className="w-4 h-4 mr-2" />
  Analyze Another
</button>
                      <div className="flex flex-col items-center">
                        <div className="text-sm font-medium text-gray-500">Overall Score</div>
                        <div className={`text-3xl font-bold ${getScoreColor(calculateOverallScore())}`}>
                          {calculateOverallScore()}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Score Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {[
                    { 
                      title: "ATS Score", 
                      score: analysis.atsScore, 
                      icon: <Target className="w-5 h-5" />,
                      description: "How well your resume performs with Applicant Tracking Systems"
                    },
                    { 
                      title: "Keyword Match", 
                      score: analysis.keywordMatch, 
                      icon: <Search className="w-5 h-5" />,
                      description: "Relevance of your keywords to job requirements"
                    },
                    { 
                      title: "Format", 
                      score: analysis.formatScore, 
                      icon: <Download className="w-5 h-5" />,
                      description: "Structure, readability and professional presentation"
                    },
                    { 
                      title: "Content", 
                      score: analysis.contentScore, 
                      icon: <Briefcase className="w-5 h-5" />,
                      description: "Quality and impact of your resume content"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow p-6"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="font-medium text-gray-700">{item.title}</div>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          item.score >= 80 ? 'bg-green-100' : 
                          item.score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                        }`}>
                          {React.cloneElement(item.icon, { 
                            className: `${
                              item.score >= 80 ? 'text-green-600' : 
                              item.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`
                          })}
                        </div>
                      </div>
                      <div className={`text-3xl font-bold ${getScoreColor(item.score)}`}>
                        {item.score}%
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Critical Improvements */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Critical Improvements</h3>
                  <div className="space-y-4">
                    {analysis.improvements.map((improvement, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg ${
                          improvement.type === 'critical' 
                            ? 'bg-red-50 border-l-4 border-red-500'
                            : 'bg-yellow-50 border-l-4 border-yellow-500'
                        }`}
                      >
                        <div className="flex items-start">
                          <AlertTriangle className={`w-5 h-5 ${
                            improvement.type === 'critical' 
                              ? 'text-red-500'
                              : 'text-yellow-500'
                          } mt-1`} />
                          <div className="ml-3">
                            <p className="font-medium">{improvement.message}</p>
                            <p className="text-sm text-gray-600 mt-1">{improvement.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Missing Keywords */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Missing Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.missingKeywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Advanced Metrics (if available) */}
                {analysis.advancedMetrics && (
                  <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Advanced Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Word Count</p>
                        <p className="text-xl font-semibold">{analysis.advancedMetrics.word_count}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500">Reading Level</p>
                        <p className="text-xl font-semibold">{analysis.advancedMetrics.reading_level}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Action Verb Usage</p>
                        <p className="text-xl font-semibold">
                          {analysis.advancedMetrics.action_verb_count} 
                          <span className="text-sm text-gray-500 ml-1">
                            ({(analysis.advancedMetrics.action_verb_ratio * 100).toFixed(1)}%)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Resume Sections (if available) */}
                {analysis.resumeSections && (
                  <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Resume Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Detected Sections</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysis.resumeSections.detected.map((section, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                            >
                              {section.charAt(0).toUpperCase() + section.slice(1)}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {analysis.resumeSections.missing.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Missing Sections</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.resumeSections.missing.map((section, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                              >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Job Matches */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Job Matches</h3>
                  <div className="space-y-4">
                    {analysis.jobMatches.map((job, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{job.title}</h4>
                            <p className="text-sm text-gray-600">{job.company}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {job.salary}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-green-600">
                              {job.matchScore}%
                            </div>
                            <p className="text-sm text-gray-600">Match</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium mb-2">Missing Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.missingSkills.map((skill, i) => (
                              <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalytics;