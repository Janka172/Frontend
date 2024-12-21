import React from 'react';
import KeretAlkalmazasStilus from './KeretAlkalmazas.css';
import Szuro from './Szuro';
import AppLista from './AppLista';
import LapTetejere from './LapTetejere';

function Keret() {
  return (
    <div>
      {/* Kis ablak méret */}
      <div className='kisAblak'>
        <Szuro></Szuro>
      </div>
      
      {/* Nagy ablak méret */}
      <div className="nagyKerete">
        <div className="appLista">
          <AppLista></AppLista>
        </div>
        <div className="szuro nagyAblak">
          <Szuro></Szuro>
        </div>
      </div>

      <div className='vissza'>
        <LapTetejere></LapTetejere>
      </div>
    </div> 
  );
}

export default Keret;
