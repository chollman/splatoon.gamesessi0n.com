import { GAMES_REQUEST, GAMES_SUCCESS } from '../constants'

const initialState = {
  isFetching: false,
  items: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GAMES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case GAMES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      })
  }
  return state
}
