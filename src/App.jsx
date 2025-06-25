import React, { useEffect, useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

const App = () => {

  const [isProject, setIsProject] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const projectOffset = document.getElementById('projects')?.offsetTop || 0;

      setIsProject(scrollY + window.innerHeight > projectOffset +100);
    };
    window.addEventListener('scroll', handleScroll);
    return()=>window.removeEventListener('scroll', handleScroll);
  },[]);


  return (
    <div className='relative min-h-screen w-full'>
      {/* blue gradient */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${isProject ? 'opacity-0' : 'opacity-100'} bg-[radial-gradient(ellipse_at_top,_rgba(0,102,255,0.4)_20%,_transparent_90%)] `}/>
      

      {/* violet */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${isProject ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_rgba(138,43,226,0.7)_20%,_white_90%)] `}/>
        

  
      <div className='relative z-10 max-w-8xl mx-auto '>
      <Navbar/>
      <Hero/>
      <Projects/>
      </div>
    
    </div>
  )
}

export default App
