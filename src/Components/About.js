import React from 'react';
// images import
import computerLab from "../Assets/ComputerLab.png";
import Library from "../Assets/Library.png";
import ArtRoom from "../Assets/ArtRoom.png";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-10">
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">History</h2>
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed italic">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside italic text-gray-700 text-lg leading-relaxed space-y-4">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>

        <div className="flex flex-wrap justify-around items-center mb-10">
          <div className="p-2 flex-shrink-0">
            <img className="h-56 w-60 object-cover rounded-lg" src={Library} alt="Library" />
          </div>
          <div className="p-2 flex-shrink-0">
            <img className="h-56 w-60 object-cover rounded-lg" src={computerLab} alt="Computer Lab" />
          </div>
          <div className="p-2 flex-shrink-0">
            <img className="h-56 w-60 object-cover rounded-lg" src={ArtRoom} alt="Art Room" />
          </div>
        </div>           
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed italic">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Principal's Message</h2>
          <p className="text-gray-700 text-lg leading-relaxed italic">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
