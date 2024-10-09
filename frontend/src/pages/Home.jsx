import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ImageCarousal from '../components/ImageCarousal.jsx'
import { data } from '../assets/assets.js'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousal />
      <div className='relative '>
        <div className='w-full h-[250vh] sm:h-[180vh] md:h-[260vh] lg:h-[180vh] object-cover text-2xl mt-20 text-black  z-50'>
          <div className=
            " p-6">
            <h1 className=
              "text-3xl font-bold mb-6">Website Structure and Detailed Content</h1>

            <section id="home" className=
              "mb-10">
              <h2 className="text-2xl font-semibold">1. Home Page</h2>

              <div className="hero mb-8">
                <h3 className="text-xl font-bold">Innovate. Collaborate. Transform the Campus Experience.</h3>
                <div href="#" className="bg-blue-500 text-white py-2 px-4 rounded mt-40">Join the Hackathon</div>
                <img src={data.contact} alt="Campus Collaboration" className=
                  "w-full h-64 object-cover mt-4" />
              </div>

              <p className="mb-4">
                A smart campus integrates advanced technology, data, and communication systems to create an efficient, sustainable, and user-friendly environment for students, faculty, and staff. It enhances learning, improves operational efficiency, and promotes a more connected campus community.
              </p>
              <p>Consider adding a short video introducing the concept of smart campuses and highlighting past successful projects.</p>
            </section>

            <section id="about" className=
              "mb-10">
              <h2 className="text-2xl font-semibold">2. About Section</h2>
              <p>Welcome to the Smart Campus Hackathon! This event invites tech enthusiasts, students, and innovators to come together and brainstorm solutions that make our campus smarter, more efficient, and more inclusive.</p>

              <h3 className="font-bold mt-4">Goals:</h3>
              <ul className="list-disc list-inside">
                <li>To ignite innovation in campus technology.</li>
                <li>To foster collaboration across disciplines.</li>
                <li>To address real-world challenges faced by students and institutions.</li>
              </ul>

              <h3 className="font-bold mt-4">Objectives:</h3>
              <ul className="list-disc list-inside">
                <li>Foster Creativity.</li>
                <li>Encourage Collaboration.</li>
                <li>Promote Sustainability.</li>
              </ul>
            </section>

            <section id="smart-campus" className=
              "mb-10">
              <h2 className="text-2xl font-semibold">3. What is a Smart Campus?</h2>

              <h3 className="font-bold mt-4">Definition and Key Features:</h3>
              <h4 className="font-bold mt-2">IoT Integration:</h4>
              <p>The Internet of Things (IoT) involves connecting everyday objects to the internet...</p>

              <h4 className="font-bold mt-2">Data Analytics:</h4>
              <p>Data analytics involves gathering data from various sources...</p>

              <h4 className="font-bold mt-2">Sustainability Initiatives:</h4>
              <p>Smart campuses often focus on sustainability...</p>

              <h4 className="font-bold mt-2">Enhanced Connectivity:</h4>
              <p>Reliable and fast internet access</p>


            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
