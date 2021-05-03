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

		// async function getCheckout() {
			const existingCheckoutID = localStorage.getItem('state');
			if (existingCheckoutID == null) {
				try {
					createCheckout();
					localStorage.setItem('state', "fuck")

					console.log("create")
					
				// if this cart was already purchased, clear it and start fresh
				  if (existingCheckoutID !== null) {
						fetchedCheckout()
						console.log("fetched")
						console.log(existingCheckoutID)
						return;
				  }
				} catch (error) {
				console.log("error")
				}
			}

		// }
		// getCheckout()
	},[])

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