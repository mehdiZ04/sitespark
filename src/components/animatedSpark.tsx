import React from "react";

const AnimatedSpark: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12 w-full mt-12">
    <div className="relative flex items-center justify-center">
      {/* Animated Spark */}
      <span className="animate-pulse">
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
          <polygon
            points="18,2 6,18 15,18 14,30 26,14 17,14"
            fill="#1EA7FF"
            stroke="#1EA7FF"
            strokeLinejoin="round"
            strokeWidth="2"
            className="drop-shadow-lg"
          />
        </svg>
      </span>
      {/* Glow effect */}
      <span className="absolute">
        <span className="block w-24 h-24 rounded-full bg-[#1EA7FF] opacity-20 blur-2xl animate-ping"></span>
      </span>
    </div>
    <h2 className="mt-6 text-2xl font-semibold text-[#1EA7FF] tracking-wide animate-fade-in">
      Spark Your Next Project
    </h2>
  </div>
);

export default AnimatedSpark;