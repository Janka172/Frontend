import React, { useState } from 'react';

function Alkik({egy, ketto, harom, negy}){
    var eleres="/kepek/kep.png";

    return (
        <div>
          <div className="row">
                <div className="korKepKeret">
                    <img src={eleres} className="korKep" />
                    <h4 className="kezd">{egy}</h4>
                </div>
        
                <div className="korKepKeret">
                    <img src={eleres} className="korKep" />
                    <h4 className="kezd">{ketto}</h4>
                </div>
            </div>

            <div className='row'>
                <div className="korKepKeret">
                    <img src={eleres} className="korKep" />
                    <h4 className="kezd">{harom}</h4>
                </div>

                <div className="korKepKeret">
                    <img src={eleres} className="korKep" />
                    <h4 className="kezd">{negy}</h4>
                </div>
            </div>
        </div>
      );
}

export default Alkik;