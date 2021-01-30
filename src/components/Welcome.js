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

      const bind = useDrag(
        ({ down, movement: [my] }) => {
          if (down === true) {
            set({ y: down ? my : 0, immediate: down, config: { duration: 100 } });
            return;
          } 
          if (down === false) {
            setToggled(!toggled);            
          }
        },
        { 
          initial: () => [y.get(), 0] 
        }
      )

      // const RANGE = -100;

      // const bind = useDrag(
      //   ({ down, tap, movement: [y] }) => {
      //     // Tap handler
      //     if (!down && tap) {
      //       set({ y: toggled ? -RANGE : 0 });
      //       setToggled(!toggled);
      //       return;
      //     }
      //     // Drag handler
      //     if (down) {
      //       set({ y });
      //     } else {
      //       const isToggled = y > -RANGE / 2;
      //       set({ y: isToggled ? 0 : -RANGE });
      //       setToggled(isToggled);
      //     }
      //   },
      //   {
      //     initial: () => [y.get(), 0],
      //     bounds: { left: -RANGE, right: 0, top: 0, bottom: 0, rubberband: true },
      //   }
      // );

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