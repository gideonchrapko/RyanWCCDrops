import React, { useEffect } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import ShirtDraco from './ShirtDraco'
import FrameDraco from './FrameDraco'
import LogoButton from './LogoButton'


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
                <ShirtDraco/>
                <FrameDraco/>
                <LogoButton/>
            </a.group>
        </>
    )
}

export default Objects;