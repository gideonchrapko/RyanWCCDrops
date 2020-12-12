import React from "react"
import { Link } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"

import Product from "./Product"
import Cart from './Cart'
import MenuRight from './Menu'

import Branding from '../images/wccMin.png'
import PanelOneWorld from '../images/PanelOneWorld.svg'
import PanelTwoGallery from '../images/PanelTwoGallery.svg'
import PanelThreeShirt from '../images/PanelThreeShirt.svg'

export default (props) => {
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
				<Col style={{ backgroundColor: "red"}}>
					<div className="Panel">
						{/* <div className="Highlight">
						</div> */}
						<div className="container">
							<Link 
								to="One"
								smooth={true}
								duration={1000}
							>
								<img 
									src={PanelOneWorld}
									className="icon"
									alt="World"
								/>
							</Link>
							<Link 
								to="Two"	
								smooth={true}	
								duration={1000}
							>
								<img 
									src={PanelTwoGallery}
									className="icon"
									alt="Gallery"
								/>
							</Link>
							<Link 
								to="Three"
								smooth={true}
								duration={1000}
							>
								<img 
									src={PanelThreeShirt}
									className="icon"
									alt="Clothing"
								/>
							</Link>
						</div>
					</div>
				</Col>
				<div className="section_One" id="One">
					<h1>Start</h1>
				</div>
				<div className="section_Two" id="Two">
					<h1>Gallery</h1>
				</div>
				<div className="section_Three" id="Three">
					<Product history={props.history}/>
				</div>
			</Container>
		</div>
	)
}