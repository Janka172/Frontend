import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Reszletek(beTipus) {
  const location = useLocation();
  const info = location.state;

  if(beTipus.tipus=='v'){
    var adat={
      'Név':'Videókártya Neve',
      'Alaplapi Csatlakozás':'Alap csati',
      'Ajánlott Tápegység':'ajanlottTapegyseg',
      'Monitor Csatlakozás':'monitorCsatlakozas',
      'VRAM':'vram',
      'Chip gyártója':'chipGyartoja'
    }
  }
  else if(beTipus.tipus=='p'){
    var adat={
      'Név':'nev',
      'Alaplap Foglalat':'alaplapFoglalat',
      'Szálak Száma':'szalakSzama',
      'Támogatott Memóriatípus':'tamogatottMemoriatipus',
      'Processzormagok Száma':'processzormagokSzama',
      'Gyártó':'gyarto',
      'Ajánlott Tápegység':'ajanlottTapegyseg',
      'Integrált Videókártya':'intergraltVideokartya'
    }
  }
  else if(beTipus.tipus=='r'){
    var adat={
      'Név':'nev',
      'Memória Típus':'memoriaTipus',
      'Frekvencia':'freki',
      'Méret':'meret'
    }
  }
  else if(beTipus.tipus=='o'){
    var adat={
      'Név':'nev',
      'Build Szám':'buildSzam',
      'Verzió':'verzio'
    }
  }
  else if(beTipus.tipus=='a'){
    var adat={
      'Név': 'nev',
      'CPU Foglalat': 'cpuFoglalat',
      'Alaplap Formátum': 'alaplapFormatum',
      'Maximális Frekvencia': 'maxFrekvencia',
      'Memóriatípus': 'memoriaTipusa',
      'Lapkakészlet': 'lapkakeszlet',
      'Slotok Száma': 'slotSzam',
      'Hangkártya': 'hangkartya',
      'Csatlakozók':[
        { 'Név':'Csati1 Neve'},
        { 'Név':'Csati2 Neve'},
        { 'Név':'Csati3 Neve'}
      ]
    }
        
  }
  
  var Mind=[];
  for(var elem in adat){
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

  return (
    <div className='conti teljesReszletMenu'>
      {Mind.map(x=>x)}
    </div>
  );
}

export default Reszletek;