import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Volume2, 
  Settings, 
  User, 
  Power 
} from 'lucide-react';

const SystemTray = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(75);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-md text-white h-8 flex items-center justify-between px-4 z-50">
      <div className="flex items-center space-x-4">
        <button className="hover:bg-white/10 rounded p-1">
          <img 
            src="/trifo_os.svg" 
            alt="Ubuntu Logo" 
            className="w-6 h-6"
          />
        </button>
        
        <nav className="flex space-x-4 text-sm">
          <button className="hover:bg-white/10 rounded px-2 py-1">
            Activities
          </button>
          <button className="hover:bg-white/10 rounded px-2 py-1">
            Applications
          </button>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4" />
          <Volume2 className="w-4 h-4" />
          <Battery 
            className="w-5 h-5" 
            style={{ color: batteryLevel > 20 ? 'white' : 'red' }}
          />
        </div>

        <div className="text-sm">
          {formatTime(time)}
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-white/10 rounded-full p-1"
          >
            <User className="w-5 h-5" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-white/10 py-2">
              <button className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center">
                <Settings className="w-4 h-4 mr-2" /> Settings
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center text-red-400">
                <Power className="w-4 h-4 mr-2" /> Power Off
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemTray;