import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Kezdolap from './oldalak/Kezdolap';
import Alkalmazasok from './oldalak/Alkalmazasok';
import Sidebar from './kezdolap/Sidebar';
import Fekvo from './kezdolap/Fekvo';
import Footer from './kezdolap/Footer';
import ImageWithText from './kezdolap/ImageWithText';


function App() {

  return (
  <main>
    <BrowserRouter>

    <Sidebar></Sidebar>   
    <ImageWithText></ImageWithText>
    <Fekvo></Fekvo>  
    <Footer></Footer>

        <Routes>

            <Route path='/' index element={<Kezdolap />} />
            <Route path='/oldalak/Alkalmazasok' index element={<Alkalmazasok />} />
            
          
        </Routes>
      </BrowserRouter>
  </main>
    
  );
}

export default App;

