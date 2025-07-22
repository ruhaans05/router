import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-12 text-indigo-600">About Our Startup</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-gray-700">
            We're a team of innovators building the future of transport, tech, and human connection.
          </p>
          <p className="text-gray-700">
            Our goal is to make every journey simpler, cheaper, and more connected — powered by design and data.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/team-placeholder.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-lg w-full max-w-sm"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To empower travelers with smarter routing, better decisions, and tools that feel human-first.
        </p>
      </div>
    </div>
  );
};

export default About;
