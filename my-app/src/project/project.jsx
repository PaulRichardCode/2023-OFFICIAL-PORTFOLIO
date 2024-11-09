import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vid1 from "../assets/videos/Portfolio video your mouth social.mp4";
import vid2 from "../assets/videos/MyPortfolio2024 compressed.mp4";

import vid7 from "../assets/videos/UpperHand Agency.mp4";

const Project = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const shortFormVideos = [
    { id: 5, src: vid2, caption: "Client Edit Mr Sgaire" },
    {
      id: 6,
      src: vid1,
      caption: "Google Drive Short-form Video",
    }, // Playable Google Drive video link
    { id: 7, src: vid7, caption: "Testimonial video" },
  ];

  const longFormVideos = [
    {
      id: 2,
      url: "https://youtu.be/dUKYHjxl8IU?si=N_Fo6uZGZS7BDg7E?autoplay=1",
      caption: "CRIME",
    },
    {
      id: 11,
      url: "https://www.youtube.com/embed/fXoDzNSmib0?autoplay=1",
      caption: "DOCUMENTARY",
    },
    {
      id: 12,
      url: "https://www.youtube.com/embed/SLgIIafTI9U?autoplay=1",
      caption: "FINANCE",
    },
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

        {/* Short-form Content Section */}
        <h2 className="text-xl text-cyan-300 mb-4">Short-form Content</h2>
        <motion.div
          onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
          variants={boxVariant}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {shortFormVideos.map((video) => (
            <motion.div
              key={video.id}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: video.id * 0.1,
              }}>
              {video.url ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-56 md:h-72 lg:h-80 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              ) : (
                <video
                  controls
                  muted
                  src={video.src}
                  alt={video.caption}
                  className="w-full h-56 md:h-72 lg:h-80 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => openModal(video.src)}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* More Button for Short-form Content */}
        <div className="flex justify-center mt-5">
          <a
            href="https://drive.google.com/drive/folders/your_drive_folder_id?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-300 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-full">
            More Short-form Videos
          </a>
        </div>

        {/* Long-form Content Section */}
        <h2 className="text-xl text-cyan-300 mb-4 mt-8">Long-form Content</h2>
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {longFormVideos.map((video) => (
            <motion.div
              key={video.id}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: video.id * 0.1,
              }}>
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-56 md:h-72 lg:h-80 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://drive.google.com/file/d/1au58QLPrtA7eEbcnpVm_siaiSINpBszv/view?usp=drive_link"
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
