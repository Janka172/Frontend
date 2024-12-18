import { useState, useRef } from 'react';
import './VideokartyaGorgeto.css';

function KeretAlkatresz() {
    // Adatbázisból származtatott adat
    var AppIndex = 50;
    var AlkatTulajdonsagok = [
        {'kepEleres': '/kepek/kep.png', 'nev': 'Progi Neve', 'kat': 'Kategória Neve'}
    ];
    var Mind = [];
    for (let i = 0; i < AppIndex; i++) {
        Mind.push(
            <div className="korKepKeret" key={i}>
                <img src={AlkatTulajdonsagok[0].kepEleres} className="korKep" alt="Kép" />
                <h4 className="alkatNeve">{AlkatTulajdonsagok[0].nev}</h4>
            </div>
        );
    }

    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({
            top: 0,
            left: -300, // Görgetés balra 300px
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({
            top: 0,
            left: 300, // Görgetés jobbra 300px
            behavior: 'smooth',
        });
    };

    return (
        <div className='videokartya'>
            <p className='vidCim'>Videókártyák</p>
            <div className='alkatrKeret' ref={scrollContainer}>
                {Mind.map(x => x)}
            </div>
            <button className="balraNyil" onClick={scrollLeft}>&#8592;</button>
            <button className="jobbraNyil" onClick={scrollRight}>&#8594;</button>
        </div>
    );
}

export default KeretAlkatresz;
