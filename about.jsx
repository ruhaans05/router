import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">About Our Startup</h1>

      <img
        src="/team-placeholder.jpg"
        alt="Our Team"
        className="w-40 h-40 rounded-2xl shadow-lg object-cover mb-8"
      />

      <div className="max-w-xl space-y-4">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="text-gray-700">
          We're a team of innovators building the future of transport, tech, and human connection.
        </p>
        <p className="text-gray-700">
          Our goal is to make every journey simpler, cheaper, and more connected — powered by design and data.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
        <p className="text-gray-700">
          To empower travelers with smarter routing, better decisions, and tools that feel human-first.
        </p>
      </div>
    </div>
  );
};

export default About;
