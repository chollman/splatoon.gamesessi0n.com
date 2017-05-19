import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

const initialState = {

}

export const initStore = (initialState = initialState) => {
  return createStore(reducers, initialState, applyMiddleware(ReduxPromise))
}
