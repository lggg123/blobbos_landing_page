import React from 'react';

export const BackgroundScene: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 1200 675" 
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Sky Gradient with Stars */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFB5DA', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#B088F9', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8B9DC3', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Star Pattern */}
        <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="yellow" className="animate-twinkle" />
          <circle cx="25" cy="25" r="1" fill="yellow" className="animate-twinkle-delayed" />
          <circle cx="75" cy="75" r="1" fill="yellow" className="animate-twinkle" />
          <circle cx="25" cy="75" r="1" fill="yellow" className="animate-twinkle-delayed" />
        </pattern>
      </defs>
      
      {/* Background with Stars */}
      <rect width="100%" height="100%" fill="url(#skyGradient)" />
      <rect width="100%" height="100%" fill="url(#stars)" opacity="0.5" />
      
      {/* Rolling Hills */}
      <path
        d="M0 400 
           C 200 350, 400 450, 600 400 
           C 800 350, 1000 450, 1200 400 
           L 1200 675 L 0 675 Z"
        fill="#91D48D"
        opacity="0.9"
      />
      
      {/* Background Hills */}
      <path
        d="M0 450 
           C 300 400, 600 500, 900 450 
           L 1200 450 L 1200 675 L 0 675 Z"
        fill="#7BC86C"
        opacity="0.7"
      />
    </svg>
  );
}; 