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
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-purple-700 mb-12">Who We Are</h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 w-64">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
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
