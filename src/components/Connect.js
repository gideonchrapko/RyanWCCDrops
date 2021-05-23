import React, { useState, useEffect } from 'react';
import { useSpring } from "@react-spring/core";


import MenuRight from './Menu';
import Cart from './Cart'

import { Col, Container, Row } from 'react-bootstrap'

import Branding from '../images/wccMin.png'
import ScratchBG from '../images/Scratch.jpeg'
import arrowDown from '../images/arrowDown.png'
import NeonLogo from '../images/neon_untitled-min.png'
import MessageRyan from '../images/RyanMessage.png'

const items = [
    "https://plchldr.co/i/500x250?bg=111111",
    "https://plchldr.co/i/500x250?bg=791F1F",
    "https://plchldr.co/i/500x250?bg=791F76",
    "https://plchldr.co/i/500x250?bg=34791F",
    "https://plchldr.co/i/500x250?bg=79641F",
    "https://plchldr.co/i/500x250?bg=C5BF6F",
    "https://plchldr.co/i/500x250?bg=8D391E",
    "https://plchldr.co/i/500x250?bg=cbb2ca",
];

// const styleMedia = () {
//     items[i] = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%"
// }

const Connect = () => {
    const [rightMenuVisible, setRightMenuVisible] = useState(false);
    const rightMenuAnimation = useSpring({
      opacity: rightMenuVisible ? 1 : 0,
      transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
    });

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
            <MenuRight style={rightMenuAnimation}/>
            <Cart />
            <div style={Header_ImageConnect}>
            </div>
            <img 
				style={{ 
					position: "fixed", 
					height: "12vh",
					marginTop: "75vh",
                    marginLeft: "80vw",
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
            <Row className="child"> 
                 <Col
                    className="headerText"
                    xs={{ span: 7, offset: 2 }}
                    lg={{ span: 1, offset: 1 }}
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
                    className="AboutText"
                    sm={{ span: 10, offset: 2 }}
                    lg={{ span: 8, offset: 0 }}
                >
                    {items &&
                        items.map((items, index) => {
                                const l = items.length
                                console.log(l)
                                // const Top = 10 * Math.sin(Math.PI * 2 * (l- 0.125));
                                // const Left = 10 * Math.cos(Math.PI * 2 * (l - 0.125));
                                const Top = Math.sin(2 * Math.PI / index * 8) * 100
                                const Left = Math.cos(2 * Math.PI / index * 8) * 100
                            return (
                                <img
                                    style={{
                                        top: `${Top}px`,
                                        left: `${Left}px`,
                                        position: "absolute",
                                        height: "10%"
                                    }}
                                    index={index}
                                    key={items+1}
                                    src={items}
                                />
                            )
                        })}
                </Col>
             </Row>
             <Row className="child">
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
                <img 
                    src={MessageRyan}
                    style={{
                        width: "100%",
                        top: "9vw",
                        position: "relative",
                        rotate: "3deg"
                    }}
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
                    // className="AboutText"
                    // style={{ backgroundColor: "red"}}
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