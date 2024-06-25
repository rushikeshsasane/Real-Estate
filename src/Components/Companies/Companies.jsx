import React from 'react';
import './Companies.css';

import prologis from '../Images/prologis.png';
import tower from '../Images/tower.png';
import equinix from '../Images/equinix.png';
import realty from '../Images/realty.png';

function Companies() {
  return (
    <section className='c-wrapper'>
       <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
       </div>
    </section>
  )
}

export default Companies