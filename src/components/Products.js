import React, { useState } from "react"
import { Link, Element } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"

import Product from "./Product"
import Cart from './Cart'
import MenuRight from './Menu'

import Branding from '../images/wccMin.png'
import arrowDown from '../images/arrowDown.svg'
import headerImage from '../images/JBRolls_min.png'

import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {

	const [Class, setClass] = useState()

	const doSomething = () => {
		setClass(false);
	  }

	const dontDoSomething = () => {
		setClass(true);
	  }

  return (
		<div>
			<img
				src={Branding}
				alt="logo"
				className="branding"
				onClick={() => window.appHistory.push("/Home")}
			/>
			<MenuRight />
			<Cart />
			<Container fluid style={{ width: "100vw" }}>
				<Row>
					<Col lg={12}>
						<img
							src={headerImage}
							className="imageBanner"
						/>
					</Col>
				</Row>
				<Row>
					<Col 
						md={{ span: 5, offset: 7 }} 
						sm={{ span: 7, offset: 5 }} 
						xs={{ span: 9, offset: 3 }} 
						lg={{ span: 2, offset: 7 }} 
						style={{ 
							fontFamily: "neuzon,sans-serif",
							fontWeight: "400",
							fontStyle: "normal",
							display:"flex",
							marginTop: "-30px",
						 }} 
					>
						<h2 style={{ textAlign: "right" }}>Shop Capsule</h2>
						<img 
							style={{ 
								position: "relative", 
								opacity: "0.6", 
								height: "12vh",
								display: "inline-block",
								marginTop: "-10px",
								padding: "5px",
						}}
							src={arrowDown}
						/>
					</Col>
				</Row>
						<div>
							<hr style={{ marginTop: "50px" }}/>
							<Product history={props.history} />
						</div>
			</Container>
		</div>
	)
}