import React, { useState } from "react"
// import { Link, Element } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"

import Product from "./Product"
import Cart from './Cart'
import MenuRight from './Menu'

import Branding from '../images/wccMin.png'
import arrowDown from '../images/arrowDown.png'

import 'bootstrap/dist/css/bootstrap.min.css';

// import PanelOneWorld from '../images/PanelOneWorld.svg'
// import PanelTwoGallery from '../images/PanelTwoGallery.svg'
// import PanelThreeShirt from '../images/PanelThreeShirt.svg'

export default (props) => {

	// const [Class, setClass] = useState()
	// const [Class2, setClass2] = useState()
	// const [Class3, setClass3] = useState()

	// const doSomething = () => {
	// 	setClass(true);
	//   }

	//   const dontDoSomething = () => {
	// 	setClass(false);
	//   }

	//   const doSomething2 = () => {
	// 	setClass2(true);
	//   }

	//   const dontDoSomething2 = () => {
	// 	setClass2(false);
	//   }

	//   const doSomething3 = () => {
	// 	setClass3(true);
	//   }

	//   const dontDoSomething3 = () => {
	// 	setClass3(false);
	//   }

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
			<Container fluid style={{width: "100vw", height: "100vh"}}>
				<Row>
					<Col lg={12}>
					<img
						src="https://i.ibb.co/wYnZ6ds/Group-158.png"
						className="imageBanner"
					/>
					<img 
						src="https://i.ibb.co/p0jSqQj/Shop-min.png"
						className="headerImage"
					/>
						{/* <div className="Panel">
							<div className="container">
								<Link 
									onSetActive={doSomething}
									onSetInactive={dontDoSomething}	
									to="One"
									smooth={true}
									duration={1000}
									spy={true}
								>
									<img
										id="image"
										src={PanelOneWorld}
										className={`icon${Class ? "Scaled" : ""}`}
										alt="World"
									/>
								</Link>
								<Link 
									onSetActive={doSomething2}
									onSetInactive={dontDoSomething2}					
									to="Two"	
									smooth={true}	
									duration={1000}
									spy={true}
								>
									<img 
										src={PanelTwoGallery}
										className={`icon${Class2 ? "Scaled" : ""}`}
										alt="Gallery"
									/>
								</Link>
								<Link 
									onSetActive={doSomething3}
									onSetInactive={dontDoSomething3}							
									to="Three"
									smooth={true}
									duration={1000}
									spy={true}
								>
									<img 
										src={PanelThreeShirt}
										className={`icon${Class3 ? "Scaled" : ""}`}
										alt="Clothing"
									/>
								</Link>
							</div>
						</div> */}
					</Col>
				</Row>
				<Row>
					<Col 
						md={{ span: 4, offset: 7 }} 
						sm={{ span: 4, offset: 7 }} 
						xs={{ span: 4, offset: 7 }} 
						lg={{ span: 4, offset: 7 }} 
						style={{ 
							marginTop: "-20vh",
							fontFamily: "neuzon,sans-serif",
							fontWeight: "400",
							fontStyle: "normal",
						 }} 
					>
						<h1 style={{ position: "relative", display: "inline"  }}>Shop Capsule</h1>
						<img 
							style={{ position: "relative", height: "15vh", display: "inline", opacity: "0.6", top: "0" }}
							src={arrowDown}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Product history={props.history}/>
					</Col>
				</Row>
				{/* <Element className="section_One" id="One">
					<h1>Start</h1>
				</Element>
				<Element className="section_Two" id="Two">
					<h1>Gallery</h1>
				</Element> */}

			</Container>
		</div>
	)
}