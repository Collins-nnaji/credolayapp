import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/credolay.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 text-white px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Your AI-Powered Career Partner
        </h1>
        <p className="text-xl mb-12 text-center max-w-2xl">
          Transform your job search with AI-powered tools that help you find the perfect role
          and present yourself in the best light.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/job-search"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
          >
            Start Job Search
          </Link>
          <Link
            to="/cv-review"
            className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors"
          >
            Review My CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;