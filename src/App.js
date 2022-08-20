import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Comps
import Countries from "./components/home/Countries";
import NavBar from "./components/navbar/NavBar";

// Styles
import "aos/dist/aos.css";
import "./Global.scss";

function App() {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Countries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
