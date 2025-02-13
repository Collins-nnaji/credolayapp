// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CopilotChat from './pages/CopilotChat';
import CareerTools from './pages/CareerTools';
import ResumeBuilder from './pages/CareerTools/components/ResumeBuilder';
import CoverLetterGenerator from './pages/CareerTools/components/CoverLetterGenerator';
import LinkedInOptimizer from './pages/CareerTools/components/LinkedInOptimizer';
import ResumeScanner from './pages/CareerTools/components/ResumeScanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<CopilotChat />} />
          <Route path="/career-tools" element={<CareerTools />} />
          <Route path="/career-tools/resume-builder" element={<ResumeBuilder />} />
          <Route path="/career-tools/cover-letter" element={<CoverLetterGenerator />} />
          <Route path="/career-tools/linkedin-optimizer" element={<LinkedInOptimizer />} />
          <Route path="/career-tools/resume-scanner" element={<ResumeScanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;