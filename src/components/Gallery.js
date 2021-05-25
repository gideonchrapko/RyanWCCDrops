import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Cards from './Cards'
import MenuRight from './Menu'
import Cart from './Cart'

import Branding from '../images/wccMin.png';
import NeonLogo from '../images/neon_gallery-min.png'

const Gallery = () => {
    return (
        <div>
            <div>
                <img 
                    src={Branding} alt="logo" 
                    className="branding"
                    onClick={() => window.appHistory.push("/Home")}
                />
            </div>
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
            <MenuRight />
			<Cart />
            <Cards />
        </div>
    )
}

export default Gallery