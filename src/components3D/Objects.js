import React, { useEffect } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import Shirt from './Shirt'
import FrameDraco from './FrameDraco'
import Label from './Label'


const Objects = ({props, rotation}) => {

      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 },
      }))

      useEffect(() => {
        set({ rotation: [...rotation] });
      }, [rotation, set]);

    return (
        <>
            <a.group 
              {...spring}
            >
                <Label />
                <Shirt  />
                <FrameDraco />
            </a.group>
        </>
    )
}


export default Objects;