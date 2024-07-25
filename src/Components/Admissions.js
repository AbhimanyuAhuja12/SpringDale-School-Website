import React, { useEffect } from 'react';
import { FaDownload, FaCalendarAlt } from 'react-icons/fa';
import admissionBanner from '../Assets/admissionBanner.png';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const Admissions = () => {
  useEffect(() => {
    // Any initialization if needed
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="relative mb-8">
        <img src={admissionBanner} alt="Admissions Banner" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">Admissions Open</h1>
        </div>
      </div>

      <section className="mb-12 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 border-b-4 border-blue-300 pb-2">Admission Process</h2>
        <p className="text-gray-800 text-lg mb-6">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
        <div className="flex justify-center">
          <Link to="/coming-soon" className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center shadow-lg transform transition-transform hover:scale-105">
            <FaDownload className="mr-2" />
            Download Admission Form
          </Link>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-green-700 border-b-4 border-green-300 pb-2">Admission Criteria</h2>
        <p className="text-gray-800 text-lg">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </section>

      <section className="mb-12 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700 border-b-4 border-purple-300 pb-2">Important Dates</h2>
        <ul className="text-gray-800 text-lg space-y-4">
          <li className="flex items-center">
            <FaCalendarAlt className="text-purple-500 mr-2" />
            Admission Form Availability: March 1st
          </li>
          <li className="flex items-center">
            <FaCalendarAlt className="text-purple-500 mr-2" />
            Last Date for Submission: March 31st
          </li>
          <li className="flex items-center">
            <FaCalendarAlt className="text-purple-500 mr-2" />
            Entrance Test: April 15th
          </li>
          <li className="flex items-center">
            <FaCalendarAlt className="text-purple-500 mr-2" />
            Announcement of Results: April 30th
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
