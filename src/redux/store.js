
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "./ducks"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers(reducers)
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

export default store




// import { persistStore, persistReducer } from 'redux-persist'
// import { autoRehydrate, persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'root',
// 	storage: storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);


// const store = createStore(
//     combineReducers(rootReducer),
//     {},
//     compose(
//       applyMiddleware(thunk)
//     )
//   )


// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(applyMiddleware(thunk)))
//   );
 
//   export default store;
