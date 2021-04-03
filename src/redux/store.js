  import { createStore, combineReducers, applyMiddleware, compose } from "redux"
  import thunk from "redux-thunk"
  import * as reducers from "./ducks"

  import { useShopify } from "../hooks"

  // function saveToLocalStorage(appState) {
  //   try {
  //     const serializedState = JSON.stringify(appState.shopifyState.checkout.id)
  //     // console.log(appState.shopifyState.checkout)
  //     localStorage.setItem('state', serializedState)
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  // function loadFromLocalStorage() {
  //   try {
  //     const serializedState = localStorage.getItem('state')
  //     if (serializedState === null) return undefined
  //       return JSON.parse(serializedState)
  //   } catch(e) {
  //       console.log(e)
  //     return undefined
  //   }
  // }

  // const persistedState = loadFromLocalStorage()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const rootReducer = combineReducers(reducers)
  const enhancer = composeEnhancers(applyMiddleware(thunk))
  
  const store = createStore(rootReducer, enhancer)
  // const store = createStore(rootReducer, persistedState, enhancer)

  // store.subscribe(() => saveToLocalStorage(store.getState()))
  
  export default store
