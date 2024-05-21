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
    <div id="about" className="pt-20 md:w-full md:mx-0 mx-3 md:mt-5 ">
      <div className="md:w-3/4 md:mx-auto">
        <h1 className="text-gray-300 md:text-5xl text-2xl md:mb-0 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">01.</span>{" "}
          Services {/* youqwq can use full in the width as well */}{" "}
          <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>

        <div className=" md:flex">
          {/* Experience client and projects completed.*/}
          <div className="md:flex md:justify-between md:items-center mb-5">
            {/* Texts */}
            <motion.div
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
              className="lg:w-5/12 md:w-2/3 md:flex md:flex-row md:items-start flex-col md:py-6 justify-between text-cyan-50">
              {/* about me text */}
              <div className="text-cyan-50 md:mx-0 md:w-full mx-auto w-11/12 ">
                <h1 className="my-5">
                  I don't just offer services; I provide a holistic approach to
                  your business's success.
                </h1>

                <div className="md:my-6 mb-2 text-sm md:text-base">
                  <hr />
                  <h1
                    className="text-cyan-300 text-xl w-10 tracking-widest font-bold my-2
                  ">
                    VIDEO EDITING
                  </h1>{" "}
                  <p className="text-sm">
                    Engage through visuals. Expert video editing blends
                    creativity, precision, transforming raw footage into lasting
                    video content masterpieces.
                  </p>
                  {/* ukihiuuuu */}
                  <ul className="my-5 text-sm font-light">
                    <li>- Personalized & Trending Styles</li>
                    <li>- Long and Short Form Videos </li>
                  </ul>
                </div>

                <div className="md:my-6 mb-2 text-sm md:text-base">
                  <hr />
                  <h1 className="text-cyan-300 text-xl w-10 tracking-widest font-bold my-2">
                    CONTENT <br />
                    STRATEGY
                  </h1>
                  <p className="text-sm">
                    My forte is to craft compelling narratives. From ideation to
                    execution, my content strategy creates engaging stories,
                    elevating your brand's voice in the digital landscape.
                  </p>
                  {/* ukihiuuuu */}
                  <ul className="my-5 text-sm font-light">
                    <li>- Content Plan</li>
                    <li>- Script Structure</li>
                    <li>- Unlimited Content Guide</li>
                  </ul>
                </div>

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
            <div className="flex flex-col md:w-1/2 items-center md:mt-0 mt-40 ">
              <div className="md:w-5/6 w-1/12 md:h-60 mb-4">
                <TextSphare />
              </div>
              {/* charts */}
              <div className="md:flex md:justify-between md:w-auto w-full md:gap-5 flex justify-evenly gap-3">
                <div className="md:my-6 py-2 mb-2 text-sm md:text-base">
                  <hr />
                  <h1 className="text-cyan-300 text-xl tracking-widest font-bold my-2">
                    SOCIAL MEDIA
                    <br />
                    MANAGEMENT
                  </h1>
                  <p className="text-sm text-cyan-50">
                    Command the digital conversation with our social media
                    prowess. I create dynamic content, foster genuine
                    connections and ensure your brand is not just seen but
                    remembered.
                  </p>
                  {/* ukihiuuuu */}
                  <ul className="my-5 text-sm text-cyan-50">
                    <li>- Brand Immersion & Research</li>
                    <li>- Competitive Analysis and Content Distribution</li>
                    <li>- Handling Facebook, Instagram and Tiktok Page</li>
                  </ul>
                </div>
              </div>
              {/*  <div className="md:flex md:justify-between md:w-auto w-full md:gap-5 flex justify-evenly gap-3"> 
              <div className="flex flex-col justify-around md:py-3 md:px-4 text-cyan-300/80 items-start md:rounded-none rounded bg-gray-700/10 md:w-56 md:h-44 w-44 h-40 p-2">
                  <h1 className=" md:text-lg md:tracking-tight text-sm tracking-wide md:font-normal font-semibold text-white">
                    FullStack Developer
                  </h1>
                  <p className="md:text-sm text-xs text-gray-300">
                    The Crox Group<span className="block">2021-2022</span>{" "}
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
                
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
