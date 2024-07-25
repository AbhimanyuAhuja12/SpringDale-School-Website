import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png"
const Header = () => {
  return (
    <header>
      <div className="bg-[#7c0a02] text-white p-10 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="School Logo" className="h-36 w-36" />
          <div className="ml-4">
            <h1 className="text-3xl font-bold">Springdales School</h1>
            <p className="text-lg">Springdale Public School, 123 Education Lane, Cityville</p>
          </div>
        </div>
      </div>
      <nav className="bg-[#333333] text-white p-4">
        <ul className="flex justify-center space-x-8">
          <li className="text-lg"><Link to="/" className="hover:underline">Home</Link></li>
          <li className="text-lg"><Link to="/about" className="hover:underline">About Us</Link></li>
          <li className="text-lg"><Link to="/academics" className="hover:underline">Academics</Link></li>
          <li className="text-lg"><Link to="/admissions" className="hover:underline">Admissions</Link></li>
          <li className="text-lg"><Link to="/student" className="hover:underline">Student</Link></li>
          <li className="text-lg"><Link to="/facultry" className="hover:underline">Facultry</Link></li>
          <li className="text-lg"><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          <li className="text-lg"><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
