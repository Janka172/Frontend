import React from 'react';
import './GridRacs.css';
import Szuro from './Szuro';
import AppLista from './AppLista';

function GridRacs() {
  return (
    <div>
      <div className='kisAblak'>
        <Szuro></Szuro>
      </div>
      
      <div className="keret">
      <div className="appLista">
        <AppLista></AppLista>
      </div>
      <div className="szuro nagyAblak">
        <Szuro></Szuro>
      </div>
    </div>
    </div> 
  );
}

export default GridRacs;
