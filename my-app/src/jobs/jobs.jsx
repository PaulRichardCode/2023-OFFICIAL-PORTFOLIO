import React from "react";
import Handy from "../assets/handpoint.png";
import { FiAward, FiFolder } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div id="jobs" className="md:my-20 md:w-3/4 md:mx-auto mx-3 my-96">
      <div className="md:pl-44">
        <h1 className="text-gray-300 md:text-3xl text-2xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center md:justify-end justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">01.</span>{" "}
          Where i have worked{" "}
          <span className="md:w-72 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>
      </div>

      {/* image*/}

      <div className="md:flex md:justify-around md:items-start">
        {/* Experience client and projects completed */}

        <div className="lg:w-1/2 md:w-2/3 flex flex-col py-6 justify-around text-gray-300">
          {/* about me text */}
          <div className="text-gray-400/80 md:mx-0 md:w-full mx-auto w-11/12 ">
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              Hello! My name is Richard and I enjoy creating things that live on
              the internet. I would describe myself as a highly skilled
              professional with a passion for creating beautiful and functional
              user interfaces. I have a deep understanding of front-end
              technologies such as HTML, CSS, JavaScript, Typescript, React and
              Next.Js
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
