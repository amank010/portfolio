import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className=' bg-gradient-to-b from-0% from-[#032a5a] to-60% to-[#000000]'>
      <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>

      </div>
    </div>
  )
}

export default App
