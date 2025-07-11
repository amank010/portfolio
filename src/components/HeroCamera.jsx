import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({children}) => {

    const groupRef =useRef();

    useFrame((state,delta)=>{
        //mobile: easing.damp3(state.camera.position, [0,0,30],0.25, delta)
        easing.dampE(
          groupRef.current.rotation, [
            -state.pointer.y/2.5,state.pointer.x/2.5,0],0.25,delta)

      })
  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default HeroCamera
