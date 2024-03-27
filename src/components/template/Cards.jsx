import React from 'react'
import { Link } from 'react-router-dom'


const Cards = ({data}) => {
    // console.log(data)
  return (
    <div className='w-full h-full bg-[#1F1E24] flex flex-wrap px-[5%] py-[1%]'>
        {data.map((value,index)=>(
             <Link className='mr-20 mb-14 w-[25vh]  ' key={index}>
                <div className='h-[40vh] bg-black relative'>
                <img className='h-[40vh] object-cover rounded-sm shadow-2xl  shadow-black shadow-[8px_17px_38px_2px_rgba(0,0,0,.5) ' src={`https://image.tmdb.org/t/p/original/${value.poster_path || value.backdrop_path || value.profile_path}`} alt="" />
                 {value.vote_average && <div className='h-[5vh] w-[5vh] bg-yellow-600 flex items-center justify-center rounded-full text-white text-lg absolute font-semibold -right-5 bottom-5'>{(value.vote_average*10).toFixed()}<sup>%</sup></div> }
                 {value.original_language && <div className='h-[5vh] w-[5vh] bg-yellow-600 flex items-center justify-center rounded-full text-white text-lg absolute font-semibold -left-5 bottom-5'>{value.original_language}</div> }
                </div>
                <h1 className='text-zinc-300 text-2xl font-semibold mt-4'>{value.name ||
                value.title ||
                value.original_name ||
                value.original_title}</h1>
                
             </Link>
        ))}
    </div>
  ) 
}

export default Cards
