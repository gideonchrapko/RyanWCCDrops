import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import Background from '../images/BackgroundWelcome.png'

const Welcome = () => {

    const [open, setOpen] = useState(true)
    const props = useSpring({
        transform: open ? 'translateY(0px)' : 'translateY(-1000%)'
    })

     useEffect(() => {
            (async () => {
                if (open === false) {    
                    return  setTimeout(function() {
                        window.appHistory.push("/home");
                     }, 300);
                }  
            })();
     },[open])

    return (
        <animated.div style={props}>
            <div style={{ position: "relative", height: "100vh", zIndex: "10" }}>
                <h1 style={{ position: "relative", zIndex: "8" }}>Welcome to the West Coast Customs </h1>
                    <button onClick={() => setOpen(false)} style={{ position: "relative", zIndex: "8" }}>
                        Enter
                    </button>
                <img src={Background}  className="background" alt="Background"/>
            </div>
        </animated.div>
    )
}

export default Welcome