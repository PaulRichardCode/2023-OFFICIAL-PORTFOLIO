import React from "react";
import Handy from "../assets/handpoint.png";
import { FiAward } from "react-icons/fi";

const About = () => {
  return (
    <div className="my-20 w-2/3 mx-auto ">
      <div className="pl-44">
        <h1 className="text-gray-300 text-3xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center justify-end">
          <span className="text-cyan-300 text-2xl pr-4">01.</span> About me{" "}
          <span className="w-72 bg-gray-300/70 h-px ml-8 opacity-40"></span>
        </h1>
      </div>

      <div className="flex items-center justify-around">
        <div className="opacity-90">
          <img
            src={Handy}
            alt="pointing hand"
            className="cursor-pointer opacity-80 hover:opacity-100 hover:transition-opacity"
          />
        </div>
        <div className="lg:w-1/2 md:w-2/3 text-white">
          <div className="flex w-full">
            <div className="">
              <FiAward className="text-7xl" />
              <h2>Experience</h2>
              <p>3+ years of working</p>
            </div>
          </div>
          <p>
            Hello! My name is Richard and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
