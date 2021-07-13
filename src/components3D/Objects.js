import React, { useEffect, useState, useRef } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { useDrag } from 'react-use-gesture'

import Shirt from './Shirt'
import FrameDraco from './FrameDraco'
import Label from './Label'


const Objects = ({props, rotation }) => {

    // const [ pageState, setPageState ] = useState(false)
    // const [dragRot, setDragRot] = useState({ x: 0})

    // function that is called from the child component
    // const updatePageState = (state) => {
    //   setPageState(state);
    //   setParentState(state)
    // } 

      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 },
      }))

      useEffect(() => {
        set({ rotation: [...rotation] });
      }, [rotation, set]);

      // const bindRot = useDrag((params) => {
      //   setDragRot({ x: params.offset[0] })
      // })
    
      // useEffect(() => {
      //   const rotationSpeed = dragRot.x / 120
      //   const RotDistance = rotationSpeed / 2.094395
      //   const intRot = Math.floor(RotDistance)
      //   rotation[1] = intRot * 2.094395
      //   setRotation([...rotation])
    
      // },[dragRot])

    return (
        <>
            <a.group 
              {...spring}
            >
                <Label 
                  // pageState = {pageState}
                  // triggerParentUpdate = {updatePageState}
                  // onClick = {props.clicktonavigatepageinothercomponent}
                  // onPointerUp = {props.scaleintheothercomponent}
                />
                <Shirt 
                  // pageState = {pageState}
                  // triggerParentUpdate = {updatePageState}
                  // onPointerEnter={() => console.log("yup")}
                />
                <FrameDraco />
            </a.group>
            <group rotation-x={Math.PI * -1} position={[0, 0, 10]}>
              <mesh >
                <planeBufferGeometry attach="geometry" args={[10000, 10000]} scale={100000} />
                <meshBasicMaterial attach="material" color={"black"} />
              </mesh>
            </group>
        </>
    )
}


export default Objects;