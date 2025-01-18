import React from 'react'

export default function TagWiseBoard() {
  return (
    <div className='grid py-8 px-6 sm:px-24 text-center'>
      <Top />
      <Bottom />      
    </div>
  )
}

function Top() {
  return (
    <div>
      <div className='lg:w-[70%] text-white text-[8vw] sm:text-[5vw] md:text-[4.5vw] lg:text-[3vw] xl:text-[2.5vw] font-bold mx-auto'>Kickstart your next project with Todoist Templates</div>
      <div className='lg:w-[70%] text-white text-lg mx-auto'>No need to create projects or setups from scratch when we have 50+ templates made for you.</div>
    </div>
  )
}
function Bottom() {
  return (
    <div className=''> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <button className='text-white bg-gray-500 px-4 py-2 rounded-xl font-bold'>Work</button>
        <button className='text-white bg-gray-500 px-4 py-2 rounded-xl font-bold'>Personal</button>
        <button className='text-white bg-gray-500 px-4 py-2 rounded-xl font-bold'>Education</button>
        <button className='text-white bg-gray-500 px-4 py-2 rounded-xl font-bold'>Management</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}