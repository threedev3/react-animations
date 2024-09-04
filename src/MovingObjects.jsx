import React, { useState } from "react";

const MovingObjects = () => {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget;
    const x = clientX - offsetLeft;
    const y = clientY - offsetTop;
    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // Adjust rotation values for smoother effect
    const rotateY = ((x - centerX) / centerX) * 20; // Adjust rotation values for smoother effect

    setTransformStyle({
      transform: `perspective(1000px)  rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <div
      className="py-16 px-12 bg-gray-800 max-w-full"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex justify-between items-center max-w-5xl mx-auto"
        // style={transformStyle}
      >
        <div className="max-w-2xl">
          <div className="w-60">
            <img
              src="/book.png"
              alt="book"
              className="object-cover"
              //   style={transformStyle}
            />
          </div>
        </div>

        <div className="max-w-3xl flex flex-col gap-6" style={transformStyle}>
          <div>
            <h2 className="text-white text-7xl font-bold font-mono">
              I am John Doe
            </h2>
          </div>

          <div className="text-white text-4xl font-semibold font-mono">
            <h2>Full Stack Developer</h2>
          </div>

          <div className="py-4 px-8 bg-gradient-to-r from-blue-400 to-blue-900 w-56 text-center rounded-lg cursor-pointer">
            <button className="text-white text-xl font-semibold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingObjects;
