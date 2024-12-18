import React from 'react';
import './GridRacs.css';
import Szuro from './Szuro';
import AppLista from './AppLista';
import LapTetejere from './LapTetejere';

function GridRacs() {
  return (
    <div>
      {/* Kis ablak méret */}
      <div className='kisAblak'>
        <Szuro></Szuro>
      </div>
      
      {/* Nagy ablak méret */}
      <div className="keret">
      <div className="appLista">
        <AppLista></AppLista>
      </div>
      <div className="szuro nagyAblak">
        <Szuro></Szuro>
      </div>

      <div className='vissza'>
      <LapTetejere></LapTetejere>
      </div>

    </div>
    </div> 
  );
}

export default GridRacs;
