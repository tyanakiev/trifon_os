import React from 'react';
import DesktopIcon from './DesktopIcon';
import { useOS } from '../../contexts/OSContext';

const DesktopLayout = () => {
  const { desktopApps, openWindows, openApplication } = useOS();

  return (
    <div className="absolute inset-0 p-4 grid grid-cols-8 gap-4">
      {/* Render desktop icons */}
      {desktopApps.map(app => (
        <DesktopIcon 
          key={app.id}
          app={app}
          onDoubleClick={() => openApplication(app)}
        />
      ))}

      {/* Render open windows */}
      {openWindows.map(window => {
        const WindowComponent = window.component; // Use component reference
        return (
          <WindowComponent 
            key={window.key} 
            windowDetails={window}
          />
        );
      })}
    </div>
  );
};

export default DesktopLayout;
