import React from "react";

const BgImage = () => {
  return (
    <div className="bg-[url('/src/assets/bgimg.jpg')] bg-no-repeat bg-cover bg-center h-[60vh] flex flex-col item-center justify-center w-full bg-fixed">
      <div className="flex flex-col justify-center items-center gap-6">
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
  );
};

export default BgImage;
