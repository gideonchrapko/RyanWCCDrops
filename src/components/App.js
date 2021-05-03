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


		// getCheckout()

		// createCheckout()
		// fetchedCheckout()

async function getCheckout() {
	const existingCheckoutID = localStorage.getItem('state');
	if (existingCheckoutID) {
		return fetchedCheckout()
	} else {
		return createCheckout()
		// localStorage.setItem('state', checkoutState.id)
		// console.log(checkoutState.id)
	}
}
getCheckout()

			// async function getCheckout() {

			// 	if (checkoutState) return;
			// 	// const stateVariable = appState.shopifyState.checkout.id
			// 	// const serializedState = JSON.stringify(stateVariable)

			// 	const existingCheckoutID = localStorage.getItem('state');
			// 	// const parsedState = JSON.parse(existingCheckoutID);
			// 	// if (existingCheckoutID && existingCheckoutID !== 'null') {
			// 	if (existingCheckoutID) {
			// 	  try {
			// 		  console.log(existingCheckoutID)
			// 		// const existingCheckout = await client.checkout.fetch(
			// 		//   existingCheckoutID,
			// 		// );
			// 		// const existingCheckout = existingCheckoutID
			// 		const parsedState = JSON.parse(existingCheckoutID);
			// 		fetchedCheckout()
			// 		// const exisitingCheckout = fetchedCheckout(existingCheckoutID)
			// 		console.log(parsedState)
			// 		console.log("fetched")
			// 		// if this cart was already purchased, clear it and start fresh
			// 		if (!parsedState.completedAt) {
			// 			const parsedState = existingCheckoutID
			// 		  return;
			// 		}
			// 	  } catch (error) {
			// 		// localStorage.removeItem('state');
			// 		console.log("remove")
			// 	  }
			// 	}
			// 	// if we get here, we need to create a new checkout session
			// 	// const newCheckout = await client.checkout.create();
			// 	createCheckout()
			// 	// localStorage.setItem('state', checkoutState.checkout.id);
			// 	// const existingCheckout = checkoutState.checkout.id
			// 	console.log("do the create checkout")
			//   }
			// 	// we should be dispatching the new state to the store 
			// getCheckout();
	

	},[])

	// async function getCheckout() {
	//  	console.log(checkoutState)
	// }

	// getCheckout()

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