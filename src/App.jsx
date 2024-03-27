import React, { useEffect, useState } from 'react'
import Home from './components/Home'
// import Loader from './components/template/Loader'
import { Route, Routes } from 'react-router-dom'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import People from './components/People'
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
    
  return (
    <div className='w-screen h-screen bg-[#1F1E24]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/tv_shows' element={<TvShows/>} />
        <Route path='/people' element={<People/>} />
      </Routes>
      
    </div>
  )
}

export default App