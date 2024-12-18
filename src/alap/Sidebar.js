import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const open = () => {
    setSidebarOpen(true);
  };

  const close = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className="sidebar blockSidebar balAnim" style={{width: sidebarOpen ? '25%' : '0', display: sidebarOpen ? 'block' : 'none',}} id="mySidebar">
        <button className="navigElem gombi visszaGomb" onClick={close}>Vissza &times;</button>
        <Link to="/oldalak/Alkalmazasok" className="navigElem gombi">Alkalmazások</Link>
        <Link to="/oldalak/Alkatreszek" className="navigElem gombi">Alkatrészek</Link>
        <Link to="#" className="navigElem gombi">Saját setup</Link>
        <Link to="#" className="navigElem gombi">Új alkalmazás</Link>
        <Link to="#" className="navigElem gombi">Új alkatrész</Link>
      </div>

      <div id="hambiGomb" style={{ marginLeft: sidebarOpen ? '25%' : '0',}}>
        <button className="hambiGombocska" onClick={open} id="openNav" style={{display: sidebarOpen ? 'none' : 'inline-block',}}>&#9776;</button>
      </div>
    </div>
  );
}

export default Sidebar;
