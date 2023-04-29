import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Project = () => {
  const [seconds, setSeconds] = useState(0);
  const [anim, setAnim] = useState("in");
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      setAnim("in");
      setTimeout(() => {
        setAnim("out");
      }, 500);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <div id="project" className="md:py-20 md:w-full md:mx-0 mx-3 mt-10">
        <div className="md:w-3/4 md:mx-auto">
          <h1 className="text-gray-300 md:text-3xl text-2xl md:mb-0 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
            <span className="text-cyan-300 md:text-2xl text-xl pr-4">02.</span>{" "}
            Things I have Worked on{" "}
            <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
          </h1>
        </div>
      </div>
      {/*   <motion.div
        animate={anim}
        variants={variants}
        className="App"
        style={{ fontSize: 100 }}>
        {seconds}
      </motion.div> */}
    </div>
  );
};

export default Project;
