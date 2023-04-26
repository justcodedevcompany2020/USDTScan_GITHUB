import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import authReducer from './reducers/authReducer';
import CoinDataReducer from './reducers/CoinDataReducer';
import SearchReducer from './reducers/SearchReducer';

const rootReducer = combineReducers({
  coin:CoinDataReducer,
  searchData:SearchReducer,
  auth:authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
