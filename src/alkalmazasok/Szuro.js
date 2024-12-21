import React, { useState, useEffect } from 'react';
import SzuroStilus from './Szuro.css';

function Szuro() {
  //Adatbázisból kinyert: nevek
  var mindenKategoria=['-','Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4', 'Kategoria 5', 'Kategoria 5', 'Kategoria 6', 'Kategoria 7', 'Kategoria 8'];
  var mindenVideokartya=['-','Videokartya 1', 'Videokartya 2', 'Videokartya 3', 'Videokartya 4', 'Videokartya 5', 'Videokartya 5', 'Videokartya 6', 'Videokartya 7', 'Videokartya 8'];
  var mindenProcesszor=['-','Processzor 1', 'Processzor 2', 'Processzor 3', 'Processzor 4', 'Processzor 5', 'Processzor 5', 'Processzor 6', 'Processzor 7', 'Processzor 8'];
  var mindenOpRendszer=['-','OpRendszer 1', 'OpRendszer 2', 'OpRendszer 3', 'OpRendszer 4', 'OpRendszer 5', 'OpRendszer 5', 'OpRendszer 6', 'OpRendszer 7', 'OpRendszer 8'];

  const [nev, setNev] = useState('');
  const [kategoria, setKategoria] = useState('-');
  const [videokartya, setVideokartya] = useState('-');
  const [processzor, setProcesszor] = useState('-');
  const [opRendszer, setOpRendszer] = useState('-');
  const [ram, setRam] = useState('');
  const [tarhely, setTarhely] = useState('');

  const kicsie = window.innerWidth <= 767;

  const [hatter, setHatter] = useState('rgb(194, 52, 52, 0.5)');
  const [displ, setDispl] = useState('block');
  const [megnyitva, setMegnyitva] = useState(true);
  
  useEffect(() => {
    if (kicsie) {
      setMegnyitva(false);
      setDispl('none');
      setHatter('rgb(194, 52, 52, 0)');
    }
    else{
      setMegnyitva(true);
      setDispl('block');
      setHatter('rgb(194, 52, 52, 0.5)');
    }
  }, [kicsie]);
  
  function menuMegnyitas() {
    if (!megnyitva) {
      setMegnyitva(true);
      setDispl('block');
      setHatter('rgb(194, 52, 52, 0.5)');
    } else {
      setMegnyitva(false);
      setDispl('none');
      setHatter('rgb(194, 52, 52, 0)');
    }
  }

  function mezokTorlese() {
    setNev('');
    setKategoria('-');
    setVideokartya('-');
    setProcesszor('-');
    setOpRendszer('-');
    setRam('');
    setTarhely('');
  }
  
  return (
    <div className='filter' style={{ backgroundColor: hatter }}>
      <div>
        <div className='nagyMeret'>
          <h1>Szűrő beállítások</h1>
        </div>
        <div className='kisMeret'>
          <button className='bezaros' onClick={menuMegnyitas}>Szűrő beállítások</button>
        </div>
      </div>  

      <div className='mezo' style={{ display: displ }}>
        <p>Név:</p>
        <input type='text' value={nev} onChange={(e) => setNev(e.target.value)} />
      </div>

      <div className='mezo' style={{ display: displ }}>
        <p>Kategória:</p>
        <select id='kategoriaCombo' value={kategoria} onChange={(e) => setKategoria(e.target.value)}>
          {mindenKategoria.map((katNev, index) => (<option value={katNev} key={index}>{katNev}</option>))}
        </select>
      </div>

      <div className='mezo' style={{ display: displ }}>
        <p>Videókártya:</p>
        <select id='videokartyaCombo' value={videokartya} onChange={(e) => setVideokartya(e.target.value)}>
          {mindenVideokartya.map((vidkNev, index) => (<option value={vidkNev} key={index}>{vidkNev}</option>))}
        </select>
      </div>

      <div className='mezo' style={{ display: displ }}>
        <p>Processzor:</p>
        <select id='processzorCombo' value={processzor} onChange={(e) => setProcesszor(e.target.value)}>
          {mindenProcesszor.map((prociNev, index) => (<option value={prociNev} key={index}>{prociNev}</option>))}
        </select>
      </div>

      <div className='mezo' style={{ display: displ }}>
        <p>Operációs rendszer:</p>
        <select id='opRendszerCombo' value={opRendszer} onChange={(e) => setOpRendszer(e.target.value)}>
          {mindenOpRendszer.map((opNev, index) => (<option value={opNev} key={index}>{opNev}</option>))}
        </select>
      </div>

      <div className='mezo' style={{ display: displ }}>
        <p>RAM (GB):</p>
        <input type='number' value={ram} onChange={(e) => setRam(e.target.value)} />
      </div>

      <div className='mezo' style={{ display: displ }}>
        <p>Tárhely (GB):</p>
        <input type='number' value={tarhely} onChange={(e) => setTarhely(e.target.value)} />
      </div>

      <button className='gombocska' style={{ display: displ }}>Keresés</button>
      <button className='gombocska' style={{ display: displ }} onClick={mezokTorlese}>Mégsem</button>
          
    </div>
  );
}

export default Szuro;
