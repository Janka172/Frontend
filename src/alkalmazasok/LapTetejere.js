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
      <button id='fel' onMouseEnter={kivalsztottSzoveg} onMouseLeave={nemKivalsztottSzoveg}>{gombSzoveg}</button>
    </div> 
  );
}

export default LapTetejere;
