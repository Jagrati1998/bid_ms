import React, { useEffect, useState } from "react";

const FailureBox = ({ title, description,duration = 3000  }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
  
      return () => clearTimeout(timer); // Cleanup on component unmount or re-render
    }, [duration]);
  
    if (!isVisible) return null;
  
  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="flex items-center bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md" role="alert">
        <svg
          className="w-6 h-6 text-red-500 flex-shrink-0 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m0 0l-4-4m4 4H7"
          />
        </svg>
        <div>
          <p className="font-bold text-red-800">{title}</p>
          <p className="text-red-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FailureBox;
