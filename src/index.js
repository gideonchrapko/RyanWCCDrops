import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import store from "./redux/store"
import App from "./components/App"

import { PersistGate } from 'redux-persist/integration/react';
// import persistor from './redux/store';
import persistor from './redux/persistStore';

import "./app.css"
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory({
	// basename: config.urlBasename || ''
  })

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router history={customHistory}>
				<Route component={({history}) => {
					window.appHistory = history
					return (
					<App />
					)
				}}/>
			</Router>
		</PersistGate>
	</Provider>,
	rootElement
  );
