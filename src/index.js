import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import store from "./redux/store"
import App from "./components/App"

import "./app.css"
import "./index.css";

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory({
	// basename: config.urlBasename || ''
  })

ReactDOM.render(
	<Provider store={store}>
			<Router history={customHistory}>
				<Route component={({history}) => {
					window.appHistory = history
					return (
					<App />
					)
				}}/>
			</Router>
	</Provider>,
	rootElement
  );
