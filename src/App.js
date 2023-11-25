import React from 'react';
import Home from './comps/Home.js';
import Add from './comps/Add';
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
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
