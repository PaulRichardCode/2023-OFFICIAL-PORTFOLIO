import React, { useState, useEffect } from "react";
import Nav from "./nav/nav.jsx";
import Home from "./home/home.jsx";
import Loading from "./loading/loading.js";
import "./App.css";
import Link from "./link/link";
import About from "./about/about";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <Link />
          <Home />
          <About />
        </div>
      )}
    </div>
  );
};

export default App;
