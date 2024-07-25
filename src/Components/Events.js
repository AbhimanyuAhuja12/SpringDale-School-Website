import React from 'react';

const Events = () => {
  const events = [
    {
      date: "17 DEC",
      title: "Robotics Event",
      time: "11:00 am - 1:00 pm",
      location: "SpringDale ATL Lab",
      image: "https://media.npr.org/assets/img/2023/10/04/mleong_scioly_20230831_slide-9e843d008b04d98e953ae08664a41e26fa8369a0.jpg?s=1100&c=50&f=jpeg", 
    },
    {
      date: "04 AUG",
      title: "Information Technology Webinar",
      time: "1:00 pm - 2:00 pm",
      location: "SpringDale Conference Hall",
      image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F743411299%2F35297430462%2F1%2Foriginal.20240415-020414?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C500%2C250&s=f09aa2994c9188845e48f89fc2dc1b1a", 
    },
    {
      date: "11 SEP",
      title: "Annual Event",
      time: "8:00 am - 2:00 pm",
      location: "SpringDale Ground",
      image: "https://static.kiit.ac.in/news/2020/12/3-8.jpg", 
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">SpringDale Events</h2>
      <div className="border-b-2 border-red-600 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center text-red-600 font-bold mb-2">
                <div className="text-4xl mr-2">{event.date.split(' ')[0]}</div>
                <div>
                  <div className="text-lg">{event.date.split(' ')[1]}</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{event.title}</h3>
              <div className="text-gray-600 flex items-center mb-2">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-4 11h4m-2-4v4m1 8h.01M12 12h0m0 0h.01M12 6v6m6-6v6m0 6h0" />
                </svg>
                {event.time}
              </div>
              <div className="text-gray-600 flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1M3 6h1m0 8H3m16 0h1m0 4h1m0-8h1m0-4h-1m0 8h1m-1-4h1m-1 4h-1m-4 0h1m0 4h1m0-8h1m0-4h-1m0 4h1m-1-4h-1m-4 0h1m0 4h1m0-4h-1m0 8h1m-4 0h1m-1-4h1m-1-4h-1m0 8h1m-4 0h1m-1-4h1m0-4h-1m0 8h1m-4 0h1m-1-4h1m0-4h-1m0 8h1m-4 0h1M8 6v6m0 0h0m0 6h-.01M8 12h0" />
                </svg>
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="text-red-600 font-bold mt-4 inline-block">View All Events ➔</a>
    </div>
  );
};

export default Events;
