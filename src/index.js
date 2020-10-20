import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./components/App"

import { PersistGate } from 'redux-persist/integration/react';
// import persistor from './redux/store';
import persistor from './redux/persistStore';


import "./app.css"
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		{/* <PersistGate loading={null} persistor={persistor}> */}
			<App />
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById("root")
)
