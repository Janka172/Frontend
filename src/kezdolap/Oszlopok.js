import React from 'react';
import './Oszlopok.css';
import '../App.css';
import Alkik from './Alkik';

function Oszlopok() {
  return (
    <div className="two-columns">
      <div className="left">
        <p>A Byte Benchmark weboldalala lehetővé teszi a felhasználók számára, hogy egy-egy alkalmazás futtatásához milyen környezetre van szüksége, valamint a saját gépe milyen alkalmazásokat képes megfelelő minőségbne futtatni.<br/>
        <i>Regisztráció esetén alkalma adódik új alkalmazások felvételéhez is.</i></p>
        <p>Továbbá lehetőséget biztosítunk arra is, hogy összeállíthatson egy saját setupot, ezzel segítve hogy megtalálja az egymással kompatibilis eszközöket.<br/>
        <i>Regisztráció esetén alkalma adódik új alkatrészek felvételéhez is.</i></p>
        <p>Oldalunkkal segítséget szeretnénk nyújtani azoknak akik az informatikában nem jártasak, de szeretnének egy számukra megfelelő gépet összeállítani.</p>
      </div>
      <div className="right">
      <Alkik egy="App1" ketto="App3" harom="App3" negy="App4"></Alkik>
      </div>
    </div>
  );
}

export default Oszlopok;
