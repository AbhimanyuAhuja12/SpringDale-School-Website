import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="bg-[#7c0a02] text-white p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="School Logo" className="h-24 w-24 sm:h-36 sm:w-36" />
          <div className="ml-4 text-center sm:text-left">
            <h1 className="text-xl sm:text-3xl font-bold">Springdales School</h1>
            <p className="text-sm sm:text-lg">Springdale Public School, 123 Education Lane, Cityville</p>
          </div>
        </div>
      </div>
      <nav className="bg-[#333333] text-white p-4">
        <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
          <li className="text-sm sm:text-lg"><Link to="/" className="hover:underline">Home</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/about" className="hover:underline">About Us</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/academics" className="hover:underline">Academics</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/admissions" className="hover:underline">Admissions</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/student" className="hover:underline">Student</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/faculty" className="hover:underline">Faculty</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          <li className="text-sm sm:text-lg"><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
