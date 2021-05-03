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

	// console.log(checkoutState)

	useEffect(() => {

		// createCheckout()
		// fetchedCheckout()


			// async function getCheckout() {
			// 	// create a variable to verify if there is cart saved in the local storage
			// 	const existingCheckoutID = localStorage.getItem('state');
			// 	const parsedState = JSON.parse(existingCheckoutID);

			// 	// existing the storage variable doesnt exactly == "null"
			// 	if (existingCheckoutID && existingCheckoutID !== 'null') {
			// 	  try {
			// 		//fetch the cart with my custom action creator
			// 		fetchedCheckout(parsedState.shopifyState.checkout.id)
			// 		console.log("verified cart")
			// 		// const existingCheckout = await client.checkout.fetch(
			// 		//   existingCheckoutID,
			// 		// );
		  
			// 		// if this cart was already purchased, clear it and start fresh
			// 		// create a creator that changes adds a new checkoutID
			// 		if (!existingCheckoutID.completedAt) {
			// 		//restart the checkout 

			// 		//   setCheckout(existingCheckout);
			// 		console.log("hello")
			// 		  return;
			// 		}
			// 	  } catch (error) {
			// 		// if theres an error remove the state from local storage I need to get here to stop getting that error 
			// 		localStorage.removeItem('state');
			// 		console.log("goodbye")
			// 	  }
			// 	}

			// createCheckout()
			// // localStorage.setItem('state', newCheckout.id);
			// // need to add a new checkout id to this 
			// localStorage.setItem('state', );
			// setCheckout(newCheckout);

			 function getCheckout() {
				if (checkoutState) return;
				// const stateVariable = appState.shopifyState.checkout.id
				// const serializedState = JSON.stringify(stateVariable)

				const existingCheckoutID = localStorage.getItem('state');
				// const parsedState = JSON.parse(existingCheckoutID);
				// if (existingCheckoutID && existingCheckoutID !== 'null') {
				if (existingCheckoutID) {
				  try {
					  console.log(existingCheckoutID)
					// const existingCheckout = await client.checkout.fetch(
					//   existingCheckoutID,
					// );
					// const existingCheckout = existingCheckoutID
					const parsedState = JSON.parse(existingCheckoutID);
					fetchedCheckout()
					// const exisitingCheckout = fetchedCheckout(existingCheckoutID)
					console.log("fetch")
					// if this cart was already purchased, clear it and start fresh
					if (!parsedState.completedAt) {
						const parsedState = existingCheckoutID
					  return;
					}
				  } catch (error) {
					// localStorage.removeItem('state');
					console.log("remove")
				  }
				}
				// if we get here, we need to create a new checkout session
				// const newCheckout = await client.checkout.create();
				createCheckout()
				// localStorage.setItem('state', checkoutState.checkout.id);
				// const existingCheckout = checkoutState.checkout.id
				console.log("do the create checkout")
			  }
				// we should be dispatching the new state to the store 
			getCheckout();

			createShop()
			fetchProducts()

	// }
	// , [checkout, setCheckout]);


		// try {
		// 	const serializedState = localStorage.getItem('state')
		// 	const parsedState = JSON.parse(serializedState)
		// 	if (serializedState === undefined) return createCheckout()
		// 	  return fetchedCheckout(parsedState.shopifyState.checkout.id)
		//   } catch(e) {
		// 	  console.log(e)
		// 	return undefined
		//   }

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