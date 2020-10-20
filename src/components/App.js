import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Products from "./Products"
import Cart from "./Cart"
import Home from "./Home"
import ProductView from "./ProductView"
import { useShopify } from "../hooks"

export default (props) => {
	const {
		createShop,
		createCheckout,
		fetchProducts,
		// fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		// fetchCollection()
	}, [])

	return (
		<Router>
			<div id="App">
				<Route exact path="/" render={() => <Redirect to="/Home" />} />
				<Route path="/Home" component={Home} />
				<Route path="/Home" component={Products} />
				<Route path="/Product/:productId" component={ProductView} />
				<Route path="/" component={Cart} />
				<div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
					<h6>© 2018 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
				</div>
			</div>
		</Router>
	)
}
