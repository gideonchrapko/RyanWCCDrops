import React from "react"
import { useShopify } from "../hooks"
import PurchaseButton from "../images/PurchaseButton.svg"

export default (props) => {
	const { products, fetchProduct } = useShopify()

	function handleClick(e, product_id) {
		e.preventDefault()
		const id = product_id
		fetchProduct(id).then((res) => {
			props.history.push(`/Product/${res.id}`)
		})
	}

	return (
		<div>
			<div className="Product-wrapper">
				{products &&
					products.map((product, i) => {
						const image = product.images[0]
						return (
							<div className="Product" key={product.id + i}>
								{image ? (
									<img src={image.src} alt={`${product.title} product shot`} className="image" />
								) : null}
								<div>
									<h4 className="Product__title">{product.title}</h4>
									<p className="Product__price">${product.variants[0].price}</p>
								</div>
								<img
									className="Product__buy button__purchase"
									src={PurchaseButton}
									alt="purchase"
									onClick={(e) => handleClick(e, product.id)}
								/>
							</div>
						)
					})}
			</div>
		</div>
	)
}
