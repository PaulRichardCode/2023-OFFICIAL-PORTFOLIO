import React from "react";
import img1 from "../assets/foodNetwork.mp4";
import img2 from "../assets/promo1.mp4";
import img3 from "../assets/promo2.mp4";
import img4 from "../assets/wilsonport.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Project = () => {
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

  const images = [
    {
      id: 1,
      src: img1,
      caption: "Entertaining Shorts",
      link: "https://drive.google.com/drive/folders/1Ruu0Sk3nRBWwHETb9tx0SwDY-cpfxHUo",
      text: "Elevate your brand with captivating shortform videos – a powerful, concise tool for increased engagement and business growth.",
    },
    {
      id: 2,
      src: img3,
      caption: "Long Form Contents",
      link: "https://drive.google.com/drive/folders/1lAuegpui3ri3xcSCwtP0u0-TqZVZ_gs2",
      text: "i will provide Entertaining dynamic visuals that enhance storytelling, engage audiences, and elevate the overall viewing experience.",
    },
    {
      id: 3,
      src: img2,
      caption: "Promotional videos",
      link: "https://drive.google.com/drive/folders/1FOBlZo4IfgeaejtLDn4T1A5w3eCORns0",
      text: "Transform your brand narrative into a cinematic journey, fusing creativity and strategy for an unforgettable viewer experience that sparks lasting connections and propels business triumphs.",
    },
  ];
  return (
    <div id="project" className="py-20 md:w-full md:mx-0 mx-3 md:mt-5">
      <div className="md:w-3/4 md:mx-auto ">
        <h1 className="text-gray-300 md:text-3xl text-2xl md:mb-5 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">03.</span>{" "}
          Work & Projects{" "}
          <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="flex flex-col justify-center">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex md:py-5 py-2 md:w-full md:flex-nowrap flex-wrap">
              <video
                autoPlay
                src={image.src}
                alt={image.caption}
                className="md:w-3/5 md:h-auto w-screen h-56 "
              />
              <div className="caption flex flex-col bg-white justify-evenly md:gap-0 gap-5 py-5 md:py-0 md:items-start items-center md:pl-10">
                <h1 className="md:text-2xl text-cyan-900 font-semibold shadow-lg shadow-cyan-300">
                  {image.caption}
                </h1>
                <p className="w-4/5 md:text-base text-sm md:text-left text-center text-gray-700">
                  {image.text}
                </p>
                <div>
                  <a
                    href={image.link}
                    type="button"
                    target="_blank"
                    class="text-cyan-900 md:text-base text-sm border tracking-widest bg-cyan-300 hover:transition-all hover:bg-cyan-400/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded md:px-12 px-8 md:py-3 py-3 text-center md:mr-0 ">
                    Watch More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
