import React, { useState } from 'react';
import { useSpring } from "@react-spring/core";
import MenuRight from './Menu';
import Close from "../images/Close.svg";
import Open from "../images/Open.svg";

const About = () => {
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
                style={{ height: "20px"}}
            />
            <MenuRight style={rightMenuAnimation}/>
            About
        </div>
    )
}

export default About