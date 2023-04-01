import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Link = () => {
  return (
    <div className="max-w-2xl fixed z-50">
      <ul className="absolute top-96 left-16">
        <li>
          <a href="https://github.com/PaulRichardCode" target={"_blank"}>
            <FiGithub className="text-gray-300/80 text-2xl md:block hidden cursor-pointer mb-7 hover:text-cyan-300/80 hover:-translate-y-1 hover:transition duration-100" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/RichC0DE" target={"_blank"}>
            <FiTwitter className="text-gray-300/80 text-2xl md:block hidden cursor-pointer mb-7 hover:text-cyan-300/80 hover:-translate-y-1 hover:transition duration-100" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/richard-paul-11321124b/"
            target={"_blank"}>
            <FiLinkedin className="text-gray-300/80 text-2xl md:block hidden cursor-pointer mb-7 hover:text-cyan-300/80 hover:-translate-y-1 hover:transition duration-100" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/richardpaul06/" target={"_blank"}>
            <FiInstagram className="text-gray-300/80 text-2xl md:block hidden cursor-pointer mb-7 hover:text-cyan-300/80 hover:-translate-y-1 hover:transition duration-100" />
          </a>
        </li>
        <li>
          <a href="https://paulrichardevs@gmail.com" target={"_blank"}>
            <FiMail className="text-cyan-300/80 text-2xl md:block hidden cursor-pointer mb-7 hover:text-gray-300/80 hover:-translate-y-1 hover:transition duration-100" />
          </a>
        </li>
        <li className="flex items-center justify-center">
          <div className="w-px bg-gray-300/80 h-screen md:block hidden "></div>
        </li>
      </ul>
    </div>
  );
};

export default Link;
