import logo from './logo.svg';
import react from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./components/top_navigation"
import SignUp from "./pages/signup/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
 
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
    ); 
}

export default App;
