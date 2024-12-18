import React from 'react';

interface HouseProps {
  x: number;
  y: number;
  scale?: number;
  variant?: 'normal' | 'tall' | 'wide';
}

export const House: React.FC<HouseProps> = ({ x, y, scale = 1, variant = 'normal' }) => {
  return (
    <svg 
      width={120 * scale} 
      height={100 * scale} 
      viewBox="0 0 120 100" 
      x={x} 
      y={y}
      className="transition-transform hover:scale-105"
    >
      <defs>
        <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4A373', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#BC8A5F', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9C6644', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7D4E2D', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* House shadow */}
      <ellipse cx="60" cy="90" rx="50" ry="10" fill="rgba(0,0,0,0.1)" />
      
      {/* House body */}
      <path
        d="M10 50 
           L10 90 
           L110 90 
           L110 50 Z"
        fill="url(#wallGradient)"
      />
      
      {/* Roof with decoration */}
      <path
        d="M0 50 
           L60 10 
           L120 50 Z"
        fill="url(#roofGradient)"
      />
      <circle cx="60" cy="30" r="5" fill="#FFD700" className="animate-pulse" />
      
      {/* Door with frame */}
      <rect x="43" y="58" width="24" height="32" fill="#9C6644" />
      <rect x="45" y="60" width="20" height="30" fill="#8B4513" />
      
      {/* Windows with glow */}
      <rect x="75" y="60" width="20" height="20" fill="#87CEEB" className="animate-window-glow" />
      <rect x="15" y="60" width="20" height="20" fill="#87CEEB" className="animate-window-glow" />
    </svg>
  );
}; 