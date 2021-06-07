import React from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Cart from './Cart'
import MenuRight from './Menu'

import NeonShop from '../images/neon_shop-min.png'
import NeonGallery from '../images/neon_gallery-min.png'
import NeonConnect from '../images/neon_untitled-min.png'
import Branding from '../images/wccMin.png';

const Header = () => {
    return (
        <Container fluid style={{ position: "fixed", zIndex: "9999"}}>
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
                    alt="Connect Page Text"
                    src={NeonShop}
                    style={{
                        width: "100%",
                        top: "0",
                    }}
                />
                </Col>
                <Col
                    className='d-block d-sm-none'
                    lg={3}
                    xs={3}
                >
                    <MenuRight />
                    <Cart />
                </Col>
                <Col
                    className='d-xs-none d-none d-lg-block parentHeader'
                    lg={{ span: 3, offset: 1}}
                >
                    <Link to="/shop" className='headerLink'>
                        Shop
                    </Link>
                    <Link to="/gallery" className='headerLink'>
                        Gallery
                    </Link>
                    <Link to="/connect" className='headerLink'>
                        Connect
                    </Link>
                    <Cart />
                </Col>
            </Row>
        </Container>
    )
}

export default Header