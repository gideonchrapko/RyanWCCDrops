// import { Vector3 } from 'three'
// import React, { useRef, useState, Suspense } from 'react'
// import { extend } from '@react-spring/three';
// import Shadow from './Shadow';
// // import VolumetricSpotlight from "./volumetric-spotlight";
// import { useFrame, useThree } from '@react-three/fiber'
// import { Center, SpotLight, DepthBuffer } from '@react-three/drei'

// extend({
//   VolumetricSpotlight
// });

// function MyVolSpotlight(props) {
//   // const vs = React.useRef();
//   const spotlight = React.useRef();
//   // const { scene } = useThree();
//   const {
//     angle = 0.3,
//     penumbra = 0.1,
//     distance = 60,
//     color='#1024b5',
//     intensity= 3,
//     position = [-15, 6, 12],
//   } = props;

//   return (
//     <>
//       <spotLight
//         castShadow
//         ref={spotlight}
//         intensity={intensity}
//         angle={angle}
//         penumbra={penumbra}
//         distance={distance}
//         color={color}
//       />
//       <mesh position={position} >
//         <coneGeometry args={[100, 100, 100, 100, 100, true]} attach="geometry" />
//         <volumetricSpotlight
//           attach="material"
//           uniforms-lightColor-value={color}
//           uniforms-attenuation-value={24}
//           uniforms-anglePower-value={8}
//         />
//       </mesh>
//     </>
//   );
// };

// const vec = new Vector3()
// function MovingSpot(props) {
//   const group = useRef()
//   const [light, set] = useState()
//   const viewport = useThree((state) => state.viewport)
//   useFrame((state) => {
//     group.current.position.lerp(vec.set(state.mouse.x, state.mouse.y, 0), 0.1)
//     light.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
//   })
//   return (
//     <group ref={group}>
//       <SpotLight ref={set} castShadow penumbra={1} distance={10} angle={0.4} attenuation={20} anglePower={3} intensity={10} {...props} />
//       {light && <primitive object={light.target} />}
//     </group>
//   )
// }

// export default function Lights() {
//   const [depthBuffer, setDepth] = useState()
//   return (
//     <>
//       <ambientLight intensity={0.02} />
//       <DepthBuffer ref={setDepth} size={512} />
//       <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[3, 3, -5]} />
//       <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, -5]} />
//       <pointLight position={[0, 10, -10]} intensity={3} color={'#1024b5'} />
//       <pointLight intensity={0.2} position={[0, 4, -10]} />
//       {/* <MyVolSpotlight penumbra={1}  /> */}
//       <Shadow renderOrder={10} color="#1024b5" stop={0.1} scale={[10, 10, 10]} position={[0, -2, -3]} rotation={[-Math.PI / 2, 0, 0]} />
//     </>
//   );
// };
