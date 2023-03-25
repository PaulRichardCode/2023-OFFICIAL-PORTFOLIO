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
      <div className="text-white my-24 z-10 absolute top-32 left-52 md:flex md:items-center md:justify-center text-left">
        <div className="">
          <p className="text-lg font-medium pl-1 text-cyan-300/90 mb-6 ">
            Hi, my name is
          </p>
          <h1 className="text-7xl mb-6 text-gray-300 font-bold">
            Paul Richard.
          </h1>
          <h1 className="text-6xl mb-6 text-gray-400 font-bold">
            I build things for the web.
          </h1>
          <p className="text-lg pl-1 text-gray-400 font-medium mb-6 w-2/3">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible services for people around the world.
          </p>
          <button
            type="button"
            class="text-cyan-300 border border-cyan-300 hover:bg-red-50/10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
            Resume
          </button>
        </div>
        {/* handshake image */}
        <div className="w-full">
          <img src={Handshake} alt="#" className="opacity-75 w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
