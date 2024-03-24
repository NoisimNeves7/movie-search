import React from 'react'
import SideNav from './template/SideNav'
import TopNav from './template/TopNav'

const Home = () => {
  return (
    <div className='w-full h-full flex'>
        <SideNav/>
        <div className='w-[80%] h-full '>
          <TopNav/>
        </div>
    </div>
  )
}

export default Home