import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import About from "./about";
import WhoWeAre from "./whoweare";
import Impact from "./impact";
import "./router.css"; // optional, safe to remove if unused

export default function App() {
  return (
    <Router>
      {/* NAVIGATION BAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-indigo-700">
            <NavLink to="/">StartupX</NavLink>
          </div>
          <ul className="flex flex-wrap gap-4 text-gray-700 font-medium text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700 font-semibold" : "hover:text-indigo-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700 font-semibold" : "hover:text-indigo-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <a
                href="https://routermaps.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                Transport App
              </a>
            </li>
            <li>
              <NavLink
                to="/who-we-are"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700 font-semibold" : "hover:text-indigo-600"
                }
              >
                Who We Are
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/impact"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700 font-semibold" : "hover:text-indigo-600"
                }
              >
                Impact
              </NavLink>
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
