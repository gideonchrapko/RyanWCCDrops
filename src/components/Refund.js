import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ReactGa from 'react-ga'

import Header from './Header'
import Footer from './Footer'

const Refund = () => {

    useEffect(() => {
		ReactGa.initialize('UA-135117574-2')
		ReactGa.pageview('/refund-policy')
	})

    return (
        <Container style={{ overflow: "scroll"}}>
            <Header />
                <Col 
                    style={{ 
                        position: "relative", 
                        zIndex: "999", 
                        paddingTop: "20%", 
                        textAlign: "center",
                        paddingTop: "20vh"
                        }}
                        sm={{ offset: 2, span: 8}}
                        lg={{ offset: 2, span: 8}}
                    >
                        <h1 className="ReturnHeader">
                            Refund Policy
                        </h1>
                        <h3 className="ReturnBody">
                            You may exchange any product purchased from any WCC Drops store by 
                            following the instructions below. This department operates Monday 
                            through Friday, 8 a.m. to 4 p.m. PST. All emails will be answered 
                            within 24-48 business hours, excluding weekends and all major U.S. 
                            holidays. Please allow an additional 1-2 business days for responses 
                            during big restocks and new launches. We do not provide return labels unless your order was 
                            incorrect or damaged upon delivery. Please contact us for further 
                            information on returning if you received an incorrect or damaged order. 
                            In the event you need to return a product, this must be completed within 
                            14 days of your ORIGINAL delivery date. We do not accept any returns or 
                            exchanges on items that have been washed, worn, or appear to have been 
                            damaged by the customer. Any defective or damaged merchandise must
                        </h3><br/>
                        <h4 classname="return__infohead">
                            Return Email:
                        </h4>
                        <h5 classname="return__infosub">
                        <a href = "mailto: help@wccdrops.com" style={{ fontWeight: "300", color: "white"}}>
                            help@wccdrops.com
                        </a></h5><br/>
                        <h4 classname="return__infohead">
                            Returns and exchange address:
                        </h4>
                        <h5 
                            classname="return__infosub"
                            style={{ fontWeight: "300"}}
                        >
                            2101 West Empire AveBurbank, CA 91504
                        </h5>
                </Col>
            <Footer />
        </Container>
    )
}

export default Refund