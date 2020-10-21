import React,{ forwardRef, useImperativeHandle } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import ShirtDraco from './ShirtDraco'
import FrameDraco from './FrameDraco'
// import CarDraco from './CarDraco'
// import Car from './Car'

let rotation = [0, 2, 0];

const Objects = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            onClick() {
                rotation[1] -= 2.1;
                set({ rotation: [...rotation] });
              }
        }),
    )
      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 }
      }))

    return (
        <>
            <a.group {...spring}>
                <ShirtDraco       
                    onPointerUp={() => window.appHistory.push("/shop")}
                />
                <FrameDraco 
                    onPointerUp={() => window.appHistory.push("/gallery")}
                />
                {/* <Car 
                    onPointerUp={() => window.appHistory.push("/about")}                
                /> */}
            </a.group>
        </>
    )
})

export default Objects;