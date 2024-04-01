import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
 const navigate =useNavigate()
 const {pathname} = useLocation()
 const category = pathname.includes("movie") ? "movie" :"tv"
 const ytVideo = useSelector(state => state[category].info.videos);
//  console.log(category,  ytVideo)
  return (
    <div className="h-screen w-screen fixed top-0 right-0 bg-[rgba(0,0,0,0.8)] z-10 flex justify-center items-center ">
      <i
          onClick={() => navigate(-1)}
          className="ri-close-fill text-zinc-400 hover:text-[#1770A0] absolute top-10 right-20 text-4xl"
        ></i>
      {ytVideo ? <ReactPlayer
        width={1200}
        height={600}
        controls
        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        
      /> : <NotFound/> }
    </div>
  );
};

export default Trailer;
