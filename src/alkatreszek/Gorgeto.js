
import { useState, useRef } from 'react';
import GorgetoStilus from './Gorgeto.css';
import { Link } from 'react-router-dom';
import Reszletek from './Reszletek';

function Gorgeto({ tema, hely }) {
    const [szuroSzoveg, setSzuroSzoveg] = useState('Szűrő');
    const [elsoMegnyitas, setelsoMegnyitas] = useState(true);
    const [SzuroMenuje, setSzuroMenuje] = useState([]);
    const [elemekBetoltve, setElemekBetoltve] = useState(false);
    const [nyilakElrejtese, setNyilakElrejtese] = useState({ display: 'block' });
    const [menuElrejtese, setMenuElrejtese] = useState({ display: 'none' });

    const [tartalom, setTartalom] = useState('További részletek');
    const [reszTartalom, setReszTartalom] = useState('none');

    // Attribútumok különböző témákhoz : Minden adat
    const AlkatTulajdonsagok = {
        'Videókártyák': [
            { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Videokartya Neve',
            rovidit: 'v',
            id: '0'
            }
        ],
        'Processzorok': [
            { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Processzor Neve',
            rovidit: 'p',
            id: '0'
            }
        ],
        'RAM-ok': [
            { 
            kepEleres: '/kepek/kep.png', 
            nev: 'RAM Neve',
            rovidit: 'r',
            id: '0'
            }
        ],
        'Operációsrendszerek': [
            { 
            kepEleres: '/kepek/kep.png', 
            nev: 'OP Neve',
            rovidit: 'o',
            id: '0'
            }
        ],
        'Alaplapok': [
            { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Alaplap Neve',
            rovidit: 'a',
            id: '0'
            }
        ]
    };
    const temaAdatok = AlkatTulajdonsagok[tema];
    // Elemlista létrehozása a megadott témához
    const Mind = [];
    const AppIndex = 50;
    for (let i = 0; i < AppIndex; i++) {
        const adat = {'tipus':temaAdatok[0].rovidit, 'id':temaAdatok[0].id};

        if(hely=='le'){
            Mind.push(
                <div className="korKepKeret" key={i}>
                    <img src={temaAdatok[0].kepEleres} className="korKep" alt="Kép" />
                    <h4 className="alkatNeve">{temaAdatok[0].nev}</h4>
                    <button className='reszletGomb' onClick={reszletMenu}>{tartalom}</button>
                </div>
            );
        }
        else{
            Mind.push(
                <div className="korKepKeret" key={i}>
                    <img src={temaAdatok[0].kepEleres} className="korKep" alt="Kép" />
                    <h4 className="alkatNeve">{temaAdatok[0].nev}</h4>
                    <Link to='/oldalak/AlkatreszReszletek' state={adat}><button className='reszletGomb'>További részletek</button></Link>
                </div>
            );
        }
        
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

    function menuMegnyitas() {
        if (!elemekBetoltve) {
            setElemekBetoltve(true);
            setSzuroSzoveg('X');
            setNyilakElrejtese({ display: 'none' });
            setMenuElrejtese({ display: 'block' });
        } else {
            setElemekBetoltve(false);
            setSzuroSzoveg('Szűrő');
            setNyilakElrejtese({ display: 'block' });
            setMenuElrejtese({ display: 'none' });
        }
    }

    function reszletMenu(){
        if(reszTartalom=='none'){
            setReszTartalom('block');
            setTartalom('X');
        }
        else{
            setReszTartalom('none');
            setTartalom('További részletek')
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='cim_Menu'>
                    <p className='cim'>{tema}</p>
                    <button className='szuroGomb' onClick={menuMegnyitas}>{szuroSzoveg}</button>
                </div>
                <div className='szuroMenu' style={menuElrejtese}>
                    <div>
                        <h2>Név:</h2>
                        <input type='text'></input>
                    </div>
                    <button className='kereses'>Keresés</button>
                </div>
                <div className='alkatrKeret' ref={gorgetoContainer}>
                    {Mind}
                    <button className="balraNyil" onClick={gorgetoLeft} style={nyilakElrejtese}>&#8592;</button>
                    <button className="jobbraNyil" onClick={gorgetoRight} style={nyilakElrejtese}>&#8594;</button>
                </div>
            </div>
            <div className='reszletek' style={{display: reszTartalom}}>
                <Reszletek tipus={temaAdatok[0].rovidit}></Reszletek>
            </div>
        </div>
        
    );
}

export default Gorgeto;
