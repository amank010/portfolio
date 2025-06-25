import React, { useState } from 'react'


const NavItems=()=>{
    return(
        <ul className='flex flex-col sm:flex-row gap-6'>
            {["Home", "About", "Work", "Contact"].map((item, index)=>(<li key={index} className='text-neutral-400 hover:text-black font-light text-lg transition-colors nav-li'>
                <a href="/" className='nav-li_a'>
                {item}</a>
                </li>))}
        </ul>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] =useState(false);

    const toggleMenu=()=>{
        setIsOpen((prevIsOpen)=>!prevIsOpen);    
    }

  return (


    
    <header className='sm:border border-neutral-200 sm:rounded-full fixed backdrop-blur-md sm:top-7 z-50  mx-auto max-w-7xl overflow-hidden bg-white/20 left-1/2 transform -translate-x-1/2 w-full'>
      <div className='max-w-7xl mx-auto px-5 sm:px-10'>
        <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
            <a href="/" className='text-black/50 text-xl font-medium transition-colors'>Aman</a>

            <button onClick={toggleMenu} className=' focus-outline-none sm:hidden flex' aria-label='Toggle menu'>
                <img src={isOpen?"assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>

            <nav className='hidden sm:flex'>
                <NavItems/>
            </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen':'max-h-0'}`}>
        <nav className='p-5 sm:hidden'>
            <NavItems/>
        </nav>
      </div>

    </header>

  )
}

export default Navbar
