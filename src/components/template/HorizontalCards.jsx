import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ trending }) => {
  // console.log(trending);
  return (
    
      
      <div className="flex w-[100%]   overflow-y-hidden p-5">
        {trending.map((value, index) => (
          <div key={index} className=" min-w-[15%]  bg-zinc-900 mr-5 mb-5 hover:shadow-sm hover:shadow-[#1770A0] duration-500">
            <img
            className="w-full h-[50%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                value.backdrop_path || value.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-3 h-[50%] ">
              <h1 className="text-xl font-semibold">
                {value.name ||
                  value.title ||
                  value.original_name ||
                  value.original_title}
              </h1>
              <p >{value.overview.slice(0, 50)}... <span className="text-zinc-500 hover:border-b-2 hover:border-zinc-500">more</span></p>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default HorizontalCards;
