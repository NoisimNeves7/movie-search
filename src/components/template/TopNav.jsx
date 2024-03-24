import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="w-full h-[10vh] text-xl text-zinc-400  relative flex items-center justify-start ml-52 ">
      <i class="ri-search-2-line "></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Anything"
        className="bg-transparent border-none outline-none mx-10 p-5 text-zinc-200"
      />
      {query && (
        <i onClick={() => setQuery("")} class="ri-close-large-line "></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] rounded overflow-auto">
        <Link className="border-b-2 border-zinc-100 p-8  w-[100%] text-zinc-700 flex items-start justify-start text-lg font-semibold hover:bg-zinc-300 hover:text-black duration-300">
          <img src="" alt="" />
          <span>Hi Guys</span>
        </Link>
        
      </div>
    </div>
  );
};

export default TopNav;
