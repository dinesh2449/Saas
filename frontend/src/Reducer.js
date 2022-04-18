import {combineReducers} from "react-redux";
import {connectRouter} from "connnected-react-router";

const createRootReducer =history=>
combineReducers({
    router:connectRouter(history)
});



