import React from 'react';
import AppListaStilus from './AppLista.css';
import { Link } from 'react-router-dom';

function AppLista() {

    //Adatbázisból származatat
    var AppIndex=50;
    var AppTulajdonsagaok=[{'kepEleres':'/kepek/kep.png', 'nev':'Progi Neve', 'kat':'Kategória Neve', 'id':'0'}];
    var Mind=[];
    for(let i=0; i<AppIndex; i++){
      const adat = { id: AppTulajdonsagaok[0].index };
      Mind.push(
          <div className="korKepKeret" key={i}>
              <img src={AppTulajdonsagaok[0].kepEleres} className="korKep" />
              <h4 className="appNeve">{AppTulajdonsagaok[0].nev}</h4>
              <h5 className='katNeve'>{AppTulajdonsagaok[0].kat}</h5>
              <Link to='/oldalak/AlkalmazasReszletek' state={adat}><button className='reszletGomb'>További részletek</button></Link>
          </div>
      )        
    }
    
  return (
    <div className="kartyak">
      {Mind.map(x=> (x))}
    </div>
  );
}

export default AppLista;
