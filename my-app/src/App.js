import React, { useState, useEffect } from "react";
import Nav from "./nav/nav.jsx";
import Home from "./home/home.jsx";
import Loading from "./loading/loading.js";
import "./App.css";
import Link from "./link/link";
import About from "./about/about";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <BrowserRouter>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="bg-gray-900/30">
            <Nav />
            <Link />
            <Home />

            <About />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
