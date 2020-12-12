import React, { useEffect } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import ShirtDraco from './ShirtDraco'
import FrameDraco from './FrameDraco'


const Objects = ({rotation}) => {

      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 },
      }))

      useEffect(() => {
        set({ rotation: [...rotation] });
      }, [rotation, set]);

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
}

export default Objects;