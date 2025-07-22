import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">Welcome to StartupX</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Smart routing. Affordable travel. Data-powered journeys. Explore our vision.
      </p>
      <Link to="/about" className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 transition">
        Learn More
      </Link>
    </div>
  );
};

export default Home;
