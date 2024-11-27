import React, { useState } from 'react';
import DinoGame from '../EasterEggs/DinoGame';

const BrowserWindow = ({ windowDetails, onClose }) => {
  const [showDinoGame, setShowDinoGame] = useState(false);

  return (
    <div className="absolute top-1/4 left-1/4 w-3/4 h-2/3 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gray-200 p-2 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="text-gray-600 hover:bg-gray-300 p-1 rounded">←</button>
          <button className="text-gray-600 hover:bg-gray-300 p-1 rounded">→</button>
          <input 
            type="text" 
            value="chrome://dino"
            readOnly
            className="bg-white border px-2 py-1 rounded w-96"
          />
        </div>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
        >
          Close
        </button>
      </div>
      
      {!showDinoGame ? (
        <div className="p-4 text-center">
          <h2 className="text-2xl mb-4">No Internet Connection</h2>
          <button 
            onClick={() => setShowDinoGame(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Play Dino Game
          </button>
        </div>
      ) : (
        <DinoGame 
          onClose={() => setShowDinoGame(false)} 
          windowDetails={windowDetails} 
        />
      )}
    </div>
  );
};

export default BrowserWindow;