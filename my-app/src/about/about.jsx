import React from "react";
import Handy from "../assets/handpoint.png";
import { FiAward, FiFolder } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="md:my-20 md:w-3/4 md:mx-auto mx-3 my-96">
      <div className="md:pl-44">
        <h1 className="text-gray-300 md:text-3xl text-2xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center md:justify-end justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">01.</span>{" "}
          About me{" "}
          <span className="md:w-72 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>
      </div>

      {/* image*/}

      <div className="md:flex md:justify-around md:items-start">
        <div className="md:opacity-90 opacity-20 md:left-0 md:-top-20 left-1/2 mt-16 top-4/5 md:rotate-45 -rotate-180 md:relative absolute">
          <img
            src={Handy}
            alt="pointing hand"
            className="cursor-pointer md:w-auto md:h-auto w-40 opacity-80 hover:opacity-100 hover:transition-opacity"
          />
        </div>

        {/* Experience client and projects completed */}

        <div className="lg:w-1/2 md:w-2/3 flex flex-col py-6 justify-around text-gray-300">
          <div className="flex md:flex-row flex-wrap md:mx-0 md:gap-0 gap-3 md:justify-around md:flex-nowrap sm:justify-between md:w-full w-11/12 mx-auto mb-10">
            <div className="flex flex-col justify-around py-8 items-center relative rounded-2xl bg-gray-700/10 md:w-40 sm:h-40 w-36 h-36 ">
              <FiAward className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Experience</h2>
              <p className="text-xs text-gray-300/50">2+ years of working</p>
            </div>
            <div className="flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 md:w-40 sm:h-40 w-36 h-36">
              <FiUser className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Clients</h2>
              <p className="text-xs text-gray-300/50">50+ Worldwide</p>
            </div>
            <div className=" flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 md:w-40 sm:h-40 w-36 h-36">
              <FiFolder className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Projects</h2>
              <p className="text-xs text-gray-300/50">25+ Completed</p>
            </div>
          </div>
          {/* about me text */}
          <div className="text-gray-400/80 md:mx-0 md:w-full mx-auto w-11/12 ">
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              Hello! My name is Richard, I am a Front-End Developer located in
              Nigeria. I enjoy creating things that live on the internet. I
              would describe myself as a highly skilled professional with a
              passion for creating beautiful and functional user interfaces. I
              have a deep understanding of front-end technologies such as HTML,
              CSS, JavaScript, Typescript, React and Next.Js
            </p>
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              {" "}
              I am always up to date with the latest trends and practices in web
              development.
            </p>
            <p className="md:mb-6 mb-2 text-sm md:text-base">
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
              </a>{" "}
              My main focus these days is building accessible, inclusive
              products and digital experiences for a variety of clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
