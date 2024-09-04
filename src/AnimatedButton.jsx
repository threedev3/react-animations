import React from "react";

const AnimatedButton = () => {
  return (
    <div className="flex items-center justify-center py-32 bg-gray-800">
      <button className="relative px-6 py-2 border-2 border-white text-white font-semibold text-lg rounded-lg transition-all duration-300 gradient-button">
        Hover me
      </button>
    </div>
  );
};

export default AnimatedButton;
