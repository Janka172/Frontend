import React from 'react';
import './AppLista.css';

function AppLista() {

    //Adatbázisból származatat
    var AppIndex=50;
    var AppTulajdonsagaok=[{'kepEleres':'/kepek/kep.png', 'nev':'Progi Neve', 'kat':'Kategória Neve'}];
    var Mind=[];
    for(let i=0;i<AppIndex;i++){
        Mind.push(
            <div className="korKepKeret">
                <img src={AppTulajdonsagaok[0].kepEleres} className="korKep" />
                <h4 className="appNeve">{AppTulajdonsagaok[0].nev}</h4>
                <h5 className='katNeve'>{AppTulajdonsagaok[0].kat}</h5>
            </div>
        )        
    }
    
  return (
    <div id="kartyak">
      {Mind.map(x=> (x))}
    </div>
  );
}

export default AppLista;
