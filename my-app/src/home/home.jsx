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
        className="opacity-5 py-16"></video>

      {/* Home */}
      <div className="text-white my-24 z-10 absolute top-24 left-52 md:flex md:items-center md:justify-center text-left">
        <div className="">
          <p className="text-lg font-medium pl-1 text-cyan-300/80 mb-5 ">
            Hi, my name is
          </p>
          <h1 className="text-7xl mb-6 text-gray-300 font-bold">
            Paul Richard.
          </h1>
          <h1 className="text-6xl mb-6 text-gray-400 font-bold">
            I build things for the web.
          </h1>
          <p className="text-lg pl-1 text-gray-400 font-medium mb-6 w-4/5">
            I’m a Front-End Developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible services for people around the world.
          </p>
          <a
            href="#"
            type="button"
            id="contact"
            class="text-cyan-300 text-2xl border border-cyan-300 hover:bg-red-50/10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded px-16 pt-3 pb-2  text-center mr-3 md:mr-0 ">
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
