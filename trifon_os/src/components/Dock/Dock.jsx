import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Folder, 
  Terminal, 
  FireFox, 
  Settings, 
  User 
} from 'lucide-react';

const DockItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div 
      className={`
        relative group cursor-pointer 
        transition-all duration-200 ease-in-out 
        hover:scale-125 
        flex flex-col items-center
        ${isActive ? 'scale-125 bg-white/10 rounded-md' : ''}
      `}
      onClick={onClick}
    >
      <div className="relative">
        <Icon 
          className={`
            w-8 h-8 
            ${isActive ? 'text-blue-400' : 'text-white/80'}
            transition-colors duration-200
          `}
        />
        <div className="
          absolute bottom-[-20px] 
          bg-black/70 text-white 
          text-xs px-2 py-1 
          rounded 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity
          pointer-events-none
        ">
          {label}
        </div>
      </div>
    </div>
  );
};

const Dock = ({ apps, onAppLaunch }) => {
  const [activeApp, setActiveApp] = useState(null);
  const [time, setTime] = useState(new Date());

  // Default dock items if no apps provided
  const defaultDockItems = [
    { 
      id: 'finder', 
      label: 'Finder', 
      icon: Folder 
    },
    { 
      id: 'terminal', 
      label: 'Terminal', 
      icon: Terminal 
    },
    { 
      id: 'browser', 
      label: 'Browser', 
      icon: FireFox 
    },
    { 
      id: 'system', 
      label: 'System Preferences', 
      icon: Settings 
    },
    { 
      id: 'profile', 
      label: 'User Profile', 
      icon: User 
    }
  ];

  // Merge provided apps with default items
  const dockItems = apps ? [...apps, ...defaultDockItems] : defaultDockItems;

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleAppLaunch = (app) => {
    setActiveApp(app.id);
    onAppLaunch && onAppLaunch(app);
  };

  return (
    <div className="
      fixed 
      bottom-4 
      left-1/2 
      transform 
      -translate-x-1/2 
      bg-black/40 
      backdrop-blur-md 
      rounded-full 
      px-4 py-2 
      flex 
      items-center 
      space-x-4
      shadow-lg
    ">
      {dockItems.map((app) => (
        <DockItem 
          key={app.id}
          icon={app.icon}
          label={app.label}
          isActive={activeApp === app.id}
          onClick={() => handleAppLaunch(app)}
        />
      ))}
      
      {/* System Clock */}
      <div className="
        text-white 
        text-sm 
        ml-4 
        border-l 
        border-white/20 
        pl-4
      ">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default Dock;