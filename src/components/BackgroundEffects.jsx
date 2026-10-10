import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random positions, delays, and durations for stars and code symbols
    const newElements = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      type: Math.random() > 0.4 ? 'code' : 'star', // More </> than stars, or balanced
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 5}s`,
      opacity: 0.15 + Math.random() * 0.15, // Subtle opacity
      scale: 0.6 + Math.random() * 0.6,
      rotation: Math.random() * 360,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute text-gray-800 animate-twinkle"
          style={{
            left: el.left,
            top: el.top,
            animationDelay: el.animationDelay,
            animationDuration: el.animationDuration,
            '--max-opacity': el.opacity,
            transform: `scale(${el.scale}) rotate(${el.rotation}deg)`,
          }}
        >
          {el.type === 'star' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ) : (
            <span className="font-mono font-bold text-xl">&lt;/&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BackgroundEffects;
