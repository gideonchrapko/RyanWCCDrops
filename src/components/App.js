import React, { useEffect } from "react"
import { Route } from "react-router-dom";

import Products from "./Products"
import Home from "./Home"
import ProductView from "./ProductView"
import Welcome from './Welcome'
import Connect from './Connect'
import Gallery from './Gallery'

// import Cart from './Cart'
// import MenuRight from './Menu'

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
		// fetchCollection()
		// createCheckout()
		if (localStorage.checkout_id) {
			fetchedCheckout(localStorage.checkout_id)
		} else {
			createCheckout()
		}
	}, [])

		return (
			<div>
					<Route exact path="/" component={Welcome} />
					<Route path="/home" component={Home} />
					<Route path="/shop" component={Products} />
					<Route path="/gallery" compoenent={Gallery} />
					<Route path="/Product/:productId" component={ProductView} />
					<Route path="/connect" component={Connect} />
					<div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
						<h6>© 2020 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
					</div>
			</div>
		)
}