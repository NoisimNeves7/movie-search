import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./template/Loader";
import axios from "../utils/Axios";
import TopNav from "./template/TopNav";
import Dropdown from "./template/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./template/Cards";

const Popular = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)
  document.title = "NEVES7 | Popular ";

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if(data.results.length > 0 ){
        setpopular((prev) => [...prev, ...data.results]);
      setpage(page + 1);
      }
      else {
        sethasMore(false)
      }
      // console.log("hi")
    } catch (error) {
      console.log("error :", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) getPopular();
    else {
      setpage(1);
      setpopular([]);
      getPopular();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);
  return popular.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className="w-full  lg:flex items-center px-[5%] py-[1%] justify-between">
        <h1 className="lg:text-3xl text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#1770A0] mr-2"
          ></i>
          Popular{" "}
          <span className="text-base text-zinc-600 capitalize">
            ({category})
          </span>
        </h1>
        <div className=" lg:flex mt-6 lg:mt-0 w-[100%] lg:w-[75%] items-center ">
        <div className="w-full ">
          <TopNav />
          </div>
          <Dropdown
            title={"Category"}
            options={["tv", "movie"]}
            funct={(e) => setcategory(e.target.value)}
          />
          <div className="w-[5%] mt-5 lg:mt-0"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>loading....</h1>}
      >
        <Cards data={popular} title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
