import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import Nav from "./nav/nav.jsx";
import Loading from "./loading/loading.js";

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
        </div>
      )}
    </div>
  );
};

export default App;
