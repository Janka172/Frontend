import { useState } from 'react';
import AlapInfokStilus from './AlapInfok.css';


function AlapInfok() {
    //Ezeket fogja közvetlenül rögzíteni az Applikaciok tábla

  return (
    <div>
        <div className='mezo'>
            <h2>Név:</h2>
            <input type='text'></input>
        </div>

        <div className='mezo'>
            <h2>Logó:</h2>
            <input type='file'></input>
        </div>
        
       
    </div>
  );
}

export default AlapInfok;