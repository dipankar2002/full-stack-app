import React from 'react';
import completeCard from "../../images/completeSec.png";

export default function CompleteBoard() {
  return (
    <div className='grid py-8 px-6 sm:px-24 grid-cols-1 lg:grid-cols-2 justify-items-center'>
      <LeftSec />
      <RightSec />
    </div>
  )
}

function LeftSec() {
  return (
    <div className='text-right text-white'>
      <div className=' lg:w-[90%] text-blue-200 text-xl sm:text-2xl  font-bold'>Focus on what's important</div>
      <div className='  lg:w-[90%] text-[8vw] font-bold mx-auto lg:mx-0 sm:text-[6vw] lg:text-[3.6vw] xl:text-[3vw] lg:my-5'>Check your todo is completed or not</div>
      <div className='lg:w-[90%] xl:w-[75%] text-lg my-3 sm:text-xl md:text-xl lg:my-5 mx-auto lg:mx-0'>Achieve mental clarity by sorting tasks into Today, Upcoming, or using custom filters. See only what you need, when you need it.</div>
    </div>
  )
}

function RightSec() {
  return (
    <div className='relative rounded-[20px] mt-10'> 
      <div>
        <img src={completeCard} alt="" className=' w-[100%] right-0 bottom-0  rounded-[20px]'/>
      </div>
    </div>
  )
}