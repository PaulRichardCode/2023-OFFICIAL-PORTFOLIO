import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Link = () => {
  return (
    <div className="max-w-2xl fixed">
      <ul className="absolute z-50 top-96 left-16">
        <li>
          <a href="https://github.com/PaulRichardCode" target={"_blank"}>
            <FiGithub className="text-gray-300 text-2xl md:block hidden cursor-pointer mb-7" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/RichC0DE" target={"_blank"}>
            <FiTwitter className="text-gray-300 text-2xl md:block hidden cursor-pointer mb-7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/richard-paul-11321124b/"
            target={"_blank"}>
            <FiLinkedin className="text-gray-300 text-2xl md:block hidden cursor-pointer mb-7" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/richardpaul06/" target={"_blank"}>
            <FiInstagram className="text-gray-300 text-2xl md:block hidden cursor-pointer mb-7" />
          </a>
        </li>
        <li>
          <a href="https://paulrichardevs@gmail.com" target={"_blank"}>
            <FiMail className="text-gray-300 text-2xl md:block hidden cursor-pointer mb-7" />
          </a>
        </li>
        <li className="flex items-center justify-center">
          <div className="w-1 bg-cyan-200 h-screen overflow-hidden"></div>
        </li>
      </ul>
    </div>
  );
};

export default Link;
