import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/Paginas/About";
import Home from "./Components/Paginas/Home";
import Navb from "./Components/Navegacion/Navb";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página Home */}
        <Route path="/home" element={<Home />} />

        {/* Página About */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
