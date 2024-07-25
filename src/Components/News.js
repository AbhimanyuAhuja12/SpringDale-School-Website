import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      date: "July 24, 2024",
      author: "Abhimanyu",
      title: "Professor Albert joint research at MIT",
    },
    {
      date: "July 24, 2024",
      author: "Abhimanyu",
      title: "School Basketball team won 1st Price at State Tournament",
    },
    {
      date: "July 25, 2024",
      author: "Abhimanyu",
      title: "Professor Tom researches on LLAMA Model at a Global Event",
    },
    {
      date: "July 25, 2024",
      author: "Abhimanyu",
      title: "Our Student got Admission at Harvard",
    },
    {
      date: "July 25, 2024",
      author: "Abhimanyu",
      title: "Our Student holds rank 1 in IIT JEE",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">School Video Tour</h2>
          <div className="border-b-2 border-red-600 mb-4"></div>
          <div className="relative">
            <img src="https://static.toiimg.com/thumb/msid-85456216,width-1280,height-720,resizemode-4/85456216.jpg" alt="School Tour" className="w-full h-auto" /> {/* Replace with actual image URL */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-full">
                <svg xmlns="https://www.facebook.com/springdaleinternationalschool/videos/1066900293977229/" className="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 011-1h3a1 1 0 010 2h-2v2a1 1 0 01-2 0V7z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">Take a tour in Springdale and you will find the best school in the state. The video will take you to every place in this school.</p>
          <Link to="/gallery" className="text-red-600 font-bold mt-2 inline-block">
          Read The Blog ➔
        </Link>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">School News & Updates</h2>
          <div className="border-b-2 border-red-600 mb-4"></div>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>
                  <p className="text-sm text-gray-500">{item.date} / By {item.author}</p>
                  <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
