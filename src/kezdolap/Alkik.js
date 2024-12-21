import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlkikStilus from './Alkik.css';

function Alkik({egy, ketto, harom, negy}){
    //Lekér random 4 appot
    var Appok=[{'kepEleres':'/kepek/kep.png', 'nev':'Progi1 Neve', 'kat':'Kategória Neve', 'id':'0'},
        {'kepEleres':'/kepek/kep.png', 'nev':'Progi2 Neve', 'kat':'Kategória Neve', 'id':'0'},
        {'kepEleres':'/kepek/kep.png', 'nev':'Progi3 Neve', 'kat':'Kategória Neve', 'id':'0'},
        {'kepEleres':'/kepek/kep.png', 'nev':'Progi4 Neve', 'kat':'Kategória Neve', 'id':'0'}
    ];

    return (
        <div>
          <div className="row">
            <Link to='/oldalak/AlkalmazasReszletek' state={Appok[0]}>
                <div className="korKepKeret">
                    <img src={Appok[0].kepEleres} className="korKep" />
                    <h4 className="kezd">{Appok[0].nev}</h4>
                </div>
            </Link>
        
            <Link to='/oldalak/AlkalmazasReszletek' state={Appok[0]}>
                <div className="korKepKeret">
                    <img src={Appok[1].kepEleres} className="korKep" />
                    <h4 className="kezd">{Appok[1].nev}</h4>
                </div>
            </Link>
            </div>

            <div className='row'>
            <Link to='/oldalak/AlkalmazasReszletek' state={Appok[0]}>
                <div className="korKepKeret">
                    <img src={Appok[2].kepEleres} className="korKep" />
                    <h4 className="kezd">{Appok[2].nev}</h4>
                </div>
            </Link>

            <Link to='/oldalak/AlkalmazasReszletek' state={Appok[0]}>
                <div className="korKepKeret">
                    <img src={Appok[3].kepEleres} className="korKep" />
                    <h4 className="kezd">{Appok[3].nev}</h4>
                </div>
            </Link>
            </div>
        </div>
      );
}

export default Alkik;