import React from "react";

const IconCards = () => {
  return (
    <div className="flex items-center justify-center py-16 px-12 bg-gray-100 ">
      <div className="py-4 px-6 min-h-60 flex flex-col items-center justify-center gap-5 bg-slate-200 rounded-xl shadow-lg relative after:border-t-[40px] after:border-t-purple-800 after:border-r-[30px] after:border-r-transparent after:absolute after:top-0 after:left-0 after:rounded-tl-[20px] after:content-[''] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 hover:bg-white transition-all duration-300 hover:shadow-2xl">
        <div>
          <img src="/icon1.png" alt="" />
        </div>

        <div>
          <h4 className="font-semibold text-lg">Computer Science</h4>
        </div>
      </div>
    </div>
  );
};

export default IconCards;
