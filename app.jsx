import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import WhoWeAre from "./whoweare";
import Impact from "./impact";
import "./router.css"; // optional: remove if using Tailwind only

export default function App() {
  return (
    <Router>
      {/* NAVIGATION BAR */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">
            <Link to="/">StartupX</Link>
          </div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            </li>
            <li>
              <a
                href="https://routermaps.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition"
              >
                Transport App
              </a>
            </li>
            <li>
              <Link to="/who-we-are" className="hover:text-indigo-600 transition">Who We Are</Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-indigo-600 transition">Impact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-gray-50 text-gray-900 px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </main>
    </Router>
  );
}
