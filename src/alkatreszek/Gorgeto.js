import { useState, useRef } from 'react';
import GorgetoStilus from './Gorgeto.css';

function Gorgeto(tema) {
    // Adatbázisból származtatott adatok
    var AppIndex = 50;
    var rovidit='';
    var Mind = [];
    if(tema.tema=='Videókártyák'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Videokartya Neve'}];
        rovidit='v';
    }
    if(tema.tema=='Processzorok'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Processzor Neve'}];
        rovidit='p'
    }
    if(tema.tema=='RAM-ok'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'RAM Neve'}];
        rovidit='r'
    }
    if(tema.tema=='Operációsrendszerek'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Operációsrendszer Neve'}];
        rovidit='o'
    }
    if(tema.tema=='Alaplap'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Alaplap Neve'}];
        rovidit='a'
    }
    if(tema.tema=='Csatlakozók'){  
        var AlkatTulajdonsagok = [{'kepEleres': '/kepek/kep.png', 'nev': 'Csatlakozó Neve'}];
        rovidit='c'
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

    return (
        <div className='container'>
            <div className='cim_Menu'>
                <p className='cim'>{tema.tema}</p>
                <button className='szuroGomb'>Szűrő</button>
            </div>
            <div className='alkatrKeret' ref={gorgetoContainer}>
                {Mind.map(x => x)}
            </div>
            <button className="balraNyil" onClick={gorgetoLeft}>&#8592;</button>
            <button className="jobbraNyil" onClick={gorgetoRight}>&#8594;</button>
        </div>
    );
}

export default Gorgeto;
