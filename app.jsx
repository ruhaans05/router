import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Flights from "./flights";
import WhoWeAre from "./whoweare";
import Impact from "./impact";
import "./router.css"; // If you made a CSS file

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/flights">Manage Flights</Link></li>
          <li><a href="https://routermaps.streamlit.app/" target="_blank" rel="noopener noreferrer">Transport App</a></li>
          <li><Link to="/who-we-are">Who We Are</Link></li>
          <li><Link to="/impact">Impact</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </div>
    </Router>
  );
}
