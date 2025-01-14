import React, { useState, useEffect } from 'react';
import { useKeresesiAdatok } from './KeresesiAdatokContext';
import { Link } from 'react-router-dom';
import AppListaStilus from './AppLista.css';

function AppLista() {
  var atmenetiKepLink = '/kepek/kep.png';
  
  const [mindenApp, setMindenApp] = useState([]);
  const [szurtApp, setSzurtApp] = useState([]);
  const [betoltA, setBetoltA] = useState(true);

  const  feltetel  = useKeresesiAdatok();
  useEffect(() => {
    setSzurtApp(mindenApp);
    szur();
  }, [feltetel]);

  async function getMindenApp() {
    try {
      const response = await fetch('https://localhost:44316/api/Applikacio');
      const data = await response.json();
      setMindenApp(data);
      setSzurtApp(data);
      setBetoltA(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMindenApp();
  }, []);

  var Mind = [];
  function mindenElemBetoltese() {
    var AppIndex = szurtApp.length;
    for (let i = 0; i < AppIndex; i++) {
      const adat = { id: szurtApp[i].Id };
      Mind.push(
        <div className="korKepKeret alKorKepKeret" key={i}>
          <img src={atmenetiKepLink} className="korKep" />
          <h4 className="appNeve">{szurtApp[i].AppNev}</h4>
          <h5 className="katNeve">{szurtApp[i].KategoriaNev}</h5>
          <Link to="/oldalak/AlkalmazasReszletek" state={adat}>
            <button className="reszletGomb">További részletek</button>
          </Link>
        </div>
      );
    }
    return Mind.map((x) => x);
  }

  function nevSzures() {
    if(feltetel.keresesiAdatok.nev != ''){
      var nevreSzurt = szurtApp.filter(x => x.AppNev.includes(feltetel.keresesiAdatok.nev));
      setSzurtApp(nevreSzurt);
    }
  }

  function kategoriaSzures() {
    if(feltetel.keresesiAdatok.kategoria != '-'){
      var katraSzurt = szurtApp.filter(x => x.KategoriaNev == feltetel.keresesiAdatok.kategoria);
      setSzurtApp(katraSzurt)
    } 
  }

  function vidkSzures() {
    var vidkraSzurt = szurtApp.filter(x => x.VidekortyaNev == feltetel.keresesiAdatok.videokartya);
  }

  function prociSzures() {
    var prociraSzurt = szurtApp.filter(x => x.ProcesszorNev == feltetel.keresesiAdatok.processzor);
  }

  function opSzures() {
    if(feltetel.keresesiAdatok.videokartya != '-'){
      var opraSzurt = szurtApp.filter(x => x.VidekortyaNev == feltetel.keresesiAdatok.videokartya);
      setSzurtApp(opraSzurt);
    }
  }

  function ramSzures() {
    if(feltetel.keresesiAdatok.ram != '-'){
      var ramraSzurt = szurtApp.filter(x => x.RamMeret <= feltetel.keresesiAdatok.ram);
      setSzurtApp(ramraSzurt);
    }
  }

  function tarSzures() {
    var tarraSzurt = szurtApp.filter(x => x.Tarhely == feltetel.keresesiAdatok.tarhely);
  }

  const [szurtAlap, setSzurtAlap] = useState(false);

function szur() {
  setSzurtApp(mindenApp);
  setSzurtAlap(true);
}
useEffect(() => {
  if (szurtAlap) {
    nevSzures();
    kategoriaSzures();
    ramSzures();
    opSzures();
    setSzurtAlap(false);
  }
}, [szurtApp, szurtAlap]);

  return (
    <div className="kartyak">
      {betoltA ? console.log('Betöltés folyamatban !') : mindenElemBetoltese()}
      
    </div>
  );
}

export default AppLista;
