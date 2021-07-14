// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

export default function Model(props) {

  useEffect(() => {
    const radius = document.documentElement.clientWidth / 150
    if (radius <= 6 ) {
      return setMaxRadius(radius)
    } 
    if (radius >= 6 ) {
      return setMaxRadius(6)
    }
  },[])

  const group = useRef()
  const { nodes, materials } = useGLTF('/untitledOne.glb')
  const [expand, setExpand] = useState(false);
  const [maxRadius, setMaxRadius] = useState()
  const y = maxRadius * Math.sin(2 * Math.PI * (3 / 3))
  const x = maxRadius * Math.cos(2 * Math.PI * (3 / 3))

  const animatedProps = useSpring({
    hovered: expand ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5],
  });

  return (
    <a.group 
      ref={group} 
      {...props} 
      dispose={null}
      rotation={[Math.PI / -0.01, -1.5, 3]}
      onPointerUp={() => window.appHistory.push("/connect")}
      // position={[-4, -0.5, 2]}
      position={[`${x}`, -0.5, `${y + 0.5}`]}
      scale={animatedProps.hovered}
      onPointerOver={e => { setExpand(true) }}
      onPointerOut={e => { setExpand(false) }}
    >
      <group position={[0, 0, -0.29]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1.39, -0.05, 0.37]}>
              <mesh material={materials.Lable_V3} geometry={nodes.Lable_V3_Lable_02_001.geometry} />
            </group>
            <group position={[1.39, 0.02, -3.04]}>
              <mesh material={materials.Metal} geometry={nodes.Lable_V3_Metal_01_001.geometry} />
            </group>
            <group position={[1.39, 0.02, -3.13]}>
              <mesh material={materials.Lable_V3} geometry={nodes.Lable_V3_Metal_02_001.geometry} />
            </group>
          </group>
        </group>
      <Html scaleFactor={5} position={[0.1, 5.2, -0.2]} zIndexRange={[1, 0]}>
        <h1 className="threeD__label" style={{ position: "fixed", zIndex: "9" }}>Connect</h1>
      </Html>
    </a.group>
  )
}

useGLTF.preload('/Label.glb')
