import React from 'react'
import { Link } from 'react-router-dom'
import homePage from "../../images/homePage.png";

export default function DashBoard() {
  return (
    <div className='grid py-8 px-6 sm:px-24 grid-cols-[100%] lg:grid-cols-[50%_50%]'>
      <LeftSec />
      <RightSec />
    </div>
  )
}

function LeftSec() {
  return (
    <div className=' text-center lg:text-left right text-white'>
      <p className=' sm:w-[70%] lg:w-[90%] text-[14vw] font-bold mx-auto lg:mx-0 sm:text-[8vw] lg:text-[5vw] xl:text-[5.5vw] 2xl:text-[5.8vw] lg:my-5'>Organize your work and life, finally.</p>
      <p className=' w-[75%] xl:w-[75%] text-xl my-2 sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-4xl lg:my-5 mx-auto lg:mx-0'>Simplify life for both you and your team</p>
      <div className='my-8 xl:my-10 2xl:my-14'>
        <button className="mr-2 hover:bg-gray-500 hover:bg-opacity-20  hover: px-4 py-2 rounded-[10px] font-bold"><Link to="/login">Sign In</Link></button>
        <button className='bg-blue-200 text-black px-4 py-2 rounded-[10px] font-bold'><Link to="/signup">Sign Up</Link></button>
      </div>
    </div>
  )
}

function RightSec() {
  return (
    <div className='relative rounded-[20px] my-5'> 
      <div>
        <img src={homePage} alt="" className=' w-[100%] right-0 bottom-0  rounded-[20px]'/>
      </div>
    </div>
  )
}