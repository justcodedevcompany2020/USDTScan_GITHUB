import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import CoinDataReducer from './reducers/CoinDataReducer';
import SearchReducer from './reducers/SearchReducer';

const rootReducer = combineReducers({
  coin:CoinDataReducer,
  searchData:SearchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
