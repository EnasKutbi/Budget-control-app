import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Error from "../pages/Error";
import Navbar from "../components/layout/Navbar";
import Budget from "../pages/Budget";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
