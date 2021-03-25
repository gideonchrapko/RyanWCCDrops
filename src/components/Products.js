import React, { useState } from "react"
import { Link, Element } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"

import Product from "./Product"
import Cart from './Cart'
import MenuRight from './Menu'

import Branding from '../images/wccMin.png'
import arrowDown from '../images/arrowDown.png'
import headerImage from '../images/JBRolls_min.png'

import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {

	const [Class, setClass] = useState()

	const doSomething = () => {
		setClass(false);
	  }

	  console.log(Class)

	const dontDoSomething = () => {
		setClass(true);
	  }

							{/* <h1 
								style={{ 
									position: "relative", 
									display: "inline-block", 
									textAlign: "right", 
									padding: "10px",
									zIndex: "10000"
							}}>
								Shop<br/>Capsule
							</h1> */}

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
							src="https://i.ibb.co/p0jSqQj/Shop-min.png"
							className="headerImage"
						/>
						<Link
												onSetActive={doSomething}
												onSetInactive={dontDoSomething}	
												to="One"
												smooth={true}
												duration={1000}
												spy={true}
						>
						<img
							src={headerImage}
							className="imageBanner"
						/>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col 
						md={{ span: 5, offset: 7 }} 
						sm={{ span: 7, offset: 5 }} 
						xs={{ span: 9, offset: 3 }} 
						lg={{ span: 4, offset: 7 }} 
						style={{ 
							fontFamily: "neuzon,sans-serif",
							fontWeight: "400",
							fontStyle: "normal",
							display:"inline",
							marginTop: "-15%",
						 }} 
					>
						<Link 
							onSetActive={doSomething}
							onSetInactive={dontDoSomething}	
							to="One"
							smooth={true}
							duration={1000}
							spy={true}
						>
							Hello
						</Link>
						<img 
							style={{ position: "relative", 
							opacity: "0.6", 
							height: "20vh", 
							display: "inline-block",
							marginTop: "-30px"
						}}
							src={arrowDown}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Element id="One">
							<Product history={props.history}/>
						</Element>
						<Element id="Two" style={{ height: "100vh", backgroundColor: "blue" }}>
							hello
						</Element>
					</Col>
				</Row>
			</Container>
		</div>
	)
}