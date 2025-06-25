import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    
    <div className='relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_rgba(0,102,255,0.4)_20%,_transparent_90%)] items-center justify-center'>
      <div className='max-w-8xl mx-auto '>
      <Navbar/>
      <Hero/>

      </div>
    </div>
  )
}

export default App
