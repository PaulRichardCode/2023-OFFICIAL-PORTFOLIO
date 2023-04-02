import React from "react";
import Handy from "../assets/handpoint.png";

const About = () => {
  return (
    <div className="my-20 w-2/3 mx-auto ">
      <div className="pl-44">
        <h1 className="text-gray-300 text-3xl mb-10 mr-8 w-11/12 font-semibold tracking-tight flex items-center justify-end">
          <span className="text-cyan-300 text-2xl pr-4">01.</span> About me{" "}
          <span className="w-72 bg-gray-300/70 h-px ml-8 opacity-40"></span>
        </h1>
      </div>

      <div className="flex items-center justify-around">
        <div className="opacity-90">
          <img
            src={Handy}
            alt="pointing hand"
            className="cursor-pointer opacity-80 hover:opacity-100 hover:transition-opacity"
          />
        </div>
        <div className="lg:w-1/2 md:w-2/3 ">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam
            illum incidunt unde consequatur recusandae consectetur, natus
            praesentium ratione, odit debitis impedit harum maiores ad beatae
            sapiente reiciendis autem dolorem. Consequatur iste veritatis ad
            rerum magnam ducimus quaerat quos modi maiores at voluptatem,
            aperiam quasi omnis perspiciatis, eaque veniam officia voluptate
            quidem facilis. Exercitationem temporibus pariatur earum numquam
            consequuntur nam. Nisi inventore neque, dolorem dicta deleniti
            voluptatibus nam obcaecati incidunt? Distinctio dolorum impedit
            omnis laudantium, tempore eaque at. Dolores doloribus sapiente
            explicabo eligendi dignissimos quam ducimus ab esse, numquam et?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
