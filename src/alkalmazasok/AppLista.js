import React, { useState, useEffect } from 'react';
import { useKeresesiAdatok } from './KeresesiAdatokContext';
import { Link } from 'react-router-dom';
import AppListaStilus from './AppLista.css';

function AppLista() {
  var atmenetiKepLink = '/kepek/kep.png';
  
  const [nincsFeltetel, setNincsFeltetel] = useState(false);
  const  feltetel  = useKeresesiAdatok();
  useEffect(() => {
    if (
      feltetel.keresesiAdatok.nev == '' &&
      feltetel.keresesiAdatok.kategoria == '-' &&
      feltetel.keresesiAdatok.opRendszer == '-' &&
      feltetel.keresesiAdatok.processzor == '-' &&
      feltetel.keresesiAdatok.ram == '' &&
      feltetel.keresesiAdatok.tarhely == '' &&
      feltetel.keresesiAdatok.videokartya == '-'
    ){
      setNincsFeltetel(true);
    }
  }, [feltetel]);
  console.log(feltetel.keresesiAdatok);

  const [mindenApp, setMindenApp] = useState([]);
  const [betoltA, setBetoltA] = useState(true);

  async function getMindenApp() {
    try {
      const response = await fetch('https://localhost:44316/api/Applikacio');
      const data = await response.json();
      setMindenApp(data);
      setBetoltA(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMindenApp();
  }, []);

  var adatok=feltetel.keresesiAdatok;
  function betoltesKezelo(){
    //Nincs feltétel
    if (
      adatok.nev == ''
    ){
      mindenElemBetoltese();
    }
  }

  var Mind = [];
  function mindenElemBetoltese() {
    var AppIndex = mindenApp.length;
    for (let i = 0; i < AppIndex; i++) {
      const adat = { id: mindenApp[i].Id };
      Mind.push(
        <div className="korKepKeret alKorKepKeret" key={i}>
          <img src={atmenetiKepLink} className="korKep" />
          <h4 className="appNeve">{mindenApp[i].AppNev}</h4>
          <h5 className="katNeve">{mindenApp[i].KategoriaNev}</h5>
          <Link to="/oldalak/AlkalmazasReszletek" state={adat}>
            <button className="reszletGomb">További részletek</button>
          </Link>
        </div>
      );
    }
    return Mind.map((x) => x);
  }

  return (
    <div className="kartyak">
      {betoltA && nincsFeltetel ? console.log('Betöltés folyamatban !') : mindenElemBetoltese()}
    </div>
  );
}

export default AppLista;
