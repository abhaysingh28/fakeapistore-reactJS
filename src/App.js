import React, { useState } from 'react';
import Cart from "./Components/Cart"
import Single from "./Components/SingleItems"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import "./App.css"
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
