import React from 'react'
import Hackathon from './components/Hackathon'
import Home from './pages/Home.jsx'
import Idea from './pages/Idea.jsx'
import Query from './pages/Query.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hackathon />} />
            <Route path='/home' element={<Home />} />
            <Route path='/idea' element={<Idea />} />
            <Route path='/query' element={<Query />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App