import React, { useState } from "react"
import { useShopify } from "../hooks"
// import PurchaseButton from "../images/PurchaseButton.svg"

import { Container } from 'react-bootstrap'

export default (props) => {
	const { products, fetchProduct } = useShopify()
	const [hover, setHover] = useState(false)

	function handleClick(e, product_id) {
		e.preventDefault()
		const id = product_id
		// this is an action or an action creator... not sure I think an action
		fetchProduct(id).then((res) => {
			props.history.push(`/Product/${res.id}`)
		})
	}
	
	return (
		<Container fluid>
			<div className="Product-wrapper">
				{products &&
					products.map((product, i) => {
						const image = product.images[0]
						const dynamicImage = () => {
							const id = product.id
							if (hover === id) {
							  return <img 
										src={product.images[1].src}
										alt={`${product.title} product shot`} 
										className="image" 
							  		/>
							} else {
							  if (hover === "out") { 
							  		return <img 
										src={product.images[0].src}
										alt={`${product.title} product shot`} 
										className="image" 
						  			/> }
							} 
							return <img 
										src={product.images[0].src}
										alt={`${product.title} product shot`} 
										className="image" 
						  			/> 
						  }
						const viewMoreText = () => {
							const id = product.id
							if (hover === id) {
								return <p className="view__open view__type">
											View
										</p>
							  } else {
								if (hover === "out") { 
										return <p className="view__closed view__type">
													View
												</p>
									}
							  } 
							  return <p className="view__closed view__type">
										View
									</p>
						}
						const displayPriceOrSoldOut = () => {
							if (product.availableForSale) {
							  return <p className="Product__price">${product.variants[0].price}</p>;
							} else {
							  return <p className="Product__price">Sold Out</p>;
							}
						  }
						return (
							<div 
								className="Product" 
								key={product.id + i} 
								onPointerOver={() => setHover(product.id)}
								onPointerOut={() => setHover("out")}
								onClick={(e) => handleClick(e, product.id)}
								alt="purchase"
							>
								{image ? (
									<div className="box">
										{dynamicImage()}
										{viewMoreText()}
									</div>
								) : null}
								<div>
									<h4 className="Product__title">{product.title}</h4>
									{displayPriceOrSoldOut()}
								</div>
							</div>
						)
					})}
			</div>
		</Container>
	)
}
