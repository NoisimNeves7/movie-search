import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    const [menu, setmenu] = useState(false);
    const getMenu = ()=>{
        setmenu(state=>!state)
        console.log(!menu)
    }
  return (
    
        <div className='absolute  lg:static w-full lg:w-[20%] lg:h-full '>
            {/* laptop view */}
            <div className='hidden lg:block w-full h-full border-r-2 border-zinc-400 p-8 '>
            <h1 className='text-2xl text-white font-bold'>
            <i  className="ri-tv-fill text-[#1770A0] mr-2"></i>
            <span>NEVES7</span>
            </h1>
            <h1 className='text-xl text-white font-semibold mt-10 mb-5'>New Feeds</h1>
            <nav className='flex flex-col text-zinc-400 text-xl gap-4'>
                <Link to={'/trending'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-fire-fill"></i>Trending</Link>
                <Link to={'/popular'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-sparkling-2-fill"></i>Popular</Link>
                <Link to={'/movie'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-clapperboard-fill"></i>Movies</Link>
                <Link to={'/tv'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-tv-2-fill"></i>TV Shows</Link>
                <Link to={'/person'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="mr-3 ri-team-fill"></i>People</Link>
            </nav>
            <hr className='mt-5 border-none h-[0.5px] bg-zinc-400'/>
            <h1 className='text-xl text-white font-semibold mt-5 mb-5'>Website Information</h1>
            <nav className='flex flex-col text-zinc-400 text-xl gap-4'>
                <Link to={'/about'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="ri-information-fill mr-3"></i>About Us</Link>
                <Link to={'/contact'} className='p-3 text-xl hover:bg-[#1770A0] hover:rounded-lg hover:text-white duration-300 '><i className="ri-phone-line mr-3"></i>Contact Us</Link>
               
            </nav>
            
        </div>

        {/* Mobile view  */}
        <div className='lg:hidden text-zinc-400 bg-[#1F1E24] z-[11] absolute  flex justify-between w-full px-5 py-2 text-2xl'>
        <div><span className='mr-1 font-black'>NEVES7</span>
        <i  className="ri-tv-fill text-[#1770A0] mr-2"></i></div>
        <i onClick={()=>getMenu()} className="ri-menu-line">
            
        </i>
        <div className={` ${!menu && 'hidden '} duration-300 py-2 px-10 absolute left-[70%] top-[100%] rounded-lg -translate-x-[50%] text-lg bg-[#1770a0] flex flex-col  text-white  justify-center items-center gap-2 border-[2px] border-white`}>
            <Link to={'/trending'} className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>Trending


</Link>
            <Link to={'/popular'}  className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>Popular</Link>
            <Link to={'/movie'} className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>Movies</Link>
            <Link to={'/tv'} className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>TV 
</Link>
            <Link to={'/person'} className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>People</Link>
            <Link to={'/about'} className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>About</Link>
            <Link to={'/contact'} className='hover:text-zinc-300 px-3 py-2 rounded-lg bg-[#1F1E24]'>Contact</Link>
        </div>

        

        </div>
        </div>
  )
}

export default SideNav