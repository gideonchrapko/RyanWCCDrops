import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-scroll'

import Product from "./Product"
import Header from './Header'
import Footer from './Footer'

import arrowDown from '../images/arrowDown.png'
// import Car from '../images/carMin.png'
import Background from '../images/BackgroundShop.png'
import BackgroundS from '../images/BackgroundShopSmall.png'

import 'bootstrap/dist/css/bootstrap.min.css';

const Products = (props) => {

	const [ sectionNumber, setSectionNumber ] = useState(1)

	window.addEventListener("load", (event) => {
		["1", "2"].forEach(name => {
		  handleEachCategory(name);
		});
	  }, false);
	  
	  function handleEachCategory(category) {
		let target = document.getElementById(category);
		let observer;
		let isVis;
		createObserver();
	  
		function createObserver() {
		  let options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0
		  }
		  observer = new IntersectionObserver(handleIntersect, options);
		  observer.observe(target)
		}
	  
		function handleIntersect(entries, observer) {
		  entries.forEach(entry => {
			if (entry.intersectionRatio === 1)
			  setAsVisible();
		  });
		}
	  
		function setAsVisible() {
		  isVis = true;
		}
	  }

	  const Header_ImageConnect = {
        position: "relative",
        marginTop: "100px",
        borderRadius: "25px",
        height: "65vh",
        width: "75vw", 
        marginLeft: "-37.5vw",
        marginTop: "17.5vh",
        top: "50%",
        left: "50%",
		backgroundColor: "#161616",
		opacity: "0.8"
    }

  return (
			<Container 
				fluid 
				style={{ overflow: "auto"}}
			>
				<Header />
				<div style={Header_ImageConnect}>
           		</div>
				<Row id="01" style={{ height: "100vh", position: "relative", marginTop: "-80vh" }}>
					<Col 
						lg={{ span: 12, offset: 0}} 
						xs={{ span: 12, offset: 0}}
						className="align-items-center justify-content-center d-xs-none d-none d-lg-flex d-md-flex"
						id="1"
					>
						<img src={Background} style={{ zIndex: "99", width: "85%", minWidth: "400px" }}/> 
					</Col>
					<Col 
						lg={{ span: 12, offset: 0}} 
						xs={{ span: 12, offset: 0}}
						className=" align-items-center justify-content-center d-flex d-md-none"
						id="1"
					>
						<img src={BackgroundS} style={{ zIndex: "99", width: "85%", minWidth: "400px" }}/> 
					</Col>
				</Row>
				<Row>
					<Col
						md={{ span: 2, offset: 9 }} 
						sm={{ span: 2, offset: 9 }} 
						xs={{ span: 4, offset: 6 }} 
						lg={{ span: 2, offset: 8 }} 
						style={{ 
							fontFamily: "neuzon,sans-serif",
							fontWeight: "400",
							fontStyle: "normal",
							display:"flex",
							marginTop: "-180px",
						 }} 
					>
					<Link to={`${sectionNumber + 1}`} duration={500} smooth={true}>
						<img 
							src={arrowDown}
							className="arrowDown"
							style={{
								position: "relative", 
								height: "15vh",
								marginLeft: "46px",
								marginTop: "-2.1vh",
								width: "auto",
								zIndex: "999",
								cursor: "pointer"
							}}
                		/>
            		</Link>
					</Col>
				</Row >
					<div id="11" style={{ marginTop: "25vh"}}>
						<hr className="productLine" id="2"/>
						<Product history={props.history} />
					</div>
				<Footer />
			</Container>
	)
}

export default Products