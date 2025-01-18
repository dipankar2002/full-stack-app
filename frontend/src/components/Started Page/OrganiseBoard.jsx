import React from 'react'
import menuCard from "../../images/menuCard.png";

export default function OrganiseBoard() {
  return (
    <div className='grid py-8 px-6 sm:px-24 grid-cols-1 lg:grid-cols-2 justify-items-center'>
      <LeftSec />
      <RightSec />
    </div>
  )
}

function LeftSec() {
  return (
    <div className='relative rounded-[20px] my-5 xl:ml-20'> 
      <div>
        <img src={menuCard} alt="" className=' w-[100%] right-0 bottom-0  rounded-[20px]'/>
      </div>
    </div>
  )
}

function RightSec() {
  return (
    <div className='text-center lg:text-left right text-white'>
      <div className=' text-blue-200 text-xl sm:text-2xl  font-bold'>Organize todo tags</div>
      <div className='  lg:w-[90%] text-[8vw] font-bold mx-auto lg:mx-0 sm:text-[6vw] lg:text-[3.6vw] xl:text-[3vw] lg:my-5'>Stay organized and focused with tags</div>
      <div className=' xl:w-[75%] text-lg my-3 sm:text-xl md:text-xl lg:my-5 mx-auto lg:mx-0'>Make the most of your time. Schedule due dates, visualize your week in calendar view, and set recurring tasks with ease.</div>
    </div>
  )
}