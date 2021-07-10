import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Html } from 'drei';
import { useDrag } from 'react-use-gesture'

import { useShopify } from "../hooks"
import Controls from '../components3D/Controls';
import Lights from '../components3D/Lights';
import Environment from '../components3D/Environment';
import Shadow from '../components3D/Shadow';
import Objects from '../components3D/Objects';
import Loading from '../lottie/Loading';
import Swipe from '../lottie/Swipe';
import Header from './Header';
import Footer from './Footer'

import Left from '../images/arrowLeft.png';
import Right from '../images/arrowRight.png';

const Home = () => {
	const {
		hoveredState
	} = useShopify()

	const [rotation, setRotation] = useState([0, 0, 0])
	const [dragRot, setDragRot] = useState({ x: 0})
	const [lottieControl, setLottieControl] = useState()

	const handleClickLeft = () => {
		rotation[1] += 2 * Math.PI / 3
		setRotation([...rotation]);
	};

	const handleClickRight = () => {
		rotation[1] -= 2 * Math.PI / 3
		setRotation([...rotation]);
	};

	const bindRot = useDrag((params) => {
		setDragRot({
			x: params.offset[0]
		})
	})

	useEffect(() => {
		const rotationSpeed = dragRot.x / 120
		const RotDistance = rotationSpeed / 2.094395
		const intRot = Math.floor(RotDistance)
		rotation[1] = intRot * 2.094395
		setRotation([...rotation])
	},[dragRot])

	return (
		<div>
			<Header/>
			<div 
				style={{ 
					marginRight: "0px", 
					top: "50vh", 
					position: "fixed", 
					zIndex: "9",
				 }}
			>
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
					{...bindRot()}
				>
					<Controls/>
					<Suspense fallback={<Html center><Loading/></Html>}>
						<fog attach="fog" args={["black", 12, 20]}/>
						<group
							rotation={[0, -0.55, 0]}
						>
							<Objects 
								rotation={rotation}
							/>
						</group>
						<Environment/> 
						<PerspectiveCamera makeDefault position={[0, 0, -15]}>
							<Lights/>
							<Shadow/>
						</PerspectiveCamera>
					</Suspense>
				</Canvas>
			<Footer />
		</div>
	)
}

export default Home