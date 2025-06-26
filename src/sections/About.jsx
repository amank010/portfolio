import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Laptop from "../components/Laptop";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Dtu from "../components/Dtu";

const About = () => {
  return (
    <section className="scroll-mt-24 my-20 sm:px-50 px-15" id="about">
      <p className="text-5xl font-medium mb-7">About Me</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-7 gap-5 w-full">
        <div className="flex flex-col gap-5 relative shadow-2xl shadow-black/20 bg-white/20 backdrop-blur-md rounded-lg px-5 py-10">
          <div>
            <img
              className="w-12 h-12 rounded-md"
              src="/assets/face.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="animatedText text-4xl font-medium">I'm Aman Kumar</p>
            <p className="animatedText text-3xl font-light text-gray-500">
              A FULL STACK DEVELOPER
            </p>
            <p className="animatedText text-xl font-medium">
              Passionate undergrad computer science student at Delhi
              Technological University (DTU). A Full Stack MERN developer with
              hands-on experience and a solid understanding of web development.
              Proficient in HTML, CSS, JavaScript, React, Node.js, Express.js,
              and MongoDB. Seeking opportunities to contribute to innovative
              projects and collaborate with like-minded individuals.
            </p>
          </div>



          <div className="flex">
          <div className="flex gap-2 mt-10">
            <img
              className="h-15 cursor-pointer"
              src="https://img.icons8.com/?size=128&id=3tC9EQumUAuq&format=png"
              alt=""
              onClick={() => window.open("https://github.com/amank010")}
            />

            <img
              className="h-15 cursor-pointer "
              onClick={() =>
                window.open("https://www.linkedin.com/in/aman-kumar-4165071b8/")
              }
              src="https://img.icons8.com/?size=96&id=8808&format=png"
              alt=""
            />
            </div>


            <div className="flex gap-2 mt-10 absolute right-0 px-5">
            <img
              className="h-15 cursor-pointer "
              onClick={() => window.open("https://x.com/AMAN1266331")}
              src="https://img.icons8.com/?size=96&id=ClbD5JTFM7FA&format=png"
              alt=""
            />

            <img
              className="h-15 cursor-pointer "
              onClick={() =>
                window.open("https://www.instagram.com/amankr010/")
              }
              src="https://img.icons8.com/?size=96&id=85154&format=png"
              alt=""
            />
          </div>
          </div>

          <div>
            <div className="flex">
                <button
                onClick={()=>window.open("https://docs.google.com/document/d/1ozvuOFXaB7C1NroXLmHuafIx_3Xz6eM5NZraSSS4huk/edit?usp=sharing")} 
                className="md:text-xl px-2 py-2 border rounded-md cursor-pointer hover:bg-black hover:text-white ease-in-out duration-300">
                    My Resume 📄
                </button>

                <button 
                onClick={()=>window.open("https://wa.me/918130703182")}
                className="md:text-xl py-2 ml-auto px-2 border rounded-md cursor-pointer hover:bg-black hover:text-white ease-in-out duration-300 ">
                    Contact Me 📞
                </button>
            </div>
          </div>
        </div>


        <div className="border border-neutral-200  bg-white/20 backdrop-blur-md rounded-lg sm:p-7 p-4 flex flex-col gap-5">
              <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />

                <Center>
                    <Suspense fallback={CanvasLoader}>
                        <group scale={2}
                        // position={[-5, 1.2, -7]}
                        // rotation={[0.02, -0.25, 0]}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        >
                            <Dtu/>
                        </group>
                    </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} 
                minPolarAngle={Math.PI / 2}
                enableZoom={true}
                enablePan={true}
                />

                {/* <pointLight position={[-10, -10, -10]} />
                <spotLight
                  position={[-20, 20, 20]}
                  angle={0.5}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}
                /> */}


              </Canvas>
        </div>
      </div>
    </section>
  );
};

export default About;
