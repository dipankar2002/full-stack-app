import React from 'react'
import createCard from "../../images/createCard.png";

export default function CreateBoard() {
  return (
    <div className='grid py-8 px-6 sm:px-24 grid-cols-1 lg:grid-cols-2 justify-items-center'>
      <LeftSec />
      <RightSec />
    </div>
  )
}

function LeftSec() {
  return (
    <div className='text-left lg:text-left right text-white'>
      <div className=' text-blue-200 text-xl sm:text-2xl  font-bold'>Clear your mind</div>
      <div className='  lg:w-[90%] text-[8vw] font-bold mx-auto lg:mx-0 sm:text-[6vw] lg:text-[3.6vw] xl:text-[3vw] lg:my-5'>Capture tasks at the speed of thought</div>
      <div className=' xl:w-[75%] text-lg my-3 sm:text-xl lg:my-5 mx-auto lg:mx-0'>We've spent over a decade refining Todoist to be an extension of your mind. Capture and organize tasks instantly using easy-flowing, natural language.</div>
    </div>
  )
}

function RightSec() {
  return (
    <div className='relative rounded-[20px] my-5'> 
      <div>
        <img src={createCard} alt="" className=' w-[100%] right-0 bottom-0  rounded-[20px]'/>
      </div>
    </div>
  )
}