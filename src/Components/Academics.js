import React from 'react';
import curriculumImg from '../Assets/curriculum.png'; 
import teachingMethodImg from '../Assets/teachingMethod.png';
import resourcesImg from '../Assets/resources.png';

const Academics = () => {
  return (
    <div className="container mx-auto p-6">
        <h1 className="text-4xl text-red-500 font-bold mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Academics
        </h1>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <p className="  font-bold text-blue-500 text-lg hover:text-red-500 transition duration-300 italic ">
          At our school, we pride ourselves on delivering a world-class academic experience that fosters both intellectual and personal growth. Our curriculum is meticulously designed to challenge and inspire students, promoting critical thinking and a lifelong love for learning.  Our state-of-the-art educational resources and facilities ensure that every student has the tools they need to succeed in a rapidly evolving world. Through a balanced approach that integrates academics, extracurricular activities, and community involvement, we prepare our students to excel in their future endeavors.
        </p>
      </div>


      {/* Curriculum Section */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow-lg">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={curriculumImg} alt="Curriculum" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>
            <div className="text-lg text-gray-700">
              <h4 className="text-xl font-semibold mt-4">Primary (Grades 1-5)</h4>
              <ul className="list-disc list-inside mb-4">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
              <h4 className="text-xl font-semibold mt-4">Secondary (Grades 6-10)</h4>
              <ul className="list-disc list-inside mb-4">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
              <h4 className="text-xl font-semibold mt-4">Senior Secondary (Grades 11-12)</h4>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                <li><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodologies Section */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow-lg">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Teaching Methodologies</h3>
            <p className="text-lg text-gray-700">
              Our teaching methodologies blend traditional and modern techniques to cater to diverse learning styles. We focus on interactive learning, fostering critical thinking, and encouraging collaboration among students.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img src={teachingMethodImg} alt="Teaching Methodologies" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="p-6 bg-white rounded-lg shadow-lg">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={resourcesImg} alt="Educational Resources" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Educational Resources</h3>
            <p className="text-lg text-gray-700">
              We provide state-of-the-art educational resources, including digital classrooms, interactive learning modules, and access to online educational platforms. Our resources are designed to enhance the learning experience and support academic success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
