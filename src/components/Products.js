import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-scroll'

import Product from "./Product"
// import Cart from './Cart'
// import MenuRight from './Menu'
import Header from './Header'
import Footer from './Footer'

// import Branding from '../images/wccMin.png'
import arrowDown from '../images/arrowDown.png'
import headerImage from '../images/JBRolls_min.png'
// import NeonLogo from '../images/neon_shop-min.png'

import 'bootstrap/dist/css/bootstrap.min.css';


const Products = (props) => {

	// const [ sectionNumber, setSectionNumber ] = useState(1)

	// window.addEventListener("load", (event) => {
	// 	["1", "2", "3", "4"].forEach(name => {
	// 	  handleEachCategory(name);
	// 	});
	//   }, false);

	// function handleEachCategory(category) {
	// 	let target = document.getElementById(category);
	// 	let observer;
	// 	let isVis;
	// 	createObserver();
	  
	// 	function createObserver() {
	// 	  let options = {
	// 		root: null,
	// 		rootMargin: '0px',
	// 		threshold: 1.0
	// 	  }
	// 	  observer = new IntersectionObserver(handleIntersect, options);
	// 	  observer.observe(target)
	// 	}
	  
	// 	function handleIntersect(entries) {
	// 	  entries.forEach(entry => {
	// 		if (entry.intersectionRatio === 1)
	// 		  setAsVisible();
	// 	  });
	// 	}
	  
	// 	function setAsVisible() {
	// 	  isVis = true;
	// 	//   console.log(`${category} is${(!isVis ? " not" : "")} visible`)
	// 	  setSectionNumber(category)
	// 	}
	//   }

  return (
			<Container 
				fluid 
				style={{ overflow: "auto"}}
			>
				<Header />
				<Row>
					<Col lg={12} id="1">
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
					{/* <Link to={`${sectionNumber + 1}`} duration={500} smooth={true}>
						<img 
							src={arrowDown}
							style={{
								position: "fixed", 
								height: "15vh",
								width: "auto",
								marginTop: "75vh",
								marginLeft: "70vw",
								padding: "5px",
								zIndex: "999",
								cursor: "pointer",                        
							}}
						/>
            		</Link> */}
					</Col>
				</Row>
						<div id="11" >
							<hr className="productLine" id="2"/>
							<Product history={props.history} />
						</div>
				<Footer />
			</Container>
	)
}

export default Products