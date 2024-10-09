import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { data } from '../assets/assets'

const Idea = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen">
            <h1 className='text-4xl mt-10 ml-10'>My Ideas is to modern Id Card</h1>
            <img src={data.id} className='w-2/3 hidden md:flex mx-auto h-full px-40 rounded-lg overflow-hidden mt-20' alt="" />
            <p className='px-10 mt-20 mb-5 text-xl font-semibold '>My idea is to use modern Id Card in Colleges so that department can define its the attendance of students.</p>
            <p className='text-2xl font-bold  pl-10 mt-20'>Advantages</p>
            <ul className='px-20 mt-4 text-xl mb-7 flex flex-col gap-4 '>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Easy To maintain Students Large data in a single software.</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Easy To extract and filter data of students</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    No frauds and confusion in attendance</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Contact and solution for to those who are absentees most of the time.</li>
            </ul>
            <p className='text-2xl font-bold  pl-10'>Entry Limitations:</p>
            <ul className='px-20 mt-4 text-xl mb-7 flex flex-col gap-4 '>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Student must give their entry in between 8:00 am to 9:00 am only.</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Check Student is of Our college is or not or the id is Expired or not it means that every id had a time interval to be active </li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    on Sunday Attendance should be neglected.</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    After 8:00 am student should be absent even he is present in college.</li>
            </ul><p className='text-2xl font-bold  pl-10'>Exit Limitations:</p>
            <ul className='px-20 mt-4 text-xl mb-7 flex flex-col gap-4 '>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Student must give entry first to exit.</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Student can leave college in time between 11:00 am to 2:00 pm only.</li>
                <li className='flex gap-5 items-center '>z
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    If Student is entered in collge and cannot give his exit attendance than he will be called as absenty.</li>
                <li className='flex gap-5 items-center '>
                    <i className="text-green-500 text=-xl fa-solid fa-check"></i>
                    Every Student can see his regular counted attendance in the display and also see the days of every month to come college.</li>
            </ul>
        </div>
        <Footer />
    </div>
  )
}

export default Idea
