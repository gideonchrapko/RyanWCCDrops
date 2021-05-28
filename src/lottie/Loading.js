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
          <Lottie 
                options={defaultOptions}
                height={150}
                width={150}
          />
      )
    }
  }
  
  export default Loading