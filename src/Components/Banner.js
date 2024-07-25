import React, { useState } from 'react';

const Banner = () => {
  const images = [
    'https://previews.123rf.com/images/prometeus/prometeus1311/prometeus131100148/23461759-group-of-school-children-studying-in-classroom.jpg',
    'https://yellowslate.com/blog/wp-content/uploads/2022/09/56-1674445335.jpg',
    'https://thumbs.dreamstime.com/z/study-group-multi-ethnic-students-9460768.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full">
        <img
          src={images[currentImageIndex]}
          alt="School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome To SpringDale</h1>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Banner;
