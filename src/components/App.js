import React, { useEffect } from "react"

// import {  BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { Route } from "react-router-dom";

import Products from "./Products"
import Cart from "./Cart"
import Home from "./Home"
import ProductView from "./ProductView"
import Welcome from './Welcome'
import RthreeF from './RthreeF'
import About from './About'
import Gallery from './Gallery'
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
	<div id="App">
		<Route exact path="/" render={Welcome} />
		<Route path="/Home" component={Home} />
		<Route path="/shop" component={Products} />
		<Route path="/Product/:productId" component={ProductView} />
		{/* <Route path="/" component={Cart} /> */}
	</div>

)
}



/* <div id="App">
				 <Route exact path="/" render={() => <Redirect to="/Home" />
				<Switch>
					<Route path="/" exact component={Welcome} render={() => <Redirect to="/Home" />} />
					<Route path="/Home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" component={Products} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/Product/:productId" component={ProductView} />
					<Route path="/" component={Cart} />
				</Switch>
				<div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
					<h6>© 2018 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
				</div>
			</div>
	)
} */