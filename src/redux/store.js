import {createStore,applyMiddleware} from "redux"
import rootReducers from "./reducers/rootReducers";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const middleWare=[thunk]

if(process.env.NODE_ENV==="development"){
    middleWare.push(logger)
}

const store= createStore(rootReducers,applyMiddleware(...middleWare))
export default store;
