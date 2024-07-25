import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold">Springdales School</h2>
          <p className="mt-2">Springdale Public School, 123 Education Lane, Cityville</p>
          <p className="mt-1">+1-234-456-3456</p>
          <p className="mt-1">admin@springdales.edu</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Our Campus</h3>
          <ul className="space-y-1">
            <li><Link to="/academics" className="hover:underline">Academic</Link></li>
            <li><Link to="/about" className="hover:underline">Planning & Administration</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Campus Safety</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Office of the Principle</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Facility Services</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Human Resources</Link></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-2">School Life</h3>
          <ul className="space-y-1">
            <li><Link to="/coming-soon" className="hover:underline">Accessibility</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Financial Aid</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Food Services</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Hostel</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Information Technologies</Link></li>
            <li><Link to="/student" className="hover:underline">Student Life</Link></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Academics</h3>
          <ul className="space-y-1">
            <li><Link to="/coming-soon" className="hover:underline">Canvas</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Catalyst</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Library</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Time Schedule</Link></li>
            <li><Link to="/admissions" className="hover:underline">Apply For Admissions</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Pay My Tuition</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
        <p className="text-sm sm:text-base">Copyright All Rights Reserved 2024, Springdales School</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://github.com/AbhimanyuAhuja12" aria-label="Github">
            <FaGithub className="text-xl hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/abhimanyu-ahuja12/" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://x.com/Abhii_Ahuja" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
