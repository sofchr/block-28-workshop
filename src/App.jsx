// import { useState } from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Red from "./components/Red";
// import Blue from "./components/Blue";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <div id="container">
        <Navbar></Navbar>
        <MainContainer></MainContainer>
      </div>
    </>
  );
}

export default App;
