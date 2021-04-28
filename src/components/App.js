import React, { useEffect } from "react"
import { Route } from "react-router-dom";

import Products from "./Products"
import Home from "./Home"
import ProductView from "./ProductView"
import Welcome from './Welcome'
import Connect from './Connect'

import Gallery from './Gallery'

import { useShopify } from "../hooks"
// import { connect } from "react-redux";

export default (props) => {
	const {
		createShop,
		createCheckout,
		fetchProducts,
		checkoutState,
		fetchedCheckout,
		// fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		// createCheckout()
		// fetchedCheckout()

		// const serializedState = localStorage.getItem('state')
		// const parsedState = JSON.parse(serializedState)
		// if (serializedState === null) {
		// 	return console.log(serializedState) 
		// } else {
		// 	console.log(parsedState.shopifyState.checkout.id)
		// }

		try {
			const serializedState = localStorage.getItem('state')
			const parsedState = JSON.parse(serializedState)
			if (serializedState === null) return createCheckout()
			  return fetchedCheckout(parsedState.shopifyState.checkout.id)
		  } catch(e) {
			  console.log(e)
			return undefined
		  }

	}, [])

		return (
			<div>
				<Route exact path="/" component={Welcome} />
				<Route path="/home" component={Home} />
				<Route path="/shop" component={Products} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/Product/:productId" component={ProductView} />
				<Route path="/connect" component={Connect} />
				<div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw", mixBlendMode: "exclusion" }}>
					<h6 alt="copywrite">© 2020 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
				</div>
			</div>
		)
}