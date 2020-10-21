import React from 'react';
import { a } from '@react-spring/web';
import { Link } from 'react-router-dom';
import './menu.css';

import Baseball from '../images/WCC_bb.png';
import Cart from '../images/cart.svg';

  export default function MenuRight({ style }) {
  return (
    <a.div style={style} className="menu menu--right">
      <nav> 
            <img 
              src={Cart} 
              alt="car" 
              style={{ padding: "30px", height: "20px" }} 
            />
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
              <Link to="/about">
                About 
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/about">
                Contact 
              </Link>
            </li>
            <div style={{ width: "100%" }}>
              <img 
                src={Baseball} 
                alt="west coast customs logo" 
                style={{ paddingTop: "30px", height: "30px", display: "block", marginLeft: "auto", marginRight: "auto" }} 
                onClick={() => window.appHistory.push("/home")}
              />
            </div>
      </nav> 
   </a.div > 
  );
}