import { carsReducer } from "./reducers/carsReducer";
import { alertsReducer } from "./actions/alertsReducer";
import {bookingsReducer} from "./reducers/bookingsReducer"
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
    carsReducer,
    alertsReducer,
    bookingsReducer

})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);

export default store
