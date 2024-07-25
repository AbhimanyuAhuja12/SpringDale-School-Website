import React from 'react';
import { Link } from 'react-router-dom';
import schoolLifeImg from '../Assets/schoolLife.png'; 
import academicsImg from '../Assets/academics.png';
import aboutImg from '../Assets/about.png';
import { FaSchool, FaBook, FaBasketballBall } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-[#980a25] text-white p-6 shadow-lg">
          <FaSchool size={50} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">School Life</h2>
          <Link to="/galler" className="underline hover:text-red-300">Learn More</Link>
          <img src={schoolLifeImg} alt="School Life" className="mt-4  h-90 w-full rounded-lg shadow-lg" />
          <p className="mt-4">School life at Springdales School is vibrant and dynamic, offering students a balanced mix of academic rigor and extracurricular activities. From arts and sports to clubs and community service, students are encouraged to explore their interests and develop their talents. Our supportive environment nurtures growth, leadership, and lifelong friendships</p>
          <Link to="/gallery" className="mt-4 inline-block text-white underline hover:text-red-500">Learn More ➡️</Link>
        </div>

        <div className="bg-[#78091e] text-white p-6  shadow-lg">
          <FaBook size={50} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Academics</h2>
          <Link to="/academics" className="underline hover:text-red-300">Learn More</Link>
          <img src={academicsImg} alt="Academics" className="mt-4 rounded-lg  h-90 w-full shadow-lg" />
          <p className="mt-4">Our School offer a rigorous and comprehensive curriculum designed to foster intellectual growth and academic excellence. Our dedicated faculty provides personalized instruction to ensure each student reaches their full potential. We emphasize critical thinking, creativity, and a love of learning in all our academic programs</p>
          <Link to="/academics" className="mt-4 inline-block text-white underline hover:text-red-500">Learn More ➡️</Link>
        </div>

        <div className="bg-[#c50227] text-white p-6  shadow-lg">
          <FaBasketballBall size={50} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">About-Us</h2>
          <Link to="/about" className="underline hover:text-red-300">Learn More</Link>
          <img src={aboutImg} alt="Athletics" className="mt-4 rounded-lg shadow-lg h-90 w-full" />
          <p className="mt-4">We are committed to providing a holistic education that prepares students for success in an ever-changing world. With a rich history of academic excellence and a forward-thinking approach, we strive to develop well-rounded individuals who are ready to make a positive impact in their communities. Join us and be a part of our vibrant learning community</p>
          <Link to="/about" className="mt-4 inline-block text-white underline hover:text-red-500">Learn More ➡️</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
