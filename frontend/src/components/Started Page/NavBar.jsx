import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../Icons/menu-icon.svg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { darkModeAtom } from '../../atoms/atom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  return (
    <div>
      <div className=' flex py-4 px-6 sm:px-24 justify-between items-center font-sans'>
        <div className=''>
          <img className='w-8 m-0' src={"https://images.ctfassets.net/xz1dnu24egyd/3qNgO72qwtNVR4pTVmOTrG/b5d7dbd118cd7eafe69cd69cab0939b9/haven.png"} alt="" />
          <h1 className='m-0 text-white text-[120%] font-bold'>TaskLess</h1>
        </div>
        <div className=' hidden text-md w-[40%] xl:w-[40%] xl:text-xl 2xl:w-[37%] font-bold lg:block'>
          <ul className=' flex justify-between'>
            <li className='text-white'>Dashboard</li>
            <li className='text-white'>Features</li>
            <li className='text-white'>Tech Used</li>
            <li className='text-white'>Connect Us</li>
          </ul>
        </div>
        
        <div className=' flex-inline justify-between items-center'>
          <button className='hidden md:inline mr-2 hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold'><Link to="/login">Sign In</Link></button>
          <button className='hidden md:inline bg-blue-200 px-4 py-2 rounded-[10px] text-md font-bold'><Link to="/signup">Sign Up</Link></button>
          <button className=' lg:hidden ml-8' onClick={()=>{setIsOpen(!isOpen)}}>
            <img className='inline m-0' src={menuIcon} alt="" />
          </button>
          <button className={`${darkMode?'text-white':'text-black'} text-lg rounded-[10px] border-2 border-blue-200 px-4 py-1.5 mx-4 font-bold`}>{`${darkMode?'Light':'Dark'}`}</button>
        </div>
      </div>
      <div className={`${!isOpen?'hidden':null}`}>
        <ul className='text-center text-xl font-bold'>
          <li className='text-white my-2'>Dashboard</li>
          <li className='text-white my-2'>Features</li>
          <li className='text-white my-2'>Tech Used</li>
          <li className='text-white my-2'>Connect Us</li>
        </ul>
      </div>
    </div>
  )
}