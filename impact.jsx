import React from 'react';

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-12">Our Impact</h1>

      <div className="space-y-6 w-full max-w-md">
        <div className="bg-gray-50 rounded-xl shadow p-6">
          <h2 className="text-3xl font-semibold text-indigo-600">120K+</h2>
          <p className="text-gray-600">Miles Saved</p>
        </div>
        <div className="bg-gray-50 rounded-xl shadow p-6">
          <h2 className="text-3xl font-semibold text-indigo-600">95%</h2>
          <p className="text-gray-600">User Satisfaction</p>
        </div>
        <div className="bg-gray-50 rounded-xl shadow p-6">
          <h2 className="text-3xl font-semibold text-indigo-600">40,000+</h2>
          <p className="text-gray-600">Routes Analyzed</p>
        </div>
      </div>

      <p className="mt-12 text-gray-700 max-w-xl">
        We're making transit more efficient for everyone—one optimized trip at a time.
      </p>
    </div>
  );
};

export default Impact;
