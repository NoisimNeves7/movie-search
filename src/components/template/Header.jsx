import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";

const Header = ({ wallpaper }) => {
  // console.log(wallpaper.backdrop_path);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start px-[5%] py-[3%] gap-4"
    >
      <h1 className="w-[70%] text-4xl text-white font-black">
        {wallpaper.name ||
          wallpaper.title ||
          wallpaper.original_name ||
          wallpaper.original_title}
      </h1>
      <p className="w-[70%] text-white">
        {wallpaper.overview.slice(0, 200)}...
        <Link className="text-blue-600 hover:border-b-2 hover:border-blue-600 ">more</Link>
      </p>
      <p className="text-white ">
        <i className="mr-2 ri-megaphone-fill text-yellow-500"></i>
        {wallpaper.release_date}
        <i className="mr-2 ri-camera-lens-fill text-yellow-500 ml-5"></i>
        {wallpaper.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#1770A0] px-4 py-2 rounded text-white font-semibold hover:bg-white hover:text-[#1770A0] duration-300">Watch Trailer</Link>
    </div>
  );
};

export default Header;
