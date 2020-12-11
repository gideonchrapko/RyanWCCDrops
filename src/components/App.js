import React, { useEffect } from "react"
import { Route } from "react-router-dom";

import Products from "./Products"
import Home from "./Home"
import ProductView from "./ProductView"
import Welcome from './Welcome'
import About from './About'
import Gallery from './Gallery'
import Cart from './Cart'
import MenuRight from './Menu'
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
		<MenuRight />
		<Cart />
		<Route exact path="/" render={Welcome} />
		<Route path="/Home" component={Home} />
		<Route path="/shop" component={Products} />
		<Route path="/Product/:productId" component={ProductView} />
		<Route path="/About" component={About} />
		{/* <Route path="/" component={Cart} /> */}
		{/* <div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
            <h6>© 2020 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
        </div> */}
	</div>

)
}
