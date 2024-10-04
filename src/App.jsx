import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./assets/components/pages/Home";
import Surah from "./assets/components/pages/Surah";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/surah">Surah</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah" element={<Surah />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
