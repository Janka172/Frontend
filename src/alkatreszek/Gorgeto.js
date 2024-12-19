import { useState, useRef } from 'react';
import GorgetoStilus from './Gorgeto.css';

function Gorgeto(tema) {
    const [szuroSzoveg, getSzuroSzoveg]=useState('Szűrő');
    // Adatbázisból származtatott adatok
    var AppIndex = 50;
    var rovidit='';
    var Mind = [];
    var Attributumok=[];
    if(tema.tema=='Videókártyák'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Videokartya Neve'}];
        rovidit='v';
        Attributumok.push('Név', 'Alaplapi Csatlakozás', 'Ajánlott Tápegyseg', 'Monitor Csatlakozás', 'Chip Gyártója', 'VRAM');
    }
    if(tema.tema=='Processzorok'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Processzor Neve'}];
        rovidit='p';
        Attributumok.push('Név', 'Alaplap Foglalat', 'Szálak Száma', 'Támogatott Memóriatípus', 'Processzormagok Szama', 'Gyártó', 'Ajánlott Tápegyseg', 'Integrált Videókártya');
    }
    if(tema.tema=='RAM-ok'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'RAM Neve'}];
        rovidit='r';
        Attributumok.push('Név', 'Memória Típus', 'Frekvencia', 'Méret');
    }
    if(tema.tema=='Operációsrendszerek'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Operációsrendszer Neve'}];
        rovidit='o';
        Attributumok.push('Név', 'Build Szám', 'verzió');
    }
    if(tema.tema=='Alaplap'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Alaplap Neve'}];
        rovidit='a';
        Attributumok.push('Név', 'CPU Foglalat', 'Alaplap Formátum', 'Maximum Frekvencia', 'Memoria Típusa', 'Lapkakészlet', 'Slot Szám', 'Hangkártya');
    }
    for (let i = 0; i < AppIndex; i++) {
        let kepKulcs='Kep'+{i}+{rovidit};
        let cimKulcs='Cim'+{i}+{rovidit};
        Mind.push(
            <div className="korKepKeret" key={i}>
                <img src={AlkatTulajdonsagok[0].kepEleres} className="korKep" alt="Kép" key={kepKulcs} />
                <h4 className="alkatNeve" key={cimKulcs}>{AlkatTulajdonsagok[0].nev}</h4>
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

    var SzuroMenuje=[];
    function menuMegnyitas(){
        if(rovidit=='v'){
            for(let elem of Attributumok){
                SzuroMenuje.push(
                    <div className='TeljesMenu'>
                        
                    </div>
                )
                console.log(elem)
            }
        }
    }

    return (
        <div className='container'>
            <div className='cim_Menu'>
                <p className='cim'>{tema.tema}</p>
                <button className='szuroGomb' onClick={menuMegnyitas}>{szuroSzoveg}</button>
            </div>
            <div className='alkatrKeret' ref={gorgetoContainer}>
                {Mind.map(x => x)}
            </div>
            <button className="balraNyil" onClick={gorgetoLeft}>&#8592;</button>
            <button className="jobbraNyil" onClick={gorgetoRight}>&#8594;</button>

            <div className='szuroMenu'>

            </div>
        </div>
    );
}

export default Gorgeto;
