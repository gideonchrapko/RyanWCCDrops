/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { Html } from 'drei';

import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

export default function Shirt(props) {

  const [expand, setExpand] = useState(false);
  const animatedProps = useSpring({
    hovered: expand ? [0.05, 0.05, 0.05] : [0.04, 0.04, 0.04],
  });

  const group = useRef()
  const { nodes, materials } = useGLTF('/Shirt1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <a.mesh 
        position={[0, -2, -4.5]}
        rotation={[Math.PI / 2, 0, 3]}
        material={materials.wire_177148027} 
        geometry={nodes.T_Shirt_V2.geometry} 
        onPointerOver={() => setExpand(true)}
        onPointerOut={() => setExpand(false)}
        scale={animatedProps.hovered}
      />
        <Html scaleFactor={5} position={[0, -2.5, -4.5]} >
          <h1 style={{ color: 'white', opacity: '0.1' }}>Shop</h1>
        </Html>
    </group>
  )
}

useGLTF.preload('/Shirt1.glb')
