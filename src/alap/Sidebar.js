import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const w3_open = () => {
    setSidebarOpen(true);
  };

  const w3_close = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div
        className="w3-sidebar w3-bar-block w3-card w3-animate-left menu"
        style={{
          width: sidebarOpen ? '25%' : '0',
          display: sidebarOpen ? 'block' : 'none',
        }}
        id="mySidebar"
      >
        <button className="w3-bar-item w3-button w3-large" onClick={w3_close}>
          Close &times;
        </button>
        <Link to="/oldalak/Alkalmazasok" className="w3-bar-item w3-button">Alkalmazások</Link>
        <Link to="#" className="w3-bar-item w3-button">Alkatrészek</Link>
        <Link to="#" className="w3-bar-item w3-button">Saját setup</Link>
        <Link to="#" className="w3-bar-item w3-button">Új alkalmazás</Link>
        <Link to="#" className="w3-bar-item w3-button">Új alkatrész</Link>
      </div>

      <div
        id="main"
        style={{
          marginLeft: sidebarOpen ? '25%' : '0',
        }}>
        <button
          className="w3-button w3-large"
          onClick={w3_open}
          id="openNav"
          style={{
            display: sidebarOpen ? 'none' : 'inline-block',
          }}>
          &#9776;
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
