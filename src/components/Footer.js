import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

import Twitter from '../images/icon_twitter.svg'
import Instagram from '../images/icon_instagram.svg'


const Footer = () => {
    return (
        <Container fluid style={{ position: 'fixed', bottom: "0", width: "100vw", left: "0", zIndex: "9999" }}>
            <Row >
                <Col 
                    lg={6}
                    md={6}
                    className="parentFooter d-xs-none d-none d-lg-block d-md-block"
                >
                    <h1 className="FooterText">© 2021 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h1>
                </Col>
                <Col
                    lg={{ span: 6, offset: 0 }}
                    md={6}
                    className="parentFooter d-xs-none d-none d-lg-block d-md-block"
                >
                    <Link 
                        className="FooterText"
                        style={{ width: "20%" }}
                        to="/refund-policy"
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
                <Col 
                    xs={6}
                    sm={6}
                    className="parentFooter d-block d-md-none"
                    style={{ padding: "5%"}}
                >
                <a 
                        style={{ width: "20%", textAlign: "left", color: "white", fontSize: "max(0.6em, 10px)" }}
                    >
                        © 2021 West Coast Customs.
                </a>
                </Col>
                <Col
                    xs={6}
                    sm={6}
                    className="parentFooter d-block d-md-none"
                    style={{ padding: "5%"}}
                >
                    <Link
                        to="/refund-policy"
                        style={{ width: "20%", textAlign: "left", color: "white", fontSize: "max(0.6em, 10px)"  }}
                    >
                        Refund Policy
                    </Link>
                    <a href="https://www.instagram.com/westcoastcustoms/">
                        <img 
                            src={Instagram}
                            className="FooterText"
                            style={{ height: "12px", paddingLeft: "20px" }}
                        />
                    </a>
                    <a href="https://twitter.com/officialwcc">
                        <img
                            src={Twitter}
                            className="FooterText"
                            style={{ height: "12px", paddingLeft: "20px" }}
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer