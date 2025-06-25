import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import CanvasLoader from '../components/CanvasLoader.jsx'
import Laptop from '../components/Laptop.jsx'
// import { Leva, useControls } from 'leva'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import HeroCamera from '../components/HeroCamera.jsx'

const Hero = () => {

  // const x =useControls('Laptop',
  //   {
  //     positionX:{
  //       value:2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY:{
  //       value:2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ:{
  //       value:2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX:{
  //       value:0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY:{
  //       value:0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ:{
  //       value:0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale:{
  //       value:1,
  //       min: -10,
  //       max: 50,
  //     }
  //   }
  // )

  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768,maxWidth: 1024});

  // const sizes= calculateSizes(isMobile, isTablet, isSmall);


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
        {/* <Leva/> */}
        <Canvas className='w-full h-full'>
            <Suspense 
            fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,1,30]}/>
            <HeroCamera>
            <Laptop 
            // scale={30} 
            // position={[0,0,0]} 
            // rotation={[0.2,1,0]}
            scale = {isMobile ? 30 : 40}
            rotation={[0, Math.PI/7, 0]}
            position={[-1, -3, 2]} 
            />
            </HeroCamera>
             
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]}/>

            </Suspense> 
        </Canvas>
      </div>
    </div>
  )
}

export default Hero
