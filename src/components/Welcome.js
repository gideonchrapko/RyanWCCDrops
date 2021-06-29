import React, { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import { useShopify } from "../hooks"

import Background from '../images/BackgroundWelcome.png'
import Arrow from '../images/Arrow.svg'
import ArrowBack from '../images/ArrowBack.svg'



const Welcome = () => {

  useEffect(() => {
		ReactGa.initialize('UA-135117574-2')
		ReactGa.pageview('/welcome')
	})

    const [toggled, setToggled] = useState(false);

    const props = useSpring({
        transform: toggled ? 'translateY(-1000px)' : 'translateY(0%)',
        config: { duration: 3000 }
    })

    //this allows the animation to finish before it changes pages
     useEffect(() => {
         (async () => {
              if (toggled === true) {    
                  return  setTimeout(function() {
                     window.appHistory.push("/home");
                 }, 500);
             }  
         })();
     },[toggled])

     const [{ y }, set] = useSpring(() => ({
        y: 100,
      }));

      const RANGE = 100;

      const bind = useDrag(
        ({ down, tap, movement: [, y] }) => {
          // Tap handler
          if (!down && tap) {
            set({ y: toggled ? RANGE : 0 });
            setToggled(!toggled);
            return;
          }
          // Drag handler
          if (down) {
            set({ y });
          } else {
            const isToggled = y > -RANGE / 4;
            set({ y: isToggled ? RANGE : 0 });
            setToggled(isToggled);
          }
        },
        {
          initial: () => [0, y.get()],
          bounds: { left: 0, right: 0, top: 0, bottom: RANGE }
        }
      );

const backgroundStyle = {
    backgroundImage: `url(${ArrowBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
    height: 200,
    width: 100
  };

const knobStyle = {
    y,
    backgroundImage: `url(${Arrow})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
    height: 100,
    width: 100,
  };
   
  const divStyle = {
    height: "100vh", 
    zIndex: "10", 
    alignItems: "center", 
    display: "flex", 
    justifyContent: "center", 
    textAlign: "center", 
    backgroundImage: `url(${Background})`, 
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

    return (
      <animated.div style={props}>
            <div 
              style={divStyle}
              alt="Upward Arrow"
            >
                <div // Background
                   style={backgroundStyle}
                >
                  <animated.div // Knob
                     style={knobStyle}
                     {...bind()}
                  ></animated.div>
                </div>
                <h2  
                  className="header" 
                  style={{ position: "fixed", zIndex: "9", bottom: "175px" }}
                >
                  Drag to Enter
                </h2>
            </div>
      </animated.div>
    )
}

export default Welcome