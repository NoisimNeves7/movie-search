import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg'

const HorizontalCards = ({ trending }) => {
  // console.log(trending);
  return trending.length > 0 ? (
    
      
    <div className="flex w-[100%] h-[50vh]  overflow-y-hidden p-5">
      {trending.map((value, index) => (
        <Link to={`/${value.media_type ? value.media_type : `person`}/detail/${value.id}`}  key={index} className=" min-w-[18%]  bg-zinc-900 mr-5 mb-5 hover:shadow-sm hover:shadow-[#1770A0] duration-500">
          <img
          className="w-full h-[70%] object-cover"
            src={value.backdrop_path || value.poster_path || value.profile_path ? `https://image.tmdb.org/t/p/original/${
              value.backdrop_path || value.poster_path || value.profile_path
            }`: noimage}
            alt=""
          />
          <div className="text-white p-3  max-h-[30%]  overflow-y-auto">
            <h1 className="text-xl font-semibold">
              {value.name ||
                value.title ||
                value.original_name ||
                value.original_title}
            </h1>
            {value.overview &&  <p >{value.overview.slice(0, 70)}... <span className="text-zinc-500 hover:border-b-2 hover:border-zinc-500">more</span></p>}
          </div>
        </Link>
      ))}
    </div>
  
): (<h1 className="text-3xl text-zinc-400 font-semibold">Nothing To Show</h1>);
};

export default HorizontalCards;
