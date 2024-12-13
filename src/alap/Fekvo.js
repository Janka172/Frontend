import { useState } from 'react';
import './Fekvo.css';
import { Link } from 'react-router-dom';

function Fekvo() {

  return (
    <nav className="navbar">
        <Link to="/">Kezdőlap</Link>
        <Link>Rólunk</Link>
        <Link>Kontakt</Link>
    </nav>
    
  );
}

export default Fekvo;
/*
<Link className='nincsBejelentkezve'>Regisztráció</Link>
<Link className='nincsBejelentkezve'>Bejelentkezés</Link>

<Link className='beVanJelentkezve'>Kijelentkezés</Link>
*/