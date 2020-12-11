import React from "react"
// import { Link } from 'react-router-dom'

import Product from "./Product"

import Branding from '../images/wccMin.png'
import PanelOneWorld from '../images/PanelOneWorld.svg'
import PanelTwoGallery from '../images/PanelTwoGallery.svg'
import PanelThreeShirt from '../images/PanelThreeShirt.svg'

import Cart from './Cart'
import MenuRight from './Menu'

export default (props) => {
	return (
		<div >
			<div>
				<img src={Branding} alt="logo" className="branding" />
				<div className="Panel">
					<div className="Highlight">
					</div>
					<img 
						src={PanelOneWorld}
						className="icon"
					/>
					<img 
						src={PanelTwoGallery}
						className="icon"						
					/>
					<img 
						src={PanelThreeShirt}
						className="icon"
					/>
				</div>
			</div>
				<MenuRight />
				<Cart />
			<div className="section_One">
				<Product history={props.history}/>
			</div>
			<div className="section_Two">
				<h1>Section Boys</h1>
				<Product history={props.history}/>
			</div>
			<div className="section_Three">
				<h1>Section Boys</h1>
				<Product history={props.history}/>
			</div>
		</div>
	)
}