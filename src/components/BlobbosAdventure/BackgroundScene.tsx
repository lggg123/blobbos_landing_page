import React from 'react';

export const BackgroundScene: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 1200 675" 
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Custom Gradient with Stars */}
      <defs>
        <linearGradient id="customGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#B8A29C', stopOpacity: 1 }} />
          <stop offset="10%" style={{ stopColor: '#B8A29C', stopOpacity: 1 }} />
          <stop offset="20%" style={{ stopColor: '#837E9B', stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: '#F3AD9B', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#B8A29C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#B8A29C', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Star Pattern */}
        <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="white" className="animate-twinkle" />
          <circle cx="25" cy="25" r="1" fill="white" className="animate-twinkle-delayed" />
          <circle cx="75" cy="75" r="1" fill="white" className="animate-twinkle" />
          <circle cx="25" cy="75" r="1" fill="white" className="animate-twinkle-delayed" />
        </pattern>
      </defs>
      
      {/* Background with Gradient */}
      <rect width="100%" height="100%" fill="url(#customGradient)" />
      
      {/* Stars Overlay */}
      <rect width="100%" height="100%" fill="url(#stars)" opacity="0.5" />
    </svg>
  );
}; 