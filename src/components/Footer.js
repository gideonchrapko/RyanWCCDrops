import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Container fluid style={{ position: 'fixed', bottom: "0vh", width: "100vw", zIndex: "999999999" }}>
            <Row >
                <Col 
                    lg={6}
                    md={6}
                    className="parentFooter d-xs-none d-none d-lg-block d-md-block"
                    // style={{ background: "red"}}
                >
                    <h1 className="FooterText">© 2021 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h1>
                </Col>
                <Col
                    lg={{ span: 6, offset: 0 }}
                    md={6}
                    className="parentFooter d-xs-none d-none d-lg-block d-md-block"
                    // style={{ background: "green"}}
                >
                    <Link 
                        to="" 
                        className="FooterText"
                        style={{ width: "20%" }}
                    >
                        Refund Policy
                    </Link>
                    <a 
                        className="FooterText" 
                        href="https://www.instagram.com/westcoastcustoms/"
                        style={{ width: "20%" }}
                    >   
                        Instagram
                    </a>
                    <a
                        className="FooterText" 
                        href="https://twitter.com/officialwcc"
                        style={{ width: "20%" }}
                    >
                        Twitter
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer