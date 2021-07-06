import React from 'react'
import Lottie from 'react-lottie'
import animationData from './swipe.json'

const Swipe = () => {

      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return(
            <Lottie 
            style={{ 
                  position: "fixed", 
                  zIndex: "9", 
                  bottom: "-3%", 
                  width: "100vw", 
                  transform: "scale(0.3)",
                  opacity: "0.5",
                }}
                  options={defaultOptions}
                  height={200}
                  width={482}
          />
      )
  }
  
  export default Swipe