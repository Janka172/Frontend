import { useState } from 'react';
import AlkReszletStilus from './AlkReszlet.css';
import { useLocation } from 'react-router-dom';
import Gorgeto from '../alkatreszek/Gorgeto';
import Vissza from './Vissza';


function AlkatreszReszletek() {
  const location = useLocation();
  const info = location.state;
  //Id alapján megszerzi az adatot
  
  if(info.tipus=='v'){
    var adat={
      'Név':'Videókártya Neve',
      'Alaplapi Csatlakozás':'Alap csati',
      'Ajánlott Tápegység':'ajanlottTapegyseg',
      'Monitor Csatlakozás':'monitorCsatlakozas',
      'VRAM':'vram',
      'Chip gyártója':'chipGyartoja',
      'tema':'Videókártyák'
    }
  }
  else if(info.tipus=='p'){
    var adat={
      'Név':'nev',
      'Alaplap Foglalat':'alaplapFoglalat',
      'Szálak Száma':'szalakSzama',
      'Támogatott Memóriatípus':'tamogatottMemoriatipus',
      'Processzormagok Száma':'processzormagokSzama',
      'Gyártó':'gyarto',
      'Ajánlott Tápegység':'ajanlottTapegyseg',
      'Integrált Videókártya':'intergraltVideokartya',
      'tema':'Processzorok'
    }
  }
  else if(info.tipus=='r'){
    var adat={
      'Név':'nev',
      'Memória Típus':'memoriaTipus',
      'Frekvencia':'freki',
      'Méret':'meret',
      'tema':'RAM-ok'
    }
  }
  else if(info.tipus=='o'){
    var adat={
      'Név':'nev',
      'Build Szám':'buildSzam',
      'Verzió':'verzio',
      'tema':'Operációsrendszerek'
    }
  }
  else if(info.tipus=='a'){
    var adat={
      'Név': 'nev',
      'CPU Foglalat': 'cpuFoglalat',
      'Alaplap Formátum': 'alaplapFormatum',
      'Maximális Frekvencia': 'maxFrekvencia',
      'Memóriatípus': 'memoriaTipusa',
      'Lapkakészlet': 'lapkakeszlet',
      'Slotok Száma': 'slotSzam',
      'Hangkártya': 'hangkartya',
      'tema': 'Alaplapok',
      'Csatlakozók':[
        { 'Név':'Csati1 Neve'},
        { 'Név':'Csati2 Neve'},
        { 'Név':'Csati3 Neve'}
      ]
    }
    
  }

  var Mind=[];
  for(var elem in adat){
    if(elem!='tema' && elem!='Név'){
      if(elem=='Csatlakozók'){
        var CsatiElemek = [];
        var csatokSzama = 0;
        for(var csatlak of adat[elem]){
            csatokSzama++;
            var kulcs = 'Csatlakozo' + csatokSzama;
            CsatiElemek.push(
              <div className='csatiElem' key={kulcs}>
                <h2 className='csatiNeve'>{csatlak.Név}</h2> 
              </div>
            );
        }

        Mind.push(
          <div className='sor' key={elem}>
              <h2 className='elemNev'>{elem + ':'}</h2>
              <div className='csatiLista'>
                {CsatiElemek.map(x=>x)}
              </div>
          </div>
        );

      }
      else{
        Mind.push(
          <div className='sor' key={elem}>
            <h2 className='elemNev'>{elem+':'}</h2>
            <h2 className='elemErtek'>{adat[elem]}</h2>
          </div>
        )
      }
    }
  }

  return (
    <div className='teljes'>
      <h1 className='tipCim'>{adat.Név}</h1>
      <div className='conti'>
        {Mind.map(x=>x)}
      </div>
      <Gorgeto tema='Alaplapok'></Gorgeto>
      
      <Vissza></Vissza>
    </div>
  );
}

export default AlkatreszReszletek;
