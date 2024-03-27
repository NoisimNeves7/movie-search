import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./template/TopNav";
import Dropdown from "./template/Dropdown";
import Cards from "./template/Cards";
import axios from "../utils/Axios";
import Loader from "./template/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)
  document.title = "SCSDB | Trending " + category.toUpperCase();
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `trending/${category}/${duration}?page=${page}`
      );
      if(data.results.length > 0){
        settrending((prev) => [...prev, ...data.results]);
      setpage(page + 1);
      }
      else {
        hasMore(false)
      }
      // console.log("hi")
    } catch (error) {
      console.log("error :", error);
    }
  };
  // console.log(trending)

  const refreshHandler = () => {
    if (trending.length === 0) getTrending();
    else {
      setpage(1);
      settrending([]);
      getTrending();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className="w-full  flex items-center px-[5%] py-[1%] justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#1770A0] mr-2"
          ></i>
          Trending
        </h1>
        <div className="flex w-[75%] items-center">
          <TopNav />
          <Dropdown
            title={"Category"}
            options={["movie", "tv", "all"]}
            funct={(e) => setcategory(e.target.value)}
          />
          <div className="w-[5%]"></div>
          <Dropdown
            title={"Timeframe"}
            options={["week","day"]}
            funct={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>loading....</h1>}
      >
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
