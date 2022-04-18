import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {createBrowserHistory,createStore} from "redux";
import {routerMiddleware ,ConnectedRouter} from "connected-react-rounter";

import rootReducer from "./Reducer";
const Root =({children ,initalState ={}})=>{
const history =createBrowserHistory();
const middleware =[thunk,routerMiddleware(History)];

const store =createStore(

    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
);
return(
    <Provider store ={store}>
        <ConnectedRouter history ={history}>{children}</ConnectedRouter>
    </Provider>
);

};

export default Root;


