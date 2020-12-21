/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Html } from 'drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

export default function ShirtDraco(props) {
  const [expand, setExpand] = useState(false);
  // const [active, setActive] = useState(false)
  // React spring expand animation
  const animatedProps = useSpring({
    hovered: expand ? [0.035, 0.035, 0.035] : [0.025, 0.025, 0.025],
  });

  const group = useRef()
  const { nodes, materials } = useGLTF('/shirt.glb')
  return (
    <group ref={group} {...props} style={{ cursor: "pointer" }}>
      <a.mesh
      className="cursor"
      style={{ cursor: "pointer" }}
      onClick={() => window.appHistory.push("/shop")}
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
