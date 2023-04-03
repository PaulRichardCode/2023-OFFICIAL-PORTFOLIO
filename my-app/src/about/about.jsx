import React from "react";
import Handy from "../assets/handpoint.png";
import { FiAward, FiFolder } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div className="my-20 w-2/3 mx-auto ">
      <div className="pl-44">
        <h1 className="text-gray-300 text-3xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center justify-end">
          <span className="text-cyan-300 text-2xl pr-4">01.</span> About me{" "}
          <span className="w-72 bg-gray-300/70 h-px ml-8 opacity-40"></span>
        </h1>
      </div>

      <div className="flex justify-around">
        <div className="opacity-90">
          <img
            src={Handy}
            alt="pointing hand"
            className="cursor-pointer opacity-80 hover:opacity-100 hover:transition-opacity"
          />
        </div>
        {/* Experience client and projects completed */}
        <div className="lg:w-1/2 md:w-2/3 flex flex-col py-6 justify-around text-gray-300">
          <div className="flex md:flex-row flex-col justify-between w-full">
            <div className="flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 w-40 h-40">
              <FiAward className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-lg">Experience</h2>
              <p className="text-xs text-gray-300/50">3+ years of working</p>
            </div>
            <div className="flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 w-40 h-40">
              <FiUser className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-lg">Clients</h2>
              <p className="text-xs text-gray-300/50">50+ Worldwide</p>
            </div>
            <div className=" flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 w-40 h-40">
              <FiFolder className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-lg">Projects</h2>
              <p className="text-xs text-gray-300/50">25+ Completed</p>
            </div>
          </div>
          {/* about me text */}
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
