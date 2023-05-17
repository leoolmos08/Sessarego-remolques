import React from "react";

export default function LoadingCarousel() {
  return (
    <div className="animate-pulse">
      <div className=" bg-gray-400 w-[380px] h-[250px] md:w-[680px] md:h-[450px] rounded-lg"></div>
      <div className="flex flex-row">
        <div className="bg-black h-[80px] w-[110px] md:h-[100px]  md:w-[150px] mt-5 ml-3 rounded-lg bg-gray-400"></div>
        <div className="bg-black h-[80px] w-[110px] md:h-[100px]  md:w-[150px] mt-5 ml-3 rounded-lg bg-gray-400"></div>
        <div className="bg-black h-[80px] w-[110px] md:h-[100px]  md:w-[150px] mt-5 ml-3 rounded-lg bg-gray-400"></div>
      </div>
    </div>
  );
}
