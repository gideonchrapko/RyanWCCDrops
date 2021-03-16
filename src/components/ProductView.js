import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { useShopify } from "../hooks"
import { Container, Row, Col } from 'react-bootstrap'

import Cart from './Cart'
import MenuRight from './Menu'
import Branding from '../images/wccMin.png'


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
	const [quantity, setQuantity] = useState(1)

	const description = product.description && product.description.split(".")

	//This runs when you click ADD TO CART
	function changeSize(sizeId, quantity) {
		openCart()
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			//checkoutState.id is just he id of the product and it is saved in the checkoutState 
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


	return (
		<Container id="individualProduct" fluid>
			<img
				src={Branding}
				alt="logo"
				className="branding"
				onClick={() => window.appHistory.push("/Home")}
			/>
			<Cart />
			<MenuRight />
				<Row className="Product-wrapper2">
					<Col lg="6">
						{/* <div className="Images"> */}
							{product.images &&
								product.images.map((image, i) => {
									return (
										<img
											className="image_edit"
											key={image.id + i}
											src={image.src}
											alt={`${product.title} product shot`}
										/>
									)
								})}
						{/* </div> */}
					</Col>
					<Col lg="6" >
						<div className="Product__info">
							<h2 className="Product__title2">{product.title}</h2>
							<ul className="Product__description">
								{description &&
									description.map((each, i) => {
										return <li key={`line-description +${i}`}>{each}</li>
									})}
									Hard Coded text 
							</ul>
							<div>
								<label htmlFor={"prodOptions"}>Size</label>
								<select
									id="prodOptions"
									name={size}
									onChange={(e) => {
										setSize(e.target.value)
									}}
								>
									{product.variants &&
										product.variants.map((item, i) => {
											return (
												<option
													value={item.id.toString()}
													key={item.title + i}
												>{`${item.title}`}</option>
											)
										})}
								</select>
							</div>
							<h3 className="Product__price">
								${product.variants && product.variants[0].price}
							</h3>
							<div style={{ display: "flex", height: "7vh", marginTop: "10%" }}>
								{/* <label>Quantity</label> */}
								<input
									className="quantity"
									type="number"
									min={1}
									value={quantity}
									onChange={(e) => {
										setQuantity(e.target.value)
									}}
								></input>
								<button
									className="prodBuy"
									onClick={(e) => changeSize(size, quantity)}
								>
									ADD TO CART
								</button>
							</div>
						</div>
					</Col>
				</Row>
		</Container>
	)
}
