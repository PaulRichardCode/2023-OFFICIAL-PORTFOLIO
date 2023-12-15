import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "./styles/TextShpere.css";

const TextSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "Adobe Premiere Pro",
      "Final Cut Pro",
      "Davinci Resolve",
      "Capcut",
      "Adobe After Effects",
      "color grading",
      "Audio editing",
      "communication",
      "Time Management",
      "TIktok",
      "StoryTelling",
      "greenscreen",
      "Stock Footage  ",
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
