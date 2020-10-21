import React from 'react'
import Lottie from 'react-lottie'
import animationData from './loading.json'

class Loading extends React.Component {
    render(){
      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return(
        // <div style={{ wdith: "100%", height: "100%", backgroundColor: "red" }}>
          <Lottie 
                // style={{position: "relative"}}
                options={defaultOptions}
                height={150}
                width={150}
          />
        // </div>
      )
    }
  }
  
  export default Loading