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
    <div id="jobs" className="md:py-20 md:w-full md:mx-0 mx-3 mt-10">
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
                  Since beginning my journey as a freelance developer 2 years
                  ago, I’ve done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create web
                  products for both business and consumer use.
                </p>

                <p className="md:mb-6 mb-2 text-sm md:text-base">
                  I create successful responsive websites that are fast, easy to
                  use, and built with best practices. The main area of my
                  expertise is front-end development, HTML, CSS, JS, building
                  small and medium web apps, custom plugins, features,
                  animations, and coding interactive layouts.
                </p>
                <p className="md:mb-6 mb-2 text-sm md:text-base">
                  {" "}
                  I also have experience with popular open-source CMS like
                  (WordPress, Drupal, Magento, Keystone.js and others) .
                </p>

                <p className="md:mb-6 mb-2 text-sm md:text-base">
                  Visit my{" "}
                  <a
                    href="https://www.linkedin.com/in/richard-paul-11321124b/"
                    target="_blank"
                    className="text-cyan-300 hover:underline hover:transition-all">
                    LinkedIn
                  </a>{" "}
                  Profile for more details or just {/* ADD A CONTACT ME HREF */}
                  {/* ADD A CONTACT ME HREF */}
                  {/* ADD A CONTACT ME HREF */}
                  <a
                    href="https://www.linkedin.com/in/richard-paul-11321124b/"
                    target="_blank"
                    className="text-cyan-300 hover:underline hover:transition-all">
                    Contact
                  </a>{" "}
                  me.
                </p>
              </div>
            </motion.div>
            {/* Animation + charts */}
            <div className="flex flex-col md:w-1/2 items-center ">
              <div className="md:w-5/6 w-1/12 md:h-60">
                <TextSphare />
              </div>
              {/* charts */}
              <div className="md:flex md:justify-between md:gap-5 flex gap-3">
                <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-36 h-40 px-2">
                  <h1 className=" md:text-lg text-xs tracking-wide font-semibold text-white">
                    FrontEnd developer
                  </h1>
                  <p className="md:text-sm text-xs text-gray-300/70">
                    Boreal Coffee<span className="block">2022-2023</span>{" "}
                  </p>
                  <p className="text-xs text-gray-300/50">
                    I re-created the frontend of Boreal Coffee's official web
                    app. I worked for them for a few months.
                  </p>
                </div>
                <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-36 h-40 px-2">
                  <h1 className=" md:text-lg text-xs tracking-wide font-semibold text-white">
                    App developer
                  </h1>
                  <p className="md:text-sm text-xs  text-gray-300/70">
                    Upwork <span className="block">2022-2023</span>{" "}
                  </p>
                  <p className="text-xs text-gray-300/50">
                    Creating Beautiful mobile Apps for clients on Upwork. I can
                    also bring your mobile app dreams to life
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
