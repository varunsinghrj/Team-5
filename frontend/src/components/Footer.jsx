import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-blue-500 text-white p-4 flex items-center justify-between'>
      <div className="flex gap-5">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/idea'>My Idea</NavLink>
        <NavLink to='/query'>Query</NavLink>
      </div>
      <div className="text-xl">&copy; All the rights are reserved. Since 2024</div>
    </div>
  )
}

export default Footer
