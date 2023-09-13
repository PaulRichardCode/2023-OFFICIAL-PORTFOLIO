import React from "react";
import Black from "../assets/black.mp4";
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
    <div className="relative w-full max-h-screen md:mx-0">
      <video
        autoPlay
        muted
        loop
        src={Black}
        className="md:opacity-5 opacity-0 py-16 min-w-full max-h-1/2"></video>

      {/* Home */}

      {/*  z-10 absolute  md:left-24 lg:left-44 left-5 md:flex md:items-center md:justify-center text-left */}

      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="text-white absolute md:top-24 top-32 md:my-20 lg:left-24 md:mx-20 mx-5 md:flex md:items-center md:w-3/4">
        {/* ABOUT */}
        {/* lg:basis-2/3 md:w-full w-5/6 */}
        <div className=" md:mb-0 mb-8 ">
          <p className="md:text-base text-base md:font-normal font-normal pl-1 text-cyan-300 md:mb-5 mb-4 tracking-wide ">
            Hi, my name is
          </p>
          <h1 className="lg:text-6xl md:text-5xl text-4xl md:mb-6 mb-3 text-gray-300 md:font-bold font-semibold">
            Paul Richard.
          </h1>
          <h1 className="lg:text-5xl md:text-4xl text-3xl md:mb-6 mb-5 text-gray-400 font-semibold lg:mb-10 md:font-bold">
            I build things for the web.
          </h1>
          <p className="md:text-base text-sm pl-1 text-gray-400/80 md:font-normal font-normal md:mb-6 lg:mb-12 mb-10 md:w-2/3">
            I’m a Full-Stack Developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible services for people around the{" "}
            <a
              href="https://www.world.com/"
              target={"_blank"}
              className="text-cyan-300 cursor-pointer hover:underline">
              {" "}
              world
            </a>
            .
          </p>
          <div>
            <a
              href="#contact"
              type="button"
              class="text-cyan-300 duration-300 md:text-base text-sm border hover:shadow hover:shadow-cyan-300 hover:transition-shadow tracking-widest border-cyan-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded md:px-12 px-10 md:py-3 py-4 text-center mr-3 md:mr-0 ">
              Contact Me!
            </a>
          </div>
        </div>

        {/* handshake image */}
        {/* md:w-full md:opacity-80 opacity-40 lg:basis-1/3 md:basis-1/2 md:flex-none flex justify-start */}
        <div className="md:w-full md:opacity-80 opacity-40 lg:basis-1/3 md:basis-1/2 md:flex-none flex justify-start">
          <img
            src={Handshake}
            alt="#"
            /*  md:w-96 w-full */
            className="opacity-80 cursor-pointer hover:transition-opacity-2 hover:opacity-100 md:w-auto md:h-auto w-40"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
