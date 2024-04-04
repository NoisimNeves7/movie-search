import React, { useEffect, useState } from 'react'
import Home from './components/Home'
// import Loader from './components/template/Loader'
import { Route, Routes } from 'react-router-dom'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PeopleDetails from './components/PeopleDetails'
import Trailer from './components/template/Trailer'
import NotFound from './components/template/NotFound'
import Contact from './components/template/Contact'
import About from './components/About'
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
    
  return (
    <div className='w-screen h-screen bg-[#1F1E24]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movies/>} />
        <Route path='/movie/detail/:id' element={<MovieDetails/>} >
          <Route path='/movie/detail/:id/trailer' element={<Trailer/>}/>
        </Route>
        <Route path='/tv' element={<TvShows/>} />
        <Route path='/tv/detail/:id' element={<TvDetails/>} >
        <Route path='/tv/detail/:id/trailer/' element={<Trailer/>}/>
        </Route>
        <Route path='/person' element={<People/>} />
        <Route path='/person/detail/:id' element={<PeopleDetails/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />


        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  )
}

export default App