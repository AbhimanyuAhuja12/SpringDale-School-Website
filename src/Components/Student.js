import React from 'react';
//winner players
import winner1 from "../Assets/winner1.png";
import winner2 from "../Assets/winner2.png";
import winner3 from "../Assets/winner3.png";
// student council
import President from "../Assets/President.png";
import VicePresident from "../Assets/VicePresident.png";
import Secretary from "../Assets/Secretary.png"
//activites
import Art from "../Assets/art.png";
import Dance from "../Assets/dance.png";
import Debate from "../Assets/debate.png";
import Drama from "../Assets/drama.png";
import Club from "../Assets/club.png";
import Robot from "../Assets/robots.png";
import Music from "../Assets/music.png";
import Sports from "../Assets/sports.png";
import Coding from "../Assets/coding.png";
import Astronomy from "../Assets/astronomy.png";
import Environment from "../Assets/environment.png";
import Literacy from "../Assets/literacy.png";


const Students = () => {
  return (
    <>
      <div className="p-4 sm:p-8 bg-gray-200 min-h-screen overflow-hidden">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-teal-600">Life at Springdale</h1>

        {/* Extracurricular Activities */}
          <h2 className="text-3xl font-semibold mb-6 text-teal-800 border-b-4 border-teal-400 pb-2">Extracurricular Activities</h2>
          <div className="flex overflow-x-auto gap-4">
            {[
              { src: Music, label: "Music" },
              { src: Dance, label: "Dance" },
              { src: Drama, label: "Drama" },
              { src: Art, label: "Art" },
              { src: Sports, label: "Sports" },
              { src: Robot, label: "Robotics" },
              { src: Debate, label: "Debate Club" },
              { src: Club, label: "Science Club" }
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-60 h-80 relative rounded-lg overflow-hidden transform transition duration-500 hover:scale-110">
                <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white text-xs sm:text-base px-2 py-1 rounded-t-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        {/* Clubs and Societies */}
          <h2 className="text-3xl font-semibold mb-6 text-teal-800 border-b-4 border-teal-400 my-10 pb-2">Clubs and Societies</h2>
          <div className="flex overflow-x-auto gap-4 justify-between h-280">
            {[
              { src: Literacy, label: "Literacy Society" },
              { src: Environment, label: "Environment Club" },
              { src: Astronomy, label: "Astronomy Club" },
              { src: Coding, label: "Coding Club" }
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-60 h-80 relative rounded-lg overflow-hidden transform transition duration-500 hover:scale-110">
                <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white text-xs sm:text-base px-2 py-1 rounded-t-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        {/* Achievements */}
      
        <section className="mb-12 bg-white p-6 rounded-lg shadow-xl my-10">
          <h2 className="text-3xl font-semibold mb-6 text-teal-800 border-b-4 border-teal-400 pb-2">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: winner1, name: "John Smith", achievement: "National Level Math Olympiad Winner" },
              { src: winner2, name: "Sarah Lee", achievement: "Gold Medalist in State Swimming Championship" },
              { src: winner3, name: "Jatin Arora", achievement: "Winners of Inter-School Robotics Competition" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 h-30 rounded-lg shadow-md hover:bg-gray-200 transition">
                <img src={item.src} alt={item.name} className="w-full h-auto object-cover rounded-lg mb-4" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-teal-700">{item.name}</h3>
                  <p className="text-gray-700">{item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        

        {/* Student Council */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-teal-800 border-b-4 border-teal-400 pb-2">Student Council</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: President, role: "President", name: "Amy Parker", grade: "Grade 12" },
              { src: VicePresident, role: "Vice President", name: "Rajiv Mehta", grade: "Grade 11" },
              { src: Secretary, role: "Secretary", name: "Lisa Wong", grade: "Grade 10" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-200 transition">
                <img src={item.src} alt={item.role} className="w-full h-auto object-cover rounded-lg mb-4" />
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-teal-700">{item.role}</h3>
                  <p className="text-gray-700">{item.name}, {item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Students;

