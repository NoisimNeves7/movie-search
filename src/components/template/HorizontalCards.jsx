import React from "react";
import Dropdown from "./Dropdown";
import { Link, useParams } from "react-router-dom";
import noimage from '/noimage.jpg'
import Loader from "./Loader";

const HorizontalCards = ({ trending,cardtype }) => {

  
  // console.log(trending);
  return trending.length > 0 ? (
    
      
    <div className="flex w-[100%] h-[40vh] lg:h-[45vh]  overflow-y-hidden p-5">
      {trending.map((value, index) => (
        <Link to={`/${value.media_type ? value.media_type : `person`}/detail/${value.id}`}  key={index} className=" lg:min-w-[15%] min-w-[40%] h-full  bg-zinc-900 mr-5 mb-5 hover:shadow-sm hover:shadow-[#1770A0] duration-500">
          <img
          className="w-full  h-[70%] object-cover"
            src={value.backdrop_path || value.poster_path || value.profile_path ? `https://image.tmdb.org/t/p/original/${
              value.backdrop_path || value.poster_path || value.profile_path
            }`: noimage}
            alt=""
          />
          <div className="text-white p-3  h-[30%]  overflow-y-auto">
            <h1 className="lg:text-xl font-semibold">
              {value.name ||
                value.title ||
                value.original_name ||
                value.original_title}
            </h1>
            {value.overview &&  <p className="text-sm lg:text-base">{value.overview.slice(0, 70)}... <span className="text-zinc-500 hover:border-b-2 hover:border-zinc-500">more</span></p>}
          </div>
        </Link>
      ))}
     {cardtype  && <div className=" lg:min-w-[15%] min-w-[40%] h-full  bg-zinc-900 mr-5 mb-5 hover:shadow-sm hover:shadow-[#1770A0] duration-500 flex items-center justify-center">

      <Link to={`/${cardtype}`} className="flex flex-col justify-center items-center text-zinc-400 hover:text-[#1770A0]">
     <i className="ri-add-circle-line  text-4xl"></i>
     <h1 className="">Show More</h1>
     </Link> 
     </div>}
    </div>
  
): (<Loader/>);
};

export default HorizontalCards;
