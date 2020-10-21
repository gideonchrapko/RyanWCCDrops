import * as THREE from 'three';
import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Html } from 'drei';
import { useSpring } from '@react-spring/core';

import Controls from '../components3D/Controls';
import Lights from '../components3D/Lights';
import Environment from '../components3D/Environment';
import Shadow from '../components3D/Shadow';
import Objects from '../components3D/Objects';
import Loading from '../lottie/Loading';
import MenuRight from './Menu';

import Close from "../images/Close.svg";
import Open from "../images/Open.svg";
import Branding from '../images/wccMin.png';
import Left from '../images/arrowLeft.png';
import Right from '../images/arrowRight.png';


// import carDraco from '../components3D/carDraco'
import Model from '../components3D/Shirt'

const RthreeF = () => {

  const [active, set] = useState(false);
  const childRef = useRef();
  const [rightMenuVisible, setRightMenuVisible] = useState(false);
  const rightMenuAnimation = useSpring({
      opacity: rightMenuVisible ? 1 : 0,
      transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  }); 


  return (
    <>
      <div style={{ position: "absolute", zIndex: "9", padding: "25px" }}>
        <img src={Branding} alt="logo" style={{ height: "25vh" }} />
      </div>
      <div style={{ marginRight: "0px", top: "50vh", position: "absolute", zIndex: "9", }}>
        <img
          src={Right}
          alt="right"
          onClick={() => childRef.current.onClick()}
          style={{ right: "40px", position: "fixed", height: "50px", opacity: "0.7" }}
        />
        <img
          src={Left}
          alt="left"
          onClick={() => childRef.current.onClick()}
          style={{ left: "40px", position: "fixed", height: "50px", opacity: "0.7" }}
        />
      </div>
      <img 
        alt="menu"
        className="menu-button"
        onClick={() => setRightMenuVisible(!rightMenuVisible)}
        src={rightMenuVisible ? Close : Open}
        style={{ height: "20px" }}
      />
      <MenuRight style={rightMenuAnimation}/>
      <Canvas
          concurrent
          noEvents={active}
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [0, 0, 10] }}
          gl={{ antialias: false }}
          onCreated={({ gl, scene }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            scene.background = new THREE.Color('black')
            }}
      >
        <Controls disable={set}/>
        <Suspense fallback={<Html center><Loading/></Html>}>
          <fog attach="fog" args={["black", 10, 20]} />
              {/* <Objects 
                ref={childRef}
              /> */}
              {/* <Environment /> */}
          <PerspectiveCamera makeDefault position={[1, 1, -15]}>
            <Lights />
            <Shadow />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
    </>
    );
}

export default RthreeF;