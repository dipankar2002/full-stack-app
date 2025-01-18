import React from 'react'
import phoneImg from '../../images/PhoneImg.png'

export default function MultiSection() {
  return (
    <div className='grid py-8 px-6 sm:px-24 grid-cols-[65%_35%] justify-items-stretch'>
      <Top />
      <Bottom />      
    </div>
  )
}

function Top() {
  return (
    <div>
      <div className='lg:text-right mr-0 text-white text-[10vw] sm:text-[7.5vw] md:text-[8vw] lg:text-[5vw] xl:text-[4.5vw]  font-bold'>Kickstart your next Todo list in Any device</div>
      <div className='text-white text-lg sm:text-xl lg:text-2xl lg:text-right'>Todo list web app is responsive for any device screen size</div>
    </div>
  )
}
function Bottom() {
  return (
    <div className='relative rounded-[20px] my-5 lg:ml-20 xl:ml-60'> 
      <div>
        <img src={phoneImg} alt="" className=' w-[100%] lg:w-[60%]  rounded-[20px]'/>
      </div>
    </div>
  )
}