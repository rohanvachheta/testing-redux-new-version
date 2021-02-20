import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDetailsReducer } from "../reducers";

const store = createStore(
  userDetailsReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
    // other store enhancers if any
  )
);

export default store;
