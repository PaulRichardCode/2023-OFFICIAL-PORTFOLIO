import React from "react";
import Black from "../assets/black.mp4";
import Sunset from "../assets/sunset.mp4";

const Home = () => {
  return (
    <div className="relative w-full">
      <video autoPlay muted loop src={Sunset} className=""></video>
      <div className="text-white z-10 absolute left-1/2 top-1/2 text-2xl">
        <h1>This is the Home</h1>
        <p>Lets go bro</p>
      </div>
    </div>
  );
};

export default Home;
