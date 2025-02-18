import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { 
  Upload,
  AlertTriangle,
  Briefcase,
  Target,
  AlertCircle,
  Loader,
  Zap
} from 'lucide-react';

const ResumeAnalytics = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeSection, setActiveSection] = useState('upload');
  const [analysis, setAnalysis] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setAnalysis({
          atsScore: 65,
          keywordMatch: 70,
          formatScore: 85,
          contentScore: 60,
          missingKeywords: [
            "cloud infrastructure",
            "agile methodologies",
            "stakeholder management"
          ],
          improvements: [
            {
              type: "critical",
              message: "Resume lacks measurable achievements",
              impact: "High impact on ATS scoring"
            },
            {
              type: "warning",
              message: "Technical skills section needs standardization",
              impact: "Medium impact on keyword matching"
            }
          ],
          jobMatches: [
            {
              title: "Senior Software Engineer",
              company: "Tech Corp",
              matchScore: 85,
              keywordMatch: 90,
              missingSkills: ["AWS", "Kubernetes"],
              salary: "$120k - $150k"
            }
          ]
        });
        
        setIsAnalyzing(false);
        setActiveSection('dashboard');
      };

      reader.onerror = () => {
        setErrorMessage('Error reading file');
        setIsAnalyzing(false);
      };

      reader.readAsText(uploadedFile);
    } catch (error) {
      setErrorMessage('Error analyzing resume');
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 relative">
      {/* Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/credolay.png"
          alt="Watermark"
          className="w-[800px] opacity-5"
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
                      accept=".pdf,.docx,.txt"
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