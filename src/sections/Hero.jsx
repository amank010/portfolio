import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import CanvasLoader from '../components/CanvasLoader.jsx'
import Laptop from '../components/laptop.jsx'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5'>
        <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#71f1ff] from-30%  to-[#2d27e5] to-70% text-2xl sm:text-3xl font-medium text-center'>Hi, I am Aman!
            <span className='waving-hand'>👋</span>
        </p>
        <p className='text-white text-center md:text-6xl text-3xl font-bold'>
            BUILDING THINGS THAT MAKE A DIFFERENCE. 
        </p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
            <Suspense 
            fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,0,30]}/>
            <Laptop scale={30} position={[0,0,0]} rotation={[0.2,1,0]}/> 
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]}/>

            </Suspense> 
        </Canvas>
      </div>
    </div>
  )
}

export default Hero
