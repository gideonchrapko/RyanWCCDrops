import React, { useState } from "react"
import { Link, Element } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"

import Product from "./Product"
import Cart from './Cart'
import MenuRight from './Menu'

import Branding from '../images/wccMin.png'
import PanelOneWorld from '../images/PanelOneWorld.svg'
import PanelTwoGallery from '../images/PanelTwoGallery.svg'
import PanelThreeShirt from '../images/PanelThreeShirt.svg'

export default (props) => {

	const [Class, setClass] = useState()
	const [Class2, setClass2] = useState()
	const [Class3, setClass3] = useState()

	const doSomething = () => {
		setClass(true);
	  }

	  const dontDoSomething = () => {
		setClass(false);
	  }

	  const doSomething2 = () => {
		setClass2(true);
	  }

	  const dontDoSomething2 = () => {
		setClass2(false);
	  }


	  const doSomething3 = () => {
		setClass3(true);
	  }

	  const dontDoSomething3 = () => {
		setClass3(false);
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
			<Container fluid>
				<Row>
					<Col>
						<div className="Panel">
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
						</div>
					</Col>
				</Row>
				<Element className="section_One" id="One">
					<h1>Start</h1>
				</Element>
				<Element className="section_Two" id="Two">
					<h1>Gallery</h1>
				</Element>
				<Element className="section_Three" id="Three">
					<Product history={props.history}/>
				</Element>
			</Container>
		</div>
	)
}