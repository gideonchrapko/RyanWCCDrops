/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF'
import { Html } from 'drei';

import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

export default function FrameDraco(props) {

  const [expand, setExpand] = useState(false);
  const animatedProps = useSpring({
    hovered: expand ? [2, 2, 2] : [1.5, 1.5, 1.5],
  });

  const group = useRef();
  const { nodes, materials } = useGLTF('/frame.glb')

  return (
    <a.group 
      ref={group} 
      {...props}
      position={[3.5, -0.5, 1.8]}
      rotation={[1.67, 0.2, 0.1]}
      scale={animatedProps.hovered}
      onPointerOver={() => setExpand(true)}
      onPointerOut={() => setExpand(false)}
    >
      <mesh
        material={materials['initialShadingGroup.001']}
        geometry={nodes.g_PictureFrame001.geometry}
        // onPointerDown={() => {setClicked(false)}}
        // onPointerUp={() => {setClicked(true)}}
        onPointerUp={() => window.appHistory.push("/gallery")}
        // position={[3.5, -0.5, 1.8]}
        // rotation={[1.67, 0.2, 0.1]}
        // scale={animatedProps.hovered}
        // onPointerOver={() => setExpand(true)}
        // onPointerOut={() => setExpand(false)}
      />
      <Html scaleFactor={5} position={[3.5, -1.5, 1.8]}>
        <h1 className="threeD__label">Gallery</h1>
      </Html>
    </a.group>
  )
}

useGLTF.preload('/frame.glb')
