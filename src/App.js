import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Comps
import NavBar from "./components/navbar/NavBar";

// Styles
import "aos/dist/aos.css";
import "./Global.scss";
import Countries from "./components/pages/home/Countries";
import CountryDetails from "./components/pages/country/CountryDetails";

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
          <Route path="/view/:countryCodes" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
