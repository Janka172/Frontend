import { useState } from 'react';
import Gorgeto from './Gorgeto';
import Reszlet from './Reszletek';
import { useLocation } from 'react-router-dom';

function KeretAlkatresz() {
  

  return (
    <div className='gorketok'>
      <Gorgeto tema='Videókártyák' hely='le'></Gorgeto>
      <Gorgeto tema='Processzorok' hely='le'></Gorgeto>
      <Gorgeto tema='RAM-ok' hely='le'></Gorgeto>
      <Gorgeto tema='Operációsrendszerek' hely='le'></Gorgeto>
      <Gorgeto tema='Alaplapok' hely='le'></Gorgeto>
    </div>
  );
}

export default KeretAlkatresz;