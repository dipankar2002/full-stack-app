import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Nav1 />
  )
}

function Nav1() {
  return (
    <div>
      <nav className="mb-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <Link to="/">
              <div>
                <img className='w-8 m-0' src="https://images.ctfassets.net/xz1dnu24egyd/3qNgO72qwtNVR4pTVmOTrG/b5d7dbd118cd7eafe69cd69cab0939b9/haven.png" alt="" />
                <h1 className='m-0 text-white text-[120%] font-bold'>TaskLess</h1>
              </div>
            </Link>
            <div className='flex items-center justify-between'>
              <h3 className='hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold'>Dashboard</h3>
              <h3 className='hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold'>Features</h3>
              <h3 className='hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold'>Tech Used</h3>
              <h3 className='hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold'>Connect Us</h3>
              <div className='bg-gray-500 w-0.5 h-8 mx-2'></div>
              <button className="mr-2 hover:bg-gray-500 hover:bg-opacity-20 text-white hover:text-white px-4 py-2 rounded-[10px] font-bold"><Link to="/login">Sign In</Link></button>
              <button className='bg-blue-200 px-4 py-2 rounded-[10px] font-bold'><Link to="/signup">Sign Up</Link></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

