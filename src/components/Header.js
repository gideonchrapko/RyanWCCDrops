import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Cart from './Cart'
import MenuRight from './Menu'

// import Hdrshop from '../images/neon_shop-min.png'
// import Hdrgallery from '../images/neon_gallery-min.png'
// import Hdrconnect from '../images/neon_untitled-min.png'
// import Hdrhome from '../images/neon_untitled-min.png'
import Branding from '../images/wccMin.png';


const Header = () => {

    const [Image1, setImage] = useState()

    useEffect((Image1) => {

        const HdrImg = window.appHistory.location.pathname
        const newString = HdrImg.replace('/', '');

        // const gallery = "https://i.ibb.co/ZfGchC9/neon-gallery-min.png"
        // const shop = "https://i.ibb.co/gMTVmYF/neon-shop-min.png"
        // const connect = "https://i.ibb.co/Scvz3cw/neon-untitled-min.png"

        if (newString === "shop") {
            return setImage("https://i.ibb.co/gMTVmYF/neon-shop-min.png")
        }
        if (newString === "gallery") {
            return setImage("https://i.ibb.co/ZfGchC9/neon-gallery-min.png")
        }
        if (newString === "connect") {
            return setImage("https://i.ibb.co/Scvz3cw/neon-untitled-min.png")
        }

    })

    // const [Image1, setImage] = useState()

    // const HdrImg = window.appHistory.location.pathname
    // const newString = HdrImg.replace('/', '');

    // const gallery = "https://i.ibb.co/ZfGchC9/neon-gallery-min.png"
    // const shop = "https://i.ibb.co/gMTVmYF/neon-shop-min.png"
    // const connect = "https://i.ibb.co/Scvz3cw/neon-untitled-min.png"

    // if (newString === "shop") {
    //     return setImage("https://i.ibb.co/gMTVmYF/neon-shop-min.png")
    // }

    // if (newString === "gallery") {
    //     return setImage(gallery)
    // }

    // if (newString === "connect") {
    //     return setImage(connect)
    // }


    console.log(Image1)

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
                    alt={`${window.appHistory.location.pathname} text`}
                    src={Image1}
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