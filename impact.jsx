import React from 'react';

const Impact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">Our Impact</h1>
      
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-indigo-600">120K+</h2>
          <p className="text-gray-600 mt-2">Miles Saved</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-indigo-600">95%</h2>
          <p className="text-gray-600 mt-2">User Satisfaction</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-indigo-600">40,000+</h2>
          <p className="text-gray-600 mt-2">Routes Analyzed</p>
        </div>
      </div>

      <p className="text-center mt-12 text-gray-700 text-lg">
        We're making transit more efficient for everyone—one optimized trip at a time.
      </p>
    </div>
  );
};

export default Impact;
