import { useState } from 'react';
import UjAppStilus from './UjApp.css';
import AlapInfok from './AlapInfok';


function UjApp() {

  return (
    <div>
        <h1 className='cimSor'>Új Alkalmazás Felvétele</h1>

        <AlapInfok></AlapInfok>
    </div>
  );
}

export default UjApp;