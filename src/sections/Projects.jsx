import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 my-20 sm:px-50 px-15">
      <h1 className="text-5xl font-medium mb-7">Projects</h1>
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/*  grid */}
        <div className="col-span-1 xl:row-span-1">
          {/*  grid container, maybe one project */}
          <div className="w-full h-full border border-neutral-200  bg-white/20 backdrop-blur-md rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            
            <h1 className="text-2xl font-medium text-center ">
              Full Stack E-Commerce Web App
            </h1>


            <img
            onClick={()=>window.open("https://e-commerce-frontend-two-beta.vercel.app")}
              className="cursor-pointer w-full rounded-md h-fit object-contain"
              src="/assets/forever.png"
              alt=""
            />

            <div className="">
              <div className="flex justify-between my-2">
                <button
                
                  onClick={() =>
                    window.open("https://github.com/amank010/E-Commerce-App")
                  }

                  className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300"
                >
                  Github
                </button>
                <button
                  onClick={() => window.open("https://e-commerce-frontend-two-beta.vercel.app")}
                  className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Live
                </button>
              </div>
              <p className="text-[#656565] text-base">
                I have created this MERN Fullstack E-Commerce Web App. Including
                Authentication, Payment Gateway, Admin Panel, and many more
                features.{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:span-3">
          <div
          className="w-full h-full border border-neutral-200  bg-white/20 backdrop-blur-md rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <h1 className="text-2xl font-medium text-center">
              Full Stack Real-Time Chat App
            </h1>
            <img
            onClick={()=>window.open("https://chat-app-frontend-ruddy-omega.vercel.app/login")}
              className="cursor-pointer w-full rounded-md h-fit object-contain"
              src="/assets/chatApp.png"
              alt=""
            />
            <div>
              <div className="flex justify-between my-2">
                <button
                onClick={() =>
                  window.open("https://github.com/amank010/Chat-App")
                }
                className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Github
                </button>
                <button
                onClick={() => window.open("https://chat-app-frontend-ruddy-omega.vercel.app/login")}
                className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Live
                </button>
              </div>
              <p className="text-[#656565] text-base">
                I have created this MERN Fullstack Real-Time Chat App using
                Socket.io. and including Authentication, Login, Create Account
                and many more features.{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:span-3">
          <div className="w-full h-full border border-neutral-200  bg-white/20 backdrop-blur-md rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <h1 className="text-2xl font-medium text-center">
              Dijkstra's Algorithm Visualiser
            </h1>
            <img
            onClick={()=>window.open("https://pathfinder-dijkstra-visualiser.vercel.app")}
              className="cursor-pointer w-full rounded-md h-fit object-contain"
              src="/assets/dsa.png"
              alt=""
            />
            <div>
              <div className="flex justify-between my-2">
                <button
                onClick={()=>window.open("https://github.com/amank010/pathfinder")}
                className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Github
                </button>
                <button
                onClick={() => window.open("https://pathfinder-dijkstra-visualiser.vercel.app")}
                className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Live
                </button>
              </div>
              <p className="text-[#656565] text-base">
                Built an interactive pathfinding visualizer using React.js to
                animate Dijkstra’s Algorithm on a 2D grid. Implemented
                grid-based node system with mouse-based wall placement and
                start/finish node selection{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:span-3">
          <div className="w-full h-full border border-neutral-200  bg-white/20 backdrop-blur-md rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <h1 className="text-2xl font-medium text-center">
              Portfolio Website
            </h1>

            <img
            onClick={()=>window.open("https://portfolio-wine-pi-12.vercel.app")}

              className="cursor-pointer w-full rounded-md h-fit object-contain
              hover:backdrop-blur-md
              "
            
              src="/assets/portfolio.png"
              alt=""
            />

            <div>
              <div className="flex justify-between my-2">
                <button
                onClick={()=>window.open("https://github.com/amank010/portfolio")}
                className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Github
                </button>
                <button
                onClick={() => window.open("https://portfolio-wine-pi-12.vercel.app")}
                className="cursor-pointer border border-neutral-200 backdrop-blur-md bg-white/20 rounded-full px-4 py-1 hover:bg-black hover:text-white hover:border-black ease-in-out duration-300">
                  Live
                </button>
              </div>
              <p className="text-[#656565] text-base">
                Built my 3D portfolio website using three.js, React.js React Fiber and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;
