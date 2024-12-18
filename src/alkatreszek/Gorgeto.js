import { useState, useRef } from 'react';
import GorgetoStilus from './Gorgeto.css';

function Gorgeto({ tema }) {
    const [szuroSzoveg, setSzuroSzoveg] = useState('Szűrő');
    const [elsoMegnyitas, setelsoMegnyitas] = useState(true);
    const [SzuroMenuje, setSzuroMenuje] = useState([]);
    const [elemekBetoltve, setElemekBetoltve] = useState(false);
    const [nyilakElrejtese, setNyilakElrejtese] = useState({ display: 'block' });
    const [menuElrejtese, setMenuElrejtese] = useState({ display: 'none' });

    // Attribútumok különböző témákhoz
    const AlkatTulajdonsagok = {
        'Videókártyák': { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Videokartya Neve',
            rovidit: 'v',
            Attributumok: { 'Név': 'i', 'Alaplapi Csatlakozás': 'c', 'Ajánlott Tápegyseg': 'c', 'Monitor Csatlakozás': 'c', 'Chip Gyártója': 'c', 'VRAM': 'n' }
        },
        'Processzorok': { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Processzor Neve',
            rovidit: 'p',
            Attributumok: { 'Név': 'i', 'Szálak Száma': 'n', 'Támogatott Memóriatípus': 'c', 'Gyártó': 'i' }
        },
        'RAM-ok': { 
            kepEleres: '/kepek/kep.png', 
            nev: 'RAM Neve',
            rovidit: 'r',
            Attributumok: { 'Név': 'i', 'Memória Típus': 'c', 'Frekvencia': 'n', 'Méret': 'n' }
        },
        'Operációsrendszerek': { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Operációsrendszer Neve',
            rovidit: 'o',
            Attributumok: { 'Név': 'i', 'Build Szám': 'n', 'Verzió': 'i' }
        },
        'Alaplap': { 
            kepEleres: '/kepek/kep.png', 
            nev: 'Alaplap Neve',
            rovidit: 'a',
            Attributumok: { 'Név': 'i', 'CPU Foglalat': 'c', 'Memoria Típusa': 'c', 'Lapkakészlet': 'i' }
        }
    };

    const temaAdatok = AlkatTulajdonsagok[tema];

    // Elemlista létrehozása a megadott témához
    const Mind = [];
    const AppIndex = 50;
    for (let i = 0; i < AppIndex; i++) {
        Mind.push(
            <div className="korKepKeret" key={i}>
                <img src={temaAdatok.kepEleres} className="korKep" alt="Kép" />
                <h4 className="alkatNeve">{temaAdatok.nev}</h4>
            </div>
        );
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

    function eloszoriMegnyitas() {
        if (elsoMegnyitas) {
            setelsoMegnyitas(false);
            var Elemek = [];
            var index = 0;

            for (let elem in temaAdatok.Attributumok) {
                const attrType = temaAdatok.Attributumok[elem];
                if (attrType === 'i') {
                    Elemek.push(
                        <div key={index}>
                            <p className='cimsor'>{elem}</p>
                            <input type='text' />
                        </div>
                    );
                }
                if (attrType === 'n') {
                    Elemek.push(
                        <div key={index}>
                            <p className='cimsor'>{elem}</p>
                            <input type='number' />
                        </div>
                    );
                }
                if (attrType === 'c') {
                    Elemek.push(
                        <div key={index}>
                            <p className='cimsor'>{elem}</p>
                            <select></select>
                        </div>
                    );
                }
                index++;
            }
            Elemek.push(
                <button className='gombocska' key='kereses'>Keresés</button>
            );

            setSzuroMenuje(Elemek);
        }
        menuMegnyitas();
    }

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

    return (
        <div className='container'>
            <div className='cim_Menu'>
                <p className='cim'>{tema}</p>
                <button className='szuroGomb' onClick={eloszoriMegnyitas}>{szuroSzoveg}</button>
            </div>
            <div className='alkatrKeret' ref={gorgetoContainer}>
                {Mind}
                <button className="balraNyil" onClick={gorgetoLeft} style={nyilakElrejtese}>&#8592;</button>
                <button className="jobbraNyil" onClick={gorgetoRight} style={nyilakElrejtese}>&#8594;</button>
            </div>
            <div className='szuroMenu' style={menuElrejtese}>
                {elemekBetoltve && SzuroMenuje}
            </div>
        </div>
    );
}

export default Gorgeto;
