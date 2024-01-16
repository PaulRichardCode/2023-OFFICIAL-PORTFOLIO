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
          Skills & Experience {/* youqwq can use full in the width as well */}{" "}
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
                  Since beginning my journey as a Full-Stack developer 5 years
                  ago, I’ve done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create web
                  products for both business and consumer use.
                  {/* ukihiuuuu */}
                </p>

                <p className="md:mb-6 mb-2 text-sm md:text-base">
                  I create successful responsive websites that are fast, easy to
                  use, and built with best practices. The main area of my
                  expertise is Full-Stack development,{" "}
                  <span className="text-cyan-300">
                    {" "}
                    HTML & CSS, JS, React, C#, ASP.NET, Tailwind, TypeScript
                    RESTful API, Azure, SQL-Server, entity Framework{" "}
                  </span>{" "}
                  for building small and medium web apps, custom plugins,
                  features, animations, and coding interactive layouts.
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
                  Profile for more details or just {/* ADD A CACT ME HREF */}
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
              <div className="md:flex md:justify-between md:w-auto w-full md:gap-5 flex justify-evenly gap-3">
                <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-44 h-40 p-2">
                  <h1 className=" md:text-lg md:tracking-tight text-sm tracking-wide md:font-normal font-semibold text-white">
                    FullStack Developer
                  </h1>
                  <p className="md:text-sm text-xs text-gray-300">
                    The Crox Group<span className="block">2020-2022</span>{" "}
                  </p>
                  <p className="text-xs text-gray-300/50">
                    Develop web applications with robust front and back-ends
                    that work together to track geohazards
                  </p>
                </div>
                <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-44 h-40 p-2">
                  <h1 className=" md:text-lg md:tracking-tight text-sm tracking-wide md:font-normal font-semibold text-white">
                    FullStack developer
                  </h1>
                  <p className="md:text-sm text-xs  text-gray-300">
                    SnapX <span className="block">2022-2023</span>{" "}
                  </p>
                  <p className="text-xs text-gray-300/50">
                    Implemetation of Authentication and Security, server and
                    database Maintainace,
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
