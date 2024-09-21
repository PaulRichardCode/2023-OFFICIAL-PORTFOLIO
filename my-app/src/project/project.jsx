import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import vid2 from "../assets/videos/MyPortfolio2024 compressed.mp4";

import vid5 from "../assets/videos/vidSgaire.mp4";
import vid6 from "../assets/videos/Video Portfolio 1.mp4";
import vid7 from "../assets/videos/vid11.mp4";

const Project = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -100 },
  };

  const videos = [
    { id: 1, src: vid1, caption: "Podcast Edit" },
    { id: 2, src: vid2, caption: "Meet me Paul Richard" },
    { id: 3, src: vid3, caption: "Podcast edit" },
    { id: 4, src: vid4, caption: "Podcast edit" },
    { id: 5, src: vid5, caption: "Client Edit Mr Sgaire" },
    { id: 6, src: vid6, caption: "Client edit upperhand" },
    { id: 7, src: vid7, caption: "Testimonial video" },
    { id: 8, src: vid8, caption: "Real estate ads edit" },
    { id: 9, src: vid9, caption: "Medical ads" },
    { id: 10, src: vid10, caption: "Simple motion graphics" },
    { id: 11, src: vid11, caption: "Youtube video showreel1" },
    { id: 12, src: vid12, caption: "Youtube video showreel2" },
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div id="project" className="py-20 md:w-full md:mx-0 mx-3 md:mt-5">
      <div className="md:w-3/4 md:mx-auto">
        <h1 className="text-gray-300 md:text-3xl text-2xl md:mb-5 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">03.</span>
          Work & Projects
          <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40"></span>
        </h1>
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="flex justify-center">
              <video
                controls
                muted
                src={video.src}
                alt={video.caption}
                className="w-full h-56 md:h-72 lg:h-80 cursor-pointer"
                onClick={() => openModal(video.src)}
              />
            </div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://drive.google.com/drive/folders/11aDKQKgEqjwcY12WuLX0pjpMzyj_lhRx?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-300 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-full">
            View More
          </a>
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative w-full max-w-3xl">
              <button
                className="absolute top-0 right-0 m-4 text-white text-3xl"
                onClick={closeModal}>
                &times;
              </button>
              <video
                className="w-full h-auto"
                src={selectedVideo}
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
