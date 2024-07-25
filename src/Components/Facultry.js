// src/components/Faculty.js
import React from 'react';

const facultyMembers = [
  {
    name: 'John Doe',
    role: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTKVe3DnyUDyCLRAKwH1buLoD_SiLUpQyxg&s'
  },
  {
    name: 'Jane Smith',
    role: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t09zjp-_EriTZMoRc02Mb65SkLmcbIoXMw&s'
  },
  {
    name: 'Emily Johnson',
    role: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years',
    image: 'https://static.vecteezy.com/system/resources/previews/046/667/384/non_2x/classroom-charm-smiling-teacher-poses-with-books-photo.jpg'
  },
  {
    name: 'Michael Brown',
    role: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg/1200px-Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg'
  },
  {
    name: 'Sophia Davis',
    role: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years',
    image: 'https://i.pinimg.com/736x/17/fa/44/17fa44e8d7f0d4a341f078b6c94a31ef.jpg'
  },
  {
    name: 'David Wilson',
    role: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years',
    image: 'https://c8.alamy.com/comp/D2ENPC/happy-male-teacher-with-textbooks-in-classroom-D2ENPC.jpg'
  }
];

const Faculty = () => {
  return (
    <div className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Meet Our Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-600">{member.qualification}</p>
            <p className="text-gray-600">{member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
