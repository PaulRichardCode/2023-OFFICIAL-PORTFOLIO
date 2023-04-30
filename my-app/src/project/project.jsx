import React from "react";
import img1 from "../assets/dopefolio.jpeg";
import img2 from "../assets/boreal-coffee-clone.jpeg";
import img3 from "../assets/crown-template.jpeg";
import img4 from "../assets/wilsonport.jpeg";

const Project = () => {
  const images = [
    {
      id: 1,
      src: img1,
      caption: "Image 1",
    },
    {
      id: 2,
      src: img2,
      caption: "Image 2",
    },
    {
      id: 3,
      src: img3,
      caption: "Image 3",
    },
    {
      id: 4,
      src: img4,
      caption: "Image 4",
    },
  ];
  return (
    <div>
      <div id="project" className="md:py-20 md:w-full md:mx-0 mx-3 mt-10">
        <div className="md:w-3/4 md:mx-auto">
          <h1 className="text-gray-300 md:text-3xl text-2xl md:mb-0 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
            <span className="text-cyan-300 md:text-2xl text-xl pr-4">02.</span>{" "}
            Things I have Worked on{" "}
            <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
          </h1>
          <div className="flex flex-col justify-center">
            {images.map((image) => (
              <div key={image.id} className="w-80 h-56">
                <img src={image.src} alt={image.caption} />
                <div className="caption">{image.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
