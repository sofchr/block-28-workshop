import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Yellow from "./Yellow";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/blue" element={Blue()} />
        <Route path="/red" element={Red()} />
        <Route path="/yellow" element={Yellow()} />
      </Routes>
    </div>
  );
}
