import * as THREE from 'three';
import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Html } from 'drei';
// import { useShopify } from "../hooks"

import Controls from '../components3D/Controls';
import Lights from '../components3D/Lights';
import Environment from '../components3D/Environment';
import Shadow from '../components3D/Shadow';
import Objects from '../components3D/Objects';
import Loading from '../lottie/Loading';
import Swipe from '../lottie/Swipe';
import Header from './Header';

import Left from '../images/arrowLeft.png';
import Right from '../images/arrowRight.png';

const Home = (props) => {
	// const { shopDetails } = useShopify();
	const [rotation, setRotation] = useState([0, -0.55, 0])
	const [lottieControl, setLottieControl] = useState()

	const handleClickLeft = () => {
		rotation[1] += 2.1;
		setRotation([...rotation]);
	  };
	  const handleClickRight = () => {
		rotation[1] -= 2.1;
		setRotation([...rotation]);
	  };

	return (
		<div>
			<Header />
			<div style={{ marginRight: "0px", top: "50vh", position: "fixed", zIndex: "9", }}>
				<img
					src={Right}
					alt="right"
					onClick={handleClickRight}
					onPointerDown={() => setLottieControl(true)}
					className="arrowR"
				/>
				<img
					src={Left}
					alt="left"
					onClick={handleClickLeft}
					onPointerDown={() => setLottieControl(true)}
					className="arrowL"
				/>
			</div>
			{!lottieControl ?
				<Swipe /> 
				:
				<span></span>
			}
			<Canvas
				onPointerDown={() => setLottieControl(true)}
				pixelRatio={window.devicePixelRatio}
				camera={{ position: [0, 0, 10] }}
				gl={{ antialias: false }}
				onCreated={({ gl, scene }) => {
				gl.toneMapping = THREE.ACESFilmicToneMapping
				gl.outputEncoding = THREE.sRGBEncoding
				scene.background = new THREE.Color('black')
			}}
			>
				<Controls/>
				<Suspense fallback={<Html center><Loading/></Html>}>
					<fog attach="fog" args={["black", 12, 20]}/>
					<Objects 
						rotation={rotation}
					/>
					<Environment/> 
					<PerspectiveCamera makeDefault position={[0, 0, -15]}>
						<Lights/>
						<Shadow/>
					</PerspectiveCamera>
				</Suspense>
			</Canvas>
		</div>
	)
}

export default Home