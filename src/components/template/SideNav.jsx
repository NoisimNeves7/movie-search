import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    
        <div className='w-[20%] h-full border-r-2 border-zinc-400 p-8 '>
            <h1 className='text-2xl text-white font-bold'>
            <i  className="ri-tv-fill text-[#1770A0] mr-2"></i>
            <span>NEVES7</span>
            </h1>
            <h1 className='text-xl text-white font-semibold mt-10 mb-5'>New Feeds</h1>
            <nav className='flex flex-col text-zinc-400 text-lg gap-4'>
                <Link to={'/trending'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-fire-fill"></i>Trending</Link>
                <Link to={'/popular'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-sparkling-2-fill"></i>Popular</Link>
                <Link to={'/movie'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-clapperboard-fill"></i>Movies</Link>
                <Link to={'/tv'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-tv-2-fill"></i>TV Shows</Link>
                <Link to={'/person'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-team-fill"></i>People</Link>
            </nav>
            <hr className='mt-5 border-none h-[0.5px] bg-zinc-400'/>
            <h1 className='text-xl text-white font-semibold mt-5 mb-5'>Website Information</h1>
            <nav className='flex flex-col text-zinc-400 text-lg gap-4'>
                <Link to={'/about'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="ri-information-fill mr-3"></i>About</Link>
                <Link to={'/contact'} className='p-3 text-lg hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="ri-phone-line mr-3"></i>Contact Us</Link>
               
            </nav>
            
        </div>
  )
}

export default SideNav