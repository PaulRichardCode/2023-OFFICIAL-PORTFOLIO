import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "./styles/TextShpere.css";

const TextSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "Laravel",
      "React",
      "WordPress",
      "RestAPI",
      "MySQL",
      "APACHE",
      "CodeIgniter",
      "NodeJs",
      "AWS",
      "PHP",
    ];
    const options = {
      radius: 150,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
      loop: true,
      lockX: true,
      lockY: true,
    };

    TagCloud(container, texts, options);

    return () => {
      TagCloud(container, [], {});
    };
  }, []);
  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud" ref={containerRef}></span>
      </div>
    </>
  );
};

export default TextSphere;
