import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './template/Loader';
import axios from '../utils/Axios';
import TopNav from './template/TopNav';
import Dropdown from './template/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './template/Cards';

const Movies = () => {
    const navigate = useNavigate();

    const [category, setcategory] = useState("now_playing");
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)
    document.title = "SCSDB | Movies " 

    const getMovies = async () => {
        try {
          const { data } = await axios.get(
            `movie/${category}?page=${page}`
          );
          if(data.results.length > 0){
            setmovies((prev) => [...prev, ...data.results]);
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
        if (movies.length === 0) getMovies();
        else {
          setpage(1);
          setmovies([]);
          getMovies();
        }
      };
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return movies.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className="w-full  flex items-center px-[5%] py-[1%] justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#1770A0] mr-2"
          ></i>
          Movies <span className='text-base text-zinc-600 capitalize'>({category})</span>
        </h1>
        <div className="flex w-[75%] items-center">
          <TopNav />
          <Dropdown
            title={"Category"}
            options={[ "popular","top_rated","upcoming","now_playing"]}
            funct={(e) => setcategory(e.target.value)}
          />
          <div className="w-[5%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h1>loading....</h1>}
      >
        <Cards data={movies} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};


export default Movies