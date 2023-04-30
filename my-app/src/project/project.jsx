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
      caption: "dopefolio",
      text: "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    },
    {
      id: 2,
      src: img2,
      caption: "boreal coffee clone",
      text: "Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.",
    },
    {
      id: 3,
      src: img3,
      caption: "crown template",
      text: "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
    },
    {
      id: 4,
      src: img4,
      caption: "wilsonpor",
      text: "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
    },
  ];
  return (
    <div id="project" className="md:py-20 md:w-full md:mx-0 mx-3 mt-5">
      <div className="md:w-3/4 md:mx-auto ">
        <h1 className="text-gray-300 md:text-3xl text-2xl md:mb-5 mb-10 mr-8 w-11/12 md:w-1/2 font-semibold tracking-tight flex items-center md:justify-start justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">02.</span>{" "}
          Work & Projects{" "}
          <span className="lg:w-16 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>
        <div className="flex flex-col justify-center">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex md:py-10 py-5 bg-red-50 md:w-full md:flex-nowrap flex-wrap">
              <img src={image.src} alt={image.caption} className="w-80 h-56" />
              <div className="caption">
                <h1 className="text-2xl">{image.caption}</h1>
                <p className="text">{image.text}</p>
                <div>
                  <a
                    href="#"
                    type="button"
                    id="contact"
                    class="text-cyan-300 md:text-base text-sm border tracking-widest border-cyan-300 hover:bg-red-50/10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded md:px-12 px-10 md:py-3 py-4 text-center mr-3 md:mr-0 ">
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
