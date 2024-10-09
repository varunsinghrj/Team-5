import React from 'react'
import { NavLink } from 'react-router-dom'
import { data } from '../assets/assets'

const Navbar = () => {
  return (

    <nav className='w-full h-20  top-0 left-0 px-4 sm:px-20 shadow-[0_5px_20px_-15px_rgba(0,0,0,0.3)] bg-slate-100 flex items-center justify-between'>
        <div className="logo">
            <img src={data.image} className='w-40 object-fill' alt="" />
        </div>
        <div className="flex gap-5 ">
            <NavLink to='/home'>
            Home
            <hr className='w-1/2 mx-auto h-[3px] mt-1 hidden bg-black'/>
            </NavLink>
            <NavLink to='/idea'>
            My Idea
            <hr className='w-1/2 mx-auto h-[3px] mt-1 hidden bg-black'/>
            </NavLink>
            <NavLink to='/Query'>
            Query
            <hr className='w-1/2 mx-auto h-[3px] mt-1 hidden bg-black'/>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
