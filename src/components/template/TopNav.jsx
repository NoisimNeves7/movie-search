import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg'

const TopNav = () => {
  const [query, setQuery] = useState("");
  // console.log(query);
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);
      setsearches(data.results);
    } catch (error) {
      console.log("error :", error);
    }
  };
  // console.log(searches)
  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] text-xl text-zinc-400  relative flex items-center mx-auto z-[10] ">
      <i className="ri-search-2-line "></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Anything"
        className="bg-transparent border-none outline-none mx-5 p-5 text-zinc-200 w-[50%] "
      />
      {query && (
        <i onClick={() => setQuery("")} className="ri-close-large-line  hover:text-[#1770A0]"></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[6%] rounded overflow-auto ">
        {searches.map((value, index) => {
          return (
            <Link
              key={index}
              className="border-b-2 border-zinc-100 p-8  w-[100%] text-zinc-600 flex items-center justify-start text-lg font-semibold hover:bg-zinc-300 hover:text-black duration-300"
            >
              <img
                className="h-[10vh] w-[10vh] object-cover rounded mr-5"
                src={value.backdrop_path || value.profile_path ? `https://image.tmdb.org/t/p/original/${
                  value.backdrop_path || value.profile_path
                }` : noimage}
                alt=""
              />
              <span>
                {value.name ||
                  value.title ||
                  value.original_name ||
                  value.original_title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopNav;
