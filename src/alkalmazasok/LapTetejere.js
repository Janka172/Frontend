import React, {useState} from 'react';
import './LapTetejere.css';

function LapTetejere() {
    const [gombSzoveg, setGombSzoveg] = useState("^");
    function kivalsztottSzoveg(){
      setGombSzoveg("Vissza a lap tetejére !");
    }

    function nemKivalsztottSzoveg(){
      setGombSzoveg("^");
    }

  return (
    <div>
      <a href='#fent'><button id='fel' onMouseEnter={kivalsztottSzoveg} onMouseLeave={nemKivalsztottSzoveg}>{gombSzoveg}</button></a>
    </div> 
  );
}

export default LapTetejere;
