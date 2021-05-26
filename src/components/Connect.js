import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'

import MenuRight from './Menu';
import Cart from './Cart'

import { Col, Container, Row } from 'react-bootstrap'

import Branding from '../images/wccMin.png'
import ScratchBG from '../images/Scratch.jpeg'
import arrowDown from '../images/arrowDown.png'
import NeonLogo from '../images/neon_untitled-min.png'
import MessageRyan from '../images/RyanMessage.png'

const list = [{ 
                item: 'https://i.ibb.co/x5X5z60/Asset-7-1-300x.png', 
                link: '1991'

            }, 
            {
                item: 'https://i.ibb.co/KzShq7v/Asset-8-300x.png', 
                link: '1992'

            },
            {
                item: 'https://i.ibb.co/G7X7WxN/Asset-9-300x.png', 
                link: '1993'

            },
            {
                item: 'https://i.ibb.co/QCm00nt/Asset-10-300x.png', 
                link: '1996'

            },
            {
                item: 'https://i.ibb.co/MMJRmsS/Asset-11-300x.png', 
                link: '1990'

            },
            {
                item: 'https://i.ibb.co/Ct8zLwt/Asset-12-300x.png',
                link: '2001'

            },
            {
                item: 'https://i.ibb.co/1dj9XvP/Asset-13-300x.png', 
                link: '2003'
  
            },
            {
                item: 'https://i.ibb.co/WFs0qkV/Asset-14-300x.png', 
                link: '2004'

            },
            {
                item: 'https://i.ibb.co/Cz0xHRd/Asset4-1-300x.png', 
                link: '2007'
            },
            {
                item: 'https://i.ibb.co/YTHn9GY/Asset-5-1-300x.png', 
                link: '2008'
            },
            {
                item: 'https://i.ibb.co/9cZ5yLr/Asset-6-1-300x.png', 
                link: '2018'
            }]

const l = list.length
const calc = (x, y) => [-(y - window.innerHeight / 2) / 90, (x - window.innerWidth / 2) / 90, 1.01]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Connect = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [yearValue, setYearValue] = useState("")

    const Header_ImageConnect = {
        position: "fixed",
        marginTop: "100px",
        borderRadius: "25px",
        height: "65vh",
        width: "75vw", 
        marginLeft: "-37.5vw",
        marginTop: "-32.5vh",
        top: "50%",
        left: "50%",
        backgroundImage: `url(${ScratchBG})`, 
        backgroundSize: "cover",
    }

    return (
        <Container 
            fluid 
            className="conntainerDiv"
        >
            <img
                src={Branding}
                alt="West Coast Customs Logo"
                className="branding"
                onClick={() => window.appHistory.push("/Home")}
            />
            <MenuRight/>
            <Cart />
            <div style={Header_ImageConnect}>
            </div>
            <img 
				style={{ 
					position: "fixed", 
					height: "15vh",
					marginTop: "75vh",
                    marginLeft: "70vw",
					padding: "5px",
			}}
				src={arrowDown}
                alt="Scroll Down"
			/>
            <Row className="headerGradient">
                <Col 
                    xs={{ span: 6, offset: 3 }}
                    lg={{ span: 2, offset: 5 }}
                >
                <img 
                    alt="Connect Page Text"
                    src={NeonLogo}
                    style={{
                        width: "100%",
                        mixBlendMode: "exclusion",
                        top: "0"
                    }}

                />
                </Col>
            </Row>
            <Row className="child"
            > 
                 <Col
                    className="headerText"
                    xs={{ span: 7, offset: 2 }}
                    lg={{ span: 1, offset: 1 }}
                    style={{ height: "20vh" }}
                 >
                    About
                 </Col>
                 <Col
                    className="AboutText"
                    xs={{ span: 8, offset: 2 }}
                    lg={{ span: 8, offset: 0}}
                 >
                    West Coast Customs Drops is the destination 
                    for all new releases and collaborations.
                 </Col>
             </Row>
             <Row className="child">
                <Col
                    className="headerText"
                    sm={{ span: 10, offset: 2 }}
                    lg={{ span: 1, offset: 1 }}
                >
                    Logo Timeline
                </Col>
                <Col
                    className="LogoEvolutionDiv"
                    xs={{ span: 12, offset: 0 }}
                    lg={{ span: 8, offset: 0 }}

                >
                <div style={{  
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        verticalAlign: "middle",
                        marginTop: "26vh",
                    }}
                >
                    {
                        list.map((list, index) => {
                                const radius = window.innerWidth / 3.3
                                const top = radius * Math.sin(2 * Math.PI * (index / l))
                                const left = radius * Math.cos(2 * Math.PI * (index / l))
                                // const radius = 
                            return (
                                        <img
                                            style={{
                                                marginTop: `${top}px`,
                                                marginLeft: `${left}px`,
                                            }}
                                            alt={`${list.link} Logo`}
                                            onPointerOver={() => setYearValue(list.link)}
                                            className="logoCircleTransition"
                                            index={index}
                                            key={list.link}
                                            src={list.item}
                                        />
                            )
                        })}
                        <div className="yearValue">{yearValue}</div>
                        <img 
                            style={{
                                position: "absolute",
                                height: "15rem",
                            }}
                            // className="logoCircleTransition"
                            onPointerOver={() => setYearValue("2018")}
                            alt="2018 logo"
                            src="https://i.ibb.co/MNW4ht3/Asset-15-300x.png"
                        />
                    </div>
                </Col>
             </Row>
             <Row className="child" >
                <Col
                    className="headerText"
                    xs={{ span: 7, offset: 2 }}
                    lg={{ span: 1, offset: 1 }}
                >
                    Ryan's Letter
                </Col>
                <Col
                    xs={{ span: 10, offset: 1  }}
                    lg={{ span: 6, offset: 1 }}
                >
                <animated.img 
                        src={MessageRyan}
                        className="RyansLetter"
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    />
                 </Col>
             </Row>
             <Row className="child">
                <Col
                    className="headerText"
                    xs={{ span: 7, offset: 2 }}
                    lg={{ span: 1, offset: 1 }}
                >
                    Newsletter SignUp
                </Col>
                <Col
                    xs={{ span: 8, offset: 2 }}
                    lg={{ span: 7, offset: 1 }}
                 >
                    <form className="formDiv">
                        <label className="inputNewsletter">
                            <span className="inputTextStyling" >email:</span>
                            <input type="text" name="email" className="inputFieldNewsletter" />
                        </label>
                        <label className="inputNewsletter">
                            <span>name:</span>
                            <input type="text" name="name" className="inputFieldNewsletter" />
                        </label>
                        <input type="submit" value="Submit" className="submitButtonNews"/>
                    </form>
                </Col>
             </Row>
        </Container>
    )
}

export default Connect