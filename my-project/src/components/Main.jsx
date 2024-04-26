import React from 'react'
import Navbar from "../components/Navbar";
import { Outlet, Link } from 'react-router-dom'

const Main =() => {
  return (
    <div>
    <div className='bg-pink-300 h-screen p-10 mb-70'>
    <div className=''>
    <div>
        <div className='bg-green-300 mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl md:p-9 p-70 rounded-lg mx-auto p-3 justify-between'>
        <h3>Marie Antoinette</h3>
         <Link to='/'><button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log out
            </button></Link>
    </div>
    <div className='flex gap-10 mt-30'>
      <Navbar/>
      <div className='bg-orange-300 h-[76vh] w-full border-2 border-blue-600  flex-grow rounded-lg'>
     
      <Outlet/>
       </div></div></div>
    </div>
    </div>
    </div>
  )
}

export default Main

