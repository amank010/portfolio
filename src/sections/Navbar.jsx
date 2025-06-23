import React, { useState } from 'react'


const NavItems=()=>{
    return(
        <ul className='flex gap-6'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Skills</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] =useState(false);

    const toggleMenu=()=>{
        setIsOpen((prevIsOpen)=>!prevIsOpen);    
    }

  return (
    <header className='border rounded-full fixed backdrop-blur-lg text-white w-full z-50 left-0 right-0 top-0'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
            <a href="/" className='text-neutral-400 hover:text-white text-xl font-medium transition-colors'>Aman</a>

            <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus-outline-none sm:hidden flex' aria-label='Toggle menu'>
                <img src={isOpen?"assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>

            <NavItems></NavItems>
        </div>
      </div>
      
    </header>
  )
}

export default Navbar
