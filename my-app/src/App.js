import React, { useState, useEffect, Component } from "react";
import Nav from "./nav/nav.jsx";
import Home from "./home/home.jsx";
import Loading from "./loading/loading.js";
import "./App.css";
import Link from "./link/link";
import About from "./about/about";
import Jobs from "./jobs/jobs.jsx";
import Project from "./project/project.jsx";
import Contact from "./contact/contact.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  /*   switch (window.location.pathname) {
    case "/resume":
      Component = <Resume />;
      break;
  } */

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-gray-900/30">
          <Nav />
          <Link />
          <Home />
          <About />
          <Jobs />
          <Project />
          <Contact />

          {/* <Resume /> */}
        </div>
      )}
    </div>
  );
};

export default App;
