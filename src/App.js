import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";
import "./index.css";
function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
