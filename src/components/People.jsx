import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './template/Loader';
import axios from '../utils/Axios';
import TopNav from './template/TopNav';
import Dropdown from './template/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './template/Cards';

const People = () => {
    const navigate = useNavigate();

    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)
    document.title = "SCSDB | People " 

    const getPeople = async () => {
        try {
          const { data } = await axios.get(
            `person/popular?page=${page}`
          );
          if(data.results.length > 0){
            setpeople((prev) => [...prev, ...data.results]);
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
        if (people.length === 0) getPeople();
        else {
          setpage(1);
          setpeople([]);
          getPeople();
        }
      };
      console.log(people)
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return people.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className="w-full  flex items-center px-[5%] py-[1%] justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#1770A0] mr-2"
          ></i>
          People 
        </h1>
        <div className="flex w-[75%] items-center">
          <TopNav />
          
          <div className="w-[5%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1>loading....</h1>}
      >
        <Cards data={people} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default People