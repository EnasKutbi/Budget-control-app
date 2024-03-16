import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Main from "../pages/Main";
import Error from "../pages/Error";
import Navbar from "../components/layout/Navbar";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
