import React, { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { src: 'https://www.cedarcollege.sa.edu.au/wp-content/uploads/2017/03/Sports-day1.jpg', label: 'Students participating in various sports events.', type: 'sports', date: '2023-06-01' },
    { src: 'https://www.jesussacredheart.com/wp-content/uploads/2022/08/JSHS-STUDENTS-SHINE-IN-SCIENCE-EXHIBITION-scaled.jpg', label: 'Students presenting their science projects.', type: 'science', date: '2023-07-15' },
    { src: 'https://dikshant.org/school/wp-content/uploads/60974662_2430368560531938_7556910084463263744_n-2.jpg', label: 'Students performing in the cultural fest.', type: 'cultural', date: '2023-08-10' },
    { src: 'https://nypost.com/wp-content/uploads/sites/2/2014/04/emptyclassroom.jpg?quality=75&strip=all', label: 'A glimpse of our interactive classrooms.', type: 'infrastructure', date: '2023-05-20' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQJwARaH33zTLmcrg_mhM6DwlA8t_gdUvAg&s', label: 'Students reading and studying in the school library.', type: 'infrastructure', date: '2023-04-25' },
  ];

  const youtubeVideos = [
    { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', label: 'YouTube Video 1', type: 'youtube', date: '2023-06-01' },
    { src: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', label: 'YouTube Video 2', type: 'youtube', date: '2023-07-15' },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(photo => photo.type === filter);
  const filteredYouTubeVideos = filter === 'all' ? youtubeVideos : youtubeVideos.filter(video => video.type === filter);

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-teal-600">Gallery</h1>
        <p className="text-lg text-gray-700 mt-2">Showcasing our school events, activities, and infrastructure.</p>
      </div>

      <div className="flex justify-center mb-6">
        <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} mx-2`}>All</button>
        <button onClick={() => setFilter('sports')} className={`px-4 py-2 rounded-lg ${filter === 'sports' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} mx-2`}>Sports</button>
        <button onClick={() => setFilter('science')} className={`px-4 py-2 rounded-lg ${filter === 'science' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} mx-2`}>Science</button>
        <button onClick={() => setFilter('cultural')} className={`px-4 py-2 rounded-lg ${filter === 'cultural' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} mx-2`}>Cultural</button>
        <button onClick={() => setFilter('infrastructure')} className={`px-4 py-2 rounded-lg ${filter === 'infrastructure' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} mx-2`}>Infrastructure</button>
        <button onClick={() => setFilter('youtube')} className={`px-4 py-2 rounded-lg ${filter === 'youtube' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} mx-2`}>Videos</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={photo.src} alt={photo.label} className="w-full h-60 object-cover transition-transform transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-center px-2">{photo.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredYouTubeVideos.map((video, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <div className="w-full h-60">
              <iframe className="w-full h-full" src={video.src} title={video.label}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-center px-2">{video.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
