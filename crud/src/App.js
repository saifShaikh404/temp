import React from 'react';
import Home from './comps/Home.js';
import Header from './comps/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './comps/Footer.js';

const App = () => {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<><Header></Header><Home/></>}></Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
