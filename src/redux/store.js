import { applyMiddleware, createStore } from "redux";
import gymReducer from "./reducer";


import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
   loadingParts: true,
   loadingExercises: true,
}

const middleware = [thunk]

const store = createStore(gymReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store;