import React, { useEffect, useState, useRef } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { useDrag } from 'react-use-gesture'

import Shirt from './Shirt'
import FrameDraco from './FrameDraco'
import Label from './Label'


const Objects = (props) => {

    // const [ pageState, setPageState ] = useState(false)
    // const [dragRot, setDragRot] = useState({ x: 0})

    // function that is called from the child component
    // const updatePageState = (state) => {
    //   setPageState(state);
    //   setParentState(state)
    // } 

    const [rotation, setRotation] = useState([0, 0, 0])
    const [dragRot, setDragRot] = useState({ x: 0})

      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 },
      }))

      // useEffect(() => {
      //   set({ rotation: [...rotation] });
      // }, [rotation, set]);

      // const bindRot = useDrag((params) => {
      //   setDragRot({ x: params.offset[0] })
      // })
  

      const bind = useDrag((params) => {
        setDragRot({ x: params.offset[0] })
      })

      useEffect(() => {
        const rotationSpeed = dragRot.x / 120
        const RotDistance = rotationSpeed / 2.094395
        const intRot = Math.floor(RotDistance)
        rotation[1] = intRot * 2.094395
        setRotation([...rotation])

        set({ rotation: [...rotation] })
    
      },[dragRot])

      console.log(dragRot)

    return (
        <>
            <a.group 
              {...spring}
            >
                <Label 
                />
                <Shirt 
                />
                <FrameDraco />
            </a.group>
            <group rotation-x={Math.PI * -1} position={[0, 0, 10]} {...bind()}>
              <mesh>
                <planeBufferGeometry attach="geometry" args={[10000, 10000]} scale={100000} />
                <meshBasicMaterial attach="material" color={"red"} />
              </mesh>
            </group>
        </>
    )
}


export default Objects;