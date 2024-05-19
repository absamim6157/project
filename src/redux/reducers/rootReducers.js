import { combineReducers } from "redux";
import { userReducer } from "./reducers";
import { handleCart } from "./reducers";
const rootReducers=combineReducers({
    handleCart,
    user:userReducer
})
export default rootReducers;