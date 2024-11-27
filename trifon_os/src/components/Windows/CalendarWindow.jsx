import React, { useState } from 'react';

const CalendarWindow = ({ windowDetails, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }

    return calendar;
  };

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  const calendar = generateCalendar();

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 bg-gray-800 text-white rounded-lg shadow-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)} className="px-2 py-1 bg-gray-700 rounded">
          ←
        </button>
        <h2 className="text-xl">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={() => changeMonth(1)} className="px-2 py-1 bg-gray-700 rounded">
          →
        </button>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="font-bold">{day}</div>
        ))}
        {calendar.map((day, index) => (
          <div 
            key={index} 
            className={`
              p-2 
              ${day ? 'bg-gray-700 hover:bg-gray-600' : ''}
              ${day === new Date().getDate() && 
                currentDate.getMonth() === new Date().getMonth() && 
                currentDate.getFullYear() === new Date().getFullYear() 
                ? 'border-2 border-blue-500' : ''}
            `}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWindow;