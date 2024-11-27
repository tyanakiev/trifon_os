import React, { useState, useEffect, useRef } from 'react';

const DinoGame = ({ windowDetails, onClose }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);

  useEffect(() => {
    let gameInterval;
    if (!isGameOver) {
      gameInterval = setInterval(() => {
        setScore(prev => prev + 1);
      }, 100);
    }
    return () => clearInterval(gameInterval);
  }, [isGameOver]);

  const jump = () => {
    const dino = dinoRef.current;
    if (dino && !dino.classList.contains('jump')) {
      dino.classList.add('jump');
      setTimeout(() => {
        dino.classList.remove('jump');
      }, 500);
    }
  };

  return (
    <div 
      className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-lg shadow-xl p-4"
      tabIndex={0}
      onKeyDown={(e) => e.code === 'Space' && jump()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Dino Game</h2>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
        >
          Close
        </button>
      </div>
      
      <div className="relative w-full h-64 overflow-hidden border">
        <div 
          ref={dinoRef}
          className="absolute bottom-0 left-4 w-12 h-12 bg-green-500"
        />
        <div 
          ref={obstacleRef}
          className="absolute bottom-0 right-0 w-8 h-16 bg-red-500 animate-moveObstacle"
        />
        <div className="absolute top-2 right-2">Score: {score}</div>
      </div>
      
      <p className="text-center mt-4">Press SPACE to jump!</p>
    </div>
  );
};

export default DinoGame;