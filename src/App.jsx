import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AIJobSearch from './pages/AIJobSearch';
import CVReview from './pages/CVReview';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job-search" element={<AIJobSearch />} />
          <Route path="/cv-review" element={<CVReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;