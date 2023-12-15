import React from "react";
import Handy from "../assets/handpoint.png";
import { FiAward, FiFolder } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const boxVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div id="about" className="md:my-20 md:w-3/4 md:mx-auto mx-3 mt-72">
      <div className="md:pl-44 md:pt-20 pt-16">
        <h1 className="text-gray-300 md:text-3xl text-2xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center md:justify-end justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">01.</span>{" "}
          About me{" "}
          <span className="lg:w-72 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>
      </div>

      {/* image*/}

      <div className="md:flex md:justify-around md:items-center">
        <motion.div className="md:opacity-90 opacity-20 md:left-0 md:-top-20 left-1/2 mt-16 top-4/5 md:rotate-0 -rotate-180 md:relative absolute">
          <img
            src={Handy}
            alt="pointing hand"
            className="cursor-pointer md:w-auto md:h-auto w-40 opacity-80 hover:opacity-100 hover:transition-opacity"
          />
        </motion.div>

        {/* Experience client and projects completed */}

        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="lg:w-1/2 md:w-2/3 flex flex-col md:py-0 py-6 justify-around text-gray-300">
          <div className="flex md:flex-row flex-wrap md:mx-0 md:gap-0 gap-3 md:justify-around md:flex-nowrap sm:justify-between md:w-full w-11/12 mx-auto md:mb-2 mb-10">
            <div className="flex flex-col justify-around py-8 items-center relative rounded-2xl bg-gray-700/10 md:w-40 sm:h-40 w-36 h-36 ">
              <FiAward className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Experience</h2>
              <p className="text-xs text-gray-300/50">5+ years of working</p>
            </div>
            <div className="flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 md:w-40 sm:h-40 w-36 h-36">
              <FiUser className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Clients</h2>
              <p className="text-xs text-gray-300/50">50+ Worldwide</p>
            </div>
            <div className=" flex flex-col justify-around py-8 items-center rounded-2xl bg-gray-700/10 md:w-40 sm:h-40 w-36 h-36">
              <FiFolder className="text-3xl mb-4 text-cyan-300" />
              <h2 className="text-base font-medium">Projects</h2>
              <p className="text-xs text-gray-300/50 ">40+ Completed</p>
            </div>
          </div>
          {/* about me text */}
          <div className="text-gray-400/80 md:mx-0 md:w-full mx-auto w-11/12 ">
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              Hello! I'm Richard, a Video Editor with expertise in crafting
              compelling visual content. Proficient in editing software like
              Adobe Premiere and Final Cut Pro, I thrive on bringing ideas to
              life through dynamic video creations. <br />
              Over the course of my career, I've had the opportunity to
              collaborate on a diverse range of video projects, gaining valuable
              experience in various editing techniques and styles.
            </p>
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              I've worked with clients ranging from{" "}
              <a
                href="https://youtu.be/BI4DR_uYKFU?si=PT1_SCc1yC1Q5aYb"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                Youtubers and Influencers
              </a>
              , as well as
              <a
                href="https://nurp.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                {" "}
                start-ups
              </a>
              , a{" "}
              <a
                href="https://wwe.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                huge corporation.
              </a>{" "}
              My current focus revolves around developing visually appealing and
              inclusive video content for a diverse client.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
