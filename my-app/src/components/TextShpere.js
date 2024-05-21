import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "./styles/TextShpere.css";

const TextSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "Motion Graphics",
      "After Effects",
      "Premiere Pro",
      "Final Cut Pro",
      "Capcut",
      "Abobe Photoshop",
      "Davinci Resolve",
      "Tiktok",
      "Youtube",
      "Color Grading",
      "Fb Ads",
      "Documentaries",
      "Transitions",
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
        {/* span t  olkag className must be "tagcloud"  */}
        <span className="tagcloud" ref={containerRef}></span>
      </div>
    </>
  );
};

export default TextSphere;
