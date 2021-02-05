/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF'
import { Html } from 'drei';

import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

export default function FrameDraco(props) {

  const [expand, setExpand] = useState(false);
  // React spring expand animation

  const animatedProps = useSpring({
    hovered: expand ? [2, 2, 2] : [1.5, 1.5, 1.5],
  });

  function handlePageRouting() {
    window.appHistory.push("/gallery");
  };

const mesh = useRef();
const setClicked = () => {
  mesh.current.addEventListener('onPointerUp', handlePageRouting())
}

  const group = useRef()
  const { nodes, materials } = useGLTF('/frame.glb')
  return (
    <group ref={group} {...props}>
      <a.mesh
        ref={mesh}
        material={materials['initialShadingGroup.001']}
        geometry={nodes.g_PictureFrame001.geometry}
        onPointerDown={setClicked}
        position={[3.5, -0.5, 1.8]}
        rotation={[1.67, 0.2, 0.1]}
        scale={animatedProps.hovered}
        onPointerOver={() => setExpand(true)}
        onPointerOut={() => setExpand(false)}
      />
      <Html scaleFactor={5} position={[3.5, -2.3, 1.8]}>
        <h1 style={{ color: 'white', opacity: '0.1' }}>Gallery</h1>
      </Html>
    </group>
  )
}

useGLTF.preload('/frame.glb')
