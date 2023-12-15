import React from "react";
import TextSphare from "../components/TextShpere";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -100 },
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
    <div id="jobs" className="pt-20 md:w-full md:mx-0 mx-3 md:mt-10 ">
      <div className="md:w-3/4 md:mx-auto">
        <h1 className="text-gray-300 md:text-3xl text-2xl md:mb-0 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">02.</span>{" "}
          Skills & Experience {/* you can use full in the width as well */}{" "}
          <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>

        <div className=" md:flex">
          {/* Experience client and projects completed.*/}
          <div className="md:flex md:justify-between md:items-center my-5">
            {/* Texts */}
            <motion.div
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
              className="lg:w-5/12 md:w-2/3 md:flex md:flex-row md:items-start flex-col md:py-6 justify-between text-gray-300">
              {/* about me text */}
              <div className="text-gray-400/80 md:mx-0 md:w-full mx-auto w-11/12 ">
                <p className="md:mb-6 mb-2 text-sm md:text-base">
                  Embarking on my journey as a professional video editor five
                  years ago, I've engaged in remote collaborations with
                  agencies, provided consultancy services to startups, and
                  partnered with skilled individuals to craft compelling video
                  content for both corporate and consumer audiences.
                </p>

                <p className="md:mb-6 mb-2 text-sm md:text-base">
                  I specialize in the art of video editing, employing
                  industry-leading tools and techniques to deliver seamless and
                  visually captivating results. -Applying color correction and
                  grading
                  <br />
                  -Skillful audio editing, encompassing music integration and
                  sound enhancement.
                  <br />
                  -Incorporating transitions, visual effects, and motion
                  graphics for added dynamism.
                  <br />
                  -Collaborating effectively with directors, producers, and team
                  members.
                  <br />
                  -Demonstrating attention to detail for a polished and
                  high-quality final product.
                  <br />
                </p>
              </div>
            </motion.div>
            {/* Animation + charts */}
            <div className="flex flex-col md:w-1/2 items-center ">
              <div className="md:w-5/6 w-1/12 md:h-60">
                <TextSphare />
              </div>
              {/* charts */}
              <div className="md:flex md:justify-between md:w-auto w-full md:gap-5 flex justify-evenly gap-3">
                <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-44 h-40 p-2">
                  <h1 className=" md:text-lg md:tracking-tight text-sm tracking-wide md:font-normal font-semibold text-white">
                    Junior Video Editor
                  </h1>
                  <p className="md:text-sm text-xs text-gray-300">
                    Filmless<span className="block">2020-2022</span>{" "}
                  </p>
                  <p className="text-xs text-gray-300/50">
                    provided the fastest, easiest, and most affordable way for
                    companies to get professional videos.
                  </p>
                </div>
                <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-44 h-40 p-2">
                  <h1 className=" md:text-lg md:tracking-tight text-sm tracking-wide md:font-normal font-semibold text-white">
                    Lead Video Editor
                  </h1>
                  <p className="md:text-sm text-xs  text-gray-300">
                    Twine <span className="block">2022-2023</span>{" "}
                  </p>
                  <p className="text-xs text-gray-300/50">
                    Responsibilities include video editing, quality control,
                    project organization, and offering creative input
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
