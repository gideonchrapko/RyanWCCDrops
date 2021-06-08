import React, { useState } from 'react';
import { a } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { useSpring } from '@react-spring/core';

import Close from "../images/Close.svg";
import Open from "../images/Open.svg";
import './menu.css';

  export default function MenuRight() {

    const [rightMenuVisible, setRightMenuVisible] = useState(false);
    const rightMenuAnimation = useSpring({
      opacity: rightMenuVisible ? 1 : 0,
      transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
    }); 

    return (
      <div>
        <img
        	alt="menu"
					className="menu-button"
					onClick={() => setRightMenuVisible(!rightMenuVisible)}
					src={rightMenuVisible ? Close : Open}
        />
        <a.div style={rightMenuAnimation} className="menu menu--right">
          <nav style={{ paddingTop: "20px", paddingBottom: "20px" }}> 
                <li className="menu-list-item menu-list-item--right">
                  <Link to="/Home">
                    Home
                  </Link>
                </li>
                <li className="menu-list-item menu-list-item--right">
                  <Link to="/shop">
                    Shop  
                  </Link>
                </li>
                <li className="menu-list-item menu-list-item--right">
                  <Link to="/gallery">
                    Gallery 
                  </Link>
                </li>
                <li className="menu-list-item menu-list-item--right">
                  <Link to="/connect">
                    Connect 
                  </Link>
                </li>
          </nav> 
      </a.div >
    </div>
    );
}