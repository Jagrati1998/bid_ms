import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import './App.css'; // Optional: Import any global CSS or Tailwind setup

const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404s */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
