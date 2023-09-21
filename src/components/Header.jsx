import React from 'react';
import '../css/Card.css';
import battery from '../images/Battery.png';
import signal from '../images/Mobile Signal.png';
import wifi from '../images/Wifi.png';

function Header() {
  return (
    <div>
        <div className='header'>
                <h4>1:41</h4>
                <div>
                    <img src={signal} alt='Signal'/>
                    <img src={wifi} alt='Wifi'/>
                    <img src={battery} alt='Battery'/>
                </div>
            </div>
    </div>
  )
}

export default Header