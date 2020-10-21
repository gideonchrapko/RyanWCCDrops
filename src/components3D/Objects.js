import React,{ forwardRef, useImperativeHandle } from 'react';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

// import carDraco from './carDraco';
import ShirtDraco from './Shirt'
import Frame from './Frame';


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
                    onClick={() => window.appHistory.push("/shop")}
                />
            </a.group>
        </>
    )
})

export default Objects;