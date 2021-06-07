import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import Cards from './Cards'
// import MenuRight from './Menu'
// import Cart from './Cart'
import Header from './Header'

// import Branding from '../images/wccMin.png';
// import NeonLogo from '../images/neon_gallery-min.png'

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
    backgroundColor: "grey",
    opacity: "0.15",
    backgroundSize: "cover",
}

const Gallery = () => {
    return (
        <Container fluid style ={{ position: "fixed"}}>
            {/* <div>
                <img 
                    src={Branding} alt="logo" 
                    className="branding"
                    onClick={() => window.appHistory.push("/Home")}
                />
            </div> */}
            <div style={Header_ImageConnect}>
            </div>
            {/* <Row className="headerGradient">
                <Col 
                    xs={{ span: 6, offset: 3 }}
					sm={{ span: 4, offset: 4 }}
					md={{ span: 2, offset: 5 }}
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
			<Cart /> */}
            <Header />
            <Cards />
        </Container>
    )
}

export default Gallery