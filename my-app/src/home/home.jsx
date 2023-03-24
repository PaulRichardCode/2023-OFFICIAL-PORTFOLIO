import React from "react";
import Black from "../assets/black.mp4";
import Sunset from "../assets/sunset.mp4";
import Handshake from "../assets/shakinghands.png";

const Home = () => {
  return (
    <div className="relative w-full bg-gray-900/50 py-24">
      <video
        autoPlay
        muted
        loop
        src={Sunset}
        className="opacity-5 bg-transparent"></video>
      <div className="text-white z-10 absolute top-32 left-52 flex justify-between">
        <div>
          <p className="text-base text-cyan-300/90 mb-6 ">hi my name is</p>
          <h1 className="text-7xl mb-6 text-gray-300">PAUL,</h1>
          <h1 className="text-7xl mb-6 text-gray-300">WEB DEVELOPER</h1>
          <p className="text-base text-cyan-300/90 mb-6 ">nice to meet you</p>
        </div>
        <span className="bg-red-300">
          <img src={Handshake} alt="#" className="w-32" />
        </span>
      </div>
    </div>
  );
};

export default Home;
