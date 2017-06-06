import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import rootReducer from './src/reducers';

const initialState = {

}

export const initStore = (initialState = initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
      })
    )
  )
  return store
}
