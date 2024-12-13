import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Kezdolap from './oldalak/Kezdolap';
import Alkalmazasok from './oldalak/Alkalmazasok';
import Sidebar from './alap/Sidebar';
import Fekvo from './alap/Fekvo';
import Footer from './alap/Footer';
import ImageWithText from './alap/ImageWithText';


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

