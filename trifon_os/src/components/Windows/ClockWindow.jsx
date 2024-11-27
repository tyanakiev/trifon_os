import React, { useState, useEffect } from 'react';

const ClockWindow = ({ windowDetails, onClose }) => {
  const [time, setTime] = useState(new Date());
  const [worldTimes, setWorldTimes] = useState([
    { city: 'New York', offset: -4 },
    { city: 'London', offset: 0 },
    { city: 'Tokyo', offset: 9 },
    { city: 'Sydney', offset: 10 }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date, offset = 0) => {
    const newDate = new Date(date.getTime() + offset * 3600000);
    return newDate.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 bg-gray-900 text-white rounded-lg shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">World Clock</h2>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
      
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold">
          {formatTime(time)}
        </h3>
        <p className="text-gray-400">
          {time.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {worldTimes.map((location) => (
          <div key={location.city} className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl">{location.city}</h4>
            <p className="text-2xl font-bold">
              {formatTime(time, location.offset)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClockWindow;