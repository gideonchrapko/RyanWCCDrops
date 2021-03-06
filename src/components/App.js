import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import ReactGa from 'react-ga'

import Products from "./Products"
import Home from "./Home"
import ProductView from "./ProductView"
import Welcome from './Welcome'
import Connect from './Connect'
import pageNotFound from './404'
import Gallery from './Gallery'
import Refund from './Refund'

import { useShopify } from "../hooks"

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

		ReactGa.initialize('UA-135117574-2')
		ReactGa.pageview('/')
		
		// async function getCheckout() {
		// 	const existingCheckoutID = localStorage.getItem('state');
		// 	const checkoutStorage = await localStorage.getItem('checkout');
		// 	if (existingCheckoutID && existingCheckoutID !== 'null') {
		// 		fetchedCheckout()
		// 		console.log("fetched checkout")
		// 		if (checkoutStorage !== "null") {
		// 		 	createCheckout();
		// 			console.log("create checkout because there is a checkout completed time")
		// 		}
		// 	} else {
		// 		createCheckout();
		// 		console.log("create checkout because there isn't one to fetch")
		// 	}
		// }
		// getCheckout()

		async function getCheckout() {
			const existingCheckoutID = localStorage.getItem('state');
			const checkoutStorage = await localStorage.getItem('checkout');
			if (existingCheckoutID && existingCheckoutID !== 'null') {
				fetchedCheckout()
				console.log("fetched checkout")
			} else {
				createCheckout();
				console.log("create checkout because there isn't one to fetch")
			}
		}
		getCheckout()
	},[])

		return (
			<div>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/home" component={Home} />
					<Route path="/shop" component={Products} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/Product/:productId" component={ProductView} />
					<Route path="/connect" component={Connect} />
					<Route path="/refund-policy"component={Refund} />
					<Route component={pageNotFound} />
				</Switch>
			</div>
		)
}