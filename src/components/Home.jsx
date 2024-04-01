import React, { useEffect, useState } from "react";
import SideNav from "./template/SideNav";
import TopNav from "./template/TopNav";
import Header from "./template/Header";
import axios from "../utils/Axios";
import HorizontalCards from "./template/HorizontalCards";
import Dropdown from "./template/Dropdown";
import Loader from "./template/Loader";

const Home = () => {
  document.title = "NEVES7 | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all")

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

  const getTrending = async () => {
    const { data } = await axios.get(`trending/${category}/day`);
    settrending(data.results);
  };
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
     getTrending();
  }, [category]);
  // console.log(trending)
  return wallpaper && trending ? (
    <div className="w-full h-full flex">
      <SideNav />

      <div className="w-[80%] h-full overflow-y-auto ">
        <TopNav />
        <Header wallpaper={wallpaper} />
        <div className=" mb-5 flex items-center justify-between p-5">
          <h1 className="text-zinc-400 text-3xl font-semibold">Trending</h1>
          <Dropdown title={'Filter'} options={['movie','tv','all']} funct = {(e)=>setcategory(e.target.value)}  />
        </div>
        <HorizontalCards trending={trending} />
      </div>
    </div>
  ) : (
    <Loader/>
  );
};

export default Home;
