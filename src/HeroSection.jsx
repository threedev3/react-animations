// HeroSection.js
import React from "react";

const Icon = ({ src, index, className }) => (
  <img
    src={src}
    alt={`Icon ${index + 1}`}
    className={`w-12 h-12 icon-animation ${className}`}
  />
);

const HeroSection = () => {
  const icons = [
    { src: "/vite.svg", className: "icon1" },
    { src: "/vite.svg", className: "icon2" },
    { src: "/vite.svg", className: "icon3" },
    // Add more icon paths and classes as needed
  ];

  return (
    <div className="relative overflow-hidden bg-gray-900 w-full h-[70vh]">
      {icons.map((icon, index) => (
        <Icon
          key={index}
          src={icon.src}
          index={index}
          className={icon.className}
        />
      ))}
    </div>
  );
};

export default HeroSection;
