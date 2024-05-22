import React from "react";
import Black from "../assets/videobgEdit.mp4";
import Sunset from "../assets/sunset.mp4";
import Handshake from "../assets/shakinghands.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.5 },
  };
  return (
    <div className="relative md:w-9/12 md:flex md:mx-auto md:justify-center w-full h-96 md:mb-0 mb-40 md:h-screen">
      <video
        autoPlay
        muted
        loop
        src={Black}
        className="md:opacity-30 opacity-40 md:py-16 md:w-full md:h-full h-full object-cover mt-10">
        {" "}
      </video>

      {/* Home */}

      {/*  z-10 absolute  md:left-24 lg:left-44 left-5 md:flex md:items-center md:justify-center text-left */}

      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="text-white absolute md:top-24 top-32 md:my-20 lg:left-24 md:mx-20 mx-5 md:flex md:items-center md:w-3/4">
        {/* ABOUT */}
        {/* lg:basis-2/3 md:w-full w-5/6 */}
        <div className=" md:mb-0 mb-8 mx-auto w-full text-center">
          <p className="md:text-2xl text-base md:font-normal font-normal pl-1 text-cyan-300 mb-4 tracking-wide ">
            I'M{" "}
            <span className="md:text-2xl text-xl mb-3 text-gray-300 md:font-light font-semibold">
              Paul Richard
            </span>
          </p>

          <h1 className="lg:text-8xl md:text-6xl text-5xl md:mb-6 mb-5 text-center text-cyan-400 font-thin lg:mb-3 md:font-thin">
            <div className="lg:text-7xl">
              <span className="text-gray-300">I</span> AM <br />{" "}
            </div>
            <span className="font-bold text-cyan-50">YOUR </span>
            EDITOR
          </h1>
          <p className="md:text-base text-xs pl-1 text-cyan-50 md:font-normal tracking-widest font-normal md:mb-6 lg:mb-7 mb-10 md:w-1/3 mx-auto">
            CRAFTING STORIES, FRAME BY FRAME - YOUR VISION, PERFECTED.
          </p>
          <div className="md:w-1/4 w-1/2 flex justify-around md:mx-auto mx-auto">
            <a
              href="#contact"
              type="button"
              class="text-cyan-300 duration-300 md:text-sm text-xs border hover:shadow hover:shadow-cyan-300 hover:transition-shadow tracking-widest border-cyan-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-light md:px-3 px-3 md:py-3 py-2 text-center mr-3 md:mr-0 ">
              WORKS
            </a>
            <a
              href="#contact"
              type="button"
              class="text-cyan-300 duration-300 md:text-sm text-xs border hover:shadow hover:shadow-cyan-300 hover:transition-shadow tracking-widest border-cyan-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-light md:px-3 px-3 md:py-3 py-2 text-center mr-3 md:mr-0 ">
              CALL
            </a>
          </div>
        </div>

        {/* handshake image */}
        {/* md:w-full md:opacity-80 opacity-40 lg:basis-1/3 md:basis-1/2 md:flex-none flex justify-start */}
      </motion.div>
    </div>
  );
};

export default Home;
