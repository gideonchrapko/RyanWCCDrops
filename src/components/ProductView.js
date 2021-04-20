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
						<h3 className="Product__price">
								${product.variants && product.variants[0].price}
							</h3>
						<div style={{ paddingTop: "30px" }}>
							<label htmlFor={"prodOptions"}>Size</label><br/>
							<select
								className="style__dropdown"
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
												className="size__option"
												value={item.id.toString()}
												key={item.title + i}
											>{`${item.title}`}</option>
										)
									})}
							</select>
						</div>
						<div>
							<label>Quantity</label>
							<input
								className="quantity"
								type="number"
								min={1}
									value={quantity}
									onChange={(e) => {
										setQuantity(e.target.value)
									}}
								></input>
							</div>
							<button
								className="prodBuy button"
								onClick={(e) => changeSize(size, quantity)}
							>
								Add to Cart
							</button>
							<ul className="Product__description">
							{description &&
								description.map((each, i) => {
									return <li key={`line-description +${i}`}>{each}</li>
								})}
						</ul>
						</div>
				</div>
		</div>
	)
}
