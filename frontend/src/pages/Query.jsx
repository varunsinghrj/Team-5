import React from 'react'
import Navbar from '../components/Navbar'
import { data } from '../assets/assets'

const Query = () => {
    return (
        <div>
            <Navbar />
            <div className='flex '>
                <div className='flex-1 mt-20 p-10 items-center '>
                    <form action="" className='w-[100%] p-4 rounded-lg  bg-slate-100'>
                        <h1 className='text-3xl'>Enter your Credentials Here</h1>
                        <div className='text-xl mt-12'>
                            <label htmlFor="name">Name:</label>
                            <div className="flex border items-center justify-center bg-white mt-2 gap-4 pl-4 rounded-lg">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder='Your Name' className='w-full outline-none border-none bg-transparent h-full px-2 py-4' id="name" />
                            </div>
                        </div>
                        <div className='text-xl mt-4'>
                            <label htmlFor='Email'>Email:</label>
                            <div className="flex border items-center justify-center bg-white mt-2 gap-4 pl-4 rounded-lg">
                            <i class="fa-regular fa-lightbulb"></i>
                            <input type="email" placeholder='Your Email' className='w-full outline-none border-none bg-transparent h-full px-2 py-4' id='Email' />
                            </div>
                        </div>
                        <div className='text-xl mt-4'>
                            <label htmlFor='Idea'>Idea:</label>
                            <div className="flex border items-center justify-center bg-white mt-2 gap-4 pl-4 rounded-lg">
                            <i class="fa-regular fa-lightbulb"></i>
                            <input type="text" placeholder='Your Idea' className='w-full outline-none border-none bg-transparent h-full px-2 py-4' id='Idea' />
                            </div>
                        </div>
                        <button className='bg-blue-500 text-xl py-4 w-full hover:bg-blue-700 transition-all text-white rounded-lg mt-5'>Submit</button>
                    </form>
                </div>
                <div className='w-1/2 h-[90vh] hidden xl:flex  items-center justify-center'>
                    <img src={data.loginSignup} className='w-full object-fit' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Query
