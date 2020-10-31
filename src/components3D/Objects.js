import React,{ forwardRef, useImperativeHandle, useEffect } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import ShirtDraco from './ShirtDraco'
import FrameDraco from './FrameDraco'
// import CarDraco from './CarDraco'
// import Car from './Car'


const Objects = ({rotation}) => {

      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 },
      }))

      useEffect(() => {
        set({ rotation: [...rotation] });
      }, [rotation]);

    return (
        <>
            {/* <a.group> */}
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
}

export default Objects;