import { useState, useRef } from 'react';
import SajatStilus from './Sajat.css';
import { Link } from 'react-router-dom';


function Sajat() {

  var mindenVideokartya= [
    {'nev':'Videokartya 1', 'id':'0'},
    {'nev':'Videokartya 2', 'id':'0'},
    {'nev':'Videokartya 3', 'id':'0'},
    {'nev':'Videokartya 4', 'id':'0'},
    {'nev':'Videokartya 5', 'id':'0'},
    {'nev':'Videokartya 6', 'id':'0'},
    {'nev':'Videokartya 7', 'id':'0'},
    {'nev':'Videokartya 8', 'id':'0'}
  ];
  var mindenProcesszor = [
    {'nev':'Processzor 1', 'id':'0'},
    {'nev':'Processzor 2', 'id':'0'},
    {'nev':'Processzor 3', 'id':'0'},
    {'nev':'Processzor 4', 'id':'0'},
    {'nev':'Processzor 5', 'id':'0'},
    {'nev':'Processzor 6', 'id':'0'},
    {'nev':'Processzor 7', 'id':'0'},
    {'nev':'Processzor 8', 'id':'0'}
  ]; 
  var mindenOpRendszer = [
    {'nev':'OpRendszer 1', 'id':'0'},
    {'nev':'OpRendszer 2', 'id':'0'},
    {'nev':'OpRendszer 3', 'id':'0'},
    {'nev':'OpRendszer 4', 'id':'0'},
    {'nev':'OpRendszer 5', 'id':'0'},
    {'nev':'OpRendszer 6', 'id':'0'},
    {'nev':'OpRendszer 7', 'id':'0'},
    {'nev':'OpRendszer 8', 'id':'0'}
  ];
  var mindenRam = [
    {'nev':'Ram 1', 'id':'0'},
    {'nev':'Ram 2', 'id':'0'},
    {'nev':'Ram 3', 'id':'0'},
    {'nev':'Ram 4', 'id':'0'},
    {'nev':'Ram 5', 'id':'0'}
  ];
  var mindenAlaplap = [
    {'nev':'Alaplap 1', 'id':'0'},
    {'nev':'Alaplap 2', 'id':'0'},
    {'nev':'Alaplap 3', 'id':'0'},
    {'nev':'Alaplap 4', 'id':'0'},
    {'nev':'Alaplap 5', 'id':'0'},
    {'nev':'Alaplap 6', 'id':'0'},
    {'nev':'Alaplap 7', 'id':'0'},
    {'nev':'Alaplap 8', 'id':'0'}
  ];

  const [kivVideokartya, setKivalasztottVideokartya] = useState({'id':'-1', 'nev':'-'});
  const [kivProcesszor, setKivalasztottProcesszor] = useState({'id':'-1', 'nev':'-'});
  const [kivOpRendszer, setKivalasztottOpRendszer] = useState({'id':'-1', 'nev':'-'});
  const [kivRam, setKivalasztottRam] = useState({'id':'-1', 'nev':'-'});
  const [kivAlaplap, setKivalasztottAlaplap] = useState({'id':'-1', 'nev':'-'});
  
  const [aktuVideokartya, setAktuVideokartya] = useState(mindenVideokartya[0]);
  const [aktuProcesszor, setAktuProcesszor] = useState(mindenProcesszor[0]);
  const [aktuOpRendszer, setAktuOpRendszer] = useState(mindenOpRendszer[0]);
  const [aktuRam, setAktuRam] = useState(mindenRam[0]);
  const [aktuAlaplap, setAktuAlaplap] = useState(mindenAlaplap[0]);

  const valtozoVidk = (e) => {
    const aktuNev = e.target.value;
    setAktuVideokartya(mindenVideokartya.find(x => x.nev === aktuNev));
  };

  const valtozoProc = (e) => {
    const aktuNev = e.target.value;
    setAktuProcesszor(mindenProcesszor.find(x => x.nev === aktuNev));
  };

  const valtozoOpRend = (e) => {
    const aktuNev = e.target.value;
    setAktuOpRendszer(mindenOpRendszer.find(x => x.nev === aktuNev));
  };

  const valtozoRam = (e) => {
    const aktuNev = e.target.value;
    setAktuRam(mindenRam.find(x => x.nev === aktuNev));
  };

  const valtozoAlaplap = (e) => {
    const aktuNev = e.target.value;
    setAktuAlaplap(mindenAlaplap.find(x => x.nev === aktuNev));
  };

  function kivalasztVidk(){
    setKivalasztottVideokartya(aktuVideokartya);
  };

  function kivalasztProc(){
    setKivalasztottProcesszor(aktuProcesszor);
  }

  function kivalasztOpRend(){
    setKivalasztottOpRendszer(aktuOpRendszer);
  }

  function kivalasztRam(){
    setKivalasztottRam(aktuRam);
  }

  function kivalasztAlaplap(){
    setKivalasztottAlaplap(aktuAlaplap);
  }

  const gorgetoContainer = useRef(null);
  const gorgetoLeft = () => {
      gorgetoContainer.current.scrollBy({
          top: 0,
          left: -300,
      });
  };
  const gorgetoRight = () => {
      gorgetoContainer.current.scrollBy({
          top: 0,
          left: 300,
      });
  };

  const [Mind, setMind] = useState([]);
  const [ottVanVagyNem, setOttVanVagyNem] = useState('none');
  function listazas() {
    if(kivVideokartya.id!='-1' && kivProcesszor.id!='-1' && kivOpRendszer.id!='-1' && kivRam.id!='-1' && kivAlaplap.id!='-1'){
      setOttVanVagyNem('block');
      var Appok = [{'kepEleres':'/kepek/kep.png', 'nev':'Progi Neve', 'kat':'Kategória Neve', 'id':'0'}];
      const AppIndex = 20;
      let tempMind = [];
      for (let i = 0; i < AppIndex; i++) {
        const adat = { id: Appok[0].id };
        tempMind.push(
          <div className="korKepKeret" key={i}>
            <img src={Appok[0].kepEleres} className="korKep" alt="App kép" />
            <h4 className="appNeve">{Appok[0].nev}</h4>
            <h5 className='katNeve'>{Appok[0].kat}</h5>
            <Link to='/oldalak/AlkalmazasReszletek' state={adat}>
              <button className='reszletGomb'>További részletek</button>
            </Link>
          </div>
        );
      }
      setMind(tempMind);
    }
  }

  return (
    <div>
      <div className='kivalasztottak'>
        <h1>Kiválasztott alkatrészek</h1>

        <div className='sor'>
          <h2>Videókártya:</h2>
          <h2>{kivVideokartya.nev}</h2>
        </div>

        <div className='sor'>
          <h2>Processzor:</h2>
          <h2>{kivProcesszor.nev}</h2>
        </div>

        <div className='sor'>
          <h2>Operációsrendszer:</h2>
          <h2>{kivOpRendszer.nev}</h2>
        </div>

        <div className='sor'>
          <h2>Ram:</h2>
          <h2>{kivRam.nev}</h2>
        </div>

        <div className='sor'>
          <h2>Alaplap:</h2>
          <h2>{kivAlaplap.nev}</h2>
        </div>
        <button className='szur' onClick={listazas}>Futtatható Alkalmazások Megjelenítése</button>
      </div>

      <div className='kompat' style={{ display: ottVanVagyNem }}>
        <div className='alkatrKeret' ref={gorgetoContainer}>
          {Mind}
          <button className="balraNyil" onClick={gorgetoLeft}>&#8592;</button>
          <button className="jobbraNyil" onClick={gorgetoRight}>&#8594;</button>
        </div>
      </div>

      <div className='kivalszto'>
        <h1>Kiválasztható alkatrészek</h1>

        <div className='kivSor'>
          <h2>Videókártya:</h2>
          <select className='combo' onChange={valtozoVidk}>{mindenVideokartya.map(x=><option key={x.id} value={x.nev}>{x.nev}</option>)}</select>
          <button className='sajGomb' onClick={kivalasztVidk}>Hozzáadás</button>
          <Link to='/oldalak/AlkatreszReszletek' state={{'tipus':'v', 'id':aktuVideokartya.id}}><button className='sajGomb'>További részletek</button></Link>
        </div>

        <div className='kivSor'>
          <h2>Processzor:</h2>
          <select className='combo' onChange={valtozoProc}>{mindenProcesszor.map(x=><option key={x.id} value={x.nev}>{x.nev}</option>)}</select>
          <button className='sajGomb' onClick={kivalasztProc}>Hozzáadás</button>
          <Link to='/oldalak/AlkatreszReszletek' state={{'tipus':'p', 'id':aktuProcesszor.id}}><button className='sajGomb'>További részletek</button></Link>
        </div>

        <div className='kivSor'>
          <h2>Operációsrendszer:</h2>
          <select className='combo' onChange={valtozoOpRend}>{mindenOpRendszer.map(x=><option key={x.id} value={x.nev}>{x.nev}</option>)}</select>
          <button className='sajGomb' onClick={kivalasztOpRend}>Hozzáadás</button>
          <Link to='/oldalak/AlkatreszReszletek' state={{'tipus':'o', 'id':aktuOpRendszer.id}}><button className='sajGomb'>További részletek</button></Link>
        </div>

        <div className='kivSor'>
          <h2>Ram:</h2>
          <select className='combo' onChange={valtozoRam}>{mindenRam.map(x=><option key={x.id} value={x.nev}>{x.nev}</option>)}</select>
          <button className='sajGomb' onClick={kivalasztRam}>Hozzáadás</button>
          <Link to='/oldalak/AlkatreszReszletek' state={{'tipus':'r', 'id':aktuRam.id}}><button className='sajGomb'>További részletek</button></Link>
        </div>

        <div className='kivSor'>
          <h2>Alaplap:</h2>
          <select className='combo' onChange={valtozoAlaplap}>{mindenAlaplap.map(x=><option key={x.id} value={x.nev}>{x.nev}</option>)}</select>
          <button className='sajGomb' onClick={kivalasztAlaplap}>Hozzáadás</button>
          <Link to='/oldalak/AlkatreszReszletek' state={{'tipus':'a', 'id':aktuAlaplap.id}}><button className='sajGomb'>További részletek</button></Link>
        </div>
      </div>

    </div>
  );
}

export default Sajat;