import React from "react";

const About = () => {
  return (
    <div id="jobs" className="md:py-20 md:w-3/4 md:mx-auto mx-3 mt-10">
      <div className="md:pl-44">
        <h1 className="text-gray-300 md:text-3xl text-2xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center md:justify-end justify-center">
          <span className="text-cyan-300 md:text-2xl text-xl pr-4">02.</span>{" "}
          Skills & Experience{" "}
          <span className="md:w-72 md:bg-gray-300/70 md:h-px md:ml-8 md:opacity-40 "></span>
        </h1>
      </div>

      {/* image*/}

      <div className="md:flex md:justify-around md:items-start">
        {/* Experience client and projects completed */}

        <div className="lg:w-1/2 md:w-2/3 flex flex-col py-6 justify-around text-gray-300">
          {/* about me text */}
          <div className="text-gray-400/80 md:mx-0 md:w-full mx-auto w-11/12 ">
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              Since beginning my journey as a freelance developer 2 years ago,
              I’ve done remote work for agencies, consulted for startups, and
              collaborated with talented people to create web products for both
              business and consumer use.
            </p>

            <p className="md:mb-6 mb-2 text-sm md:text-base">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS, building small and medium
              web apps, custom plugins, features, animations, and coding
              interactive layouts.
            </p>
            <p className="md:mb-6 mb-2 text-sm md:text-base">
              {" "}
              I also have full-stack developer experience with popular
              open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
              others) .
            </p>

            <p className="md:mb-6 mb-2 text-sm md:text-base">
              Visit my{" "}
              <a
                href="https://us.mullenlowe.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                LinkedIn{" "}
              </a>
              Profile for more details or just{" "}
              <a
                href="https://starry.com/"
                target="_blank"
                className="text-cyan-300 hover:underline hover:transition-all">
                Contact{" "}
              </a>
              me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
