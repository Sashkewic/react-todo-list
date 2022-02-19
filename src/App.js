import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
