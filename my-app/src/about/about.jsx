import React from "react";
import Handy from "../assets/handpoint.png";
import { FiAward, FiFolder } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div className="md:my-20 w-3/4 mx-auto ">
      <div className="pl-44">
        <h1 className="text-gray-300 text-3xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center justify-end">
          <span className="text-cyan-300 text-2xl pr-4">01.</span> About me{" "}
          <span className="w-72 bg-gray-300/70 h-px ml-8 opacity-40"></span>
        </h1>
      </div>

      {/* image */}

      <div className="flex justify-around items-start">
        <div className="opacity-90">
          <img
            src={Handy}
            alt="pointing hand"
            className="cursor-pointer opacity-80 hover:opacity-100 hover:transition-opacity"
          />
        </div>
        {/* Experience client and projects completed */}
        <div className="lg:w-1/2 md:w-2/3 flex flex-col py-6 justify-around  text-gray-300">
          <div className="flex md:flex-row flex-col justify-between w-full mb-10">
            <div className="flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 w-40 h-40">
              <FiAward className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Experience</h2>
              <p className="text-xs text-gray-300/50">2+ years of working</p>
            </div>
            <div className="flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 w-40 h-40">
              <FiUser className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Clients</h2>
              <p className="text-xs text-gray-300/50">50+ Worldwide</p>
            </div>
            <div className=" flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 w-40 h-40">
              <FiFolder className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Projects</h2>
              <p className="text-xs text-gray-300/50">25+ Completed</p>
            </div>
          </div>
          {/* about me text */}
          <div className="text-gray-400/80">
            <p className="mb-6">
              Hello! My name is Richard and I would describe myself as a highly
              skilled professional with a passion for creating beautiful and
              functional user interfaces. I have a deep understanding of
              front-end technologies such as HTML, CSS, JavaScript, React and
              Typescript.
            </p>
            <p className="mb-6">
              {" "}
              I am always up to date with the latest trends and practices in web
              development.
            </p>
            <p>
              I’ve had the privilege of working at an{" "}
              <a
                href="https://us.mullenlowe.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                advertising agency
              </a>
              , a{" "}
              <a
                href="https://starry.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                start-up
              </a>
              , a{" "}
              <a
                href="https://dangote.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                huge corporation.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
