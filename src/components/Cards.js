import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from 'styled-components'

const cards = [
  "https://i.ibb.co/09sgF5g/SCREEN240-SX-ORIG.jpg",
  "https://i.ibb.co/vLcZY8j/Screenccx-orig.jpg",
  "https://i.ibb.co/dKSMdS4/Screenclasswcc-orig.jpg",
  "https://i.ibb.co/m0g9Znk/Screeneconoline-1-orig.jpg",
  "https://i.ibb.co/5vjh5km/Screengt40-fridayford-orig.jpg",
  "https://i.ibb.co/yXJmwXj/SCREENmetris-orig.jpg"
];
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(20deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Cards() {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) }))

  const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    set((i) => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
  })

  return props.map(({ x, y, rot, scale }, i) => (
    <div>
      <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }} className="cardContainer">
        <Card {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
      </animated.div>
    </div>
  ))
}

const Card = styled(animated.div)`
  background-color: white;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50vh;
  height: 37vh;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`

export default Cards