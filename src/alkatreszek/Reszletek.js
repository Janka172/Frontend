import { useState, useEffect } from 'react';

function Reszletek({ adat }) {
  var [Mind, setMind] = useState([]);
  var [betoltve, setBetoltve] = useState(false);

  useEffect(() => {
    elemekBetoltese();
  }, [adat]); // Az adat változásakor újra betölti az elemeket

  function elemekBetoltese() {
    let ujMind = []; // Létrehozzuk az új tömböt
console.log(adat)
    for (let sor in adat) {
      var kiirando=sor;

      if(adat[sor] == false) adat[sor]='Nincs';
      else if(adat[sor] == true) adat[sor]='Van';

      if(sor == 'Nev') kiirando = 'Név';
      else if(sor == 'alaplapiCsatlakozas') kiirando = 'Alaplai Csatlakozás';
      else if(sor == 'ajanlottTapegyseg') kiirando = 'Ajánlott Tápegység';
      else if(sor == 'monitorCsatlakozas') kiirando = 'Monitor Csatlakozás';
      else if(sor == 'chipGyartoja') kiirando = 'Chip Gyártója';
      else if(sor == 'vram') kiirando = 'VRAM';
      else if(sor == 'AlaplapFoglalat') kiirando = 'Alaplap Foglalat';
      else if(sor == 'SzalakSzama') kiirando = 'Szálak Száma';
      else if(sor == 'TamogatottMemoriatipus') kiirando = 'Támogatott Memóriatípus';
      else if(sor == 'ProcesszormagokSzama') kiirando = 'Processzormagok Száma';
      else if(sor == 'ProcesszorFrekvencia') kiirando = 'Processzor Frekvencia';
      else if(sor == 'BProcesszorFrekvencia') kiirando = 'B Processzor Frekvencia';
      else if(sor == 'Gyarto') kiirando = 'Gyártó';
      else if(sor == 'AjanlottTapegyseg') kiirando = 'Ajánlott Tápegyseg';
      else if(sor == 'IntegraltVideokartya') kiirando = 'IntegráltVideokártya';
      else if(sor == 'MemoriaTipus') kiirando = 'Memoria Tipus';
      else if(sor == 'Meret') kiirando = 'Méret';
      else if(sor == 'BuildSzam') kiirando = 'Build Szám';
      else if(sor == 'Verzio') kiirando = 'Verzió';
      else if(sor == 'CpuFoglalat') kiirando = 'Cpu Foglalat';
      else if(sor == 'AlaplapFormatum') kiirando = 'Alaplap Formátum';
      else if(sor == 'MaxFrekvencia') kiirando = 'Maximális Frekvencia';
      else if(sor == 'MemoriaTipusa') kiirando = 'Memoria Típusa';
      else if(sor == 'Lapkakeszlet') kiirando = 'Lapkakészlet';
      else if(sor == 'SlotSzam') kiirando = 'Slot Szám';
      else if(sor == 'Hangkartya') kiirando = 'Hangkártya';

      ujMind.push(
        <div className="sor" key={sor}>
          <h2 className="elemNev">{kiirando + ':'}</h2>
          <h2 className="elemErtek">{adat[sor]}</h2>
        </div>
      );
    }
    
    setMind(ujMind); // Beállítjuk a Mind állapotot a frissített tömbre
    setBetoltve(true); // Beállítjuk, hogy betöltve van
  }

  return (
    <div className="conti teljesReszletMenu">
      {betoltve ? Mind.map((x) => x) : <p>Betöltés folyamatban!</p>}
    </div>
  );
}

export default Reszletek;
