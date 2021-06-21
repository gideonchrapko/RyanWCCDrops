import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSpring, animated } from "react-spring";


import Cart from './Cart'
import MenuRight from './Menu'
import { useShopify } from "../hooks"

import Branding from '../images/wccMin.png';
import { MdShoppingCart } from "react-icons/md"
import Open from "../images/Open.svg";

const Header = (props) => {
    const {
        cartStatus,
		closeCart,
		openCart,
	} = useShopify()

    const [Image1, setImage] = useState()

    function handleOpen(e) {
		e.preventDefault()
		openCart()
	}

	function handleClose(e) {
		e.preventDefault()
		closeCart()
	}

    useEffect(() => {
        const HdrImg = window.appHistory.location.pathname
        const newString = HdrImg.replace('/', '');
        const productString = newString.substring(0,7)

        if (newString === "shop") {
            return setImage("https://i.ibb.co/K5rb395/neon-shop-min-min.png")
        }
        if (productString == "Product") {
            return setImage("https://i.ibb.co/K5rb395/neon-shop-min-min.png")
        }
        if (newString === "gallery") {
            return setImage("https://i.ibb.co/Pr0PYpp/neon-gallery-min.png")
        }
        if (newString === "connect") {
            return setImage("https://i.ibb.co/WW9Ln2r/neon-connect-min.png")
        }
        if (newString === "home") {
            return setImage("https://i.ibb.co/kMKxzNL/neon-home-min.png")
        }
    })



    // https://i.ibb.co/Scvz3cw/neon-untitled-min.png

    return (
        <Container fluid style={{ position: "fixed", zIndex: "9999", left: "0" }}>
            <Cart />
            <div>
                <img 
                    src={Branding} 
                    alt="Click to go the Home Page"
                    className="branding"
                    onClick={() => window.appHistory.push("/home")}
                    />
            </div>
            <Row className="headerGradient">
                {/* Nav left side */}
                <Col 
                    className='d-xs-none d-none d-lg-block d-md-block parentHeader'
                    lg={{ span: 3, offset: 1 }}
                    md={{ span: 3, offset: 1 }}
                >
                    <Link 
                        to="/shop" 
                        className="headerLink"
                    >
                        Shop
                    </Link>
                    <Link 
                        to="/gallery" 
                        className="headerLink"
                    >
                        Gallery
                    </Link>
                </Col>
                {/* Image */}
                <Col 
                    xs={{ span: 6, offset: 3 }}
					sm={{ span: 4, offset: 4 }}
					md={{ span: 4, offset: 0 }}
                    lg={{ span: 4, offset: 0 }}
                    // style={{ background: "red", opacity: "0.3"}}
                >
                <img 
                    alt={`${window.appHistory.location.pathname} Page`}
                    src={Image1}
                    style={{
                        width: "50%",
                        top: "0",
                        background: "none",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        minWidth: "200px",
                        maxWidth: "250px",
                    }}
                />
                </Col>
                {/* shopping cart thing icon */}
                <Col
                    className='d-block d-md-none'
                    lg={3}
                    xs={3}
                >
                    <MenuRight />
                    <div className="App__view-cart-wrapper2">
				        <button src={Open} onClick={(e) => { cartStatus ? handleClose(e) : handleOpen(e) }} className="App__view-cart" >
					        <MdShoppingCart />
				        </button> 
			        </div>
                </Col>
                {/* Nav right side  */}
                <Col
                    className='d-xs-none d-none d-lg-block d-md-block parentHeader'
                    lg={{ span: 3, offset: 0}}
                    md={{ span: 3, offset: 0 }}
                    // style={{ background: "green", opacity: "0.3"}}
                >
                    <Link 
                        to="/connect" 
                        className="headerLink"
                    >
                        Connect
                    </Link>
                    <Link 
                        to="" 
                        className="headerLink"
                        onClick={(e) => { cartStatus ? handleClose(e) : handleOpen(e) }} 
                    >
                        Cart
                    </Link>
                    {/* <span style={spanUnderline}> head</span> */}
                    {/* <hr className="headerLine" /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Header