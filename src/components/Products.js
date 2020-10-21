import React from "react"
import { Link } from 'react-router-dom'

import Cart from './Cart'
import Product from "./Product"

export default (props) => {
	return (
		<div className="Products-wrapper">
			<Link to="/Home">Back</Link>
			<Product history={props.history}/>
		</div>

	)
}