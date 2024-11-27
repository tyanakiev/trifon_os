import React from 'react';
import { OSProvider, useOS } from './context/OSContext';
import SystemTray from './components/TaskBar/SystemTray';
import DesktopIcon from './components/Desktop/DesktopIcon';

function App() {
  return (
    <OSProvider>
      <MainDesktop />
    </OSProvider>
  );
}

function MainDesktop() {
  const { desktopApps, openWindows, openApplication } = useOS();

  return (
    <div className="h-screen bg-ubuntu-wallpaper bg-cover bg-center relative overflow-hidden">
      <SystemTray />
      
      {/* Desktop Icons */}
      <div className="absolute top-12 left-0 right-0 p-4 grid grid-cols-8 gap-4">
        {desktopApps.map(app => (
          <DesktopIcon
            key={app.id}
            app={app}
            onDoubleClick={() => openApplication(app)}
          />
        ))}
      </div>

      {/* Open Windows */}
      {openWindows.map(window => {
        const WindowComponent = window.component;
        return (
          <WindowComponent
            key={window.key}
            windowDetails={window}
            onClose={() => closeWindow(window.key)}
            style={{ position: 'absolute', ...window.position }}
          />
        );
      })}
    </div>
  );
}

export default App;