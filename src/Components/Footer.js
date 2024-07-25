import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Springdales School</h2>
          <p>Springdale Public School, 123 Education Lane, Cityville</p>
          <p>+1-234-456-3456</p>
          <p>admin@springdales.edu</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Our Campus</h3>
          <ul>
            <li><Link to="/academics" className="hover:underline">Academic</Link></li>
            <li><Link to="/about" className="hover:underline">Planning & Administration</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Campus Safety</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Office of the Principle</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Facility Services</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Human Resources</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">School Life</h3>
          <ul>
            <li><Link to="/coming-soon" className="hover:underline">Accessibility</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Financial Aid</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Food Services</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Hostel</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Information Technologies</Link></li>
            <li><Link to="/student" className="hover:underline">Student Life</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Academics</h3>
          <ul>
            <li><Link to="/coming-soon" className="hover:underline">Canvas</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Catalyst</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Library</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Time Schedule</Link></li>
            <li><Link to="/admissions" className="hover:underline">Apply For Admissions</Link></li>
            <li><Link to="/coming-soon" className="hover:underline">Pay My Tuition</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 border-t border-gray-700 pt-4">
        <p>Copyright All Right Reserved 2024, Springdales School</p>
        <div className="flex space-x-4">
        <a href="https://github.com/AbhimanyuAhuja12"> <FaGithub  className="hover:text-gray-400 cursor-pointer" /></a>
         <a href="https://www.linkedin.com/in/abhimanyu-ahuja12/"><FaLinkedin className="hover:text-gray-400 cursor-pointer" /></a>
         <a href="https://x.com/Abhii_Ahuja"> <FaTwitter className="hover:text-gray-400 cursor-pointer" /></a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
