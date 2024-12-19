import { useState } from 'react';
import AppStilus from '../App.css';
import Gorgeto from './Gorgeto';

function KeretAlkatresz() {

  return (
    <div className='gorketok'>
      <Gorgeto tema='Videókártyák'></Gorgeto>
      <Gorgeto tema='Processzorok'></Gorgeto>
      <Gorgeto tema='RAM-ok'></Gorgeto>
      <Gorgeto tema='Operációsrendszerek'></Gorgeto>
      <Gorgeto tema='Alaplap'></Gorgeto>
    </div>
  );
}

export default KeretAlkatresz;