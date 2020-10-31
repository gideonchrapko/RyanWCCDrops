import * as THREE from 'three';
import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Html } from 'drei';
import { useSpring } from '@react-spring/core';
import { Link } from 'react-router-dom'

import { useShopify } from "../hooks"

import Controls from '../components3D/Controls';
import Lights from '../components3D/Lights';
import Environment from '../components3D/Environment';
import Shadow from '../components3D/Shadow';
import Objects from '../components3D/Objects';
import Loading from '../lottie/Loading';
import MenuRight from './Menu';
import Cart from './Cart'

import Close from "../images/Close.svg";
import Open from "../images/Open.svg";
import Branding from '../images/wccMin.png';
import Left from '../images/arrowLeft.png';
import Right from '../images/arrowRight.png';


export default (props) => {

	const { shopDetails } = useShopify();

	// let rotation = [0, 2, 0]
	const [rotation, setRotation] = useState([0, 2, 0])

	const [rightMenuVisible, setRightMenuVisible] = useState(false);
	const rightMenuAnimation = useSpring({
		opacity: rightMenuVisible ? 1 : 0,
		transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
	}); 

	const handleClickLeft = () => {
		rotation[1] -= 1;
		setRotation([...rotation]);
	  };

	  const handleClickRight = () => {
		rotation[1] += 1;
		setRotation([...rotation]);
	  };



	return (
		<div>
		<div style={{ position: "absolute", zIndex: "9", padding: "25px" }}>
        <img src={Branding} alt="logo" style={{ height: "25vh" }} />
      </div>
      <div style={{ marginRight: "0px", top: "50vh", position: "absolute", zIndex: "9", }}>
        <img
          src={Right}
          alt="right"
          onClick={handleClickRight}
		// onClick={onClickRight}
          style={{ right: "40px", position: "fixed", height: "50px", opacity: "0.7" }}
        />
        <img
          src={Left}
          alt="left"
          onClick={handleClickLeft}
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

			{/* <header className="App__header">
				<div className="App__title">
					<h1>{shopDetails.name}: React / Redux Example</h1>
					<h2>{shopDetails.description}</h2>
				</div>
			</header>  */}
			
		<Canvas
			pixelRatio={window.devicePixelRatio}
			camera={{ position: [0, 0, 10] }}
			gl={{ antialias: false }}
			 onCreated={({ gl, scene }) => {
			gl.toneMapping = THREE.ACESFilmicToneMapping
			gl.outputEncoding = THREE.sRGBEncoding
			scene.background = new THREE.Color('black')
			}}>
        <Controls/>
        <Suspense fallback={<Html center><Loading/></Html>}>
			<fog attach="fog" args={["black", 10, 20]} />
				<Objects 
					rotation={rotation}
				/>
				<Environment /> 
			<PerspectiveCamera makeDefault position={[1, 1, -15]}>
				<Lights />
				<Shadow />
			</PerspectiveCamera>
        </Suspense>
      </Canvas>
	</div>
	)
}
