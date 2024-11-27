import React, { createContext, useContext, useState } from 'react';
import { 
  FileText, 
  Gamepad, 
  Globe , 
  Calendar, 
  Clock, 
  Folder 
} from 'lucide-react';

// Import window components
import TextEditorWindow from '../components/Windows/TextEditorWindow';
import BrowserWindow from '../components/Windows/BrowserWindow';
import CalendarWindow from '../components/Windows/CalendarWindow';
import ClockWindow from '../components/Windows/ClockWindow';
import FileExplorerWindow from '../components/Windows/FileExplorerWindow';
import DinoGame from '../components/EasterEggs/DinoGame';

const OSContext = createContext(null);

export const OSProvider = ({ children }) => {
  const [openWindows, setOpenWindows] = useState([]);

  const desktopApps = [
    {
      id: 'text-editor',
      name: 'Text Editor',
      icon: FileText,
      component: TextEditorWindow
    },
    {
      id: 'browser',
      name: 'Browser',
      icon: Globe,
      component: BrowserWindow
    },
    {
      id: 'calendar',
      name: 'Calendar',
      icon: Calendar,
      component: CalendarWindow
    },
    {
      id: 'clock',
      name: 'Clock',
      icon: Clock,
      component: ClockWindow
    },
    {
      id: 'file-explorer',
      name: 'Files',
      icon: Folder,
      component: FileExplorerWindow
    },
    {
      id: 'dino-game',
      name: 'Dino Game',
      icon: Gamepad,
      component: DinoGame
    }
  ];

  const openApplication = (app) => {
    // Prevent duplicate windows
    if (app.component && !openWindows.find(window => window.id === app.id)) {
      setOpenWindows(prev => [
        ...prev, 
        { 
          ...app, 
          key: Date.now(), 
          position: `top-[${Math.random() * 20 + 10}%] left-[${Math.random() * 20 + 10}%]`
        }
      ]);
    }
  };

  const closeWindow = (key) => {
    setOpenWindows(prev => prev.filter(window => window.key !== key));
  };

  return (
    <OSContext.Provider value={{ 
      desktopApps, 
      openWindows, 
      openApplication, 
      closeWindow 
    }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) {
    throw new Error('useOS must be used within an OSProvider');
  }
  return context;
};