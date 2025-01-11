import React from 'react'
import { Link } from 'react-router-dom'
import homePage from "../../images/homePage.png";

export default function DashBoard() {
  return (
    <div className='grid grid-cols-2 w-[80%] mx-auto'>
      <LeftSec />
      <RightSec />
    </div>
  )
}

function LeftSec() {
  return (
    <div className=''>
      <p className='text-white font-bold text-[4em] w-[80%]'>Organize your work and life, finally.</p>
      <p className='text-white leading-tight text-[1.5em] w-[90%]'>Simplify life for both you and your team with the world’s #1 task manager and to-do list app.</p>
      <div className='my-5'>
        <button className="mr-2 hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold"><Link to="/login">Sign In</Link></button>
        <button className='bg-blue-200 px-4 py-2 rounded-[10px] font-bold'><Link to="/signup">Sign Up</Link></button>
      </div>
    </div>
  )
}

function RightSec() {
  return (
    <div className='relative bg-white rounded-[20px]'> 
      <div>
        <img src={homePage} alt="" className='absolute w-[90%] right-0 bottom-0  rounded-tl-[10px]'/>
      </div>
    </div>
  )
}