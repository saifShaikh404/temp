import React from 'react';
import Home from './comps/Home.js';
import About from './comps/About';
import Header from './comps/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './comps/Footer.js';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
