// import React, { useEffect } from "react"
// import { Route, useLocation, Switch } from "react-router-dom";
// import { useTransition, animated } from '@react-spring/core'

// import Products from "./Products"
// import Home from "./Home"
// import ProductView from "./ProductView"
// import Welcome from './Welcome'
// import About from './About'
// import Gallery from './Gallery'

// import Cart from './Cart'
// import MenuRight from './Menu'

// import { useShopify } from "../hooks"

// export default (props) => {
// 	const {
// 		createShop,
// 		createCheckout,
// 		fetchProducts,
// 		// fetchCollection,
// 	} = useShopify()

// 	useEffect(() => {
// 		createShop()
// 		fetchProducts()
// 		createCheckout()
// 		// fetchCollection()
// 	}, [])

// 		return (
// 			<div>
// 				<Route exact path="/" render={Welcome} />
// 		<Route path="/Home" component={Home} />
// 		<Route path="/shop" component={Products} />
// 		<Route path="/Product/:productId" component={ProductView} />
// 		<Route path="/About" component={About} />
		
// 		<div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
//             <h6>© 2020 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
//         </div>
// 		</div>

// )
// }


import React, { useEffect } from "react"
// import { Route, useLocation, Switch } from "react-router-dom";


import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group"
// import { playOne, playTwo, exit } from './timeline/Timeline'


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
			<div>
				<Route exact path="/" render={Welcome} />
				<Route path="/Home" component={Home} />
				<Route path="/shop" component={Products} />
				<Route path="/Product/:productId" component={ProductView} />
				<Route path="/About" component={About} />
				<div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
					<h6>© 2020 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
				</div>
			</div>
		)
}