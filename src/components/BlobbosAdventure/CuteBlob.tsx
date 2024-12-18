import React from 'react';

interface CuteBlobProps {
  className?: string;
  color?: string;
  expression?: 'happy' | 'sad' | 'worried' | 'excited';
  delay?: string;
}

export const CuteBlob: React.FC<CuteBlobProps> = ({
  className = '',
  color = '#FFB5C5', // Default pink color
  expression = 'happy',
  delay = ''
}) => {
  return (
    <div className={`${className} ${delay}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        <defs>
          {/* Main Body Gradient */}
          <radialGradient id={`blob-body-${color}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop offset="85%" style={{ stopColor: color, stopOpacity: 0.95 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.9 }} />
          </radialGradient>
          
          {/* Highlight Gradient */}
          <radialGradient id="highlight" cx="75%" cy="25%" r="25%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          
          {/* Cheek Gradient */}
          <radialGradient id="cheek" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF9999" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF9999" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Main Body */}
        <g className="transform-origin-center">
          {/* Base Shape */}
          <path
            d="M100 180
               C 140 180, 170 150, 180 110
               C 190 70, 180 30, 100 20
               C 20 30, 10 70, 20 110
               C 30 150, 60 180, 100 180"
            fill={`url(#blob-body-${color})`}
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="2"
            className="drop-shadow-lg"
          />

          {/* Highlight */}
          <circle cx="150" cy="50" r="40" fill="url(#highlight)" />

          {/* Eyes */}
          <g className="transform translate-y-2">
            {/* Left Eye */}
            <g transform="translate(70 80)">
              <ellipse cx="0" cy="0" rx="12" ry="15" fill="black" />
              <circle cx="-3" cy="-5" r="4" fill="white" />
            </g>
            
            {/* Right Eye */}
            <g transform="translate(130 80)">
              <ellipse cx="0" cy="0" rx="12" ry="15" fill="black" />
              <circle cx="-3" cy="-5" r="4" fill="white" />
            </g>
          </g>

          {/* Expression Elements */}
          {expression === 'worried' && (
            <path
              d="M85 110 Q100 105 115 110"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          )}

          {/* Cheeks */}
          <circle cx="60" cy="100" r="15" fill="url(#cheek)" />
          <circle cx="140" cy="100" r="15" fill="url(#cheek)" />

          {/* Little Feet */}
          <path
            d="M85 175 Q100 185 115 175"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}; 