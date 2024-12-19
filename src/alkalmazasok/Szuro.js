import React from 'react';
import SzuroStilus from './Szuro.css';

function Szuro() {
  var mindenKategoria=['-','Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4', 'Kategoria 5', 'Kategoria 5', 'Kategoria 6', 'Kategoria 7', 'Kategoria 8'];
  var mindenVideokartya=['-','Videokartya 1', 'Videokartya 2', 'Videokartya 3', 'Videokartya 4', 'Videokartya 5', 'Videokartya 5', 'Videokartya 6', 'Videokartya 7', 'Videokartya 8'];
  var mindenProcesszor=['-','Processzor 1', 'Processzor 2', 'Processzor 3', 'Processzor 4', 'Processzor 5', 'Processzor 5', 'Processzor 6', 'Processzor 7', 'Processzor 8'];
  var mindenOpRendszer=['-','OpRendszer 1', 'OpRendszer 2', 'OpRendszer 3', 'OpRendszer 4', 'OpRendszer 5', 'OpRendszer 5', 'OpRendszer 6', 'OpRendszer 7', 'OpRendszer 8'];
  
  return (
    <div className='filter'>
        <h1>Szűrő beállítások</h1>
        <div className='mezo'>
            <p>Név:</p>
            <input type='text'></input>
        </div>

        <div className='mezo'>
            <p>Kategória:</p>
            <select id='kategoriaCombo'>
              {mindenKategoria.map((katNev, index) => (<option value={katNev} key={index} id={katNev.toLowerCase()}>{katNev}</option>))}
            </select>
        </div>

        <div className='mezo'>
            <p>Videókártya:</p>
            <select id='videokartyaCombo'>
              {mindenKategoria.map((vidkNev, index) => (<option value={vidkNev} key={index} id={vidkNev.toLowerCase()}>{vidkNev}</option>))}
            </select>
        </div>

        <div className='mezo'>
            <p>Processzor:</p>
            <select id='processzorCombo'>
              {mindenKategoria.map((prociNev, index) => (<option value={prociNev} key={index} id={prociNev.toLowerCase()}>{prociNev}</option>))}
            </select>
        </div>

        <div className='mezo'>
            <p>Operációsrendszer:</p>
            <select id='opRendszerCombo'>
              {mindenKategoria.map((opNev, index) => (<option value={opNev} key={index} id={opNev.toLowerCase()}>{opNev}</option>))}
            </select>
        </div>

        <div className='mezo'>
            <p>RAM (GB):</p>
            <input type='number'></input>
        </div>

        <div className='mezo'>
            <p>Tárhely (GB):</p>
            <input type='number'></input>
        </div>

        <button className='gombocska'>Keresés</button>
        <button className='gombocska'>Mégsem</button>
    </div>
  );
}

export default Szuro;
