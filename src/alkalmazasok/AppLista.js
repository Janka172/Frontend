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
      console.log(mindenApp)
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

  async function getHasProci(neve) {
    try {
      const response = await fetch(`https://localhost:44316/api/Processzor/0?name=${neve}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  function prociSzures() {
    if(feltetel.keresesiAdatok.processzor != '-'){
      var prociraSzurt = szurtApp.filter(x => console.log(melyikProcesszorJobb(feltetel.keresesiAdatok, x)));
      console.log()
      setSzurtApp(prociraSzurt)
      console.log(prociraSzurt)
    } 
  }
  function melyikProcesszorJobb(alap, hasonlitott) {
    // Processzormagok számának összehasonlítása
    console.log(alap)
    console.log(hasonlitott.ProcesszorMagokSzama)
    if (alap.ProcesszorMagokSzama < hasonlitott.ProcesszorMagokSzama) {
      return false;
    } else if (alap.ProcesszorMagokSzama >= hasonlitott.ProcesszorMagokSzama) {
      return true;
    }
    
    /*
    // Szálak számának összehasonlítása
    if (alap.SzalakSzama > hasonlitott.SzalakSzama) {
      return false;
    } else if (alap.SzalakSzama < hasonlitott.SzalakSzama) {
      return true;
    }
  
    // Processzor frekvencia (órajel) összehasonlítása
    if (alap.ProcesszorFrekvencia > hasonlitott.ProcesszorFrekvencia) {
      return false;
    } else if (alap.ProcesszorFrekvencia < hasonlitott.ProcesszorFrekvencia) {
      return true;
    }
  
    // Integrált videokártya figyelembe vétele
    if (alap.IntegraltVideokartya && !hasonlitott.IntegraltVideokartya) {
      return false;
    } else if (!alap.IntegraltVideokartya && hasonlitott.IntegraltVideokartya) {
      return true;
    }
  
    // Támogatott memória típus figyelembe vétele
    if (alap.TamogatottMemoriatipus > hasonlitott.TamogatottMemoriatipus) {
      return false;
    } else if (alap.TamogatottMemoriatipus < hasonlitott.TamogatottMemoriatipus) {
      return true;
    }
    */
    // Ha minden egyenlő, nincs különbség
    //return true;
  }

  function opSzures() {
    if(feltetel.keresesiAdatok.videokartya != '-'){
      var opraSzurt = szurtApp.filter(x => x.VidekortyaNev == feltetel.keresesiAdatok.videokartya);
      setSzurtApp(opraSzurt);
    }
  }

  function ramSzures() {
    if(feltetel.keresesiAdatok.ram != ''){
      var ramraSzurt = szurtApp.filter(x => x.RamMeret <= feltetel.keresesiAdatok.ram);
      setSzurtApp(ramraSzurt);
    }
  }

  function tarSzures() {
    if(feltetel.keresesiAdatok.tarhely != ''){
      var tarraSzurt = szurtApp.filter(x => x.Tarhely <= feltetel.keresesiAdatok.tarhely);
      setSzurtApp(tarraSzurt);
    }
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
      prociSzures();
      opSzures();
      tarSzures();
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
