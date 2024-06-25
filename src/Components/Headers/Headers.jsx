import React, { useState } from 'react'
import './Headers.css'
import logo from '../Images/Logo .png';

import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';




const Headers = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 770){
      return {right : !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false);}} >
          
        </OutsideClickHandler>

        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get started</a>

          
            <button className='button'>
             <a href="">Contact</a>
            </button>
        </div>

                {/* for medium and small screens */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Headers;