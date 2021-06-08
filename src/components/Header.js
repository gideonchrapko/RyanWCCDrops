import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Cart from './Cart'
import MenuRight from './Menu'
import { useShopify } from "../hooks"

import Branding from '../images/wccMin.png';
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md"
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

        if (newString === "shop") {
            return setImage("https://i.ibb.co/gMTVmYF/neon-shop-min.png")
        }
        if (newString === "gallery") {
            return setImage("https://i.ibb.co/ZfGchC9/neon-gallery-min.png")
        }
        if (newString === "connect") {
            return setImage("https://i.ibb.co/Scvz3cw/neon-untitled-min.png")
        }
        if (newString === "home") {
            return setImage("https://i.ibb.co/tpY6df0/neon-home-min.png")
        }

    })

    return (
        <Container fluid style={{ position: "fixed", zIndex: "9999"}}>
            <Cart />
            <div>
                <img 
                    src={Branding} 
                    alt="logo" 
                    className="branding"
                    onClick={() => window.appHistory.push("/home")}
                    />
            </div>
            <Row className="headerGradient">
            <Col 
                    xs={{ span: 6, offset: 3 }}
					sm={{ span: 4, offset: 4 }}
					md={{ span: 2, offset: 5 }}
                    lg={{ span: 2, offset: 5 }}
                >
                <img 
                    alt={`${window.appHistory.location.pathname} text`}
                    src={Image1}
                    style={{
                        width: "100%",
                        top: "0",
                        background: "black"
                    }}
                />
                </Col>
                <Col
                    className='d-block d-sm-none'
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
                <Col
                    className='d-xs-none d-none d-lg-block parentHeader'
                    lg={{ span: 4, offset: 1}}
                >
                    <Link to="/shop" className='headerLink'>
                        Shop
                    </Link>
                    <Link to="/gallery" className='headerLink' >
                        Gallery
                    </Link>
                    <Link to="/connect" className='headerLink' >
                        Connect
                    </Link>
                    <Link to="" className='headerLink' onClick={(e) => { cartStatus ? handleClose(e) : handleOpen(e) }} >
                        Cart
                    </Link>
                    <span></span>
                    <hr className="headerLine" />
                </Col>
            </Row>
        </Container>
    )
}

export default Header