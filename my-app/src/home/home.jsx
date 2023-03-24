import React from "react";
import Black from "../assets/black.mp4";
import Sunset from "../assets/sunset.mp4";

const Home = () => {
  return (
    <div className="relative w-full bg-gray-900/50 py-24">
      <video
        autoPlay
        muted
        loop
        src={Sunset}
        className="opacity-5 bg-transparent"></video>
      <div className="text-white z-10 absolute top-32 left-52 text-2xl">
        <p className="text-base text-cyan-300 py-16`">hi my name is</p>
        <h1>PAUL RICHARD,</h1>
        <h1>WEB DEVELOPER</h1>
      </div>
    </div>
  );
};

export default Home;
