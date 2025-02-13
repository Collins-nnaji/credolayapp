import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Upload, RefreshCw, CheckCircle2, XCircle, 
  AlertTriangle, FileText, /* Download, */  Search 
} from 'lucide-react';

const ResumeScanner = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleFiles = (file) => {
    if (file && (
      file.type === 'application/pdf' || 
      file.type === 'application/msword' || 
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    )) {
      setFile(file);
    } else {
      alert('Please upload a PDF or Word document');
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const scanResume = async () => {
    setIsScanning(true);
    // Future GPT integration will go here
    setTimeout(() => {
      setScanResults({
        scores: {
          ats: 85,
          keywordMatch: 75,
          formatting: 90,
          overall: 83
        },
        issues: [
          { 
            type: 'error', 
            message: 'Contact information not prominently displayed',
            solution: 'Move contact details to the top of the resume'
          },
          { 
            type: 'warning', 
            message: 'Missing quantifiable achievements',
            solution: 'Add specific metrics and results to experience section'
          },
          { 
            type: 'success', 
            message: 'Good use of action verbs',
            solution: null
          }
        ],
        keywords: {
          missing: ['agile methodology', 'project management', 'team leadership'],
          matched: ['React', 'JavaScript', 'UI/UX', 'API integration']
        },
        improvements: [
          'Add a clear professional summary',
          'Include more specific technical skills',
          'Quantify achievements with metrics',
          'Use more industry-specific keywords'
        ]
      });
      setIsScanning(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getIssueIcon = (type) => {
    switch (type) {
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
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
          <h1 className="text-3xl font-bold text-white">Resume Scanner</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* File Upload */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upload Resume</h2>
              <div
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg
                  ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                  ${!file ? 'hover:border-blue-400' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleFileInput}
                        accept=".pdf,.doc,.docx"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF or Word up to 10MB</p>
                </div>
              </div>
              {file && (
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  {file.name}
                </div>
              )}
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Job Description (Optional)</h2>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Paste the job description to compare against..."
              />
            </div>

            <button
              onClick={scanResume}
              disabled={!file || isScanning}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Scan Resume
                </>
              )}
            </button>
          </motion.div>

          {/* Results Section */}
          {scanResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Score Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Scan Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className={`text-2xl font-bold ${getScoreColor(scanResults.scores.overall)}`}>
                      {scanResults.scores.overall}%
                    </div>
                    <div className="text-sm text-gray-600">Overall Score</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className={`text-2xl font-bold ${getScoreColor(scanResults.scores.ats)}`}>
                      {scanResults.scores.ats}%
                    </div>
                    <div className="text-sm text-gray-600">ATS Score</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className={`text-2xl font-bold ${getScoreColor(scanResults.scores.keywordMatch)}`}>
                      {scanResults.scores.keywordMatch}%
                    </div>
                    <div className="text-sm text-gray-600">Keyword Match</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className={`text-2xl font-bold ${getScoreColor(scanResults.scores.formatting)}`}>
                      {scanResults.scores.formatting}%
                    </div>
                    <div className="text-sm text-gray-600">Formatting</div>
                  </div>
                </div>
              </div>

              {/* Issues and Solutions */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Issues and Solutions</h2>
                <div className="space-y-4">
                  {scanResults.issues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      {getIssueIcon(issue.type)}
                      <div>
                        <p className="font-medium text-gray-900">{issue.message}</p>
                        {issue.solution && (
                          <p className="text-sm text-gray-600 mt-1">Solution: {issue.solution}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords Analysis */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Keywords Analysis</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Matched Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {scanResults.keywords.matched.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Missing Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {scanResults.keywords.missing.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Improvement Suggestions */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Improvement Suggestions</h2>
                <ul className="space-y-3">
                  {scanResults.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeScanner;