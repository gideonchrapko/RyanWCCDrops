import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Client from "shopify-buy"



// Creates the client with Shopify-Buy and store info

// const client = Client.buildClient({
// 	storefrontAccessToken: "a416f71ae0b8cea01da02b110f7af961",
// 	domain: "schweiz-foundry.myshopify.com",
// })

// Example Storefront

const client = Client.buildClient({
	storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
	domain: process.env.REACT_APP_SHOPIFY_DOMAIN
})

const PRODUCTS_FOUND = "shopify/PRODUCTS_FOUND"
const PRODUCT_FOUND = "shopify/PRODUCT_FOUND"

const COLLECTION_FOUND = "shopify/COLLECTION_FOUND"
const CHECKOUT_FETCHED = "shopify/CHECKOUT_FETCHED"

const CHECKOUT_FOUND = "shopify/CHECKOUT_FOUND"
const SHOP_FOUND = "shopify/SHOP_FOUND"
const ADD_VARIANT_TO_CART = "shopify/ADD_VARIANT_TO_CART"
const UPDATE_QUANTITY_IN_CART = "shopify/UPDATE_QUANTITY_IN_CART"
const REMOVE_LINE_ITEM_IN_CART = "shopify/REMOVE_LINE_ITEM_IN_CART"
const OPEN_CART = "shopify/OPEN_CART"
const CLOSE_CART = "shopify/CLOSE_CART"
const CART_COUNT = "shopify/CART_COUNT"

const initialState = {
	isCartOpen: false,
	cartCount: 0,
	checkout: {},
	products: [],
	featured: [],
	product: {},
	shop: {},
}

//reducers
export default (state = initialState, action) => {
	switch (action.type) {
		case PRODUCTS_FOUND:
			return { ...state, products: action.payload }
		case PRODUCT_FOUND:
			return { ...state, product: action.payload }
		case COLLECTION_FOUND:
			return { ...state, featured: action.payload }

		//Figure out if the type is correct
		case CHECKOUT_FOUND:
		//Attaching the payload to the redux state
			return { ...state, checkout: action.payload }
		case CHECKOUT_FETCHED:
				//test to see if this works
			return { ...state, checkout: action.payload }

		case SHOP_FOUND:
			return { ...state, shop: action.payload }
		case ADD_VARIANT_TO_CART:
			return { ...state, checkout: action.payload }
		case UPDATE_QUANTITY_IN_CART:
			return { ...state, checkout: action.payload }
		case REMOVE_LINE_ITEM_IN_CART:
			return { ...state, checkout: action.payload }
		case OPEN_CART:
			return { ...state, isCartOpen: true }
		case CLOSE_CART:
			return { ...state, isCartOpen: false }
		case CART_COUNT:
			return { ...state, cartCount: action.payload }
		default:
			return state
	}
}

//action creators 

// Gets all the products from Shopify
function getProducts() {
	return (dispatch) => {
		client.product.fetchAll().then((resp) => {
			dispatch({
				type: PRODUCTS_FOUND,
				payload: resp,
			})
		})
	}
}

// Gets individual item based on id
function getProduct(id) {
	return async (dispatch) => {
		const resp = await client.product.fetch(id)
		dispatch({
			type: PRODUCT_FOUND,
			payload: resp,
		})
		return resp
	}
}

// Gets a  collection based on that collection's id
// function getCollection() {
// 	const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIwODAyMDYwMzAzMw=="
// 	return (dispatch) => {
// 		client.collection.fetchWithProducts(collectionId).then((resp) => {
// 			dispatch({
// 				type: COLLECTION_FOUND,
// 				payload: resp.products,
// 			})
// 		})
// 	}
// }

// Creates initial checkout state from Shopify - I think I need to make this checkout save to local storage
// and then I need to make a new fetchCheckout thing but I'm not entirely sure yet
// https://github.com/netlify/swag-site/blob/main/src/context/cart-context.js example of local checkout 
//this goes into the creatCheckOut function thing
// starts here then is dipatched to the redux state

// need to figure out how to get the checkoutState hook thing in here 

//in order to use the hook here I think my function needs an export statement 

function checkout() {
	return (dispatch) => {
		client.checkout.create().then((resp) => {
			dispatch({
				type: CHECKOUT_FOUND,
				payload: resp,
			})
		})
	}
}

// function fetchCheckout(checkoutState) {
// 	return (dispatch) => {
// 		client.checkout.fetch(checkoutState).then((checkout) => {
// 			dispatch({
// 				type: CHECKOUT_FETCHED,
// 				payload: checkout,
// 			})
// 		})
// 	}
// }

// function checkout() {
// 	return async (dispatch) => {
// 		client.checkout.create().then((resp) => {
// 			dispatch({
// 				type: CHECKOUT_FOUND,
// 				payload: resp,
// 			})
// 		})
// 	}
// }

// Gets Shopify store information
function shopInfo() {
	return (dispatch) => {
		client.shop.fetchInfo().then((resp) => {
			dispatch({
				type: SHOP_FOUND,
				payload: resp,
			})
		})
	}
}

// Adds variants to cart/checkout
//LineItemsToAdd is a combination of qauntity and VariantId(which is size)
function addVariantToCart(checkoutId, lineItemsToAdd) {
	return async (dispatch) => {
		const response = await client.checkout.addLineItems(
			checkoutId,
			lineItemsToAdd
		)
		dispatch({
			type: ADD_VARIANT_TO_CART,
			payload: response,
		})
		console.log(checkoutId)
		return response
	}
}

// Updates quantity of line items in cart and in checkout state
function updateQuantityInCart(lineItemId, quantity, checkoutId) {
	const lineItemsToUpdate = [
		{ id: lineItemId, quantity: parseInt(quantity, 10) },
	]

	return async (dispatch) => {
		const resp = await client.checkout.updateLineItems(
			checkoutId,
			lineItemsToUpdate
		)
		dispatch({
			type: UPDATE_QUANTITY_IN_CART,
			payload: resp,
		})
		return resp
	}
}

// Removes line item from cart and checkout state
function removeLineItemInCart(checkoutId, lineItemId) {
	return (dispatch) => {
		client.checkout.removeLineItems(checkoutId, [lineItemId]).then((resp) => {
			dispatch({
				type: REMOVE_LINE_ITEM_IN_CART,
				payload: resp,
			})
		})
	}
}

// To close the cart
function handleCartClose() {
	return {
		type: CLOSE_CART,
	}
}

// To open the cart
function handleCartOpen() {
	return {
		type: OPEN_CART,
	}
}

// Set the count of items in the cart
function handleSetCount(count) {
	return {
		type: CART_COUNT,
		payload: count,
	}
}

export function useFuck() {
	return <h1></h1>
}

export function useShopify() {
	const dispatch = useDispatch()
	const cartStatus = useSelector((appState) => appState.shopifyState.isCartOpen)
	const cartCount = useSelector((appState) => appState.shopifyState.cartCount)
	const products = useSelector((appState) => appState.shopifyState.products)
	const product = useSelector((appState) => appState.shopifyState.product)
	const featured = useSelector((appState) => appState.shopifyState.featured)
	const checkoutState = useSelector((appState) => appState.shopifyState.checkout)
	const shopDetails = useSelector((appState) => appState.shopifyState.shop)
	const fetchProducts = () => dispatch(getProducts())
	const fetchProduct = (id) => dispatch(getProduct(id))
	// const fetchCollection = () => dispatch(getCollection())

	/*dispatch sends checkout() function to redux state
	 this is where the checkout() function is called 
	 from I'm not sure what this part has to do with redux */
	const createCheckout = (checkoutId) => dispatch(checkout(checkoutId))
	// const fetchedCheckout = () => dispatch(fetchCheckout())
	/* looks like createCheckout is a function with a ton of arguments and objects in it 
	
	it is found in the App component and contains all of the redux state in it
	equivalent of store.getState() function */
	const createShop = () => dispatch(shopInfo())
	const closeCart = () => dispatch(handleCartClose())
	const openCart = () => dispatch(handleCartOpen())
	const setCount = (count) => dispatch(handleSetCount(count))

	const addVariant = (checkoutId, lineItemsToAdd) =>
		dispatch(addVariantToCart(checkoutId, lineItemsToAdd))
	const updateQuantity = (lineItemId, quantity, checkoutID) =>
		dispatch(updateQuantityInCart(lineItemId, quantity, checkoutID))
	const removeLineItem = (checkoutId, lineItemId) =>
		dispatch(removeLineItemInCart(checkoutId, lineItemId))

	return {
		products,
		product,
		featured,
		cartStatus,
		checkoutState,
		cartCount,
		shopDetails,
		addVariant,
		fetchProducts,
		fetchProduct,
		// fetchCollection,
		createCheckout,
		createShop,
		closeCart,
		openCart,
		updateQuantity,
		removeLineItem,
		setCount,
		// fetchedCheckout,
	}
}
