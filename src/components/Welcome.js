import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import Background from '../images/BackgroundWelcome.png'
import Arrow from '../images/Arrow.svg'
import ArrowBack from '../images/ArrowBack.svg'

const Welcome = () => {

    const [toggled, setToggled] = useState(false);

    const props = useSpring({
        transform: toggled ? 'translateY(-1000px)' : 'translateY(0%)',
        config: { duration: 4000 }
    })

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
            //click toggles between 0px
            set({ y: toggled ? RANGE : 0 });
            setToggled(!toggled);
            return;
          }
          // Drag handler
          if (down) {
            set({ y });
          } else {
            const isToggled = y > -RANGE / 2;
            set({ y: isToggled ? 0 : -RANGE });
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
    width: 100,

  };const knobStyle = {
    y,
    backgroundImage: `url(${Arrow})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
    height: 100,
    width: 100,
  };

    return (
        //  <animated.div>
                   <animated.div style={props}>
            <div style={{ height: "100vh", zIndex: "10", alignItems: "center", display: "flex", justifyContent: "center", textAlign: "center" }}>
                <img src={Background}  className="background" alt="Background"/>
                  <div // Background
                    style={backgroundStyle}
                   >
                    <animated.div // Knob
                      style={knobStyle}
                      {...bind()}
                     ></animated.div>
                  </div>
                  {/* <h1>Pull to Enter</h1> */}
            </div>
      </animated.div>
    )
}

export default Welcome