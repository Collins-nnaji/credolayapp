import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CopilotChat from './pages/CopilotChat';
import ResumeAnalytics from './pages/ResumeAnalytics'; // New name for resume section

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <main className="pt-20">
          <Routes>
            {/* Dashboard/Home route */}
            <Route path="/" element={<CopilotChat />} />
            
            {/* Chat route */}
            <Route path="/chat" element={<CopilotChat />} />
            
            {/* Resume Analytics route */}
            <Route path="/resume-analytics" element={<ResumeAnalytics />} />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;