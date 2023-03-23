import React from "react";
import "./loading.css";
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="loading">
      <HashLoader
        color={"aqua"}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
