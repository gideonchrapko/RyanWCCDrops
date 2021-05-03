import React, { useEffect, useState } from "react"
import { useShopify } from "../hooks"
import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';

import { Link } from 'react-router-dom';

import Cart from './Cart'
import MenuRight from './Menu'
import Branding from '../images/wccMin.png'
import SoldOutBannerImage from '../images/SoldOut.svg'
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

	const rotationAnimation = useSpring({
		transform: !rotate ? `rotate(0deg)` : `rotate(180deg)`,
	});

    const dropDownMenuAnimation = useSpring({
      opacity: dropDownMenu ? 1 : 0,
      transform: dropDownMenu ? `translateY(0) scaleY(1)` : `translateY(-130%) scaleY(0)`
    }); 

	//This runs when you click ADD TO CART
	function changeSize(sizeId, quantity) {
		openCart()
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			//checkoutState.id is just the id of the product and it is saved in the checkoutState 
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

	useEffect(() => {
		fetchProduct(id)
	}, [id])


	// console.log(product.availableForSale)

	// console.log(product)


	return (
		<div id="individualProduct">
			<img
				src={Branding}
				alt="logo"
				className="branding"
				onClick={() => window.appHistory.push("/Home")}
			/>
			<Cart />
			<MenuRight />
				<div className="Product-wrapper2">
					<div className="Images">
						{/* <div className="navigationText">
							<h5 to="/shop">Capsule ></h5>
							<h5>{product.title}</h5>
						</div> */}
						{product.images &&
							product.images.map((image, i) => {
								return (
									<img
										key={image.id + i}
										src={image.src}
										alt={`${product.title} product shot`}
									/>
								)
							})}
					</div>
					<div className="Product__info">
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
														setSize(item.id.toString());
														setSizeTitle(item.title);
														setRotate(!rotate);
														setdropDownMenu(!dropDownMenu);
													}}
													className="size__option"
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
					</div>
				</div>
		</div>
	)
}
