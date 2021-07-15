// import * as THREE from 'three';
import { Vector3 } from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { SpotLight, DepthBuffer, PerspectiveCamera, Html  } from '@react-three/drei'
import { useDrag } from 'react-use-gesture'

import Controls from '../components3D/Controls';
import Lights from '../components3D/Lights';
import Environment from '../components3D/Environment';
import Shadow from '../components3D/Shadow';
import Objects from '../components3D/Objects';
import Loading from '../lottie/Loading';
import Swipe from '../lottie/Swipe';
import Header from './Header';
import Footer from './Footer';

import Left from '../images/arrowLeft.png';
import Right from '../images/arrowRight.png';

const vec = new Vector3()
function MovingSpot(props) {
  const group = useRef()
  const [light, set] = useState()
  const viewport = useThree((state) => state.viewport)

  useFrame((state) => {
    group.current.position.lerp(vec.set(state.mouse.x, state.mouse.y, 0), 0.1)
    light.target.position.lerp(vec.set(-1, -15, 10), 1)
  })

  return (
    <group ref={group}>
      <SpotLight ref={set} castShadow penumbra={1} distance={6} angle={0.3} attenuation={6} anglePower={5} intensity={10} {...props} />
      {light && <primitive object={light.target} />}
    </group>
  )
}

const Home = (props) => {

	// const [lottieControl, setLottieControl] = useState()
	const [rotation, setRotation] = useState([0, 0, 0])
    const [dragRot, setDragRot] = useState({ x: 0})

	const bind = useDrag((params) => {
        setDragRot({ x: params.offset[0] })
      })

      useEffect(() => {
        const rotationSpeed = dragRot.x / 120
        const RotDistance = rotationSpeed / 2.094395
        const intRot = Math.floor(RotDistance)

        rotation[1] = intRot * 2.094395
        setRotation([...rotation])
    
      },[dragRot])

	const handleClickLeft = () => {
		rotation[1] += 2 * Math.PI / 3
		setRotation([...rotation]);
	};

	const handleClickRight = () => {
		rotation[1] -= 2 * Math.PI / 3
		setRotation([...rotation]);
	};

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
					// onPointerDown={() => setLottieControl(true)}
					className="arrowR"
				/>
				<img
					src={Left}
					alt="left"
					onClick={handleClickLeft}
					// onPointerDown={() => setLottieControl(true)}
					className="arrowL"
				/>
			</div>
			{/* {!lottieControl ?
				<Swipe /> 
				:
				<span></span>
			} */}
				<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, -3], fov: 50, near: 1, far: 20 }}>
					<color attach="background" args={['#000000']} />
					<fog attach="fog" args={['#000000', 5, 20]} />
					<ambientLight intensity={0.08} />
					{/* blue */}
					<MovingSpot  color="#0083ff" position={[-0.1, 2.7, 2]} />
					{/* red */}
      				<MovingSpot  color="#b00c3f" position={[2, 2.8, 0]} />
					<Controls />
					<Suspense fallback={null}>
						<group rotation={[0, -0.55, 0]} position={[0, 0, 6]} scale={0.5}>
							<Objects rotation={rotation} />
						</group>
					</Suspense>
					<mesh receiveShadow position={[0, -1.5, 0]} rotation-x={-Math.PI / 2} {...bind()}>
						<planeGeometry args={[50, 50]} />
						<meshPhongMaterial color="#3a3a3a" />
					</mesh>
				</Canvas>
			<Footer />
		</div>
	)
}

export default Home