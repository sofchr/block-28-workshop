import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/blue" element={Blue()} />
            <Route path="/red" element={Red()} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
