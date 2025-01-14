import React from 'react';
import AppListaStilus from './AppLista.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AppLista() {
  var atmenetiKepLink='/kepek/kep.png';

    //Minden app adata
    const [mindenApp, setMindenApp] = useState([]);
    const [betoltA, setBetoltA] = useState(true);
    async function getMindenApp() {
      try {
        const response = await fetch("https://localhost:44316/api/Applikacio");
        const data = await response.json();
        setMindenApp(data);
        setBetoltA(false);
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => { getMindenApp(); }, []);
    
    var Mind=[];
    function mindenElemBetoltese(){
      var AppIndex=mindenApp.length;
      for(let i=0; i<AppIndex; i++){
        const adat = { id: mindenApp[i].Id };
        Mind.push(
            <div className="korKepKeret alKorKepKeret" key={i}>
                <img src={atmenetiKepLink} className="korKep" />
                <h4 className="appNeve">{mindenApp[i].AppNev}</h4>
                <h5 className='katNeve'>{mindenApp[i].KategoriaNev}</h5>
                <Link to='/oldalak/AlkalmazasReszletek' state={adat}><button className='reszletGomb'>További részletek</button></Link>
            </div>
        )        
      }
      return Mind.map(x=> (x));
    }
    
  return (
    <div className="kartyak">
      {betoltA ? console.log('Betöltés folyamatban !') : mindenElemBetoltese()}
    </div>
  );
}

export default AppLista;