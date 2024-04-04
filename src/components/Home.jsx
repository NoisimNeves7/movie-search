import React, { useEffect, useState } from "react";
import SideNav from "./template/SideNav";
import TopNav from "./template/TopNav";
import Header from "./template/Header";
import axios from "../utils/Axios";
import HorizontalCards from "./template/HorizontalCards";
import Dropdown from "./template/Dropdown";
import Loader from "./template/Loader";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "NEVES7 | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const [popular, setpopular] = useState(null);
  const [categoryP, setcategoryP] = useState("movie");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("trending/movie/day");
      const wall =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(wall);
    } catch (error) {
      console.log("error :", error);
    }
  };
  // console.log(wallpaper)

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${categoryP}/popular`);
      setpopular(data.results);
      // console.log(popular)
    } catch (error) {
      console.log("error :", error);
    }
  };

  const getTrending = async () => {
    const { data } = await axios.get(`trending/${category}/day`);
    settrending(data.results);
  };
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
    getPopular();
  }, [category, popular]);
  
  return wallpaper && trending && popular  ? (
    <div className="w-full h-full flex overflow-y-auto lg:overflow-visible">
      <SideNav  />
      <div className="w-full lg:w-[80%] h-full lg:overflow-y-auto mt-10 lg:mt-0">
        <div className=" w-full  h-[8vh] text-lg lg:text-xl text-zinc-400  flex items-center mx-auto z-[10]">
          <TopNav />
        </div>
        <div className="w-full h-full ">
        <div className="w-full h-full   ">
          <Header wallpaper={wallpaper} />

          {/* trending  */}
          <div className=" lg:mb-5 flex items-center justify-between  p-5">
            <h1 className="text-zinc-400 text-2xl lg:text-3xl font-semibold">Trending</h1>
            <Dropdown
              title={"Filter"}
              options={["movie", "tv", "all"]}
              funct={(e) => setcategory(e.target.value)}
            />
          </div>
          <HorizontalCards trending={trending} cardtype={"trending"} />


{/* POPULAR  */}
          <div className="mt-5 lg:mb-5 flex items-center justify-between p-5 ">
            <h1 className="text-zinc-400 text-2xl lg:text-3xl font-semibold">Popular</h1>
            <Dropdown
              title={"Filter"}
              options={["tv", "movie"]}
              funct={(e) => setcategoryP(e.target.value)}
            />
          </div>
          

          

          <div className="flex w-[100%] h-[40vh] lg:h-[45vh]  overflow-y-hidden p-5 ">
      {popular.map((value, index) => (
        <Link to={`/${categoryP}/detail/${value.id}`}  key={index} className=" lg:min-w-[15%] min-w-[40%] h-full  bg-zinc-900 mr-5 mb-5 hover:shadow-sm hover:shadow-[#1770A0] duration-500">
          <img
          className="w-full h-[70%] object-cover"
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
            {value.overview &&  <p className="text-sm lg:text-base" >{value.overview.slice(0, 70)}... <span className="text-zinc-500 hover:border-b-2 hover:border-zinc-500">more</span></p>}
          </div>
        </Link>
      ))}
     {<div className=" lg:min-w-[15%] min-w-[40%] h-full  bg-zinc-900 mr-5 mb-5 hover:shadow-sm hover:shadow-[#1770A0] duration-500 flex items-center justify-center">

      <Link to={`/popular`} className="flex flex-col justify-center items-center text-zinc-400 hover:text-[#1770A0]">
     <i className="ri-add-circle-line  text-4xl"></i>
     <h1 className="">Show More</h1>
     </Link> 
     </div>}
    </div>






        </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
