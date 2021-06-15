/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF'
import { Html } from 'drei';

import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

export default function FrameDraco(props, index) {

  useEffect(() => {
    const radius = document.documentElement.clientWidth / 150
  
    if (radius <= 6 ) {
      return setMaxRadius(radius)
    } 
  
    if (radius >= 6 ) {
      return setMaxRadius(6)
    }
  },[])

  const [expand, setExpand] = useState(false);
  const [maxRadius, setMaxRadius] = useState()

  const radius = window.innerWidth / 150
  const y = maxRadius * Math.sin(2 * Math.PI * (1 / 3))
  const x = maxRadius * Math.cos(2 * Math.PI * (1 / 3))

  const animatedProps = useSpring({
    hovered: expand ? [2, 2, 2] : [1.8, 1.8, 1.8]
  });

  const group = useRef();
  const { nodes, materials } = useGLTF('/frame.glb')

  return (
    <a.group 
      ref={group} 
      {...props}
      position={[`${x}`, -0.5, `${y}`]}
      rotation={[1.67, 0.2, 2]}
      scale={animatedProps.hovered}
      onPointerOver={() => setExpand(true)}
      onPointerOut={() => setExpand(false)}
    >
      <mesh
        material={materials['initialShadingGroup.001']}
        geometry={nodes.g_PictureFrame001.geometry}
        onPointerUp={() => window.appHistory.push("/gallery")}
      />
      <Html scaleFactor={5} position={[-0.2, 0.2, 1.2]} zIndexRange={[1, 0]}>
        <h1 className="threeD__label">Gallery</h1>
      </Html>
    </a.group>
  )
}

useGLTF.preload('/frame.glb')
