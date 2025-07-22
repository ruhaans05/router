import React from 'react';

const team = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    img: '/jane.jpg',
  },
  {
    name: 'Rahul Sharma',
    role: 'Head of Product',
    img: '/rahul.jpg',
  },
  {
    name: 'Amina Yusuf',
    role: 'Lead Engineer',
    img: '/amina.jpg',
  },
];

const WhoWeAre = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-700">Who We Are</h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-indigo-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
