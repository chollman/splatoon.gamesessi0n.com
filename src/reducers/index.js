import { combineReducers } from 'redux'
import GameSessionReducer from './reducer_game-session'
import GamesReducer from './reducer_games'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  gameSessions: GameSessionReducer,
  games: GamesReducer,
  loadingBar: loadingBarReducer
})

export default rootReducer
