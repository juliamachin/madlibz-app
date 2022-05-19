import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Form from "./Components/Form/Form";
import MadLibz from "./Components/MadLibz/MadLibz";
import Story from './Components/Story/Story'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="/Madlibsicon 3.png"
            style={{ width: 250, height: 100 }}
            alt="MadLibs Icon"
          />
        </Link>
        <Link to="/story">Story</Link>
      </nav>
      <main>
        <MadLibz />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
