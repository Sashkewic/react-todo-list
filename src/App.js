import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/NavBar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <Router>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </AlertState>
  );
}

export default App;
