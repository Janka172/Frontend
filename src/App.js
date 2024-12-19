import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Kezdolap from './oldalak/Kezdolap';
import Alkalmazasok from './oldalak/Alkalmazasok';
import Sidebar from './alap/Sidebar';
import Fekvo from './alap/Fekvo';
import Footer from './alap/Footer';
import ImageWithText from './alap/Borito';
import Alkatreszek from './oldalak/Alkatreszek';


function App() {

  return (
  <main>
    <BrowserRouter>
        <div id='fent'></div>
        <Sidebar></Sidebar> 
        <ImageWithText></ImageWithText>
        <Fekvo></Fekvo> 
    

        <Routes>

            <Route path='/' index element={<Kezdolap />} />
            <Route path='/oldalak/Alkalmazasok' index element={<Alkalmazasok />} />
            <Route path='/oldalak/Alkatreszek' index element={<Alkatreszek />} />
              
        </Routes>
         
        <Footer></Footer>
      </BrowserRouter>
  </main>
    
  );
}

export default App;

