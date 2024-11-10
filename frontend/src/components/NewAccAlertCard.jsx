import React from 'react'

export default function NewAccAlertCard() {
  return (
    <div>
      <div className='absolute w-[600px] h-[350px] mx-[35%] mt-10 rounded-[10px] text-center pt-20 bg-blue-300 text-black'>
        <h1>Create a account before started!!!</h1>
        <h1>of if have one then login first</h1>
        <div className='flex'>
          <button className="hover:bg-blue-500 text-white hover:text-black px-4 py-2 rounded-[10px] font-bold" 
            onClick={()=>{setUpdateCompo((prev)=>!prev)}}>
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-[10px] font-bold"
            onClick={()=>{setUpdateCompo((prev)=>!prev)}}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  )
}
