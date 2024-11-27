import React from 'react';

const DesktopIcon = ({ app, onDoubleClick }) => {
  const IconComponent = app.icon; // Extract the icon component

  return (
    <div 
      className="flex flex-col items-center justify-center cursor-pointer p-2 hover:bg-black hover:bg-opacity-30 rounded-lg text-white w-16 h-20"
      onDoubleClick={onDoubleClick}
    >
      <IconComponent size={48} className="mb-2" /> {/* Add margin below the icon */}
      <span className="text-xs text-center leading-tight text-shadow truncate w-full">
        {app.name}
      </span>
    </div>
  );
};

export default DesktopIcon;
