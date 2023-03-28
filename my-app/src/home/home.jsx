import React from "react";
import Black from "../assets/black.mp4";
import Sunset from "../assets/sunset.mp4";
import Handshake from "../assets/shakinghands.png";

const Home = () => {
  return (
    <div className="relative w-full bg-gray-900/50 ">
      <video
        autoPlay
        muted
        loop
        src={Black}
        className="opacity-5 py-16 w-full min-h-screen"></video>

      {/* Home */}

      <div className="text-white md:my-24 z-10 absolute top-28 md:left-32 lg:left-52 left-5 md:flex md:items-center md:justify-center text-left">
        <div className="">
          <p className="md:text-lg text-base md:font-medium font-normal pl-1 text-cyan-300 md:mb-5 mb-4 tracking-wide ">
            Hi, my name is
          </p>
          <h1 className="md:text-7xl text-4xl md:mb-6 mb-3 text-gray-300 md:font-bold font-semibold">
            Paul Richard.
          </h1>
          <h1 className="md:text-6xl text-3xl md:mb-6 mb-5 text-gray-400 font-semibold md:font-bold">
            I build things for the web.
          </h1>
          <p className="md:text-lg text-sm pl-1 text-gray-400 md:font-medium font-normal md:mb-6 mb-10 w-4/5">
            I’m a Front-End Developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible services for people around the{" "}
            <a href="#" className="text-cyan-300 cursor-pointer">
              {" "}
              world.
            </a>
          </p>
          <a
            href="#"
            type="button"
            id="contact"
            class="text-cyan-300 md:text-xl text-sm border tracking-widest border-cyan-300 hover:bg-red-50/10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded md:px-16 px-10 md:py-3 py-4 text-center mr-3 md:mr-0 ">
            Contact Me!
          </a>
        </div>
        {/* handshake image */}
        <div className="w-full basis-4/5">
          <img src={Handshake} alt="#" className="opacity-75 w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
