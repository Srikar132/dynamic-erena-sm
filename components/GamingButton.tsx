import React from 'react';

// Define TypeScript props for the button
interface GamingButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const GamingButton: React.FC<GamingButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group flex items-center justify-center p-4 font-bold text-white rounded-lg border-2 border-transparent hover:border-purple-500 transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(145deg, #6e00ff, #ff00a0)',
        boxShadow: '0px 4px 15px rgba(110, 0, 255, 0.5)',
      }}
    >
      {/* SVG Glow Effect */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#glow)" rx="15" />
      </svg>

      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* SVG Gaming Icons (Optional) */}
      <svg
        className="w-6 h-6 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
};

export default GamingButton;