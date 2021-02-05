import React, { useEffect } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import ShirtDraco from './ShirtDraco'
import FrameDraco from './FrameDraco'
import LogoButton from './LogoButton'
import Label from './Label'

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
                <Label/>
                <ShirtDraco/>
                <FrameDraco/>
            </a.group>
        </>
    )
}

export default Objects;