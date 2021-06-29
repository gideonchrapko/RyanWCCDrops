import React, { useEffect, useState } from "react"
import { useShopify } from "../hooks"
import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import { Row, Col, Container } from 'react-bootstrap'

// import { Link } from 'react-router-dom';

// import Cart from './Cart'
// import MenuRight from './Menu'
import Branding from '../images/wccMin.png'
import Header from './Header'
import Footer from './Footer'

// import SoldOutBannerImage from '../images/SoldOut.svg'
import DropDownArrow from '../images/dropDownArrow.svg'


export default (props) => {
	const {
		product,
		fetchProduct,
		openCart,
		checkoutState,
		addVariant,
	} = useShopify()
	
	const id = props.match.params.productId
	const defaultSize = product.variants && product.variants[0].id.toString()
	const [size, setSize] = useState("")
	const [sizeTitle, setSizeTitle] = useState("")
	const [quantity, setQuantity] = useState(1)
	const description = product.description && product.description.split(".")
	const [rotate, setRotate] = useState()
	const [dropDownMenu, setdropDownMenu] = useState(false);

	useEffect(() => {
		ReactGa.initialize('UA-135117574-2')
		ReactGa.pageview(`/Product/${id}`)
	})

	const rotationAnimation = useSpring({
		transform: !rotate ? `rotate(0deg)` : `rotate(180deg)`,
	});

    const dropDownMenuAnimation = useSpring({
      opacity: dropDownMenu ? 1 : 0,
      transform: dropDownMenu ? `translateY(0) scaleY(1)` : `translateY(-130%) scaleY(0)`
    }); 

	function changeSize(sizeId, quantity) {
		openCart()
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		} else {
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		}
	}

	function clickFunction(item, i) {
		if (item.available) {
			setSize(item.id.toString());
			setSizeTitle(item.title);
			setRotate(!rotate);
			setdropDownMenu(!dropDownMenu);
		} else {
			return
		}
	} 

	useEffect(() => {
		fetchProduct(id)
	}, [id])

	return (
		<Container fluid id="individualProduct">
			<img
				src={Branding}
				alt="logo"
				className="branding"
				onClick={() => window.appHistory.push("/Home")}
			/>
			{/* <Cart />
			<MenuRight /> */}
			<Header />
				<Row className="Product-wrapper2">
					<Col 
						className="Images"
						sm={{ span: 12 }}
						lg={{ span: 6 }}
						md={{ span: 6 }}
						>
						{product.images &&
							product.images.map((image, i) => {
								return (
									<img
										className='Product_Image'
										key={image.id + i}
										src={image.src}
										alt={`${product.title} product shot`}
									/>
								)
							})}
					</Col>
					<Col 
						className="Product__info"
					>
						<h2 className="Product__title2">{product.title}</h2>
						<h3 className="Productview__price">
							${product.variants && product.variants[0].price}
						</h3>
						<label htmlFor={"prodOptions"} style={{ marginTop: "2%" }}>Size</label><br/>
							<div style={{ width: "90%", position: "relateive" }} >
								<div 
									className="style__dropdown" 
									id="prodOptions" 
									onClick={e => {
										setdropDownMenu(!dropDownMenu);
										setRotate(!rotate);
									}}>
									{sizeTitle ? sizeTitle : "Pick a Size"}
									<a.img src={DropDownArrow} alt="drop down arrow" style={rotationAnimation} className="dropDownArrow"/>
								</div>
								<a.div className="style__dropdownDiv" style={dropDownMenuAnimation}>	
									{product.variants &&
										product.variants.map((item, i) => {
											return (
												<li
													onClick={e => {
														clickFunction(item, i)
													}}
													className={item.available ? "size__option" : "size__option2" }												
													key={item.title + i}
												>{`${item.title}`}</li>	
											)
									})}
								</a.div>	
							</div>
						<div style={{ marginTop: "2%" }}>
							<label>Quantity</label><br/>
								<div className="prodQuantity-container">
									{ quantity > 1 ?
											<button
											className="prodQuantity-update"
											onClick={() =>
												setQuantity(quantity - 1)
									}
										>
											-
										</button> :
										<button
											className="prodQuantity-update"
										>
											-
										</button>
									}
										<span className="prodQuantity" style={{ color: "white"}}>
											{quantity}
										</span>
										<button
											className="prodQuantity-update"
											onClick={() =>
												setQuantity(quantity + 1)
									}
										>
											+
										</button>
									</div>
							</div>
							{product.availableForSale ?
									<button
										className="prodBuyButton"
										onClick={(e) => changeSize(size, quantity)}
									>
										Add to Cart
									</button> :
									<button
										className="prodBuyButtonSold"
									>
										Sold Out
								</button>
							}
							<div className="Product__description">
							{description &&
								description.map((each, i) => {
									return <li key={`line-description +${i}`}>{each}</li>
								})}
						</div>
					</Col>
				</Row>
				<Footer />
		</Container>
	)
}
