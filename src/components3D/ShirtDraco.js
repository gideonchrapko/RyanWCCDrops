/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Html } from 'drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'


export default function ShirtDraco(props) {

  const [expand, setExpand] = useState(false);
  const animatedProps = useSpring({
    hovered: expand ? [0.035, 0.035, 0.035] : [0.025, 0.025, 0.025],
  });

   function handlePageRouting() {
      window.appHistory.push("/shop");
    };

  const mesh = useRef();
  const setClicked = () => {
    mesh.current.addEventListener('pointerup', handlePageRouting())
  }

  const group = useRef()
  const { nodes, materials } = useGLTF('/shirt.glb')
  return (
    <group ref={group} {...props}>
      <a.mesh
      ref={mesh}
      onPointerDown={setClicked}
      position={[0, -2, -4.5]}
      onPointerOver={() => setExpand(true)}
      onPointerOut={() => setExpand(false)}
      scale={animatedProps.hovered}
        material={materials.Material}
        geometry={nodes['T-Shirt'].geometry}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Html scaleFactor={5} position={[0, -2.5, -4.5]} >
        <h1 style={{ color: 'white', opacity: '0.2' }}>Shop</h1>
      </Html>
    </group>
  )
}

useGLTF.preload('/shirt.glb')